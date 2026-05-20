function SceneScreen({ playerName, playerGrad, playerAnimal, emotionData, onTurnEnd, onRestart, onListOpen, onScoreOpen }) {
  const { emotion, group } = emotionData;

  const [isYouth, setIsYouth] = React.useState(false);
  const [shuffledAdult] = React.useState(() => shuffle(SCENES));
  const [shuffledYouth] = React.useState(() => shuffle(SCENES_GENC));
  const [idxAdult, setIdxAdult] = React.useState(0);
  const [idxYouth, setIdxYouth] = React.useState(0);

  const shuffled = isYouth ? shuffledYouth : shuffledAdult;
  const idx = isYouth ? idxYouth : idxAdult;
  const setIdx = isYouth ? setIdxYouth : setIdxAdult;
  const scene = shuffled[idx % shuffled.length];

  function randomScene() {
    const len = shuffled.length;
    let next;
    do { next = Math.floor(Math.random() * len); } while (len > 1 && next === idx);
    setIdx(next);
  }

  const TOTAL = 90;
  const [started, setStarted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(TOTAL);
  const [ended, setEnded] = React.useState(false);

  React.useEffect(() => {
    if (!started || ended) return;
    if (timeLeft <= 0) { setEnded(true); onTurnEnd(); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, timeLeft, ended]);

  function handleEnd() {
    if (ended) return;
    setEnded(true);
    onTurnEnd();
  }

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
  const isUrgent = timeLeft <= 10;
  const progress = timeLeft / TOTAL;
  const cardW = 'min(280px, 72vw)';

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2' }}>
      <TurnHeader
        playerName={playerName}
        playerGrad={playerGrad}
        playerAnimal={playerAnimal}
        onScoreOpen={onScoreOpen}
        onListOpen={onListOpen}
      />

      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(10px,3vw,16px) clamp(16px,5vw,24px)', gap:'clamp(10px,2.5vw,14px)', overflow:'hidden' }}>
        <MiniChip emotion={emotion} group={group} />
        <SceneCard scene={scene} animKey={idx} displayNum={idx + 1} onChangeScene={randomScene} group={group} dark={isYouth} />
        <AgeToggle isYouth={isYouth} onChange={setIsYouth} />
      </div>

      <div style={{
        padding:'12px clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom,0px) + 16px)',
        display:'flex', alignItems:'center', justifyContent:'center',
        borderTop:'1px solid rgba(0,0,0,0.06)', background:'#FAF7F2', flexShrink:0,
      }}>
        <div style={{ width:cardW, display:'flex', gap:8, height:48 }}>
          {!started ? (
            <button
              onClick={onRestart}
              style={{
                flex:1, height:'100%',
                fontFamily:'Nunito', fontWeight:800, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase',
                borderRadius:100,
                background:'linear-gradient(135deg,#B14AED,#3D5AFE)',
                color:'#fff', border:'none', cursor:'pointer',
                boxShadow:'0 6px 18px -4px rgba(100,60,220,0.45)',
              }}
            >Yeni Tur</button>
          ) : (
            <div style={{
              flex:1, height:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:7,
              background: isUrgent ? 'linear-gradient(135deg,#FF3B30,#FF6B35)' : '#1A1A1A',
              borderRadius:100,
              transition:'background 0.4s',
              boxShadow: isUrgent ? '0 6px 18px -4px rgba(255,59,48,0.55)' : 'none',
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
                <path
                  d={`M 6 6 L 6 1 A 5 5 0 ${progress > 0.5 ? 1 : 0} 1 ${6 + 5*Math.sin(2*Math.PI*(1-progress))} ${6 - 5*Math.cos(2*Math.PI*(1-progress))} Z`}
                  fill="rgba(255,255,255,0.65)"
                />
              </svg>
              <span style={{
                fontFamily:'Nunito', fontWeight:900, fontSize:16, letterSpacing:'-0.01em',
                color:'#fff', fontVariantNumeric:'tabular-nums',
              }}>{timeStr}</span>
            </div>
          )}

          {!started ? (
            <button
              onClick={() => setStarted(true)}
              style={{
                flex:1, height:'100%',
                fontFamily:'Nunito', fontWeight:800, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase',
                borderRadius:100,
                background:'linear-gradient(135deg,#2ED573,#1DB954)',
                color:'#fff', border:'none', cursor:'pointer',
                boxShadow:'0 6px 18px -4px rgba(30,185,84,0.45)',
              }}
            >Başla</button>
          ) : (
            <button
              onClick={handleEnd}
              style={{
                flex:1, height:'100%',
                fontFamily:'Nunito', fontWeight:800, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase',
                borderRadius:100,
                background:'linear-gradient(135deg,#FF8C42,#FF3B30)',
                color:'#fff', border:'none', cursor:'pointer',
                boxShadow:'0 6px 18px -4px rgba(255,90,50,0.45)',
              }}
            >Tamamla</button>
          )}
        </div>
      </div>
    </div>
  );
}
