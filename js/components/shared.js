/* ─── RAINBOW RINGS ─────────────────────────────────────────── */
function RainbowRings({ size = 12 }) {
  return (
    <span style={{
      display:'inline-block', width:size, height:size, borderRadius:'50%',
      background:'#FF4757', flexShrink:0,
      boxShadow:`0 0 0 ${size*0.2}px #FF8C42,0 0 0 ${size*0.4}px #FFC93C,0 0 0 ${size*0.6}px #2ED573,0 0 0 ${size*0.8}px #2E9CFF,0 0 0 ${size*1.0}px #3D5AFE,0 0 0 ${size*1.2}px #B14AED`
    }}/>
  );
}

/* ─── STEP DOTS ─────────────────────────────────────────────── */
function StepDots({ active }) {
  return (
    <div style={{ display:'flex', gap:8, justifyContent:'center', padding:'10px 0 0' }}>
      {[1,2].map(n => (
        <div key={n} style={{
          width:6, height:6, borderRadius:'50%',
          background:'#1A1A1A',
          opacity: active===n ? 1 : 0.18,
          transform: active===n ? 'scale(1.5)' : 'scale(1)',
          transition:'all 0.3s cubic-bezier(0.2,0.8,0.2,1)',
        }}/>
      ))}
    </div>
  );
}

/* ─── DECK VISUAL ───────────────────────────────────────────── */
function DeckVisual({ icon, label, sub, onClick, playerGrad }) {
  const [hovered, setHovered] = React.useState(false);
  const iconBg = playerGrad || 'linear-gradient(135deg,#B14AED,#3D5AFE)';
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position:'relative', width:'min(280px, 72vw)', aspectRatio:'5/7', cursor:'pointer', userSelect:'none' }}
    >
      {[
        { r:-6, tx:-10, ty:6, op:0.45 },
        { r: 4, tx:  8, ty:3, op:0.65 },
      ].map((c,i) => (
        <div key={i} style={{
          position:'absolute', inset:0, borderRadius:20,
          background:'#fff', border:'1px solid rgba(0,0,0,0.07)',
          transform:`rotate(${c.r}deg) translate(${c.tx}px,${c.ty}px)`,
          opacity:c.op,
        }}/>
      ))}
      <div style={{
        position:'absolute', inset:0, borderRadius:20,
        background:'#fff', border:'1px solid rgba(0,0,0,0.06)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14,
        boxShadow:'0 24px 48px -16px rgba(0,0,0,0.14)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition:'transform 0.3s cubic-bezier(0.2,0.8,0.2,1)',
      }}>
        <div style={{
          width:56, height:56, borderRadius:'50%', background:iconBg, color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, fontWeight:900,
          boxShadow:'0 8px 20px -6px rgba(0,0,0,0.25)',
        }}>{icon}</div>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontWeight:900, fontSize:'clamp(16px,4vw,20px)', color:'#1A1A1A', lineHeight:1.1 }}>{label}</div>
          <div style={{ fontSize:9, letterSpacing:'0.25em', color:'#A0A0A0', textTransform:'uppercase', marginTop:8 }}>{sub}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── ICON CHANGE BTN ───────────────────────────────────────── */
function IconChangeBtn({ onClick, onMouseDown, onTouchStart, style, accentGrad, accentText, invertPress }) {
  const [hov, setHov] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const hasAccent = !!accentGrad;
  const bg  = hasAccent ? accentGrad : '#fff';
  const col = hasAccent ? (accentText || '#fff') : '#5A5A5A';
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setPressed(false); }}
      onMouseDown={e => { setPressed(true); onMouseDown && onMouseDown(e); }}
      onMouseUp={() => setPressed(false)}
      onTouchStart={e => { setPressed(true); onTouchStart && onTouchStart(e); }}
      onTouchEnd={() => setPressed(false)}
      style={{
        width:28, height:28, borderRadius:'50%', flexShrink:0,
        background: bg,
        border: hasAccent ? 'none' : '1px solid rgba(0,0,0,0.1)',
        display:'flex', alignItems:'center', justifyContent:'center',
        cursor:'pointer', color: col,
        boxShadow: hov ? '0 4px 12px -4px rgba(0,0,0,0.22)' : '0 2px 6px -3px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.2s',
        transform: pressed ? 'scale(0.82)' : hov ? 'scale(1.08)' : 'scale(1)',
        fontSize:13, lineHeight:1,
        ...style,
      }}
    >↻</button>
  );
}

/* ─── EMOTION CARD ──────────────────────────────────────────── */
function EmotionCard({ emotion, group, onShown, animKey, onRedraw }) {
  const [revealed, setRevealed] = React.useState(true);
  const [entered, setEntered] = React.useState(false);
  React.useEffect(() => {
    setEntered(false); setRevealed(true);
    const t = setTimeout(() => { setEntered(true); if (onShown) onShown(); }, 60);
    return () => clearTimeout(t);
  }, [animKey]);
  const fontSize = emotion.length > 10 ? 'clamp(24px,7vw,34px)' : emotion.length > 7 ? 'clamp(30px,9vw,42px)' : 'clamp(36px,11vw,52px)';

  return (
    <div
      onClick={() => setRevealed(r => !r)}
      style={{
        width:'min(280px, 72vw)', aspectRatio:'5/7', borderRadius:24,
        background:group.grad,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        position:'relative', overflow:'hidden',
        boxShadow:'0 32px 64px -24px rgba(0,0,0,0.3)',
        userSelect:'none', cursor:'pointer',
        transform: entered ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
        opacity: entered ? 1 : 0,
        transition:'transform 0.5s cubic-bezier(0.2,0.8,0.2,1), opacity 0.5s',
      }}
    >
      <div style={{
        color:group.text, fontWeight:900, fontSize, lineHeight:1, textAlign:'center', padding:'0 20px',
        filter: revealed ? 'blur(0)' : 'blur(20px)',
        transition: revealed ? 'filter 0.18s ease-out' : 'filter 0.45s ease-in-out',
      }}>{emotion}</div>

      <div style={{
        position:'absolute', inset:0,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10,
        opacity: revealed ? 0 : 1, transition:'opacity 0.2s', pointerEvents:'none',
      }}>
        <div style={{
          width:40, height:40, borderRadius:'50%',
          border:`1.5px solid ${group.text==='white'?'rgba(255,255,255,0.8)':'rgba(58,42,0,0.6)'}`,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <div style={{ width:11, height:11, borderRadius:'50%', background:group.text==='white'?'rgba(255,255,255,0.8)':'rgba(58,42,0,0.6)' }}/>
        </div>
        <div style={{
          fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', textAlign:'center', lineHeight:1.5,
          color:group.text==='white'?'rgba(255,255,255,0.85)':'rgba(58,42,0,0.65)',
        }}>Görmek için<br/>dokun</div>
      </div>

      {onRedraw && (
        <IconChangeBtn
          onClick={e => { e.stopPropagation(); onRedraw(); }}
          onMouseDown={e => e.stopPropagation()}
          onTouchStart={e => { e.stopPropagation(); }}
          style={{ position:'absolute', top:14, right:14 }}
        />
      )}
    </div>
  );
}

/* ─── MINI CHIP ─────────────────────────────────────────────── */
function MiniChip({ emotion, group }) {
  const [revealed, setRevealed] = React.useState(false);
  React.useEffect(() => { setRevealed(false); }, [emotion]);
  return (
    <div
      onClick={() => setRevealed(r => !r)}
      style={{
        borderRadius:20, overflow:'hidden',
        width:'min(280px, 72vw)',
        cursor:'pointer', userSelect:'none',
        boxShadow:`0 2px 8px -4px rgba(0,0,0,0.14)`,
      }}
    >
      <div style={{
        display:'flex', alignItems:'center', gap:12,
        padding:'12px 18px',
        background: group.grad,
        filter: revealed ? 'blur(0)' : 'blur(5px)',
        transition: revealed ? 'filter 0.18s ease-out' : 'filter 0.45s ease-in-out',
        willChange:'filter',
      }}>
        <div style={{
          width:40, height:40, borderRadius:'50%', background:'rgba(255,255,255,0.25)', flexShrink:0,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <div style={{ width:17, height:17, borderRadius:'50%', background:'rgba(255,255,255,0.6)' }}/>
        </div>
        <span style={{
          fontWeight:900, fontStyle:'italic', fontSize:20, color: group.text,
          letterSpacing:'-0.01em', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          userSelect:'none',
        }}>{emotion}</span>
      </div>
    </div>
  );
}

/* ─── SCENE CARD ────────────────────────────────────────────── */
function SceneCard({ scene, animKey, displayNum, onChangeScene, onChangeEmotion, group, dark, emotion }) {
  const [entered, setEntered] = React.useState(false);
  React.useEffect(() => {
    setEntered(false);
    const t = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, [animKey]);
  const emoFont = emotion && emotion.length > 12 ? 'clamp(24px,6.5vw,31px)'
    : emotion && emotion.length > 8 ? 'clamp(28px,7.5vw,37px)'
    : 'clamp(32px,9vw,44px)';

  // Beyaz alan: sahne metnine göre dinamik tipografi (duygu bandı sabit kalır)
  const bodyLen = (scene && scene.body) ? scene.body.length : 0;
  const tier = bodyLen <= 35 ? 0 : bodyLen <= 60 ? 1 : bodyLen <= 95 ? 2 : 3;
  const bodyFont   = ['clamp(22px,6.4vw,28px)','clamp(19px,5.4vw,24px)','clamp(16px,4.6vw,20px)','clamp(13.5px,4vw,16.5px)'][tier];
  const bodyLH     = [1.42, 1.36, 1.3, 1.26][tier];
  const contentGap = ['clamp(15px,3.8vw,20px)','clamp(12px,3vw,15px)','clamp(9px,2.3vw,12px)','clamp(7px,1.8vw,9px)'][tier];
  const qFont      = ['clamp(16px,5vw,20px)','clamp(15px,4.5vw,18px)','clamp(14px,4.1vw,16px)','clamp(13px,3.7vw,14.5px)'][tier];
  const qLH        = [1.5, 1.44, 1.38, 1.34][tier];

  // Soru aynen kalır — sesli okunduğu için duygu adı yazılmaz (gizli kalsın).
  const questionText = (scene && scene.question) ? scene.question : '';
  return (
    <div style={{
      width:'min(280px, 72vw)', aspectRatio:'5/8.4',
      borderRadius:24, flexShrink:0,
      background: dark ? '#1A1A1A' : '#fff',
      boxShadow:'0 48px 96px -24px rgba(0,0,0,0.32), 0 16px 32px -12px rgba(0,0,0,0.12)',
      display:'flex', flexDirection:'column',
      position:'relative', overflow:'hidden',
      transform: entered ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.95)',
      opacity: entered ? 1 : 0,
      transition:'transform 0.5s cubic-bezier(0.2,0.8,0.2,1), opacity 0.5s',
    }}>
      {/* ÜST band: duygu kartı — görünür, sola hizalı, sabit yükseklik */}
      <div style={{
        flex:'0 0 auto', position:'relative',
        height:'clamp(104px,25vw,128px)',
        background: group ? group.grad : '#F7F4EE',
        padding:'0 clamp(22px,6vw,30px)',
        borderRadius:'24px 24px 0 0',
        display:'flex', alignItems:'center', justifyContent:'flex-start',
      }}>
        <span style={{
          fontWeight:900,
          fontSize: emoFont, lineHeight:1.15,
          letterSpacing:'-0.01em',
          color: group ? group.text : '#1A1A1A',
          wordBreak:'break-word', textAlign:'left',
        }}>{emotion}</span>
        {onChangeEmotion && (
          <IconChangeBtn
            onClick={onChangeEmotion}
            style={{ position:'absolute', top:'clamp(10px,2.5vw,14px)', right:'clamp(10px,2.5vw,14px)' }}
          />
        )}
      </div>

      <div style={{
        margin:'0 clamp(22px,6vw,30px)',
        height:1,
        background: dark ? 'rgba(0,0,0,0.07)' : 'rgba(0,0,0,0.08)',
        flex:'0 0 auto',
      }}/>

      {/* ALT beyaz alan: sahne metni + soru */}
      <div style={{
        flex:1, position:'relative', minHeight:0, overflow:'hidden',
        padding:'clamp(20px,4.5vw,26px) clamp(22px,6vw,30px) clamp(12px,3vw,16px)',
        display:'flex', flexDirection:'column',
      }}>
        <div style={{
          position:'absolute', top:'clamp(12px,3vw,16px)', left:'clamp(16px,4vw,22px)',
          fontSize:8, letterSpacing:'0.28em', color: dark ? 'rgba(255,255,255,0.2)' : '#D0D0D0', textTransform:'uppercase', fontWeight:700,
        }}>
          №{String(displayNum).padStart(2,'0')}
        </div>

        {/* Ana içerik — dikey ortalı */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:contentGap }}>
          {/* Birincil okuma: sahne anlatısı */}
          <p style={{
            fontSize:bodyFont,
            lineHeight:bodyLH,
            color: dark ? '#fff' : '#1A1A1A',
            fontWeight:700,
            margin:0,
            letterSpacing:'-0.015em',
          }}>
            {scene.body}
          </p>
          {/* Renk kodlu ayraç — sahneden soruya geçiş */}
          <div style={{
            width:30, height:3, borderRadius:3, flexShrink:0,
            background: group ? group.grad : (dark ? 'rgba(255,255,255,0.25)' : '#E2DED6'),
            opacity:0.9,
          }}/>
          {/* İkincil okuma: yansıtma sorusu */}
          <p style={{
            fontWeight:600,
            fontStyle:'italic',
            fontSize:qFont,
            lineHeight:qLH,
            letterSpacing:'0',
            color: dark ? 'rgba(255,255,255,0.62)' : '#7C7C7C',
            margin:0,
          }}>
            {questionText}
          </p>
        </div>

        {/* Alt satır: renk noktaları (sol) + sahne ↻ (sağ, üstteki ↻ ile aynı sağ kenar) */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10, marginTop:'clamp(8px,2vw,12px)', marginRight:'calc(clamp(10px,2.5vw,14px) - clamp(22px,6vw,30px))', flexShrink:0 }}>
          <div style={{ display:'flex', gap:7, alignItems:'center' }}>
            {scene.groups && scene.groups.map(key => {
              const g = (typeof GROUPS !== 'undefined') && GROUPS.find(x => x.key === key);
              if (!g) return null;
              const active = group && key === group.key;
              return <span key={key} style={{
                width: active ? 15 : 11, height: active ? 15 : 11,
                borderRadius:'50%', background:g.grad, flexShrink:0,
                boxShadow: active
                  ? `0 0 0 2px ${dark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.08)'}, 0 1px 3px rgba(0,0,0,0.22)`
                  : '0 1px 2px rgba(0,0,0,0.12)',
                transition:'all 0.2s',
              }}/>;
            })}
          </div>
          {onChangeScene && (
            <IconChangeBtn
              onClick={onChangeScene}
              accentGrad={group && group.grad}
              accentText={dark ? '#1A1A1A' : (group && group.text)}
              invertPress={dark}
              style={{ flexShrink:0 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── BTN ───────────────────────────────────────────────────── */
function Btn({ children, onClick, ghost, disabled }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily:'Nunito', fontWeight:900, cursor: disabled ? 'default' : 'pointer',
        fontSize:15, letterSpacing:'0.06em', textTransform:'uppercase',
        padding:'16px 28px', borderRadius:100,
        background: disabled ? '#E8E6E1' : ghost ? 'transparent' : '#1A1A1A',
        color: disabled ? '#B0A898' : ghost ? '#5A5A5A' : '#fff',
        border: ghost ? '1px solid rgba(0,0,0,0.13)' : 'none',
        transform: (!disabled && hov) ? 'translateY(-2px)' : 'translateY(0)',
        transition:'transform 0.2s, box-shadow 0.2s',
        boxShadow: (!disabled && hov && !ghost) ? '0 8px 20px -6px rgba(0,0,0,0.35)' : 'none',
      }}
    >{children}</button>
  );
}

/* ─── AGE TOGGLE ────────────────────────────────────────────── */
function AgeToggle({ isYouth, onChange }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10,
      background:'#fff', borderRadius:100,
      padding:'6px 14px 6px 10px',
      border:'1px solid rgba(0,0,0,0.08)',
      boxShadow:'0 2px 8px -3px rgba(0,0,0,0.1)',
      cursor:'pointer', userSelect:'none',
    }} onClick={() => onChange(!isYouth)}>
      <div style={{
        position:'relative', width:36, height:20, borderRadius:100,
        background: isYouth ? '#3D5AFE' : '#1A1A1A',
        transition:'background 0.25s',
        flexShrink:0,
      }}>
        <div style={{
          position:'absolute', top:3, left: isYouth ? 19 : 3,
          width:14, height:14, borderRadius:'50%', background:'#fff',
          transition:'left 0.25s cubic-bezier(0.2,0.8,0.2,1)',
          boxShadow:'0 1px 4px rgba(0,0,0,0.2)',
        }}/>
      </div>
      <span style={{
        fontSize:11, fontWeight:800, letterSpacing:'0.08em',
        color: isYouth ? '#3D5AFE' : '#1A1A1A',
        transition:'color 0.25s',
      }}>{isYouth ? STRINGS.scene.ageYouth : STRINGS.scene.ageAdult}</span>
    </div>
  );
}

/* ─── TURN HEADER (shared by EmotionScreen + SceneScreen) ───── */
function TurnHeader({ playerName, playerGrad, playerAnimal, onScoreOpen, onListOpen, onHome }) {
  return (
    <div style={{ padding:'clamp(10px,3vw,14px) clamp(16px,5vw,24px) 0', display:'flex', alignItems:'center', justifyContent:'space-between', position:'relative' }}>
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

      {playerName && (
        <div style={{
          position:'absolute', left:'50%', transform:'translateX(-50%)',
          display:'inline-flex', alignItems:'center', gap:8,
          background: playerGrad, borderRadius:16, padding:'8px 14px 8px 10px',
          boxShadow:'0 4px 14px -4px rgba(0,0,0,0.25)',
          maxWidth:'55%',
        }}>
          <span style={{ fontSize:20, lineHeight:1, flexShrink:0 }}>{playerAnimal}</span>
          <span style={{ fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(14px,4vw,17px)', letterSpacing:'-0.01em', color:'#fff', textShadow:'0 1px 3px rgba(0,0,0,0.15)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{playerName}</span>
        </div>
      )}

      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
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
  );
}
