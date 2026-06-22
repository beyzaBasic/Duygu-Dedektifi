const RAINBOW_BONUS = 5;
const SESSIONS_KEY = 'duyguAviSessions';
const SETTINGS_KEY = 'duyguAviSettings';

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    const ageMode = s.ageMode || (s.isYouth === true ? 'youth' : 'adult');
    return {
      gameMode:      s.gameMode || 'group',
      sound:         s.sound !== false,
      vibration:     s.vibration !== false,
      ageMode:       ['adult','mixed','youth'].includes(ageMode) ? ageMode : 'adult',
      timerDuration: [60, 90, 120].includes(s.timerDuration) ? s.timerDuration : 90,
    };
  } catch {
    return { gameMode: 'group', sound: true, vibration: true, ageMode: 'adult', timerDuration: 90 };
  }
}

function loadAllSessions() {
  try { return JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]'); }
  catch { return []; }
}

function persistSession(session) {
  const all = loadAllSessions();
  const idx = all.findIndex(s => s.id === session.id);
  if (idx >= 0) all[idx] = session;
  else all.unshift(session);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(all));
}

function removeSession(id) {
  const all = loadAllSessions().filter(s => s.id !== id);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(all));
}

function App() {
  const [screen, setScreen] = React.useState(
    localStorage.getItem('duyguAviTutorialSeen') ? 'welcome' : 'tutorial'
  );
  const [players, setPlayers] = React.useState([]);
  const [prevPlayers, setPrevPlayers] = React.useState(null);
  const [currentPlayerIdx, setCurrentPlayerIdx] = React.useState(0);
  const pendingPlayerIdx = React.useRef(null);
  const [emotionData, setEmotionData] = React.useState(null);
  const [settings, setSettings] = React.useState(loadSettings);

  function updateSettings(patch) {
    setSettings(prev => {
      const next = { ...prev, ...patch };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      return next;
    });
  }
  const [showList, setShowList] = React.useState(false);
  const [showScoreboard, setShowScoreboard] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const [sessionName, setSessionName] = React.useState('');
  const [sessionStorageName, setSessionStorageName] = React.useState('');
  const [sessionGameMode, setSessionGameMode] = React.useState('group');
  const [sessions, setSessions] = React.useState(loadAllSessions);
  const [usedScenes, setUsedScenes] = React.useState([]);
  // Oyuna kayıtlı oyunlar arşivinden girildiyse, çıkışta arşive geri dönmek için.
  const [enteredFromArchive, setEnteredFromArchive] = React.useState(false);

  const gameScreens = ['playerList', 'turn', 'roundResult', 'scoreboard'];

  // Auto-save whenever game state changes
  React.useEffect(() => {
    if (sessionId && players.length > 0 && gameScreens.includes(screen)) {
      const session = {
        id: sessionId,
        name: sessionStorageName || sessionName,
        gameMode: sessionGameMode,
        players,
        currentPlayerIdx,
        usedScenes,
        updatedAt: Date.now(),
      };
      persistSession(session);
      setSessions(loadAllSessions());
    }
  }, [players, currentPlayerIdx, usedScenes]);

  function markSceneUsed(key) {
    setUsedScenes(prev => prev.indexOf(key) === -1 ? [...prev, key] : prev);
  }

  function startGame(playerNames, gameName) {
    const id = Date.now().toString();
    const flatNames = playerNames.map(e => typeof e === 'string' ? e : e.name);
    const storageName = gameName ||
      (flatNames.length <= 3
        ? flatNames.join(', ')
        : flatNames.slice(0, 2).join(', ') + ' +' + (flatNames.length - 2));
    const newPlayers = playerNames.map(entry => {
      const playerName = typeof entry === 'string' ? entry : entry.name;
      const isYouth = settings.ageMode === 'youth' ? true
        : settings.ageMode === 'adult' ? false
        : !!(entry.isYouth); // mixed: per-player
      return {
        name: playerName, score: 0,
        told: 0, successTold: 0, failTold: 0,
        guessed: 0, guessedColors: [], rainbowBonus: false,
        isYouth,
        groupName: entry.groupName || null,
        groupIdx: entry.groupIdx != null ? entry.groupIdx : null,
      };
    });
    setEnteredFromArchive(false);
    setSessionId(id);
    setSessionName(gameName);
    setSessionStorageName(storageName);
    setSessionGameMode(settings.gameMode);
    setPlayers(newPlayers);
    setPrevPlayers(null);
    setCurrentPlayerIdx(0);
    setEmotionData(null);
    setUsedScenes([]);
    persistSession({ id, name: storageName, gameMode: settings.gameMode, players: newPlayers, currentPlayerIdx: 0, usedScenes: [], updatedAt: Date.now() });
    setSessions(loadAllSessions());
    setScreen('playerList');
  }

  function continueSession(session) {
    setEnteredFromArchive(true);
    setSessionId(session.id);
    setSessionName(session.name);
    setSessionGameMode(session.gameMode || 'group');
    setPlayers((session.players || []).map(p => ({
      ...p,
      isYouth: p.isYouth !== undefined ? p.isYouth : settings.isYouth,
    })));
    setCurrentPlayerIdx(session.currentPlayerIdx);
    setUsedScenes(session.usedScenes || []);
    setPrevPlayers(null);
    setEmotionData(null);
    setScreen('playerList');
  }

  function deleteSession(id) {
    removeSession(id);
    setSessions(loadAllSessions());
  }

  function handlePlayerAgeChange(idx, value) {
    setPlayers(prev => prev.map((p, i) => i === idx ? { ...p, isYouth: value } : p));
  }

  function handleHome() {
    setSessions(loadAllSessions());
    setScreen('welcome');
  }

  function handleRoundResult(result) {
    const snapshot = players.map(p => ({ ...p, guessedColors: [...p.guessedColors] }));
    setPrevPlayers(snapshot);
    const emotionGroupKey = emotionData?.group?.key;

    // result: 'none' | tek index | birden fazla index dizisi
    const guessers = (result === 'none')
      ? []
      : (Array.isArray(result) ? result : [result]);

    setPlayers(prev => {
      const updated = prev.map(p => ({ ...p, guessedColors: [...p.guessedColors] }));
      updated[currentPlayerIdx].told += 1;

      if (guessers.length === 0) {
        updated[currentPlayerIdx].score -= 1;
        updated[currentPlayerIdx].failTold += 1;
      } else {
        updated[currentPlayerIdx].score += 1;
        updated[currentPlayerIdx].successTold += 1;
        guessers.forEach(idx => {
          updated[idx].score += 2;
          updated[idx].guessed += 1;

          if (emotionGroupKey) {
            updated[idx].guessedColors.push(emotionGroupKey);
            const uniqueCount = new Set(updated[idx].guessedColors).size;
            if (uniqueCount === GROUPS.length && !updated[idx].rainbowBonus) {
              updated[idx].score += RAINBOW_BONUS;
              updated[idx].rainbowBonus = true;
            }
          }
        });
      }
      return updated;
    });

    setCurrentPlayerIdx(i => (i + 1) % players.length);
    setEmotionData(null);
    setScreen('scoreboard');
  }

  const homeProps = { onHome: handleHome };

  function finishTutorial() {
    localStorage.setItem('duyguAviTutorialSeen', '1');
    setScreen('welcome');
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', position:'relative' }}>
      {screen === 'tutorial' && (
        <TutorialScreen onDone={finishTutorial} />
      )}
      {screen === 'welcome' && (
        <WelcomeScreen
          onStart={() => setScreen('modeSelect')}
          sessions={sessions}
          onContinueSession={continueSession}
          onDeleteSession={deleteSession}
          settings={settings}
          onSettingsChange={updateSettings}
          initialShowArchive={enteredFromArchive}
          initialArchiveTab={sessionGameMode}
        />
      )}
      {screen === 'modeSelect' && (
        <ModeSelectScreen
          onSelect={(mode) => { updateSettings({ gameMode: mode }); setScreen('ageSelect'); }}
          onBack={() => setScreen('welcome')}
        />
      )}
      {screen === 'ageSelect' && (
        <AgeSelectScreen
          onSelect={(ageMode) => { updateSettings({ ageMode }); setScreen('setup'); }}
          onBack={() => setScreen('modeSelect')}
        />
      )}
      {screen === 'setup' && (
        <PlayerSetup ageMode={settings.ageMode} gameMode={settings.gameMode} onStart={startGame} onBack={() => setScreen('ageSelect')} />
      )}
      {screen === 'playerList' && (
        <PlayerList
          players={players}
          currentPlayerIdx={currentPlayerIdx}
          sessionName={sessionName}
          onPlayerTap={() => { ensureMotionPermission().finally(() => setScreen('turn')); }}
          onGroupPlayerTap={(idx) => {
            pendingPlayerIdx.current = idx;
            ensureMotionPermission().finally(() => {
              setCurrentPlayerIdx(pendingPlayerIdx.current);
              setScreen('turn');
            });
          }}
          onHome={handleHome}
          onScoreOpen={() => setShowScoreboard(true)}
          onListOpen={() => setShowList(true)}
          onPlayerAgeChange={handlePlayerAgeChange}
          ageMode={settings.ageMode}
          settings={settings}
          onSettingsChange={updateSettings}
        />
      )}
      {screen === 'turn' && (
        <TurnScreen
          playerName={players[currentPlayerIdx]?.name}
          playerGrad={PLAYER_GRADS[currentPlayerIdx % PLAYER_GRADS.length]}
          playerAnimal={PLAYER_ANIMALS[currentPlayerIdx % PLAYER_ANIMALS.length]}
          initialIsYouth={players[currentPlayerIdx]?.isYouth ?? (settings.ageMode === 'youth')}
          allowAgeSwitch={settings.ageMode === 'mixed'}
          groupName={players[currentPlayerIdx]?.groupName || null}
          timerDuration={settings.timerDuration}
          vibrationEnabled={settings.vibration}
          onEmotionDrawn={d => setEmotionData(d)}
          onTurnEnd={() => setScreen('roundResult')}
          usedScenes={usedScenes}
          onSceneUsed={markSceneUsed}
          onListOpen={() => setShowList(true)}
          onScoreOpen={() => setShowScoreboard(true)}
          settings={settings}
          onSettingsChange={updateSettings}
          {...homeProps}
        />
      )}
      {screen === 'roundResult' && (
        <RoundResult
          players={players}
          currentPlayerIdx={currentPlayerIdx}
          onConfirm={handleRoundResult}
          onRetry={() => { setEmotionData(null); setScreen('turn'); }}
        />
      )}
      {screen === 'scoreboard' && (
        <Scoreboard
          players={players}
          prevPlayers={prevPlayers}
          onContinue={() => setScreen('playerList')}
        />
      )}

      {showList && <EmotionListOverlay onClose={() => setShowList(false)} />}
      {showScoreboard && <Scoreboard players={players} prevPlayers={null} onClose={() => setShowScoreboard(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
