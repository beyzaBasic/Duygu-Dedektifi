function PlayerList({ players, currentPlayerIdx, sessionName, onPlayerTap, onHome, onScoreOpen, onListOpen }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, minHeight:0, overflow:'hidden', background:'#FAF7F2' }}>

      {/* Header */}
      <div style={{ padding:'clamp(10px,3vw,14px) clamp(16px,5vw,24px) 0', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0, position:'relative' }}>
        <button onClick={onHome} style={{
          width:36, height:36, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0, zIndex:1,
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6 2L1 7L6 12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="1" y1="7" x2="13" y2="7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>


        <div style={{ display:'flex', gap:8, alignItems:'center', zIndex:1 }}>
          <button onClick={onScoreOpen} style={{
            width:36, height:36, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
            display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
            boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="8" width="3" height="7" rx="1" fill="#1A1A1A"/>
              <rect x="6" y="4" width="3" height="11" rx="1" fill="#1A1A1A"/>
              <rect x="11" y="1" width="3" height="14" rx="1" fill="#1A1A1A"/>
            </svg>
          </button>
          <button onClick={onListOpen} style={{
            width:36, height:36, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
            display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
            boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0,
          }}>
            <RainbowRings size={10} />
          </button>
        </div>
      </div>

      {/* Oyuncu listesi */}
      <div style={{ flex:1, overflowY:'auto', minHeight:0, padding:'12px 28px calc(env(safe-area-inset-bottom,0px) + 24px)' }}>
        <div style={{ width:'100%', maxWidth:320, margin:'0 auto', display:'flex', flexDirection:'column', gap:10 }}>
          {players.map((p, i) => {
            const isCurrent = i === currentPlayerIdx;
            const grad = PLAYER_GRADS[i % PLAYER_GRADS.length];
            const animal = PLAYER_ANIMALS[i % PLAYER_ANIMALS.length];

            if (isCurrent) {
              return (
                <React.Fragment key={i}>
                  <div style={{
                    fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase',
                    color:'#A0A0A0', fontWeight:700, textAlign:'center', paddingTop:2,
                  }}>
                    {STRINGS.playerList.nextPlayer}
                  </div>
                  <button
                    onClick={onPlayerTap}
                    style={{
                      width:'100%', aspectRatio:'1/1',
                      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12,
                      background: grad,
                      borderRadius:28,
                      border:'none', cursor:'pointer',
                      boxShadow:'0 16px 48px -12px rgba(0,0,0,0.35)',
                    }}
                  >
                    <span style={{ fontSize:56, lineHeight:1 }}>{animal}</span>
                    <span style={{
                      fontFamily:'Nunito', fontWeight:900,
                      fontSize:'clamp(20px,5vw,26px)', letterSpacing:'-0.02em', lineHeight:1,
                      color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,0.15)',
                    }}>{p.name}</span>
                    <span style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.7)', fontWeight:700 }}>
                      {STRINGS.playerList.tapHint}
                    </span>
                  </button>
                </React.Fragment>
              );
            }

            return (
              <div key={i} style={{
                width:'100%',
                display:'flex', alignItems:'center', gap:12,
                background: grad,
                borderRadius:18, padding:'12px 18px',
                opacity:0.5,
              }}>
                <span style={{ fontSize:26, lineHeight:1, flexShrink:0 }}>{animal}</span>
                <span style={{
                  fontFamily:'Nunito', fontWeight:900, fontSize:15,
                  color:'#fff', letterSpacing:'-0.01em',
                  flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                }}>{p.name}</span>
                <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:13, color:'rgba(255,255,255,0.8)', flexShrink:0 }}>
                  {p.score > 0 ? `+${p.score}` : p.score}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
