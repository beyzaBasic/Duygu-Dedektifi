function PlayerSetup({ onStart }) {
  const [name, setName] = React.useState('');
  const [players, setPlayers] = React.useState([]);

  function addPlayer() {
    const trimmed = name.trim();
    if (!trimmed || players.length >= 8) return;
    setPlayers(p => [...p, trimmed]);
    setName('');
  }

  function removePlayer(i) {
    setPlayers(p => p.filter((_, idx) => idx !== i));
  }

  function handleKey(e) {
    if (e.key === 'Enter') addPlayer();
  }

  const canStart = players.length >= 2;

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden' }}>

      <div style={{ padding:'clamp(24px,6vw,36px) clamp(20px,5vw,28px) 0', flexShrink:0, textAlign:'center' }}>
        <div style={{ fontSize:'clamp(32px,9vw,44px)', fontWeight:900, letterSpacing:'-0.03em', lineHeight:1, color:'#1A1A1A' }}>
          Kim<em style={{ fontStyle:'italic', fontWeight:400, color:'#B14AED' }}> oynuyor?</em>
        </div>
        <div style={{ fontSize:12, color:'#A0A0A0', marginTop:8, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' }}>
          {players.length === 0 ? 'İsim ekle, oyunu başlat' : `${players.length} oyuncu hazır`}
        </div>
      </div>

      <div style={{ flex:1, padding:'20px clamp(20px,5vw,28px) 0', overflowY:'auto' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          {players.map((p, i) => (
            <div key={i} style={{
              position:'relative',
              width:'calc(50% - 5px)',
              background: PLAYER_GRADS[i % PLAYER_GRADS.length],
              borderRadius:24, padding:'18px 14px 16px',
              boxShadow:'0 6px 20px -6px rgba(0,0,0,0.25)',
              animation:'enter 0.3s cubic-bezier(0.2,0.8,0.2,1) both',
              display:'flex', flexDirection:'column', alignItems:'center', gap:8,
            }}>
              <span style={{ fontSize:34, lineHeight:1 }}>{PLAYER_ANIMALS[i % PLAYER_ANIMALS.length]}</span>
              <span style={{
                fontWeight:900, fontSize:'clamp(14px,4vw,17px)',
                color:'#fff', letterSpacing:'-0.01em',
                textShadow:'0 1px 3px rgba(0,0,0,0.15)',
                textAlign:'center', wordBreak:'break-word',
              }}>{p}</span>
              <button onClick={() => removePlayer(i)} style={{
                position:'absolute', top:8, right:8,
                width:26, height:26, borderRadius:'50%',
                background:'rgba(255,255,255,0.25)',
                border:'none', fontSize:15, cursor:'pointer', color:'#fff',
                display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1,
              }}>×</button>
            </div>
          ))}
        </div>

        {players.length === 0 && (
          <div style={{
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            gap:12, padding:'40px 0', color:'#C8C0B8',
          }}>
            <div style={{ fontSize:40 }}>👥</div>
            <div style={{ fontSize:14, fontWeight:700 }}>Henüz kimse yok</div>
          </div>
        )}
      </div>

      <div style={{ padding:'16px clamp(20px,5vw,28px) 12px', display:'flex', gap:8, flexShrink:0 }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={handleKey}
          placeholder="İsim gir..."
          maxLength={20}
          autoComplete="off"
          style={{
            flex:1, fontFamily:'Nunito', fontWeight:800, fontSize:16,
            padding:'14px 20px', borderRadius:100,
            border:'2.5px solid',
            borderColor: name.trim() ? '#B14AED' : 'rgba(0,0,0,0.1)',
            background:'#fff', outline:'none', color:'#1A1A1A',
            transition:'border-color 0.2s',
          }}
        />
        <button
          onClick={addPlayer}
          disabled={!name.trim() || players.length >= 8}
          style={{
            fontFamily:'Nunito', fontWeight:900, fontSize:15,
            width:52, height:52, borderRadius:'50%',
            background: (!name.trim() || players.length >= 8)
              ? '#E8E6E1'
              : 'linear-gradient(135deg,#B14AED,#3D5AFE)',
            color: (!name.trim() || players.length >= 8) ? '#B0A898' : '#fff',
            border:'none', cursor: (!name.trim() || players.length >= 8) ? 'default' : 'pointer',
            flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: (!name.trim() || players.length >= 8) ? 'none' : '0 6px 18px -4px rgba(100,60,220,0.5)',
            transition:'all 0.2s',
          }}
        >+</button>
      </div>

      <div style={{ padding:'0 clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
        <button
          onClick={() => canStart && onStart(players)}
          style={{
            width:'100%',
            fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(15px,4vw,18px)',
            letterSpacing:'0.06em', textTransform:'uppercase',
            padding:'18px 0', borderRadius:100,
            background: canStart
              ? 'linear-gradient(135deg,#FF6B7A 0%,#FF8C42 35%,#FFC93C 65%,#2ED573 100%)'
              : '#E8E6E1',
            color: canStart ? '#fff' : '#B0A898',
            border:'none', cursor: canStart ? 'pointer' : 'default',
            boxShadow: canStart ? '0 10px 28px -6px rgba(255,100,80,0.45)' : 'none',
            transition:'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
            transform: canStart ? 'scale(1)' : 'scale(0.97)',
            textShadow: canStart ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
          }}
        >
          {canStart ? `Oynayalım! →` : `${2 - players.length} oyuncu daha ekle`}
        </button>
      </div>
    </div>
  );
}
