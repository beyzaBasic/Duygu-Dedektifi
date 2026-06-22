const SB_GRP_GRADS = [
  'linear-gradient(135deg,#FF6B7A,#FF8C42)',
  'linear-gradient(135deg,#3D5AFE,#B14AED)',
  'linear-gradient(135deg,#2ED573,#2E9CFF)',
  'linear-gradient(135deg,#FFC93C,#FF8C42)',
];

// Tek oyuncu skor kartı — hem bireysel hem grup (takım içi) görünümde kullanılır.
function ScoreCardView({ p, currentRank, rankDelta, scoreDelta, showMedal, innerRef, gradOverride }) {
  const medals = ['🥇', '🥈', '🥉'];
  const grad = gradOverride || PLAYER_GRADS[p.originalIdx % PLAYER_GRADS.length];
  const anml = PLAYER_ANIMALS[p.originalIdx % PLAYER_ANIMALS.length];
  const hasRainbow = p.rainbowBonus;
  const isMedal = showMedal && currentRank < 3;
  const isFirst = showMedal && currentRank === 0;

  const colorCounts = {};
  (p.guessedColors || []).forEach(key => { colorCounts[key] = (colorCounts[key] || 0) + 1; });
  const collectedCount = Object.keys(colorCounts).length;

  return (
    <div
      ref={innerRef}
      style={{
        borderRadius:20, overflow:'hidden', flexShrink:0,
        boxShadow: isFirst ? '0 8px 24px -6px rgba(0,0,0,0.2)' : '0 2px 8px -2px rgba(0,0,0,0.08)',
      }}
    >
      {/* Gradient header */}
      <div style={{ background:grad, padding:'12px 16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>

          {/* Rank circle */}
          <div style={{
            width:36, height:36, borderRadius:'50%',
            background:'rgba(255,255,255,0.2)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize: isMedal ? 18 : 20, lineHeight:1, flexShrink:0,
          }}>
            {isMedal ? medals[currentRank] : anml}
          </div>

          {/* Name */}
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:5 }}>
              {isMedal && (
                <span style={{ fontSize:14, lineHeight:1, flexShrink:0 }}>{anml}</span>
              )}
              <span style={{
                fontWeight:900, fontSize:15, color:'#fff',
                overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                textShadow:'0 1px 3px rgba(0,0,0,0.12)',
              }}>{p.name}</span>
              {hasRainbow && <span style={{ fontSize:13, flexShrink:0 }}>🌈</span>}
            </div>
            {rankDelta !== null && rankDelta !== 0 && (
              <div style={{
                fontSize:10, fontWeight:700, marginTop:2,
                color: rankDelta > 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)',
              }}>
                {rankDelta > 0 ? STRINGS.scoreboard.rankUp(rankDelta) : STRINGS.scoreboard.rankDown(Math.abs(rankDelta))}
              </div>
            )}
          </div>

          {/* Score */}
          <div style={{ flexShrink:0, textAlign:'right' }}>
            {scoreDelta !== null && scoreDelta !== 0 && (
              <div style={{
                fontSize:10, fontWeight:800, lineHeight:1, marginBottom:2,
                color: scoreDelta > 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
              }}>
                {scoreDelta > 0 ? `+${scoreDelta}` : scoreDelta}
              </div>
            )}
            <span style={{
              fontWeight:900, fontSize: isFirst ? 26 : 20,
              color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,0.12)', lineHeight:1,
            }}>{p.score}</span>
          </div>
        </div>
      </div>

      {/* White bottom */}
      <div style={{ background:'#fff', padding:'10px 14px 12px' }}>

        {/* Stats */}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
          <span style={{ fontSize:11, fontWeight:800, color:'#4A4A4A' }}>🎭 {p.told || 0}</span>
          {(p.told || 0) > 0 && (
            <>
              <span style={{ fontSize:11, fontWeight:700, color:'#7A7A7A' }}>✅ {p.successTold || 0}</span>
              <span style={{ fontSize:11, fontWeight:700, color:'#7A7A7A' }}>❌ {p.failTold || 0}</span>
            </>
          )}
          <div style={{ flex:1 }}/>
          <span style={{ fontSize:11, fontWeight:800, color:'#4A4A4A' }}>🎯 {p.guessed || 0}</span>
        </div>

        {/* Rainbow dots */}
        <div style={{
          display:'flex', alignItems:'center', gap:5,
          background:'#F5F3EF', borderRadius:10, padding:'8px 10px',
        }}>
          {GROUPS.map(g => {
            const count = colorCounts[g.key] || 0;
            const collected = count > 0;
            return (
              <div key={g.key} style={{ position:'relative', flexShrink:0 }}>
                <div style={{
                  width:22, height:22, borderRadius:'50%',
                  background: collected ? g.grad : '#E0DDD8',
                  boxShadow: collected ? '0 1px 5px rgba(0,0,0,0.2)' : 'none',
                  transform: collected ? 'scale(1.08)' : 'scale(1)',
                  transition:'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
                  flexShrink:0,
                  overflow:'hidden',
                }}/>
                {count > 1 && (
                  <div style={{
                    position:'absolute', top:-4, right:-4,
                    minWidth:13, height:13, borderRadius:7,
                    background:'#1A1A1A', color:'#fff',
                    fontSize:7, fontWeight:900, lineHeight:'13px',
                    textAlign:'center', padding:'0 2px',
                  }}>{count}</div>
                )}
              </div>
            );
          })}
          <div style={{ flex:1 }}/>
          {hasRainbow
            ? <span style={{ fontSize:15 }}>🌈</span>
            : collectedCount > 0 && (
              <span style={{ fontSize:9, fontWeight:700, color:'#B0A898', letterSpacing:'0.04em' }}>
                {collectedCount}/{GROUPS.length}
              </span>
            )
          }
        </div>

      </div>
    </div>
  );
}

function Scoreboard({ players, prevPlayers, onContinue, onClose }) {
  const isOverlay = !!onClose;
  const totalRounds = players.reduce((sum, p) => sum + (p.told || 0), 0);
  const isGroup = players.some(p => p.groupIdx != null);

  const sorted = React.useMemo(() =>
    [...players].map((p, i) => ({ ...p, originalIdx: i })).sort((a, b) => b.score - a.score),
  [players]);

  const prevSorted = React.useMemo(() => prevPlayers
    ? [...prevPlayers].map((p, i) => ({ ...p, originalIdx: i })).sort((a, b) => b.score - a.score)
    : null,
  [prevPlayers]);

  const prevRankMap = React.useMemo(() => {
    const m = {};
    if (prevSorted) prevSorted.forEach((p, r) => { m[p.originalIdx] = r; });
    return m;
  }, [prevSorted]);

  const prevScoreMap = React.useMemo(() => {
    const m = {};
    if (prevPlayers) prevPlayers.forEach((p, i) => { m[i] = p.score; });
    return m;
  }, [prevPlayers]);

  // Grup modu: takımlara göre topla (takım toplam puanına göre sırala)
  const teams = React.useMemo(() => {
    if (!isGroup) return [];
    const map = {};
    players.forEach((p, i) => {
      const gi = p.groupIdx;
      if (gi == null) return;
      if (!map[gi]) map[gi] = { idx: gi, name: p.groupName || ('Takım ' + (gi + 1)), members: [], total: 0 };
      map[gi].members.push({ ...p, originalIdx: i });
      map[gi].total += p.score || 0;
    });
    const arr = Object.values(map);
    arr.forEach(t => t.members.sort((a, b) => b.score - a.score));
    arr.sort((a, b) => b.total - a.total);
    return arr;
  }, [players, isGroup]);

  // FLIP animation (yalnız bireysel mod)
  const [phase, setPhase] = React.useState(prevSorted ? 0 : 1);
  const itemRefs = React.useRef({});
  const snapshots = React.useRef({});
  const displayOrder = (phase === 0 && prevSorted) ? prevSorted : sorted;

  React.useLayoutEffect(() => {
    if (isGroup) return;
    if (phase === 0) {
      displayOrder.forEach(p => {
        const el = itemRefs.current[p.originalIdx];
        if (el) snapshots.current[p.originalIdx] = el.getBoundingClientRect().top;
      });
      setPhase(1);
    } else if (phase === 1 && Object.keys(snapshots.current).length > 0) {
      sorted.forEach(p => {
        const el = itemRefs.current[p.originalIdx];
        if (!el) return;
        const dy = (snapshots.current[p.originalIdx] ?? el.getBoundingClientRect().top) - el.getBoundingClientRect().top;
        if (Math.abs(dy) > 1) {
          el.style.transition = 'none';
          el.style.transform = `translateY(${dy}px)`;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.style.transition = 'transform 0.6s cubic-bezier(0.2,0.8,0.2,1)';
              el.style.transform = 'translateY(0)';
            });
          });
        }
      });
      snapshots.current = {};
    }
  }, [phase]);

  const medals = ['🥇', '🥈', '🥉'];

  function memberScoreDelta(originalIdx, score) {
    return prevPlayers ? (score - (prevScoreMap[originalIdx] ?? score)) : null;
  }

  return (
    <div style={{
      display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflow:'hidden',
      ...(isOverlay ? { position:'fixed', inset:0, zIndex:200 } : {}),
    }}>

      {/* Header */}
      <div style={{ padding:'clamp(16px,4vw,24px) clamp(20px,5vw,28px) 12px', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, marginBottom:3 }}>{STRINGS.scoreboard.label}</div>
          <div style={{ fontWeight:900, fontSize:'clamp(22px,6vw,28px)', letterSpacing:'-0.025em', lineHeight:1, color:'#1A1A1A' }}>{STRINGS.scoreboard.title}</div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          {totalRounds > 0 && (
            <div style={{
              background:'#fff', borderRadius:100, padding:'5px 12px',
              border:'1px solid rgba(0,0,0,0.08)',
              display:'flex', flexDirection:'column', alignItems:'center',
            }}>
              <span style={{ fontSize:16, fontWeight:900, color:'#1A1A1A', lineHeight:1 }}>{totalRounds}</span>
              <span style={{ fontSize:7, letterSpacing:'0.18em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700 }}>{STRINGS.scoreboard.rounds}</span>
            </div>
          )}
          {isOverlay && (
            <button onClick={onClose} style={{
              width:36, height:36, borderRadius:'50%', background:'rgba(0,0,0,0.07)',
              border:'none', fontSize:20, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center', color:'#1A1A1A', fontFamily:'Nunito',
            }}>×</button>
          )}
        </div>
      </div>

      {/* List */}
      <div style={{ flex:1, minHeight:0, padding:'0 clamp(20px,5vw,28px) 12px', display:'flex', flexDirection:'column', gap: isGroup ? 16 : 8, overflowY:'auto' }}>

        {isGroup ? (
          /* ── GRUP MODU: takımlara göre toplanmış ── */
          teams.map((t, ti) => (
            <div key={t.idx} style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {/* Takım başlığı */}
              <div style={{
                display:'flex', alignItems:'center', gap:10,
                background: SB_GRP_GRADS[t.idx % SB_GRP_GRADS.length],
                borderRadius:16, padding:'10px 16px',
                boxShadow:'0 6px 18px -8px rgba(0,0,0,0.25)',
              }}>
                <div style={{
                  width:32, height:32, borderRadius:'50%', background:'rgba(255,255,255,0.22)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize: ti < 3 ? 17 : 14, fontWeight:900, color:'#fff', lineHeight:1, flexShrink:0,
                }}>
                  {ti < 3 ? medals[ti] : (ti + 1)}
                </div>
                <span style={{
                  flex:1, minWidth:0, fontFamily:'Nunito', fontWeight:900, fontSize:17, color:'#fff',
                  letterSpacing:'-0.02em', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                  textShadow:'0 1px 4px rgba(0,0,0,0.15)',
                }}>{t.name}</span>
                <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:22, color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,0.15)', flexShrink:0 }}>{t.total}</span>
              </div>

              {/* Takım üyeleri */}
              {t.members.map(m => (
                <ScoreCardView
                  key={m.originalIdx}
                  p={m}
                  currentRank={sorted.findIndex(s => s.originalIdx === m.originalIdx)}
                  rankDelta={null}
                  scoreDelta={memberScoreDelta(m.originalIdx, m.score)}
                  showMedal={false}
                  gradOverride={SB_GRP_GRADS[t.idx % SB_GRP_GRADS.length]}
                />
              ))}
            </div>
          ))
        ) : (
          /* ── BİREYSEL MOD ── */
          displayOrder.map((p) => {
            const currentRank = sorted.findIndex(s => s.originalIdx === p.originalIdx);
            const prevRank = prevRankMap[p.originalIdx];
            const scoreDelta = memberScoreDelta(p.originalIdx, p.score);
            const rankDelta = prevSorted ? ((prevRank ?? currentRank) - currentRank) : null;
            return (
              <ScoreCardView
                key={p.originalIdx}
                p={p}
                currentRank={currentRank}
                rankDelta={rankDelta}
                scoreDelta={scoreDelta}
                showMedal={true}
                innerRef={el => { itemRefs.current[p.originalIdx] = el; }}
              />
            );
          })
        )}
      </div>

      {!isOverlay && (
        <div style={{ padding:'12px clamp(20px,5vw,28px) calc(env(safe-area-inset-bottom,0px) + 16px)', flexShrink:0 }}>
          <button
            onClick={onContinue}
            style={{
              width:'100%',
              fontFamily:'Nunito', fontWeight:900, fontSize:15,
              letterSpacing:'0.06em', textTransform:'uppercase',
              padding:'16px 0', borderRadius:100,
              background:'#1A1A1A',
              color:'#fff', border:'none', cursor:'pointer',
              boxShadow:'0 6px 20px -6px rgba(0,0,0,0.3)',
            }}
          >{STRINGS.scoreboard.continueBtn}</button>
        </div>
      )}
    </div>
  );
}
