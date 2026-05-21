const RAINBOW_BONUS = 5;
const SESSIONS_KEY = 'duyguDedektifiSessions';

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
  const [screen, setScreen] = React.useState('welcome');
  const [players, setPlayers] = React.useState([]);
  const [prevPlayers, setPrevPlayers] = React.useState(null);
  const [currentPlayerIdx, setCurrentPlayerIdx] = React.useState(0);
  const [emotionData, setEmotionData] = React.useState(null);
  const [showList, setShowList] = React.useState(false);
  const [showScoreboard, setShowScoreboard] = React.useState(false);
  const [showExitConfirm, setShowExitConfirm] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const [sessionName, setSessionName] = React.useState('');
  const [sessionStorageName, setSessionStorageName] = React.useState('');
  const [sessions, setSessions] = React.useState(loadAllSessions);

  const gameScreens = ['playerList', 'emotion', 'scene', 'roundResult', 'scoreboard'];

  // Auto-save whenever game state changes
  React.useEffect(() => {
    if (sessionId && players.length > 0 && gameScreens.includes(screen)) {
      const session = {
        id: sessionId,
        name: sessionStorageName || sessionName,
        players,
        currentPlayerIdx,
        updatedAt: Date.now(),
      };
      persistSession(session);
      setSessions(loadAllSessions());
    }
  }, [players, currentPlayerIdx]);

  function startGame(playerNames, gameName) {
    const id = Date.now().toString();
    const storageName = gameName ||
      (playerNames.length <= 3
        ? playerNames.join(', ')
        : playerNames.slice(0, 2).join(', ') + ' +' + (playerNames.length - 2));
    const newPlayers = playerNames.map(name => ({
      name, score: 0,
      told: 0, successTold: 0, failTold: 0,
      guessed: 0, guessedColors: [], rainbowBonus: false,
    }));
    setSessionId(id);
    setSessionName(gameName);
    setSessionStorageName(storageName);
    setPlayers(newPlayers);
    setPrevPlayers(null);
    setCurrentPlayerIdx(0);
    setEmotionData(null);
    persistSession({ id, name: storageName, players: newPlayers, currentPlayerIdx: 0, updatedAt: Date.now() });
    setSessions(loadAllSessions());
    setScreen('playerList');
  }

  function continueSession(session) {
    setSessionId(session.id);
    setSessionName(session.name);
    setPlayers(session.players);
    setCurrentPlayerIdx(session.currentPlayerIdx);
    setPrevPlayers(null);
    setEmotionData(null);
    setScreen('playerList');
  }

  function deleteSession(id) {
    removeSession(id);
    setSessions(loadAllSessions());
  }

  function handleHome() {
    setShowExitConfirm(true);
  }

  function confirmExit() {
    setShowExitConfirm(false);
    setSessions(loadAllSessions());
    setScreen('welcome');
  }

  function handleRoundResult(guessedIdx) {
    const snapshot = players.map(p => ({ ...p, guessedColors: [...p.guessedColors] }));
    setPrevPlayers(snapshot);
    const emotionGroupKey = emotionData?.group?.key;

    setPlayers(prev => {
      const updated = prev.map(p => ({ ...p, guessedColors: [...p.guessedColors] }));
      updated[currentPlayerIdx].told += 1;

      if (guessedIdx === 'none') {
        updated[currentPlayerIdx].score -= 1;
        updated[currentPlayerIdx].failTold += 1;
      } else {
        updated[currentPlayerIdx].score += 1;
        updated[currentPlayerIdx].successTold += 1;
        updated[guessedIdx].score += 2;
        updated[guessedIdx].guessed += 1;

        if (emotionGroupKey) {
          updated[guessedIdx].guessedColors.push(emotionGroupKey);
          const uniqueCount = new Set(updated[guessedIdx].guessedColors).size;
          if (uniqueCount === GROUPS.length && !updated[guessedIdx].rainbowBonus) {
            updated[guessedIdx].score += RAINBOW_BONUS;
            updated[guessedIdx].rainbowBonus = true;
          }
        }
      }
      return updated;
    });

    setCurrentPlayerIdx(i => (i + 1) % players.length);
    setEmotionData(null);
    setScreen('scoreboard');
  }

  const homeProps = { onHome: handleHome };

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', position:'relative' }}>
      {screen === 'welcome' && (
        <WelcomeScreen
          onStart={() => setScreen('setup')}
          onListOpen={() => setShowList(true)}
          sessions={sessions}
          onContinueSession={continueSession}
          onDeleteSession={deleteSession}
        />
      )}
      {screen === 'setup' && (
        <PlayerSetup onStart={startGame} onBack={() => setScreen('welcome')} />
      )}
      {screen === 'playerList' && (
        <PlayerList
          players={players}
          currentPlayerIdx={currentPlayerIdx}
          sessionName={sessionName}
          onPlayerTap={() => setScreen('emotion')}
          onHome={handleHome}
          onScoreOpen={() => setShowScoreboard(true)}
          onListOpen={() => setShowList(true)}
        />
      )}
      {screen === 'emotion' && (
        <EmotionScreen
          playerName={players[currentPlayerIdx]?.name}
          playerGrad={PLAYER_GRADS[currentPlayerIdx % PLAYER_GRADS.length]}
          playerAnimal={PLAYER_ANIMALS[currentPlayerIdx % PLAYER_ANIMALS.length]}
          onScenePhase={d => { setEmotionData(d); setScreen('scene'); }}
          onListOpen={() => setShowList(true)}
          onScoreOpen={() => setShowScoreboard(true)}
          {...homeProps}
        />
      )}
      {screen === 'scene' && emotionData && (
        <SceneScreen
          playerName={players[currentPlayerIdx]?.name}
          playerGrad={PLAYER_GRADS[currentPlayerIdx % PLAYER_GRADS.length]}
          playerAnimal={PLAYER_ANIMALS[currentPlayerIdx % PLAYER_ANIMALS.length]}
          emotionData={emotionData}
          onTurnEnd={() => setScreen('roundResult')}
          onRestart={() => { setEmotionData(null); setScreen('emotion'); }}
          onListOpen={() => setShowList(true)}
          onScoreOpen={() => setShowScoreboard(true)}
          {...homeProps}
        />
      )}
      {screen === 'roundResult' && (
        <RoundResult
          players={players}
          currentPlayerIdx={currentPlayerIdx}
          onConfirm={handleRoundResult}
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

      {/* Çıkış onay dialogu */}
      {showExitConfirm && (
        <div style={{
          position:'fixed', inset:0, zIndex:400,
          background:'rgba(0,0,0,0.55)', backdropFilter:'blur(4px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding:'0 24px',
        }}>
          <div style={{
            background:'#FAF7F2', borderRadius:28, padding:'28px 24px 24px',
            width:'100%', maxWidth:340, textAlign:'center',
            boxShadow:'0 24px 64px -16px rgba(0,0,0,0.4)',
            animation:'enter 0.3s cubic-bezier(0.2,0.8,0.2,1) both',
          }}>
            <div style={{ fontSize:32, marginBottom:12 }}>💾</div>
            <div style={{ fontWeight:900, fontSize:20, color:'#1A1A1A', marginBottom:8, letterSpacing:'-0.02em' }}>
              {sessionName}
            </div>
            <div style={{ fontSize:13, color:'#7A7A7A', lineHeight:1.6, marginBottom:24 }}>
              Oyun kaydedildi.<br/>Ana menüden kaldığın yerden devam edebilirsin.
            </div>
            <div style={{ display:'flex', gap:10 }}>
              <button
                onClick={() => setShowExitConfirm(false)}
                style={{
                  flex:1, fontFamily:'Nunito', fontWeight:800, fontSize:14,
                  padding:'14px 0', borderRadius:100,
                  background:'rgba(0,0,0,0.07)', color:'#1A1A1A',
                  border:'none', cursor:'pointer',
                }}
              >İptal</button>
              <button
                onClick={confirmExit}
                style={{
                  flex:2, fontFamily:'Nunito', fontWeight:900, fontSize:14,
                  padding:'14px 0', borderRadius:100,
                  background:'linear-gradient(135deg,#FF6B7A,#FF8C42)',
                  color:'#fff', border:'none', cursor:'pointer',
                  boxShadow:'0 6px 18px -6px rgba(255,100,80,0.5)',
                  letterSpacing:'0.04em',
                }}
              >Ana Menüye Dön →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
