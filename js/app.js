function App() {
  const [screen, setScreen] = React.useState('welcome');
  const [players, setPlayers] = React.useState([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = React.useState(0);
  const [emotionData, setEmotionData] = React.useState(null);
  const [showList, setShowList] = React.useState(false);
  const [showScoreboard, setShowScoreboard] = React.useState(false);

  function startGame(playerNames) {
    setPlayers(playerNames.map(name => ({ name, score: 0 })));
    setCurrentPlayerIdx(0);
    setScreen('playerList');
  }

  function handleRoundResult(guessedIdx) {
    setPlayers(prev => {
      const updated = prev.map(p => ({ ...p }));
      if (guessedIdx === 'none') {
        updated[currentPlayerIdx].score -= 1;
      } else {
        updated[currentPlayerIdx].score += 1;
        updated[guessedIdx].score += 2;
      }
      return updated;
    });
    setCurrentPlayerIdx(i => (i + 1) % players.length);
    setEmotionData(null);
    setScreen('scoreboard');
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', position:'relative' }}>
      {screen === 'welcome' && (
        <WelcomeScreen onStart={() => setScreen('setup')} onListOpen={() => setShowList(true)} />
      )}
      {screen === 'setup' && (
        <PlayerSetup onStart={startGame} />
      )}
      {screen === 'playerList' && (
        <PlayerList
          players={players}
          currentPlayerIdx={currentPlayerIdx}
          onPlayerTap={() => setScreen('emotion')}
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
          onContinue={() => setScreen('playerList')}
        />
      )}
      {showList && <EmotionListOverlay onClose={() => setShowList(false)} />}
      {showScoreboard && <Scoreboard players={players} onClose={() => setShowScoreboard(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
