
/* ─── Tutorial görsel parçaları ───────────────────────────────── */
function TBubble({ size, fs, children, style }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:'50%',
      background:'rgba(255,255,255,0.22)', flexShrink:0,
      display:'flex', alignItems:'center', justifyContent:'center', fontSize:fs,
      boxShadow:'0 12px 34px -10px rgba(0,0,0,0.2)',
      ...style,
    }}>{children}</div>
  );
}

function TArrow() {
  return <span style={{ fontSize:'clamp(22px,6vw,30px)', color:'rgba(255,255,255,0.75)', fontWeight:900, lineHeight:1 }}>→</span>;
}

function TPill({ children }) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.2)', borderRadius:100,
      padding:'8px 15px', fontSize:'clamp(12px,3.4vw,14px)', fontWeight:800, color:'#fff',
      letterSpacing:'0.01em', display:'inline-flex', alignItems:'center', gap:6,
    }}>{children}</div>
  );
}

// Konuşma grafiği — çizilmiş konuşma baloncuğu (emoji değil)
function SpeechGraphic({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 46" fill="none" style={{ display:'block' }}>
      <rect x="4" y="4" width="40" height="28" rx="9" fill="#fff"/>
      <path d="M15 29 L12.5 43 L27 29 Z" fill="#fff"/>
      <line x1="13" y1="14" x2="35" y2="14" stroke="#1DB954" strokeWidth="3.6" strokeLinecap="round"/>
      <line x1="13" y1="22" x2="29" y2="22" stroke="#1DB954" strokeWidth="3.6" strokeLinecap="round"/>
    </svg>
  );
}

// Her adımın görsel anlatımı (metin yerine ikon/grafik)
function SlideVisual({ index }) {
  if (index === 0) {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
        <TBubble size={'clamp(112px,30vw,132px)'} fs={'clamp(54px,15vw,64px)'}>🎭</TBubble>
        <div style={{ display:'flex', gap:8 }}>
          {['😊','😢','😡','😍','😱'].map(e => (
            <TBubble key={e} size={'clamp(36px,9.5vw,42px)'} fs={'clamp(18px,5vw,21px)'}>{e}</TBubble>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div style={{ display:'flex', alignItems:'center', gap:'clamp(8px,3vw,16px)' }}>
        <TBubble size={'clamp(86px,23vw,104px)'} fs={'clamp(40px,11vw,50px)'}
          style={{ animation:'shake-wiggle 1.5s ease-in-out infinite' }}>📱</TBubble>
        <TArrow />
        <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
          {/* duygu chip */}
          <div style={{ display:'flex', alignItems:'center', gap:9, background:'rgba(255,255,255,0.92)', borderRadius:13, padding:'9px 13px', boxShadow:'0 8px 22px -8px rgba(0,0,0,0.25)' }}>
            <span style={{ fontSize:19, lineHeight:1 }}>🎭</span>
            <span style={{ width:38, height:7, borderRadius:4, background:'linear-gradient(90deg,#FF6B7A,#FFC93C)' }}/>
          </div>
          {/* sahne card */}
          <div style={{ display:'flex', alignItems:'center', gap:9, background:'rgba(255,255,255,0.92)', borderRadius:13, padding:'9px 13px', boxShadow:'0 8px 22px -8px rgba(0,0,0,0.25)' }}>
            <span style={{ fontSize:19, lineHeight:1 }}>🎬</span>
            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
              <span style={{ width:48, height:4, borderRadius:2, background:'rgba(0,0,0,0.2)' }}/>
              <span style={{ width:32, height:4, borderRadius:2, background:'rgba(0,0,0,0.12)' }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
        <div style={{ display:'flex', alignItems:'center', gap:'clamp(8px,3vw,14px)' }}>
          <TBubble size={'clamp(84px,22vw,100px)'}>
            <SpeechGraphic size={'clamp(42px,11vw,52px)'} />
          </TBubble>
          <span style={{ fontSize:'clamp(22px,6vw,30px)', color:'rgba(255,255,255,0.75)', fontWeight:900, lineHeight:1 }}>+</span>
          <TBubble size={'clamp(84px,22vw,100px)'} fs={'clamp(38px,10vw,46px)'}>🎭</TBubble>
        </div>
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', justifyContent:'center' }}>
          {STRINGS.tutorial.slides[index].pills.map(p => <TPill key={p}>{p}</TPill>)}
        </div>
      </div>
    );
  }

  // index 3 — tahmin
  return (
    <div style={{ position:'relative', width:'clamp(120px,32vw,140px)', height:'clamp(104px,28vw,124px)', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <TBubble size={'clamp(104px,28vw,124px)'} fs={'clamp(46px,12vw,56px)'}>🔍</TBubble>
      <TBubble size={'clamp(40px,10vw,46px)'} fs={'clamp(20px,5.5vw,24px)'}
        style={{ position:'absolute', top:-4, right:-6, animation:'bob 2s ease-in-out infinite' }}>😊</TBubble>
      <TBubble size={'clamp(36px,9vw,42px)'} fs={'clamp(18px,5vw,22px)'}
        style={{ position:'absolute', bottom:-2, left:-8, animation:'bob 2.3s ease-in-out 0.4s infinite' }}>😡</TBubble>
    </div>
  );
}

function TutorialScreen({ onDone }) {
  const [slide, setSlide] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null);

  const total = STRINGS.tutorial.slides.length;
  const s = STRINGS.tutorial.slides[slide];
  const isLast = slide === total - 1;

  function goTo(idx) {
    if (idx < 0 || idx >= total) return;
    setSlide(idx);
    setAnimKey(k => k + 1);
  }

  function handleTouchStart(e) { setTouchStart(e.touches[0].clientX); }
  function handleTouchEnd(e) {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) goTo(diff > 0 ? slide + 1 : slide - 1);
    setTouchStart(null);
  }

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', flex: 1,
        background: s.grad,
        transition: 'background 0.5s cubic-bezier(0.2,0.8,0.2,1)',
        userSelect: 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Skip */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px 0', flexShrink: 0 }}>
        {!isLast && (
          <button onClick={onDone} style={{
            fontFamily: 'Nunito', fontWeight: 700, fontSize: 13,
            color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.15)',
            border: 'none', borderRadius: 100, padding: '6px 14px', cursor: 'pointer',
            letterSpacing: '0.04em',
          }}>{STRINGS.tutorial.skip}</button>
        )}
      </div>

      {/* Content */}
      <div
        key={animKey}
        className="enter"
        style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 clamp(24px,7vw,40px)',
          gap: 20,
        }}
      >
        {/* Tag */}
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.26em',
          color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase',
        }}>{s.tag}</div>

        {/* Görsel anlatım */}
        <SlideVisual index={slide} />

        {/* Title */}
        <div style={{
          fontWeight: 900, fontSize: 'clamp(34px,10vw,46px)',
          color: '#fff', letterSpacing: '-0.03em', lineHeight: 1,
          textAlign: 'center', textShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}>{s.title}</div>

        {/* Kısa caption */}
        {s.caption && (
          <div style={{
            fontSize: 'clamp(15px,4.2vw,18px)', fontWeight: 700,
            color: 'rgba(255,255,255,0.9)', lineHeight: 1.4,
            textAlign: 'center',
          }}>{s.caption}</div>
        )}

        {/* Scoring (last slide) */}
        {s.scoring && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 280 }}>
            {s.scoring.map(([icon, label, pts]) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.15)', borderRadius: 16,
                padding: '12px 16px',
              }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ flex: 1, fontWeight: 700, fontSize: 14, color: '#fff' }}>{label}</span>
                <span style={{
                  fontWeight: 900, fontSize: 15, color: '#fff',
                  background: 'rgba(255,255,255,0.2)', borderRadius: 100,
                  padding: '2px 12px',
                }}>{pts}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{
        padding: '20px clamp(24px,7vw,40px) calc(env(safe-area-inset-bottom,0px) + 28px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, flexShrink: 0,
      }}>
        {/* Dots */}
        <div style={{ display: 'flex', gap: 6 }}>
          {STRINGS.tutorial.slides.map((_, i) => (
            <div key={i} onClick={() => goTo(i)} style={{
              width: i === slide ? 20 : 7, height: 7, borderRadius: 100,
              background: i === slide ? '#fff' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
              cursor: 'pointer',
            }} />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => isLast ? onDone() : goTo(slide + 1)}
          style={{
            width: '100%', maxWidth: 320, height: 54,
            fontFamily: 'Nunito', fontWeight: 900, fontSize: 16,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            background: '#fff', borderRadius: 100, border: 'none', cursor: 'pointer',
            color: '#1A1A1A',
            boxShadow: `0 8px 28px -6px ${s.shadow}`,
            transition: 'box-shadow 0.3s',
          }}
        >
          {isLast ? STRINGS.tutorial.play : STRINGS.tutorial.next}
        </button>
      </div>
    </div>
  );
}
