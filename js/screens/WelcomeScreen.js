function SwipeableSessionCard({ session, index, onContinue, onDelete, formatDate }) {
  const cardRef = React.useRef(null);
  const startX = React.useRef(null);
  const currentOffset = React.useRef(0);
  const isOpen = React.useRef(false);
  const DELETE_WIDTH = 72;

  const totalRounds = session.players.reduce((sum, p) => sum + (p.told || 0), 0);
  const grad = PLAYER_GRADS[index % PLAYER_GRADS.length];

  function setTransform(x, animate) {
    if (!cardRef.current) return;
    cardRef.current.style.transition = animate ? 'transform 0.25s cubic-bezier(0.2,0.8,0.2,1)' : 'none';
    cardRef.current.style.transform = `translateX(${x}px)`;
    currentOffset.current = x;
  }

  function handleTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    if (startX.current === null) return;
    const dx = e.touches[0].clientX - startX.current;
    const base = isOpen.current ? -DELETE_WIDTH : 0;
    const next = Math.min(0, Math.max(-DELETE_WIDTH, base + dx));
    setTransform(next, false);
  }

  function handleTouchEnd() {
    startX.current = null;
    if (currentOffset.current < -DELETE_WIDTH / 2) {
      setTransform(-DELETE_WIDTH, true);
      isOpen.current = true;
    } else {
      setTransform(0, true);
      isOpen.current = false;
    }
  }

  function handleClick() {
    if (isOpen.current) {
      setTransform(0, true);
      isOpen.current = false;
    } else {
      onContinue(session);
    }
  }

  return (
    <div style={{ position:'relative', borderRadius:20, overflow:'hidden', flexShrink:0 }}>
      {/* Delete zone */}
      <div style={{
        position:'absolute', right:0, top:0, bottom:0, width:DELETE_WIDTH,
        background:'#FF3B30', borderRadius:'0 20px 20px 0',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <button
          onClick={() => onDelete(session.id)}
          style={{ background:'none', border:'none', cursor:'pointer', padding:10, display:'flex', alignItems:'center', justifyContent:'center' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M8 5V3h4v2M6 5l1 12h6l1-12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Swipeable card */}
      <div
        ref={cardRef}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          background:'#fff',
          borderRadius:20, padding:'12px 14px',
          display:'flex', alignItems:'center', gap:12,
          cursor:'pointer', userSelect:'none', position:'relative', zIndex:1,
          boxShadow:'0 2px 8px -2px rgba(0,0,0,0.07)',
        }}
      >
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontWeight:900, fontSize:14, color:'#1A1A1A', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {session.name}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:4, marginTop:5 }}>
            {session.players.slice(0, 5).map((_, i) => (
              <div key={i} style={{
                width:24, height:24, borderRadius:'50%',
                background: PLAYER_GRADS[i % PLAYER_GRADS.length],
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:12, lineHeight:1, flexShrink:0,
              }}>
                {PLAYER_ANIMALS[i % PLAYER_ANIMALS.length]}
              </div>
            ))}
            {session.players.length > 5 && (
              <div style={{
                width:24, height:24, borderRadius:'50%', background:'#F0EDE8',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:8, fontWeight:800, color:'#8A8A8A', flexShrink:0,
              }}>+{session.players.length - 5}</div>
            )}
            {totalRounds > 0 && (
              <span style={{ fontSize:10, color:'#B0A8A0', fontWeight:600, marginLeft:2 }}>{totalRounds} tur</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionsArchive({ sessions, onContinue, onDelete, onClose }) {
  function formatDate(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleDateString('tr-TR', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
  }

  return (
    <div style={{ position:'fixed', inset:0, zIndex:200, display:'flex', flexDirection:'column', overflow:'hidden', background:'#FAF7F2' }}>
      {/* Header */}
      <div style={{
        padding:'clamp(14px,4vw,20px) clamp(16px,5vw,24px) 12px',
        flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div>
          <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'#A0A0A0', fontWeight:700, marginBottom:4 }}>{STRINGS.welcome.archiveLabel}</div>
          <div style={{ fontWeight:900, fontSize:'clamp(22px,6vw,28px)', letterSpacing:'-0.025em', lineHeight:1, color:'#1A1A1A' }}>{STRINGS.welcome.archiveTitle}</div>
        </div>
        <button onClick={onClose} style={{
          width:36, height:36, borderRadius:'50%', background:'#fff',
          border:'1px solid rgba(0,0,0,0.08)', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* List */}
      <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'4px clamp(16px,5vw,24px) 32px', display:'flex', flexDirection:'column', gap:10 }}>
        {sessions.length === 0 ? (
          <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, color:'#C8C0B8', paddingTop:60 }}>
            <div style={{ fontSize:44 }}>📂</div>
            <div style={{ fontSize:14, fontWeight:700 }}>{STRINGS.welcome.archiveEmpty}</div>
            <div style={{ fontSize:12, color:'#D0C8C0' }}>{STRINGS.welcome.archiveEmptySub}</div>
          </div>
        ) : sessions.map((s, i) => (
          <SwipeableSessionCard
            key={s.id}
            session={s}
            index={i}
            onContinue={onContinue}
            onDelete={onDelete}
            formatDate={formatDate}
          />
        ))}
        {sessions.length > 0 && (
          <div style={{ textAlign:'center', marginTop:4, fontSize:10, color:'#C8C0B8', fontWeight:600, letterSpacing:'0.08em' }}>
            {STRINGS.welcome.archiveSwipeHint}
          </div>
        )}
      </div>
    </div>
  );
}

var WELCOME_STEPS = [
  { emoji:'📱', grad:'linear-gradient(135deg,#B14AED,#3D5AFE)', shadow:'rgba(100,60,220,0.4)',  anim:'shake-wiggle 1.7s ease-in-out infinite' },
  { emoji:'🎭', grad:'linear-gradient(135deg,#FFC93C,#2ED573)', shadow:'rgba(46,213,115,0.4)',  anim:'bob 2.2s ease-in-out infinite' },
  { emoji:'🔍', grad:'linear-gradient(135deg,#5FB8FF,#B14AED)', shadow:'rgba(100,60,220,0.4)',  anim:'bob 2.2s ease-in-out 0.5s infinite' },
];

function WelcomeScreen({ onStart, onListOpen, sessions, onContinueSession, onDeleteSession }) {
  const [showArchive, setShowArchive] = React.useState(false);

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2', overflowY:'auto' }}>

      {/* Top bar */}
      <div style={{
        padding:'clamp(14px,4vw,20px) clamp(16px,5vw,24px) 0',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0,
      }}>
        <button onClick={() => setShowArchive(true)} style={{
          width:42, height:42, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0, position:'relative',
        }}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <rect x="0" y="0" width="16" height="2.5" rx="1.25" fill="#1A1A1A"/>
            <rect x="0" y="5.5" width="11" height="2.5" rx="1.25" fill="#1A1A1A"/>
            <rect x="0" y="11" width="7" height="2.5" rx="1.25" fill="#1A1A1A"/>
          </svg>
          {sessions && sessions.length > 0 && (
            <div style={{
              position:'absolute', top:8, right:8,
              width:8, height:8, borderRadius:'50%',
              background:'linear-gradient(135deg,#B14AED,#3D5AFE)',
            }}/>
          )}
        </button>

        <button onClick={onListOpen} style={{
          width:42, height:42, borderRadius:'50%', background:'#fff', border:'1px solid rgba(0,0,0,0.08)',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 4px 12px -4px rgba(0,0,0,0.1)', flexShrink:0,
        }}>
          <RainbowRings size={12} />
        </button>
      </div>

      {/* Hero card */}
      <div style={{ padding:'14px clamp(16px,5vw,24px) 0', flexShrink:0 }}>
        <div style={{
          background:'linear-gradient(145deg,#FF6B7A 0%,#FF8C42 40%,#FFC93C 70%,#2ED573 100%)',
          borderRadius:32, padding:'32px 24px 28px',
          display:'flex', flexDirection:'column', alignItems:'center', gap:16,
          boxShadow:'0 20px 56px -12px rgba(255,100,80,0.5)',
          position:'relative', overflow:'hidden',
        }}>
          {/* Decorative blobs */}
          <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, borderRadius:'50%', background:'rgba(0,0,0,0.1)' }}/>
          <div style={{ position:'absolute', bottom:-20, left:-20, width:80, height:80, borderRadius:'50%', background:'rgba(0,0,0,0.07)' }}/>

          <div style={{ fontSize:52, lineHeight:1, zIndex:1 }}>🎭</div>
          <div style={{ textAlign:'center', zIndex:1 }}>
            <div style={{ fontWeight:900, fontSize:'clamp(48px,13vw,62px)', color:'#fff', letterSpacing:'-0.03em', lineHeight:0.88, textShadow:'0 4px 24px rgba(0,0,0,0.2)' }}>Duygu</div>
            <div style={{ fontWeight:900, fontSize:'clamp(26px,7vw,34px)', color:'rgba(255,255,255,0.82)', letterSpacing:'0.28em', lineHeight:1, marginTop:6, paddingLeft:'0.28em' }}>Avı</div>
          </div>
          <div style={{ display:'flex', gap:6, zIndex:1 }}>
            {['😊','😢','😡','😍','😱','🥳','😤'].map((e, i) => (
              <div key={e} style={{
                width:36, height:36, borderRadius:'50%',
                background:'rgba(255,255,255,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:18,
                animation:`bob 2.4s ease-in-out ${i * 0.18}s infinite`,
              }}>{e}</div>
            ))}
          </div>
          <div style={{ fontSize:9, letterSpacing:'0.24em', color:'rgba(255,255,255,0.6)', textTransform:'uppercase', fontWeight:700, zIndex:1 }}>
            {STRINGS.welcome.tagline}
          </div>
        </div>
      </div>

      {/* Oyun akışı — 3 adım görsel özet */}
      <div style={{ padding:'14px clamp(16px,5vw,24px) 0', flexShrink:0 }}>
        <div style={{
          background:'#fff', borderRadius:24, padding:'22px 14px',
          display:'flex', alignItems:'flex-start', justifyContent:'center', gap:'clamp(2px,1.5vw,8px)',
        }}>
          {WELCOME_STEPS.map((st, i) => (
            <React.Fragment key={i}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, width:'clamp(64px,21vw,88px)' }}>
                <div style={{
                  position:'relative',
                  width:'clamp(56px,15vw,68px)', height:'clamp(56px,15vw,68px)', borderRadius:'50%',
                  background:st.grad,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'clamp(26px,7vw,32px)',
                  boxShadow:`0 8px 20px -6px ${st.shadow}`,
                  animation:st.anim,
                }}>
                  {st.emoji}
                  <div style={{
                    position:'absolute', top:-5, left:-5,
                    width:21, height:21, borderRadius:'50%',
                    background:'#1A1A1A', color:'#fff',
                    fontSize:11, fontWeight:900,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    border:'2px solid #fff',
                  }}>{i + 1}</div>
                </div>
                <div style={{ fontWeight:800, fontSize:'clamp(12px,3.5vw,14px)', color:'#1A1A1A' }}>{STRINGS.welcome.steps[i]}</div>
              </div>
              {i < WELCOME_STEPS.length - 1 && (
                <div style={{
                  marginTop:'clamp(18px,5.5vw,26px)',
                  fontSize:'clamp(15px,4.5vw,20px)', color:'#D5D0C8', fontWeight:900, lineHeight:1,
                }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding:'14px clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom, 0px) + 24px)', flexShrink:0, display:'flex', justifyContent:'center' }}>
        <button
          onClick={onStart}
          style={{
            fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(15px,4vw,17px)',
            letterSpacing:'0.06em', textTransform:'uppercase',
            padding:'16px 40px', borderRadius:100,
            background:'#1A1A1A',
            color:'#fff', border:'none', cursor:'pointer',
            boxShadow:'0 8px 24px -6px rgba(0,0,0,0.35)',
          }}
        >
          {sessions && sessions.length > 0 ? STRINGS.welcome.newGame : STRINGS.welcome.continueGame}
        </button>
      </div>

      {showArchive && (
        <SessionsArchive
          sessions={sessions || []}
          onContinue={(s) => { setShowArchive(false); onContinueSession(s); }}
          onDelete={onDeleteSession}
          onClose={() => setShowArchive(false)}
        />
      )}
    </div>
  );
}
