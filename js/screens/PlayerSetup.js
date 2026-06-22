function PlayerSetup({ onStart, onBack, ageMode, gameMode }) {
  const [gameName, setGameName] = React.useState('');
  const isMixed = ageMode === 'mixed';
  const isGroup = gameMode === 'group';

  // ── Bireysel mod ─────────────────────────────────────────
  const [players, setPlayers] = React.useState([]);
  const [name, setName] = React.useState('');
  const [newPlayerIsYouth, setNewPlayerIsYouth] = React.useState(false);
  const inputRef = React.useRef(null);

  function addPlayer() {
    const t = name.trim();
    if (!t || players.length >= MAX_PLAYERS) return;
    setPlayers(p => [...p, { name: t, isYouth: isMixed ? newPlayerIsYouth : false }]);
    setName('');
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  }
  function removePlayer(i) { setPlayers(p => p.filter((_, idx) => idx !== i)); }
  function togglePlayerAge(i) {
    setPlayers(p => p.map((pl, idx) => idx === i ? { ...pl, isYouth: !pl.isYouth } : pl));
  }
  function handleSoloKey(e) { if (e.key === 'Enter') addPlayer(); }

  // ── Grup mod ─────────────────────────────────────────────
  const [groups, setGroups] = React.useState([
    { name: 'Takım 1', players: [] },
    { name: 'Takım 2', players: [] },
  ]);
  const [gInputs, setGInputs] = React.useState([
    { value: '', isYouth: false },
    { value: '', isYouth: false },
  ]);

  function addGroup() {
    if (groups.length >= 4) return;
    const n = groups.length + 1;
    setGroups(g => [...g, { name: `Takım ${n}`, players: [] }]);
    setGInputs(inp => [...inp, { value: '', isYouth: false }]);
  }
  function removeGroup(gi) {
    if (groups.length <= 2) return;
    setGroups(g => g.filter((_, i) => i !== gi));
    setGInputs(inp => inp.filter((_, i) => i !== gi));
  }
  function addPlayerToGroup(gi) {
    const val = (gInputs[gi] || {}).value && gInputs[gi].value.trim();
    if (!val) return;
    setGroups(g => g.map((grp, i) => i !== gi ? grp : {
      ...grp, players: [...grp.players, { name: val, isYouth: gInputs[gi].isYouth }],
    }));
    setGInputs(inp => inp.map((v, i) => i !== gi ? v : { ...v, value: '' }));
  }
  function removePlayerFromGroup(gi, pi) {
    setGroups(g => g.map((grp, i) => i !== gi ? grp : {
      ...grp, players: grp.players.filter((_, j) => j !== pi),
    }));
  }
  function setGroupName(gi, val) {
    setGroups(g => g.map((grp, i) => i !== gi ? grp : { ...grp, name: val }));
  }
  function setGVal(gi, val) {
    setGInputs(inp => inp.map((v, i) => i !== gi ? v : { ...v, value: val }));
  }
  function setGYouth(gi, val) {
    setGInputs(inp => inp.map((v, i) => i !== gi ? v : { ...v, isYouth: val }));
  }
  function handleGroupKey(e, gi) { if (e.key === 'Enter') addPlayerToGroup(gi); }

  // ── Doğrulama ve başlatma ─────────────────────────────────
  const canStart = isGroup
    ? groups.length >= 2 && groups.every(g => g.players.length >= 2)
    : players.length >= 3;

  const readyGroups = isGroup ? groups.filter(g => g.players.length >= 2).length : 0;
  const totalGroupPlayers = isGroup ? groups.reduce((s, g) => s + g.players.length, 0) : 0;

  const statusText = isGroup
    ? (canStart
        ? `${groups.length} takım · ${totalGroupPlayers} kişi hazır!`
        : `${readyGroups}/${groups.length} takım hazır (en az 2 kişi/takım)`)
    : (players.length === 0
        ? STRINGS.playerSetup.statusEmpty
        : players.length < 3
        ? STRINGS.playerSetup.statusNeedMore(3 - players.length)
        : STRINGS.playerSetup.statusReady(players.length));

  function handleStart() {
    if (!canStart) return;
    if (isGroup) {
      const entries = groups.flatMap((g, gi) =>
        g.players.map(p => ({ ...p, groupName: (g.name || '').trim() || `Takım ${gi + 1}`, groupIdx: gi }))
      );
      onStart(entries, gameName.trim());
    } else {
      onStart(players, gameName.trim());
    }
  }

  // ── Grup renkleri ─────────────────────────────────────────
  const GRP_COLORS = [
    { grad: 'linear-gradient(135deg,#FF6B7A,#FF8C42)', light: 'rgba(255,107,122,0.10)', accent: '#FF6B7A' },
    { grad: 'linear-gradient(135deg,#3D5AFE,#B14AED)', light: 'rgba(61,90,254,0.10)',   accent: '#3D5AFE' },
    { grad: 'linear-gradient(135deg,#2ED573,#2E9CFF)', light: 'rgba(46,150,255,0.10)',  accent: '#2ED573' },
    { grad: 'linear-gradient(135deg,#FFC93C,#FF8C42)', light: 'rgba(255,140,66,0.10)',  accent: '#FFC93C' },
  ];

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden' }}>

      {/* Header */}
      <div style={{ padding:'clamp(14px,4vw,20px) clamp(20px,5vw,28px) 0', flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
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
                fontWeight:900, fontSize:'clamp(22px,6vw,30px)', letterSpacing:'-0.03em', lineHeight:1,
                background:'linear-gradient(135deg,#FF6B7A,#FF8C42,#FFC93C)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>{STRINGS.playerSetup.titleLine1}</span>
              <span style={{
                fontWeight:400, fontStyle:'italic',
                fontSize:'clamp(22px,6vw,30px)', letterSpacing:'-0.01em', lineHeight:1, color:'#5A5A5A',
              }}>{STRINGS.playerSetup.titleLine2}</span>
            </div>
            <div style={{
              fontSize:11, marginTop:5, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase',
              color: canStart ? '#2ED573' : '#A0A0A0', transition:'color 0.3s',
            }}>
              {statusText}
            </div>
          </div>

          <div style={{ width:36, flexShrink:0 }} />
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

      {/* İçerik */}
      <div style={{ flex:1, overflowY:'auto', minHeight:0, padding:'14px clamp(20px,5vw,28px) 0' }}>

        {/* ── GRUP MODU ── */}
        {isGroup ? (
          <div style={{ display:'flex', flexDirection:'column', gap:12, paddingBottom:8 }}>
            {groups.map((g, gi) => {
              const col = GRP_COLORS[gi % GRP_COLORS.length];
              const inp = gInputs[gi] || { value: '', isYouth: false };
              const canAdd = !!inp.value.trim();
              return (
                <div key={gi} style={{
                  background:'#fff', borderRadius:20, overflow:'hidden',
                  boxShadow:'0 4px 18px -8px rgba(0,0,0,0.14)',
                  animation:'enter 0.3s cubic-bezier(0.2,0.8,0.2,1) both',
                }}>
                  {/* Başlık şeridi */}
                  <div style={{ background:col.grad, padding:'11px 16px', display:'flex', alignItems:'center', gap:10 }}>
                    <input
                      value={g.name}
                      onChange={e => setGroupName(gi, e.target.value)}
                      placeholder={`Takım ${gi + 1}`}
                      maxLength={20}
                      autoComplete="off"
                      style={{
                        flex:1, minWidth:0,
                        fontFamily:'Nunito', fontWeight:900, fontSize:15, color:'#fff',
                        letterSpacing:'-0.01em',
                        background:'transparent', border:'none',
                        borderBottom:'1.5px dashed rgba(255,255,255,0.45)',
                        outline:'none', padding:'2px 0',
                      }}
                    />
                    <span style={{
                      fontSize:10, color:'rgba(255,255,255,0.85)', fontWeight:800, letterSpacing:'0.1em',
                      background:'rgba(255,255,255,0.22)', borderRadius:100, padding:'3px 9px',
                    }}>
                      {g.players.length < 2 ? `${g.players.length}/2` : `${g.players.length} kişi`}
                    </span>
                    {g.players.length >= 2 && (
                      <span style={{ fontSize:14, lineHeight:1 }}>✓</span>
                    )}
                    {groups.length > 2 && (
                      <button
                        onClick={() => removeGroup(gi)}
                        style={{
                          width:22, height:22, borderRadius:'50%',
                          background:'rgba(255,255,255,0.25)', border:'none',
                          cursor:'pointer', color:'#fff', fontSize:14,
                          display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1, padding:0,
                        }}
                      >×</button>
                    )}
                  </div>

                  {/* Oyuncular */}
                  <div style={{ padding:'10px 14px 6px', display:'flex', flexWrap:'wrap', gap:6, minHeight:44, alignItems:'flex-start' }}>
                    {g.players.length === 0 ? (
                      <span style={{ fontSize:12, color:'#C8C4BC', fontWeight:700, padding:'4px 0', fontStyle:'italic' }}>
                        Henüz kimse yok
                      </span>
                    ) : g.players.map((p, pi) => (
                      <div key={pi} style={{
                        display:'flex', alignItems:'center', gap:5,
                        background: col.light, borderRadius:100, padding:'5px 6px 5px 12px',
                        animation:'enter 0.25s cubic-bezier(0.2,0.8,0.2,1) both',
                      }}>
                        <span style={{ fontSize:13, fontWeight:800, color:'#1A1A1A' }}>{p.name}</span>
                        {isMixed && (
                          <span style={{
                            fontSize:8, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase',
                            color: p.isYouth ? col.accent : '#999',
                            padding:'2px 6px', background:'rgba(0,0,0,0.06)', borderRadius:100,
                          }}>
                            {p.isYouth ? STRINGS.scene.ageYouth : STRINGS.scene.ageAdult}
                          </span>
                        )}
                        <button
                          onClick={() => removePlayerFromGroup(gi, pi)}
                          style={{
                            width:18, height:18, borderRadius:'50%',
                            background:'rgba(0,0,0,0.1)', border:'none', cursor:'pointer',
                            color:'#666', fontSize:12, display:'flex', alignItems:'center',
                            justifyContent:'center', lineHeight:1, padding:0,
                          }}
                        >×</button>
                      </div>
                    ))}
                  </div>

                  {/* Oyuncu ekle satırı */}
                  <div style={{ padding:'6px 14px 14px', display:'flex', gap:6 }}>
                    <div style={{
                      flex:1, display:'flex', alignItems:'center',
                      background:'rgba(0,0,0,0.05)', borderRadius:100,
                      border:'1.5px solid', borderColor: canAdd ? col.accent : 'transparent',
                      transition:'border-color 0.2s', paddingLeft:14, overflow:'hidden',
                    }}>
                      <input
                        value={inp.value}
                        onChange={e => setGVal(gi, e.target.value)}
                        onKeyDown={e => handleGroupKey(e, gi)}
                        placeholder="İsim ekle..."
                        maxLength={20}
                        autoComplete="off"
                        style={{
                          flex:1, fontFamily:'Nunito', fontWeight:700, fontSize:14,
                          padding:'9px 0', border:'none', outline:'none',
                          background:'transparent', color:'#1A1A1A', minWidth:0,
                        }}
                      />
                      {isMixed && (
                        <div style={{ display:'flex', background:'rgba(0,0,0,0.07)', borderRadius:100, padding:2, margin:'0 6px', gap:1, flexShrink:0 }}>
                          {[
                            { value: false, label: STRINGS.settings.ageAdult },
                            { value: true,  label: STRINGS.settings.ageYouth },
                          ].map(opt => {
                            const active = inp.isYouth === opt.value;
                            return (
                              <button
                                key={String(opt.value)}
                                onClick={() => setGYouth(gi, opt.value)}
                                style={{
                                  padding:'4px 9px', borderRadius:100, border:'none', cursor:'pointer',
                                  fontFamily:'Nunito', fontWeight:800, fontSize:9, letterSpacing:'0.06em',
                                  background: active ? '#1A1A1A' : 'transparent',
                                  color: active ? '#fff' : '#888',
                                  transition:'background 0.15s, color 0.15s', whiteSpace:'nowrap',
                                }}
                              >{opt.label}</button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => addPlayerToGroup(gi)}
                      disabled={!canAdd}
                      style={{
                        width:40, height:40, borderRadius:'50%', border:'none',
                        cursor: canAdd ? 'pointer' : 'default',
                        background: canAdd ? col.grad : '#E8E6E1',
                        color: canAdd ? '#fff' : '#B0A898',
                        fontSize:20, fontWeight:900, flexShrink:0,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        transition:'all 0.2s',
                      }}
                    >+</button>
                  </div>
                </div>
              );
            })}

            {/* Takım ekle */}
            {groups.length < 4 && (
              <button
                onClick={addGroup}
                style={{
                  width:'100%', padding:'14px 0', borderRadius:16,
                  border:'2px dashed rgba(0,0,0,0.12)', background:'transparent',
                  cursor:'pointer', fontFamily:'Nunito', fontWeight:800, fontSize:14,
                  color:'#A0A0A0', letterSpacing:'0.02em',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                  transition:'border-color 0.2s, color 0.2s',
                }}
              >
                <span style={{ fontSize:18 }}>+</span> Takım Ekle ({groups.length}/4)
              </button>
            )}
          </div>

        ) : (
          /* ── BİREYSEL MOD ── */
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {players.length === 0 ? (
              PLAYER_ANIMALS.slice(0, 4).map((animal, i) => (
                <div key={i} style={{
                  width:'calc(50% - 5px)', aspectRatio:'1/1',
                  background: PLAYER_GRADS[i], opacity:0.13, borderRadius:24,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <span style={{ fontSize:36, lineHeight:1 }}>{animal}</span>
                </div>
              ))
            ) : (
              players.map((p, i) => (
                <div key={i} style={{
                  position:'relative', width:'calc(50% - 5px)',
                  background: PLAYER_GRADS[i % PLAYER_GRADS.length],
                  borderRadius:24, padding:'18px 14px 14px',
                  boxShadow:'0 6px 20px -6px rgba(0,0,0,0.25)',
                  animation:'enter 0.3s cubic-bezier(0.2,0.8,0.2,1) both',
                  display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                }}>
                  <span style={{ fontSize:34, lineHeight:1 }}>{PLAYER_ANIMALS[i % PLAYER_ANIMALS.length]}</span>
                  <span style={{
                    fontWeight:900, fontSize:'clamp(14px,4vw,17px)', color:'#fff',
                    letterSpacing:'-0.01em', textShadow:'0 1px 3px rgba(0,0,0,0.15)',
                    textAlign:'center', wordBreak:'break-word',
                  }}>{p.name}</span>
                  {isMixed && (
                    <button
                      onClick={() => togglePlayerAge(i)}
                      style={{
                        fontFamily:'Nunito', fontWeight:800, fontSize:9,
                        letterSpacing:'0.12em', textTransform:'uppercase',
                        padding:'3px 10px', borderRadius:100, border:'none', cursor:'pointer',
                        background: p.isYouth ? 'linear-gradient(135deg,#3D5AFE,#5FB8FF)' : 'rgba(255,255,255,0.28)',
                        color:'#fff',
                        boxShadow: p.isYouth ? '0 2px 8px -2px rgba(61,90,254,0.5)' : 'none',
                        transition:'all 0.18s',
                      }}
                    >{p.isYouth ? STRINGS.scene.ageYouth : STRINGS.scene.ageAdult}</button>
                  )}
                  <button onClick={() => removePlayer(i)} style={{
                    position:'absolute', top:8, right:8,
                    width:26, height:26, borderRadius:'50%',
                    background:'rgba(255,255,255,0.25)', border:'none',
                    fontSize:15, cursor:'pointer', color:'#fff',
                    display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1,
                  }}>×</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Bireysel mod input */}
      {!isGroup && (
        <div style={{ padding:'16px clamp(20px,5vw,28px) 12px', flexShrink:0 }}>
          <div style={{ display:'flex', gap:8 }}>
            <div style={{
              flex:1, display:'flex', alignItems:'center',
              background:'#fff', borderRadius:100,
              border:'2.5px solid', borderColor: name.trim() ? '#B14AED' : 'rgba(0,0,0,0.1)',
              transition:'border-color 0.2s', overflow:'hidden', paddingLeft:20,
            }}>
              <input
                ref={inputRef}
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={handleSoloKey}
                placeholder={STRINGS.playerSetup.playerPlaceholder}
                maxLength={20}
                autoComplete="off"
                style={{
                  flex:1, fontFamily:'Nunito', fontWeight:800, fontSize:16,
                  padding:'14px 0', border:'none', outline:'none',
                  background:'transparent', color:'#1A1A1A', minWidth:0,
                }}
              />
              {isMixed && (
                <div style={{ display:'flex', background:'rgba(0,0,0,0.07)', borderRadius:100, padding:2, margin:'0 6px', flexShrink:0, gap:1 }}>
                  {[
                    { value: false, label: STRINGS.settings.ageAdult },
                    { value: true,  label: STRINGS.settings.ageYouth },
                  ].map(opt => {
                    const active = newPlayerIsYouth === opt.value;
                    return (
                      <button
                        key={String(opt.value)}
                        onClick={() => setNewPlayerIsYouth(opt.value)}
                        style={{
                          padding:'5px 10px', borderRadius:100, border:'none', cursor:'pointer',
                          fontFamily:'Nunito', fontWeight:800, fontSize:10, letterSpacing:'0.06em',
                          background: active ? '#1A1A1A' : 'transparent',
                          color: active ? '#fff' : '#888',
                          transition:'background 0.18s, color 0.18s', whiteSpace:'nowrap',
                        }}
                      >{opt.label}</button>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              onClick={addPlayer}
              disabled={!name.trim()}
              style={{
                fontFamily:'Nunito', fontWeight:900, fontSize:15,
                width:52, height:52, borderRadius:'50%',
                background: name.trim() ? 'linear-gradient(135deg,#B14AED,#3D5AFE)' : '#E8E6E1',
                color: name.trim() ? '#fff' : '#B0A898',
                border:'none', cursor: name.trim() ? 'pointer' : 'default',
                flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow: name.trim() ? '0 6px 18px -4px rgba(100,60,220,0.5)' : 'none',
                transition:'all 0.2s',
              }}
            >+</button>
          </div>
        </div>
      )}

      {/* Başlat butonu */}
      <div style={{ padding:'0 clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 20px)', flexShrink:0 }}>
        <button
          onClick={handleStart}
          style={{
            width:'100%', fontFamily:'Nunito', fontWeight:900, fontSize:15,
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
          {canStart
            ? STRINGS.playerSetup.startBtn
            : (isGroup
                ? `Her takıma 2+ kişi ekle`
                : STRINGS.playerSetup.needMoreBtn(3 - players.length))}
        </button>
      </div>
    </div>
  );
}
