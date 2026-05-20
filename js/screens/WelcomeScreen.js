function WelcomeScreen({ onStart, onListOpen }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, overflowY:'auto', background:'#FAF7F2' }}>
      <div style={{ padding:'clamp(14px,4vw,20px) clamp(16px,5vw,24px) 0', display:'flex', justifyContent:'flex-end', flexShrink:0 }}>
        <button onClick={onListOpen} style={{
          width:42, height:42, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0,
        }}>
          <RainbowRings size={12} />
        </button>
      </div>

      <div style={{
        flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        padding:'0 28px 0',
        minHeight:0,
      }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20, marginBottom:36 }}>
          <RainbowRings size={18} />
          <div style={{ textAlign:'center' }}>
            <div style={{ fontWeight:900, fontSize:'clamp(28px,8vw,40px)', letterSpacing:'-0.025em', color:'#1A1A1A', lineHeight:1 }}>Duygu</div>
            <div style={{ fontWeight:400, fontStyle:'italic', fontSize:'clamp(28px,8vw,40px)', letterSpacing:'-0.01em', color:'#5A5A5A', lineHeight:1 }}>Dedektifi</div>
          </div>
          <div style={{ fontSize:10, letterSpacing:'0.22em', color:'#A0A0A0', textTransform:'uppercase' }}>Sahne · Duygu · Tahmin</div>
        </div>

        <div style={{ display:'flex', gap:6, marginBottom:40, flexWrap:'wrap', justifyContent:'center' }}>
          {GROUPS.map((g,i) => (
            <div key={i} style={{
              width:28, height:28, borderRadius:'50%', background:g.grad,
              boxShadow:'0 4px 10px -3px rgba(0,0,0,0.2)',
            }}/>
          ))}
        </div>

        <div style={{ background:'#fff', borderRadius:20, padding:'22px 20px', marginBottom:36, width:'100%', maxWidth:440 }}>
          <div style={{ fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#A0A0A0', marginBottom:16, fontWeight:700 }}>Nasıl oynanır</div>
          {[
            ['1', 'Duygu çek', 'Kart bulanık gelir — sadece sen görürsün'],
            ['2', 'Sahneyi oku', 'Sahneyi duygunla yorumla, soruyu cevapla'],
            ['3', 'Tahmin', 'Diğerleri senin duygunun ne olduğunu bulmalı'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom: n==='3' ? 0 : 14 }}>
              <div style={{
                width:26, height:26, borderRadius:'50%', background:'#1A1A1A', color:'#fff',
                fontSize:12, fontWeight:900, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>{n}</div>
              <div>
                <div style={{ fontWeight:800, fontSize:14, color:'#1A1A1A' }}>{t}</div>
                <div style={{ fontSize:12, color:'#5A5A5A', marginTop:2, lineHeight:1.4 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:'16px 28px calc(env(safe-area-inset-bottom, 0px) + 28px)', display:'flex', justifyContent:'center' }}>
        <Btn onClick={onStart}>Oyuna Başla</Btn>
      </div>
    </div>
  );
}
