function ModeSelectScreen({ onSelect, onBack }) {
  const [pressed, setPressed] = React.useState(null);

  function handleSelect(value) {
    setPressed(value);
    setTimeout(() => onSelect(value), 140);
  }

  const options = [
    {
      value: 'group',
      emoji: '👥',
      title: 'Grup',
      desc: 'Takımlar birbirine karşı',
      grad: 'linear-gradient(145deg,#FF6B7A,#FF8C42)',
      shadow: 'rgba(255,107,122,0.5)',
      glow: '#FF6B7A',
    },
    {
      value: 'solo',
      emoji: '🧑',
      title: 'Bireysel',
      desc: 'Herkes kendine oynar',
      grad: 'linear-gradient(145deg,#3D5AFE,#B14AED)',
      shadow: 'rgba(61,90,254,0.5)',
      glow: '#B14AED',
    },
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      position: 'relative', overflow: 'hidden',
      background: '#FAF7F2',
    }}>
      {/* Arka plan renk lekeleri */}
      <div style={{ position:'absolute', top:-90, right:-60, width:280, height:280, borderRadius:'50%', background:'linear-gradient(135deg,#FF6B7A,#FF8C42)', opacity:0.13, pointerEvents:'none', filter:'blur(2px)' }} />
      <div style={{ position:'absolute', bottom:-80, left:-60, width:240, height:240, borderRadius:'50%', background:'linear-gradient(135deg,#3D5AFE,#B14AED)', opacity:0.13, pointerEvents:'none', filter:'blur(2px)' }} />

      {/* Top bar */}
      <div style={{
        padding: 'clamp(14px,4vw,20px) clamp(16px,5vw,24px) 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0, zIndex: 1,
      }}>
        <button
          onClick={onBack}
          style={{
            width: 42, height: 42, borderRadius: '50%',
            background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.12)',
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M7 1L1 7l6 6M1 7h16" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 24, height: 6, borderRadius: 3, background: '#1A1A1A' }} />
          <div style={{ width: 6, height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.2)' }} />
        </div>

        <div style={{ width: 42 }} />
      </div>

      {/* Orta içerik */}
      <div style={{
        flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(20px,5vw,36px) clamp(20px,6vw,32px)',
        gap: 'clamp(28px,7vw,40px)', zIndex: 1,
      }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A0A0A0', fontWeight: 800, marginBottom: 10 }}>
            NASIL OYNUYORSUNUZ?
          </div>
          <div style={{ fontWeight: 900, fontSize: 'clamp(34px,9.5vw,48px)', color: '#1A1A1A', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Oyun Modu
          </div>
        </div>

        {/* Seçim kartları */}
        <div style={{ display: 'flex', gap: 'clamp(12px,4vw,18px)', width: '100%', maxWidth: 340 }}>
          {options.map(opt => {
            const isPressed = pressed === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                style={{
                  flex: 1, border: 'none', cursor: 'pointer',
                  borderRadius: 28,
                  padding: 'clamp(28px,7.5vw,42px) 8px clamp(24px,6.5vw,36px)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                  background: opt.grad,
                  boxShadow: isPressed
                    ? `0 6px 16px -6px ${opt.shadow}`
                    : `0 24px 52px -12px ${opt.shadow}`,
                  transform: isPressed ? 'scale(0.93)' : 'scale(1)',
                  transition: 'transform 0.13s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.13s',
                }}
              >
                <div style={{
                  fontSize: 'clamp(52px,14vw,66px)', lineHeight: 1,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.22))',
                  animation: `bob 2.4s ease-in-out ${opt.value === 'group' ? '0s' : '0.5s'} infinite`,
                }}>
                  {opt.emoji}
                </div>
                <div style={{
                  fontWeight: 900, fontSize: 'clamp(20px,5.5vw,24px)', color: '#fff',
                  letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.18)',
                }}>
                  {opt.title}
                </div>
                <div style={{
                  fontSize: 'clamp(10px,2.8vw,12px)', color: 'rgba(255,255,255,0.82)',
                  fontWeight: 700, textAlign: 'center', lineHeight: 1.4,
                }}>
                  {opt.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
