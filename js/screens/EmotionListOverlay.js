function EmotionListOverlay({ onClose }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setVisible(true), 30); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      position:'fixed', inset:0,
      background:'#FAF7F2', display:'flex', flexDirection:'column',
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition:'transform 0.4s cubic-bezier(0.2,0.8,0.2,1)',
      zIndex:100,
    }}>
      <div style={{ padding:'clamp(16px,5vw,24px) clamp(16px,5vw,24px) 12px', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
        <div>
          <div style={{ fontWeight:900, fontSize:'clamp(18px,5vw,22px)', color:'#1A1A1A' }}>Duygu Havuzu</div>
          <div style={{ fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#A0A0A0', marginTop:3, fontWeight:700 }}>70 duygu · 7 renk ailesi</div>
        </div>
        <button onClick={onClose} style={{
          width:38, height:38, borderRadius:'50%', background:'rgba(0,0,0,0.07)',
          border:'none', fontSize:20, cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center', color:'#1A1A1A', fontFamily:'Nunito',
        }}>×</button>
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'0 clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom,0px) + 24px)' }}>
        {GROUPS.map((g, gi) => (
          <div key={gi} style={{ marginBottom:28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <div style={{ width:12, height:12, borderRadius:'50%', background:g.grad, flexShrink:0 }}/>
              <span style={{ fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700 }}>
                {g.name} Duygular
              </span>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {g.emotions.map((e, ei) => (
                <div key={ei} style={{
                  padding:'9px 16px', borderRadius:100,
                  background:g.grad, color:g.text, fontWeight:700, fontSize:14,
                }}>{e}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
