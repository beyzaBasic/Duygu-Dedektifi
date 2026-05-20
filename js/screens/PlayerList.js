function PlayerList({ players, currentPlayerIdx, onPlayerTap }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', alignItems:'center', justifyContent:'center', padding:'24px 28px calc(env(safe-area-inset-bottom,0px) + 24px)' }}>

      <div style={{ width:'100%', maxWidth:320, display:'flex', flexDirection:'column', gap:10 }}>

        <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, marginBottom:2, textAlign:'center' }}>
          Sıradaki oyuncu
        </div>

        {players.map((p, i) => {
          const isCurrent = i === currentPlayerIdx;
          const grad = PLAYER_GRADS[i % PLAYER_GRADS.length];
          const animal = PLAYER_ANIMALS[i % PLAYER_ANIMALS.length];

          if (isCurrent) {
            return (
              <button
                key={i}
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
                  dokun, turuna başla
                </span>
              </button>
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
  );
}
