function Scoreboard({ players, onContinue, onClose }) {
  const sorted = [...players]
    .map((p, i) => ({ ...p, originalIdx: i }))
    .sort((a, b) => b.score - a.score);

  const medals = ['🥇','🥈','🥉'];
  const isOverlay = !!onClose;

  return (
    <div style={{
      display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden',
      ...(isOverlay ? { position:'fixed', inset:0, zIndex:200 } : {}),
    }}>

      <div style={{ padding:'clamp(20px,5vw,28px) clamp(20px,5vw,28px) 16px', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, marginBottom:4 }}>Skor</div>
          <div style={{ fontWeight:900, fontSize:'clamp(24px,7vw,32px)', letterSpacing:'-0.025em', lineHeight:1, color:'#1A1A1A' }}>
            Sıralama
          </div>
        </div>
        {isOverlay && (
          <button onClick={onClose} style={{
            width:38, height:38, borderRadius:'50%', background:'rgba(0,0,0,0.07)',
            border:'none', fontSize:20, cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', color:'#1A1A1A', fontFamily:'Nunito',
          }}>×</button>
        )}
      </div>

      <div style={{ flex:1, padding:'0 clamp(20px,5vw,28px)', display:'flex', flexDirection:'column', gap:10, overflowY:'auto' }}>
        {sorted.map((p, rank) => {
          const g = PLAYER_GRADS[p.originalIdx % PLAYER_GRADS.length];
          const anml = PLAYER_ANIMALS[p.originalIdx % PLAYER_ANIMALS.length];
          const isFirst = rank === 0;
          return (
            <div key={p.originalIdx} style={{
              display:'flex', alignItems:'center', gap:14,
              background: isFirst ? g : '#fff',
              borderRadius:24, padding: isFirst ? '16px 20px' : '13px 20px',
              border: isFirst ? 'none' : '1px solid rgba(0,0,0,0.06)',
              boxShadow: isFirst ? '0 10px 28px -6px rgba(0,0,0,0.28)' : 'none',
              transform: isFirst ? 'scale(1.02)' : 'scale(1)',
            }}>
              <span style={{ fontSize: isFirst ? 28 : 22, lineHeight:1, flexShrink:0 }}>
                {rank < 3 ? medals[rank] : anml}
              </span>
              <div style={{ display:'flex', alignItems:'center', gap:10, flex:1, minWidth:0 }}>
                <span style={{ fontSize: isFirst ? 22 : 18, lineHeight:1, flexShrink:0 }}>{rank >= 3 ? '' : anml}</span>
                <span style={{
                  fontWeight:900, fontSize: isFirst ? 18 : 15,
                  color: isFirst ? '#fff' : '#1A1A1A',
                  overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                }}>{p.name}</span>
              </div>
              <div style={{ textAlign:'right', flexShrink:0 }}>
                <span style={{
                  fontWeight:900, fontSize: isFirst ? 26 : 20,
                  color: isFirst ? '#fff' : '#1A1A1A',
                }}>{p.score > 0 ? `+${p.score}` : p.score}</span>
              </div>
            </div>
          );
        })}
      </div>

      {!isOverlay && (
        <div style={{ padding:'16px clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
          <button
            onClick={onContinue}
            style={{
              width:'100%',
              fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(15px,4vw,18px)',
              letterSpacing:'0.06em', textTransform:'uppercase',
              padding:'18px 0', borderRadius:100,
              background:'linear-gradient(135deg,#FF6B7A 0%,#FF8C42 35%,#FFC93C 65%,#2ED573 100%)',
              color:'#fff', border:'none', cursor:'pointer',
              boxShadow:'0 10px 28px -6px rgba(255,100,80,0.4)',
              textShadow:'0 1px 4px rgba(0,0,0,0.15)',
            }}
          >Devam →</button>
        </div>
      )}
    </div>
  );
}
