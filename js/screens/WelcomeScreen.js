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

  const hasSessions = sessions && sessions.length > 0;

  return (
    <div style={{
      display:'flex', flexDirection:'column', flex:1, position:'relative', overflow:'hidden',
      background:'linear-gradient(165deg,#FF6B7A 0%,#FF8C42 30%,#FFC93C 56%,#2ED573 88%)',
    }}>
      {/* Dekoratif lekeler */}
      <div style={{ position:'absolute', top:-70, right:-50, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.12)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:-60, left:-50, width:170, height:170, borderRadius:'50%', background:'rgba(0,0,0,0.06)', pointerEvents:'none' }}/>

      {/* Top bar */}
      <div style={{
        padding:'clamp(14px,4vw,20px) clamp(16px,5vw,24px) 0',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, zIndex:1,
      }}>
        <button onClick={() => setShowArchive(true)} style={{
          width:42, height:42, borderRadius:'50%', background:'#fff', border:'none',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 6px 16px -6px rgba(0,0,0,0.3)', flexShrink:0, position:'relative',
        }}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <rect x="0" y="0" width="16" height="2.5" rx="1.25" fill="#1A1A1A"/>
            <rect x="0" y="5.5" width="11" height="2.5" rx="1.25" fill="#1A1A1A"/>
            <rect x="0" y="11" width="7" height="2.5" rx="1.25" fill="#1A1A1A"/>
          </svg>
          {hasSessions && (
            <div style={{
              position:'absolute', top:8, right:8,
              width:8, height:8, borderRadius:'50%',
              background:'linear-gradient(135deg,#B14AED,#3D5AFE)',
            }}/>
          )}
        </button>

        <button onClick={onListOpen} style={{
          width:42, height:42, borderRadius:'50%', background:'#fff', border:'none',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          boxShadow:'0 6px 16px -6px rgba(0,0,0,0.3)', flexShrink:0,
        }}>
          <RainbowRings size={12} />
        </button>
      </div>

      {/* Orta içerik — kartsız, tüm ekran renkli */}
      <div style={{
        flex:1, minHeight:0, overflowY:'auto', zIndex:1,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        gap:'clamp(22px,6vw,34px)', padding:'clamp(16px,5vw,28px) clamp(20px,6vw,32px)',
      }}>
        {/* Başlık */}
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:'clamp(46px,13vw,62px)', lineHeight:1, marginBottom:8 }}>🎭</div>
          <div style={{ fontWeight:900, fontSize:'clamp(52px,15vw,72px)', color:'#fff', letterSpacing:'-0.03em', lineHeight:0.86, textShadow:'0 6px 28px rgba(0,0,0,0.22)' }}>Duygu</div>
          <div style={{ fontWeight:900, fontStyle:'italic', fontSize:'clamp(30px,8.5vw,40px)', color:'rgba(255,255,255,0.92)', letterSpacing:'0.01em', lineHeight:1, marginTop:6, textShadow:'0 4px 18px rgba(0,0,0,0.18)' }}>Avı</div>
        </div>

        {/* Duygu yüzleri */}
        <div style={{ display:'flex', gap:7 }}>
          {['😊','😢','😡','😍','😱','🥳','😤'].map((e, i) => (
            <div key={e} style={{
              width:'clamp(34px,9vw,40px)', height:'clamp(34px,9vw,40px)', borderRadius:'50%',
              background:'rgba(255,255,255,0.22)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'clamp(17px,4.6vw,20px)',
              animation:`bob 2.4s ease-in-out ${i * 0.18}s infinite`,
            }}>{e}</div>
          ))}
        </div>

        {/* 3 adım görsel akış — buzlu cam, kartsız */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center', gap:'clamp(2px,1.5vw,8px)' }}>
          {WELCOME_STEPS.map((st, i) => (
            <React.Fragment key={i}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:11, width:'clamp(74px,23vw,100px)' }}>
                <div style={{
                  position:'relative',
                  width:'clamp(68px,18vw,84px)', height:'clamp(68px,18vw,84px)', borderRadius:'50%',
                  background:'rgba(255,255,255,0.22)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'clamp(32px,8.5vw,40px)',
                  boxShadow:'0 12px 28px -8px rgba(0,0,0,0.28)',
                  animation:st.anim,
                }}>
                  {st.emoji}
                  <div style={{
                    position:'absolute', top:-5, left:-5,
                    width:24, height:24, borderRadius:'50%',
                    background:'#1A1A1A', color:'#fff',
                    fontSize:12, fontWeight:900,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    border:'2px solid #fff',
                  }}>{i + 1}</div>
                </div>
                <div style={{ fontWeight:800, fontSize:'clamp(13px,3.8vw,15px)', color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,0.15)' }}>{i === 0 && IS_IOS ? STRINGS.welcome.stepRotate : STRINGS.welcome.steps[i]}</div>
              </div>
              {i < WELCOME_STEPS.length - 1 && (
                <div style={{
                  marginTop:'clamp(24px,6.5vw,32px)',
                  fontSize:'clamp(16px,5vw,22px)', color:'rgba(255,255,255,0.65)', fontWeight:900, lineHeight:1,
                }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Alt buton */}
      <div style={{ padding:'clamp(12px,3vw,16px) clamp(20px,6vw,32px) calc(env(safe-area-inset-bottom, 0px) + 22px)', flexShrink:0, zIndex:1, display:'flex', justifyContent:'center' }}>
        <button
          onClick={onStart}
          style={{
            width:'100%', maxWidth:360,
            fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(15px,4.2vw,17px)',
            letterSpacing:'0.05em', textTransform:'uppercase',
            padding:'18px 0', borderRadius:100,
            background:'#fff',
            color:'#1A1A1A', border:'none', cursor:'pointer',
            boxShadow:'0 12px 32px -8px rgba(0,0,0,0.35)',
          }}
        >
          {hasSessions ? STRINGS.welcome.newGame : STRINGS.welcome.continueGame}
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
