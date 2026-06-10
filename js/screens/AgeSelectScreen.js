function AgeSelectScreen({ onSelect, onBack }) {
  const [pressed, setPressed] = React.useState(null);

  function handleSelect(value) {
    setPressed(value);
    setTimeout(() => onSelect(value), 150);
  }

  const options = [
    {
      value: 'adult',
      emoji: '🎯',
      title: 'Yetişkin',
      desc: 'Yetişkin sahneler',
      grad: 'linear-gradient(145deg,#FF6B7A,#E63946)',
      shadow: 'rgba(230,57,70,0.45)',
      textColor: '#fff',
    },
    {
      value: 'mixed',
      emoji: '🎭',
      title: 'Karma',
      desc: 'Kişiye özel mod',
      grad: 'linear-gradient(145deg,#FFC93C,#FF8C42)',
      shadow: 'rgba(255,140,66,0.45)',
      textColor: '#fff',
    },
    {
      value: 'youth',
      emoji: '⭐',
      title: 'Genç',
      desc: 'Herkese uygun',
      grad: 'linear-gradient(145deg,#3D5AFE,#B14AED)',
      shadow: 'rgba(61,90,254,0.45)',
      textColor: '#fff',
    },
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      position: 'relative', overflow: 'hidden',
      background: '#FAF7F2',
    }}>
      {/* Arka plan renk lekeleri */}
      <div style={{ position:'absolute', top:-80, right:-60, width:260, height:260, borderRadius:'50%', background:'linear-gradient(135deg,#FF6B7A,#FFC93C)', opacity:0.12, pointerEvents:'none', filter:'blur(2px)' }} />
      <div style={{ position:'absolute', bottom:-80, left:-60, width:240, height:240, borderRadius:'50%', background:'linear-gradient(135deg,#3D5AFE,#B14AED)', opacity:0.12, pointerEvents:'none', filter:'blur(2px)' }} />

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
          <div style={{ width: 6, height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.2)' }} />
          <div style={{ width: 24, height: 6, borderRadius: 3, background: '#1A1A1A' }} />
        </div>

        <div style={{ width: 42 }} />
      </div>

      {/* İçerik */}
      <div style={{
        flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px,4vw,28px) clamp(20px,6vw,32px)',
        gap: 'clamp(24px,6vw,36px)', zIndex: 1,
      }}>
        {/* Başlık */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A0A0A0', fontWeight: 800, marginBottom: 10 }}>
            KİM OYNUYOR?
          </div>
          <div style={{ fontWeight: 900, fontSize: 'clamp(34px,9.5vw,48px)', color: '#1A1A1A', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Yaş Grubu
          </div>
        </div>

        {/* 3 renkli kart */}
        <div style={{ display: 'flex', gap: 'clamp(10px,3vw,16px)', width: '100%', maxWidth: 380 }}>
          {options.map(opt => {
            const isPressed = pressed === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                style={{
                  flex: 1, border: 'none', cursor: 'pointer',
                  borderRadius: 28,
                  padding: 'clamp(20px,5.5vw,32px) 6px clamp(18px,5vw,28px)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  background: opt.grad,
                  boxShadow: isPressed
                    ? `0 4px 12px -4px ${opt.shadow}`
                    : `0 20px 48px -12px ${opt.shadow}`,
                  transform: isPressed ? 'scale(0.94)' : 'scale(1)',
                  transition: 'transform 0.14s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.14s',
                }}
              >
                <div style={{
                  fontSize: 'clamp(38px,10.5vw,52px)', lineHeight: 1,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  animation: `bob 2.2s ease-in-out ${opt.value === 'adult' ? '0s' : opt.value === 'mixed' ? '0.4s' : '0.8s'} infinite`,
                }}>
                  {opt.emoji}
                </div>
                <div style={{
                  fontWeight: 900, fontSize: 'clamp(15px,4.2vw,18px)', color: opt.textColor,
                  letterSpacing: '-0.02em', textAlign: 'center',
                  textShadow: '0 1px 4px rgba(0,0,0,0.15)',
                }}>
                  {opt.title}
                </div>
                <div style={{
                  fontSize: 'clamp(9px,2.5vw,11px)', color: 'rgba(255,255,255,0.82)',
                  fontWeight: 700, textAlign: 'center', lineHeight: 1.3,
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
