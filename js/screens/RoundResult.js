function RoundResult({ players, currentPlayerIdx, onConfirm }) {
  const [selected, setSelected] = React.useState(null);

  const others = [
    ...players
      .map((p, i) => ({ ...p, originalIdx: i }))
      .filter((_, i) => i !== currentPlayerIdx),
    { name: STRINGS.roundResult.nobody, originalIdx: 'none', isNone: true },
  ];

  const anlatanGrad = PLAYER_GRADS[currentPlayerIdx % PLAYER_GRADS.length];

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden' }}>

      <div style={{ padding:'clamp(16px,4vw,24px) clamp(20px,5vw,28px) 16px', flexShrink:0 }}>
        <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, marginBottom:12, textAlign:'center' }}>
          {STRINGS.roundResult.header} <span style={{ background: anlatanGrad, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{STRINGS.roundResult.headerHL}</span>
        </div>
        {/* Anlatıcı */}
        <div style={{ display:'flex', justifyContent:'center' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background: anlatanGrad,
            borderRadius:100, padding:'8px 16px 8px 10px',
            boxShadow:'0 6px 18px -6px rgba(0,0,0,0.3)',
          }}>
            <span style={{ fontSize:22, lineHeight:1 }}>{PLAYER_ANIMALS[currentPlayerIdx % PLAYER_ANIMALS.length]}</span>
            <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:15, color:'#fff' }}>
              {players[currentPlayerIdx].name}
            </span>
            <span style={{ fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.7)', fontWeight:700 }}>{STRINGS.roundResult.telling}</span>
          </div>
        </div>
      </div>

      <div style={{ flex:1, padding:'0 clamp(20px,5vw,28px)', overflowY:'auto', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          {others.map((p) => {
            const isSel = selected === p.originalIdx;
            const bg = p.isNone ? '#1A1A1A' : PLAYER_GRADS[p.originalIdx % PLAYER_GRADS.length];
            const icon = p.isNone ? '🤷' : PLAYER_ANIMALS[p.originalIdx % PLAYER_ANIMALS.length];
            return (
              <button
                key={String(p.originalIdx)}
                onClick={() => setSelected(p.originalIdx)}
                style={{
                  fontFamily:'Nunito',
                  width:'calc(50% - 5px)',
                  display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                  padding:'20px 14px 16px', borderRadius:24,
                  background: bg,
                  border:'none', cursor:'pointer',
                  transform: isSel ? 'scale(1.04)' : 'scale(1)',
                  boxShadow: isSel ? '0 12px 32px -8px rgba(0,0,0,0.4)' : '0 4px 14px -4px rgba(0,0,0,0.18)',
                  opacity: isSel ? 1 : 0.72,
                  transition:'all 0.2s cubic-bezier(0.2,0.8,0.2,1)',
                }}
              >
                <span style={{ fontSize:38, lineHeight:1 }}>{icon}</span>
                <span style={{ fontWeight:900, fontSize:15, fontStyle: p.isNone ? 'italic' : 'normal', color:'#fff', lineHeight:1 }}>{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding:'16px clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
        <button
          onClick={() => selected !== null && onConfirm(selected)}
          style={{
            width:'100%',
            fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(14px,4vw,17px)',
            letterSpacing:'0.06em', textTransform:'uppercase',
            padding:'17px 0', borderRadius:100,
            background: selected !== null
              ? 'linear-gradient(135deg,#2ED573 0%,#2E9CFF 50%,#B14AED 100%)'
              : '#E8E6E1',
            color: selected !== null ? '#fff' : '#B0A898',
            border:'none', cursor: selected !== null ? 'pointer' : 'default',
            boxShadow: selected !== null ? '0 10px 28px -6px rgba(80,160,255,0.4)' : 'none',
            transition:'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
            textShadow: selected !== null ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
          }}
        >{STRINGS.roundResult.confirm}</button>
      </div>
    </div>
  );
}
