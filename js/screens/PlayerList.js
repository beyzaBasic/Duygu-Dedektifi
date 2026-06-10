function PlayerList({ players, currentPlayerIdx, sessionName, onPlayerTap, onGroupPlayerTap, onHome, onScoreOpen, onListOpen, onPlayerAgeChange, ageMode, settings, onSettingsChange }) {

  const GRP_GRADS = [
    'linear-gradient(135deg,#FF6B7A,#FF8C42)',
    'linear-gradient(135deg,#3D5AFE,#B14AED)',
    'linear-gradient(135deg,#2ED573,#2E9CFF)',
    'linear-gradient(135deg,#FFC93C,#FF8C42)',
  ];

  // Grup modu tespiti
  const isGroupMode = players.length > 0 && players[0] != null && players[0].groupIdx != null;

  // Grup verisini türet (hook olmadan, sade hesaplama)
  var groupList = [];
  if (isGroupMode) {
    var gmap = {};
    players.forEach(function(p, i) {
      var gi = p.groupIdx;
      if (gi == null) return;
      if (!gmap[gi]) gmap[gi] = { groupIdx: gi, groupName: p.groupName || ('Takım ' + (gi + 1)), members: [], totalScore: 0 };
      gmap[gi].members.push(Object.assign({}, p, { playerIdx: i }));
      gmap[gi].totalScore += p.score || 0;
    });
    groupList = Object.values(gmap).sort(function(a, b) { return a.groupIdx - b.groupIdx; });
  }

  var currentGroupIdx = isGroupMode ? (players[currentPlayerIdx] ? players[currentPlayerIdx].groupIdx : 0) : null;
  var currentGroup    = isGroupMode ? groupList.find(function(g) { return g.groupIdx === currentGroupIdx; }) : null;
  var otherGroups     = isGroupMode ? groupList.filter(function(g) { return g.groupIdx !== currentGroupIdx; }) : [];

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

      {/* Liste */}
      <div style={{ flex:1, overflowY:'auto', minHeight:0, padding:'12px 28px calc(env(safe-area-inset-bottom,0px) + 24px)' }}>
        <div style={{ width:'100%', maxWidth:320, margin:'0 auto', display:'flex', flexDirection:'column', gap:10 }}>

          {isGroupMode ? (
            /* ── GRUP MODU ── */
            <React.Fragment>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, textAlign:'center', paddingTop:2 }}>
                SIRADAKİ TAKIM
              </div>

              {/* Aktif grup kartı — her oyuncu kendi butonu */}
              <div style={{
                width:'100%',
                display:'flex', flexDirection:'column', alignItems:'stretch',
                background: GRP_GRADS[currentGroupIdx % GRP_GRADS.length],
                borderRadius:28,
                boxShadow:'0 16px 48px -12px rgba(0,0,0,0.35)',
                overflow:'hidden',
              }}>
                {/* Takım adı */}
                <div style={{ padding:'18px 24px 12px', textAlign:'center' }}>
                  <span style={{
                    fontFamily:'Nunito', fontWeight:900,
                    fontSize:'clamp(18px,5vw,24px)', letterSpacing:'-0.02em',
                    color:'#fff', textShadow:'0 2px 8px rgba(0,0,0,0.18)',
                  }}>{currentGroup?.groupName}</span>
                </div>

                <div style={{ height:1, background:'rgba(255,255,255,0.18)', margin:'0 20px' }} />

                {/* Oyuncu butonları */}
                <div style={{ padding:'8px 12px', display:'flex', flexDirection:'column', gap:6 }}>
                  {(currentGroup && currentGroup.members ? currentGroup.members : []).map(function(m, mi) {
                    var isCurrent = m.playerIdx === currentPlayerIdx;
                    return (
                      <button
                        key={mi}
                        onClick={function() { onGroupPlayerTap(m.playerIdx); }}
                        style={{
                          display:'flex', alignItems:'center', gap:12,
                          borderRadius:16, border:'none', cursor:'pointer',
                          padding: isCurrent ? '14px 16px' : '10px 16px',
                          background: isCurrent ? 'rgba(255,255,255,0.26)' : 'rgba(255,255,255,0.08)',
                          boxShadow: isCurrent ? '0 4px 14px -4px rgba(0,0,0,0.15)' : 'none',
                          transition:'background 0.18s',
                          width:'100%', textAlign:'left',
                        }}
                      >
                        <div style={{
                          width: isCurrent ? 10 : 7, height: isCurrent ? 10 : 7,
                          borderRadius:'50%', background:'#fff', flexShrink:0,
                          opacity: isCurrent ? 1 : 0.45,
                        }} />
                        <span style={{
                          fontFamily:'Nunito', flex:1,
                          fontWeight: isCurrent ? 900 : 700,
                          fontSize: isCurrent ? 'clamp(16px,4.5vw,20px)' : 'clamp(13px,3.5vw,16px)',
                          color: isCurrent ? '#fff' : 'rgba(255,255,255,0.6)',
                          letterSpacing:'-0.01em',
                        }}>{m.name}</span>
                        {isCurrent ? (
                          <span style={{
                            fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase',
                            color:'rgba(255,255,255,0.75)', fontWeight:800, flexShrink:0,
                          }}>ANLATIYOR →</span>
                        ) : (
                          <span style={{
                            fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase',
                            color:'rgba(255,255,255,0.35)', fontWeight:700, flexShrink:0,
                          }}>SEÇ</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div style={{ padding:'10px 24px 18px', textAlign:'center' }}>
                  <span style={{ fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', fontWeight:700 }}>
                    {STRINGS.playerList.tapHint}
                  </span>
                </div>
              </div>

              {/* Pasif gruplar */}
              {otherGroups.map(g => {
                const memberNames = g.members.map(m => m.name);
                const nameStr = memberNames.length <= 2
                  ? memberNames.join(', ')
                  : memberNames.slice(0, 2).join(', ') + ` +${memberNames.length - 2}`;
                return (
                  <div key={g.groupIdx} style={{
                    width:'100%', display:'flex', alignItems:'center', gap:12,
                    background: GRP_GRADS[g.groupIdx % GRP_GRADS.length],
                    borderRadius:18, padding:'14px 18px', opacity:0.62,
                  }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontFamily:'Nunito', fontWeight:900, fontSize:15, color:'#fff', letterSpacing:'-0.01em', lineHeight:1.2 }}>
                        {g.groupName}
                      </div>
                      <div style={{ fontFamily:'Nunito', fontWeight:700, fontSize:11, color:'rgba(255,255,255,0.72)', marginTop:3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                        {nameStr}
                      </div>
                    </div>
                    <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:13, color:'rgba(255,255,255,0.85)', flexShrink:0 }}>
                      {g.totalScore > 0 ? `+${g.totalScore}` : g.totalScore}
                    </span>
                  </div>
                );
              })}
            </React.Fragment>

          ) : (
            /* ── BİREYSEL MOD ── */
            players.map((p, i) => {
              const isCurrent = i === currentPlayerIdx;
              const grad = PLAYER_GRADS[i % PLAYER_GRADS.length];
              const animal = PLAYER_ANIMALS[i % PLAYER_ANIMALS.length];

              if (isCurrent) {
                return (
                  <React.Fragment key={i}>
                    <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, textAlign:'center', paddingTop:2 }}>
                      {STRINGS.playerList.nextPlayer}
                    </div>
                    <button
                      onClick={onPlayerTap}
                      style={{
                        width:'100%', aspectRatio:'1/1',
                        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12,
                        background: grad, borderRadius:28, border:'none', cursor:'pointer',
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
                  width:'100%', display:'flex', alignItems:'center', gap:12,
                  background: grad, borderRadius:18, padding:'12px 18px', opacity:0.65,
                }}>
                  <span style={{ fontSize:26, lineHeight:1, flexShrink:0 }}>{animal}</span>
                  <span style={{
                    fontFamily:'Nunito', fontWeight:900, fontSize:15,
                    color:'#fff', letterSpacing:'-0.01em',
                    flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                  }}>{p.name}</span>
                  {ageMode === 'mixed' && (
                    <span style={{
                      fontFamily:'Nunito', fontWeight:800, fontSize:9,
                      letterSpacing:'0.12em', textTransform:'uppercase',
                      padding:'4px 9px', borderRadius:100,
                      background:'rgba(255,255,255,0.22)',
                      color:'#fff', border:'1px solid rgba(255,255,255,0.35)', flexShrink:0,
                    }}>
                      {p.isYouth ? STRINGS.scene.ageYouth : STRINGS.scene.ageAdult}
                    </span>
                  )}
                  <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:13, color:'rgba(255,255,255,0.8)', flexShrink:0 }}>
                    {p.score > 0 ? `+${p.score}` : p.score}
                  </span>
                </div>
              );
            })
          )}

        </div>
      </div>

    </div>
  );
}
