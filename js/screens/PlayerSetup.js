function PlayerSetup({ onStart, onBack }) {
  const [gameName, setGameName] = React.useState('');
  const [name, setName] = React.useState('');
  const [players, setPlayers] = React.useState([]);
  const inputRef = React.useRef(null);

  function addPlayer() {
    const trimmed = name.trim();
    if (!trimmed || players.length >= 10) return;
    setPlayers(p => [...p, trimmed]);
    setName('');
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  }

  function removePlayer(i) {
    setPlayers(p => p.filter((_, idx) => idx !== i));
  }

  function handleKey(e) {
    if (e.key === 'Enter') addPlayer();
  }

  function handleStart() {
    if (!canStart) return;
    onStart(players, gameName.trim());
  }

  const canStart = players.length >= 3;

  const statusText = players.length === 0
    ? STRINGS.playerSetup.statusEmpty
    : players.length < 3
    ? STRINGS.playerSetup.statusNeedMore(3 - players.length)
    : STRINGS.playerSetup.statusReady(players.length);

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden' }}>

      {/* Header */}
      <div style={{ padding:'clamp(14px,4vw,20px) clamp(20px,5vw,28px) 0', flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
          <button onClick={onBack} style={{
            width:36, height:36, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
            display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
            boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M6 2L1 7L6 12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="1" y1="7" x2="13" y2="7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div style={{ textAlign:'center' }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:8, justifyContent:'center' }}>
              <span style={{
                fontWeight:900, fontSize:'clamp(26px,7vw,36px)', letterSpacing:'-0.03em', lineHeight:1,
                background:'linear-gradient(135deg,#FF6B7A,#FF8C42,#FFC93C)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>{STRINGS.playerSetup.titleLine1}</span>
              <span style={{
                fontWeight:400, fontStyle:'italic',
                fontSize:'clamp(26px,7vw,36px)', letterSpacing:'-0.01em', lineHeight:1, color:'#5A5A5A',
              }}>{STRINGS.playerSetup.titleLine2}</span>
            </div>
            <div style={{
              fontSize:11, marginTop:5, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
              color: canStart ? '#2ED573' : '#A0A0A0',
              transition:'color 0.3s',
            }}>
              {statusText}
            </div>
          </div>

          <div style={{ width:36, flexShrink:0 }}/>
        </div>

        <input
          value={gameName}
          onChange={e => setGameName(e.target.value)}
          placeholder={STRINGS.playerSetup.gameNamePlaceholder}
          maxLength={32}
          autoComplete="off"
          style={{
            fontFamily:'Nunito', fontWeight:700, fontSize:14,
            padding:'10px 18px', borderRadius:100, width:'100%',
            border:'2px solid',
            borderColor: gameName.trim() ? '#B14AED' : 'rgba(0,0,0,0.1)',
            background:'#fff', outline:'none', color:'#1A1A1A',
            textAlign:'center', transition:'border-color 0.2s', boxSizing:'border-box',
          }}
        />
      </div>

      {/* Player grid */}
      <div style={{ flex:1, padding:'16px clamp(20px,5vw,28px) 0', overflowY:'auto' }}>
        {players.length === 0 ? (
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {PLAYER_ANIMALS.slice(0, 4).map((animal, i) => (
              <div key={i} style={{
                width:'calc(50% - 5px)',
                aspectRatio:'1/1',
                background: PLAYER_GRADS[i],
                opacity:0.13,
                borderRadius:24,
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8,
              }}>
                <span style={{ fontSize:36, lineHeight:1 }}>{animal}</span>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>

      {/* Input row */}
      <div style={{ padding:'16px clamp(20px,5vw,28px) 12px', display:'flex', gap:8, flexShrink:0 }}>
        <input
          ref={inputRef}
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={handleKey}
          placeholder={STRINGS.playerSetup.playerPlaceholder}
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
          disabled={!name.trim() || players.length >= 10}
          style={{
            fontFamily:'Nunito', fontWeight:900, fontSize:15,
            width:52, height:52, borderRadius:'50%',
            background: (!name.trim() || players.length >= 8)
              ? '#E8E6E1'
              : 'linear-gradient(135deg,#B14AED,#3D5AFE)',
            color: (!name.trim() || players.length >= 10) ? '#B0A898' : '#fff',
            border:'none', cursor: (!name.trim() || players.length >= 10) ? 'default' : 'pointer',
            flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: (!name.trim() || players.length >= 8) ? 'none' : '0 6px 18px -4px rgba(100,60,220,0.5)',
            transition:'all 0.2s',
          }}
        >+</button>
      </div>

      {/* Start button */}
      <div style={{ padding:'0 clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
        <button
          onClick={handleStart}
          style={{
            width:'100%',
            fontFamily:'Nunito', fontWeight:900, fontSize:15,
            letterSpacing:'0.06em', textTransform:'uppercase',
            padding:'16px 0', borderRadius:100,
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
          {canStart ? STRINGS.playerSetup.startBtn : STRINGS.playerSetup.needMoreBtn(3 - players.length)}
        </button>
      </div>
    </div>
  );
}
