function SelectedCheck() {
  return (
    <span style={{
      position:'absolute', top:8, right:8,
      width:22, height:22, borderRadius:'50%',
      background:'#fff', color:'#1A1A1A',
      display:'flex', alignItems:'center', justifyContent:'center',
      fontSize:13, fontWeight:900, lineHeight:1,
      boxShadow:'0 2px 8px -2px rgba(0,0,0,0.3)',
    }}>✓</span>
  );
}

function RoundResult({ players, currentPlayerIdx, onConfirm, onRetry }) {
  // Çoklu seçim: birden fazla oyuncu bilebilir.
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  // Özel seçim: 'none' (kimse bilmedi) | 'retry' (ikinci şans) | null
  const [special, setSpecial] = React.useState(null);

  const hasPlayers = selectedPlayers.length > 0;
  const hasSelection = special !== null || hasPlayers;

  // Oyuncu seç/kaldır — özel seçim (kimse bilmedi / ikinci şans) varsa iptal edilir.
  function togglePlayer(idx) {
    setSpecial(null);
    setSelectedPlayers(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  }

  // 'none'/'retry' seç — oyuncu seçimlerini ve diğer özel seçimi iptal eder.
  function toggleSpecial(kind) {
    setSelectedPlayers([]);
    setSpecial(prev => prev === kind ? null : kind);
  }

  function handleConfirm() {
    if (special === 'retry') { onRetry(); return; }
    if (special === 'none') { onConfirm('none'); return; }
    if (hasPlayers) onConfirm(selectedPlayers);
  }

  // ── Buton render yardımcıları ──
  function playerButton(p, gradOverride) {
    const isSel = selectedPlayers.includes(p.originalIdx);
    const bg = gradOverride || PLAYER_GRADS[p.originalIdx % PLAYER_GRADS.length];
    const icon = PLAYER_ANIMALS[p.originalIdx % PLAYER_ANIMALS.length];
    return (
      <button
        key={String(p.originalIdx)}
        onClick={() => togglePlayer(p.originalIdx)}
        style={{
          fontFamily:'Nunito', position:'relative',
          width:'calc(50% - 5px)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:8,
          padding:'20px 14px 16px', borderRadius:24,
          background: bg, border:'none',
          outline: isSel ? '3px solid #fff' : 'none', outlineOffset:'-3px',
          cursor:'pointer', opacity: isSel ? 1 : 0.72,
          boxShadow:'0 4px 14px -4px rgba(0,0,0,0.18)',
          transition:'opacity 0.18s, box-shadow 0.18s',
        }}
      >
        {isSel && <SelectedCheck />}
        <span style={{ fontSize:38, lineHeight:1 }}>{icon}</span>
        <span style={{ fontWeight:900, fontSize:15, color:'#fff', lineHeight:1 }}>{p.name}</span>
      </button>
    );
  }

  function noneButton() {
    const isSel = special === 'none';
    return (
      <button
        key="none"
        onClick={() => toggleSpecial('none')}
        style={{
          fontFamily:'Nunito', position:'relative',
          width:'calc(50% - 5px)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:8,
          padding:'20px 14px 16px', borderRadius:24,
          background:'#1A1A1A', border:'none',
          outline: isSel ? '3px solid #fff' : 'none', outlineOffset:'-3px',
          cursor:'pointer',
          boxShadow:'0 4px 14px -4px rgba(0,0,0,0.18)',
          opacity: isSel ? 1 : 0.72,
          transition:'opacity 0.18s, box-shadow 0.18s',
        }}
      >
        {isSel && <SelectedCheck />}
        <span style={{ fontSize:38, lineHeight:1 }}>🤷</span>
        <span style={{ fontWeight:900, fontSize:15, fontStyle:'italic', color:'#fff', lineHeight:1 }}>{STRINGS.roundResult.nobody}</span>
      </button>
    );
  }

  function retryButton() {
    const isSel = special === 'retry';
    return (
      <button
        key="retry"
        onClick={() => toggleSpecial('retry')}
        aria-label={STRINGS.roundResult.retry}
        title={STRINGS.roundResult.retry}
        style={{
          width:'calc(50% - 5px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding:'20px 14px 16px', borderRadius:24,
          background:'#FCFAF7', border:'1px solid rgba(0,0,0,0.08)',
          outline: isSel ? '3px solid #1A1A1A' : 'none', outlineOffset:'-3px',
          cursor:'pointer', opacity: isSel ? 1 : 0.72,
          boxShadow:'0 4px 14px -4px rgba(0,0,0,0.14)',
          transition:'opacity 0.18s, box-shadow 0.18s',
        }}
      >
        <span style={{ display:'flex', alignItems:'center', gap:6, fontSize:34, lineHeight:1 }}>
          <span>🎲</span><span>🤞</span>
        </span>
      </button>
    );
  }

  // ── Grup modu: tahmin edebilecekler takımlara göre toplanır ──
  const RR_GRP = [
    { grad:'linear-gradient(135deg,#FF6B7A,#FF8C42)', light:'rgba(255,107,122,0.12)' },
    { grad:'linear-gradient(135deg,#3D5AFE,#B14AED)', light:'rgba(61,90,254,0.12)' },
    { grad:'linear-gradient(135deg,#2ED573,#2E9CFF)', light:'rgba(46,150,255,0.12)' },
    { grad:'linear-gradient(135deg,#FFC93C,#FF8C42)', light:'rgba(255,140,66,0.12)' },
  ];
  const isGroup = players.some(p => p.groupIdx != null);
  let teams = [];
  if (isGroup) {
    const map = {};
    players.forEach((p, i) => {
      if (i === currentPlayerIdx) return; // anlatıcı hariç
      const gi = p.groupIdx;
      if (gi == null) return;
      if (!map[gi]) map[gi] = { idx: gi, name: p.groupName || ('Takım ' + (gi + 1)), members: [] };
      map[gi].members.push({ ...p, originalIdx: i });
    });
    teams = Object.values(map).sort((a, b) => a.idx - b.idx);
  }

  const others = [
    ...players
      .map((p, i) => ({ ...p, originalIdx: i }))
      .filter((_, i) => i !== currentPlayerIdx),
    { name: STRINGS.roundResult.nobody, originalIdx: 'none', isNone: true },
    { name: STRINGS.roundResult.retry, originalIdx: 'retry', isRetry: true },
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

      <div style={{ flex:1, padding:'0 clamp(20px,5vw,28px)', overflowY:'auto', display:'flex', flexDirection:'column', justifyContent: isGroup ? 'flex-start' : 'center' }}>
        {isGroup ? (
          /* ── GRUP MODU: takım arka planları içinde toplanmış ── */
          <div style={{ display:'flex', flexDirection:'column', gap:12, paddingTop:4 }}>
            {teams.map(t => (
              <div key={t.idx} style={{
                background: RR_GRP[t.idx % RR_GRP.length].light,
                borderRadius:22, padding:'10px 12px 14px',
              }}>
                <div style={{ display:'flex', alignItems:'center', gap:7, padding:'4px 6px 10px' }}>
                  <span style={{ width:10, height:10, borderRadius:'50%', background: RR_GRP[t.idx % RR_GRP.length].grad, flexShrink:0 }} />
                  <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:13, color:'#1A1A1A', letterSpacing:'-0.01em' }}>{t.name}</span>
                </div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                  {t.members.map(m => playerButton(m, RR_GRP[t.idx % RR_GRP.length].grad))}
                </div>
              </div>
            ))}
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {noneButton()}
              {retryButton()}
            </div>
          </div>
        ) : (
          /* ── BİREYSEL MOD ── */
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {others.map(p => p.isRetry ? retryButton() : p.isNone ? noneButton() : playerButton(p))}
          </div>
        )}
      </div>

      <div style={{ padding:'16px clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
        <button
          onClick={handleConfirm}
          style={{
            width:'100%',
            fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(14px,4vw,17px)',
            letterSpacing:'0.06em', textTransform:'uppercase',
            padding:'17px 0', borderRadius:100,
            background: hasSelection
              ? 'linear-gradient(135deg,#2ED573 0%,#2E9CFF 50%,#B14AED 100%)'
              : '#E8E6E1',
            color: hasSelection ? '#fff' : '#B0A898',
            border:'none', cursor: hasSelection ? 'pointer' : 'default',
            boxShadow: hasSelection ? '0 10px 28px -6px rgba(80,160,255,0.4)' : 'none',
            transition:'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
            textShadow: hasSelection ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
          }}
        >{STRINGS.roundResult.confirm}</button>
      </div>
    </div>
  );
}
