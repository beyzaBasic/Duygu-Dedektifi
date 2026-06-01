
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
        {/* Emoji bubble */}
        <div style={{
          width: 'clamp(96px,26vw,120px)', height: 'clamp(96px,26vw,120px)',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(44px,12vw,56px)',
          boxShadow: `0 12px 40px -8px ${s.shadow}`,
        }}>{s.emoji}</div>

        {/* Tag */}
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.26em',
          color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase',
        }}>{s.tag}</div>

        {/* Title */}
        <div style={{
          fontWeight: 900, fontSize: 'clamp(30px,8vw,38px)',
          color: '#fff', letterSpacing: '-0.03em', lineHeight: 1,
          textAlign: 'center', textShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}>{s.title}</div>

        {/* Body */}
        <div style={{
          fontSize: 'clamp(15px,4vw,17px)', fontWeight: 500,
          color: 'rgba(255,255,255,0.88)', lineHeight: 1.6,
          textAlign: 'center', maxWidth: 300,
          whiteSpace: 'pre-line',
        }}>{s.body}</div>

        {/* Hint pill */}
        {s.hint && (
          <div style={{
            background: 'rgba(255,255,255,0.18)', borderRadius: 100,
            padding: '6px 16px', fontSize: 12, fontWeight: 700,
            color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em',
          }}>✦ {s.hint}</div>
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
                  padding: '2px 10px',
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
