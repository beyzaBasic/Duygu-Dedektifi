function EmotionScreen({ playerName, playerGrad, playerAnimal, onScenePhase, onListOpen, onScoreOpen, onHome }) {
  const [phase, setPhase] = React.useState('deck');
  const [emotion, setEmotion] = React.useState(null);
  const [group, setGroup] = React.useState(null);
  const [animKey, setAnimKey] = React.useState(0);
  const [shuffled] = React.useState(() => {
    const all = GROUPS.flatMap(g => g.emotions.map(e => ({ emotion:e, group:g })));
    return shuffle(all);
  });
  const [idx, setIdx] = React.useState(0);

  function draw() {
    const item = shuffled[idx % shuffled.length];
    setEmotion(item.emotion); setGroup(item.group); setAnimKey(k=>k+1); setPhase('drawn');
  }

  function redraw() {
    const next = (idx+1) % shuffled.length; setIdx(next);
    const item = shuffled[next];
    setEmotion(item.emotion); setGroup(item.group); setAnimKey(k=>k+1);
  }

  const bg = group ? group.tint : '#FAF7F2';

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:bg, transition:'background 0.8s cubic-bezier(0.2,0.8,0.2,1)' }}>
      <TurnHeader
        playerName={playerName}
        playerGrad={playerGrad}
        playerAnimal={playerAnimal}
        onScoreOpen={onScoreOpen}
        onListOpen={onListOpen}
        onHome={onHome}
      />

      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(16px,4vw,24px)', gap:'clamp(20px,5vw,32px)' }}>
        <div style={{ textAlign:'center' }}>
          <h1 style={{ fontWeight:400, fontStyle:'italic', fontSize:'clamp(22px,6vw,30px)', color:'#1A1A1A', lineHeight:1 }}>
            {phase === 'deck' ? STRINGS.emotion.titleDeck : STRINGS.emotion.titleReady}
          </h1>
        </div>
        {phase === 'deck' ? (
          <DeckVisual icon="?" label={STRINGS.emotion.deckLabel} sub={STRINGS.emotion.deckSub} onClick={draw} playerGrad={playerGrad} />
        ) : (
          <EmotionCard emotion={emotion} group={group} animKey={animKey} onShown={() => setPhase('ready')} onRedraw={phase === 'ready' ? redraw : null} />
        )}
      </div>

      <div style={{ padding:'0 clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom,0px) + 24px)', display:'flex', justifyContent:'center', minHeight:64, alignItems:'center' }}>
        {phase === 'ready' && (
          <Btn small onClick={() => onScenePhase({ emotion, group })}>{STRINGS.emotion.sceneBtn}</Btn>
        )}
      </div>
    </div>
  );
}
