/* ─── TURN SCREEN ───────────────────────────────────────────────
   Duygu + sahne tek ekranda. Telefon sallanınca (veya dokununca)
   oyunda daha önce çıkmamış bir sahne + ona uygun bir duygu çekilir. */

var ALL_EMOTIONS = GROUPS.flatMap(g => g.emotions.map(e => ({ emotion: e, group: g })));

// Hareket izni — bir kez verilince oturum boyu hatırlanır (TurnScreen her turda remount olur).
var MOTION_NEEDS_PERMISSION = typeof DeviceMotionEvent !== 'undefined'
  && typeof DeviceMotionEvent.requestPermission === 'function';
var motionGranted = !MOTION_NEEDS_PERMISSION; // Android/masaüstü: izne gerek yok

// iOS 13+ izin akışı — mutlaka bir kullanıcı hareketinden (tap) çağrılmalı.
// Hem hareket (Android sallama) hem yönelim (iOS döndürme) izni istenir.
function ensureMotionPermission() {
  if (motionGranted) return Promise.resolve(true);
  var reqs = [];
  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function')
    reqs.push(DeviceMotionEvent.requestPermission().catch(() => 'denied'));
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function')
    reqs.push(DeviceOrientationEvent.requestPermission().catch(() => 'denied'));
  if (!reqs.length) { motionGranted = true; return Promise.resolve(true); }
  return Promise.all(reqs)
    .then(res => { motionGranted = res.some(r => r === 'granted'); return motionGranted; })
    .catch(() => false);
}

// iOS haptik hile'si: <input type="checkbox" switch> toggle'ı sistem haptiği verir (iOS 17.4+).
var _hapticSwitch = null;
function iosHaptic() {
  try {
    if (!_hapticSwitch) {
      var label = document.createElement('label');
      label.setAttribute('aria-hidden', 'true');
      label.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
      var inp = document.createElement('input');
      inp.type = 'checkbox';
      inp.setAttribute('switch', '');
      label.appendChild(inp);
      document.body.appendChild(label);
      _hapticSwitch = inp;
    }
    _hapticSwitch.click(); // toggle → haptik
  } catch (e) {}
}

// Titreşim — Android: Vibration API; iOS: switch haptik hile'si.
function haptic(pattern) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(pattern); } catch (e) {}
  }
  if (IS_IOS) iosHaptic();
}

function sceneKey(s) { return s.title; }

// Sahneye uygun (grubu sahnenin gruplarında olan) bir duygu seç.
function pickEmotionForScene(sceneGroups, excludeEmotion) {
  let avail = ALL_EMOTIONS.filter(it => sceneGroups.includes(it.group.key) && it.emotion !== excludeEmotion);
  if (!avail.length) avail = ALL_EMOTIONS.filter(it => sceneGroups.includes(it.group.key));
  if (!avail.length) avail = ALL_EMOTIONS;
  return avail[Math.floor(Math.random() * avail.length)];
}

// Duygu grubuna uyumlu, oyunda çıkmamış (mümkünse) bir sahne seç.
function pickScene(pool, groupKey, usedKeys, excludeKey) {
  let compat = pool.filter(s => s.groups && s.groups.includes(groupKey));
  if (compat.length < 3) compat = pool.slice();
  let avail = compat.filter(s => usedKeys.indexOf(sceneKey(s)) === -1 && sceneKey(s) !== excludeKey);
  if (!avail.length) avail = compat.filter(s => sceneKey(s) !== excludeKey);
  if (!avail.length) avail = compat;
  return avail[Math.floor(Math.random() * avail.length)];
}

// Oyunda hiç çıkmamış herhangi bir sahne (tükenince havuzu sıfırla).
function pickFreshScene(pool, usedKeys) {
  let avail = pool.filter(s => usedKeys.indexOf(sceneKey(s)) === -1);
  if (!avail.length) avail = pool.slice();
  return avail[Math.floor(Math.random() * avail.length)];
}

// Arka planda süzülen 7 duygu rengi baloncuğu
var SHAKE_BUBBLES = [
  { c:'#FF6B7A', x:'10%', y:'16%', s:58, d:'0s',   dur:'4.6s' },
  { c:'#FF8C42', x:'80%', y:'12%', s:42, d:'0.7s', dur:'5.3s' },
  { c:'#FFC93C', x:'86%', y:'58%', s:64, d:'1.2s', dur:'4.9s' },
  { c:'#2ED573', x:'6%',  y:'62%', s:48, d:'0.4s', dur:'5.7s' },
  { c:'#2E9CFF', x:'18%', y:'86%', s:38, d:'1.0s', dur:'4.3s' },
  { c:'#B14AED', x:'74%', y:'84%', s:52, d:'1.5s', dur:'5.1s' },
];

// Süzülen renk çemberleri — hem salla ekranı hem kart arka planı için (zIndex:0).
function FloatingBubbles() {
  return (
    <React.Fragment>
      {SHAKE_BUBBLES.map((b, i) => (
        <span key={i} style={{
          position:'absolute', left:b.x, top:b.y, width:b.s, height:b.s,
          borderRadius:'50%', background:b.c, opacity:0.15, filter:'blur(1px)',
          pointerEvents:'none', zIndex:0,
          animation:`float-y ${b.dur} ease-in-out ${b.d} infinite`,
        }}/>
      ))}
    </React.Fragment>
  );
}

function ShakePrompt({ playerGrad, playerAnimal, onDraw }) {
  const [pressed, setPressed] = React.useState(false);
  const grad = playerGrad || 'linear-gradient(135deg,#B14AED,#3D5AFE)';
  return (
    <div
      onClick={onDraw}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        position:'relative', flex:1, width:'100%', overflow:'hidden',
        cursor:'pointer', userSelect:'none',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        gap:'clamp(8px,2.5vw,16px)',
      }}
    >
      {/* Süzülen renk çemberleri */}
      <FloatingBubbles />

      {/* Kahraman: oynayan telefon + genişleyen halkalar */}
      <div style={{
        position:'relative', display:'flex', alignItems:'center', justifyContent:'center',
        width:'clamp(150px,42vw,180px)', height:'clamp(150px,42vw,180px)',
        transform: pressed ? 'scale(0.92)' : 'scale(1)', transition:'transform 0.2s cubic-bezier(0.2,0.8,0.2,1)',
        zIndex:1,
      }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            position:'absolute', width:'100%', height:'100%', borderRadius:'50%',
            border:'2px solid rgba(120,120,140,0.18)',
            animation:`pulse-ring 2.4s ease-out ${i*0.8}s infinite`,
            pointerEvents:'none',
          }}/>
        ))}
        <div style={{
          width:'clamp(116px,32vw,140px)', height:'clamp(116px,32vw,140px)',
          borderRadius:'50%', background:grad,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 22px 50px -12px rgba(0,0,0,0.34)',
          animation: pressed ? 'none' : (IS_IOS ? 'twist 2s ease-in-out infinite' : 'shake-wiggle 1.5s ease-in-out infinite'),
        }}>
          <span style={{ fontSize:'clamp(50px,14vw,64px)', lineHeight:1, filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}>📱</span>
        </div>
      </div>

      {/* Başlık: gökkuşağı */}
      <div style={{ textAlign:'center', padding:'0 20px', zIndex:1, animation:'pop-in 0.5s cubic-bezier(0.2,0.8,0.2,1) both' }}>
        <div style={{
          fontWeight:900, fontSize:'clamp(28px,8.5vw,42px)', lineHeight:1.05, letterSpacing:'-0.025em',
          background:'linear-gradient(120deg,#FF6B7A,#FF8C42,#FFC93C,#2ED573,#2E9CFF,#B14AED)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
        }}>{IS_IOS ? STRINGS.turn.rotateTitle : STRINGS.turn.shakeTitle}</div>
        <div style={{ fontSize:'clamp(13px,3.8vw,15px)', color:'#8A8A8A', marginTop:10, fontWeight:700 }}>
          {STRINGS.turn.shakeSub}
        </div>
      </div>

      {/* Dokun ipucu — zıplayan hap (her iki platformda yedek) */}
      <div style={{
        marginTop:'clamp(4px,1.5vw,10px)', zIndex:1,
        display:'inline-flex', alignItems:'center', gap:9,
        background:'#fff', borderRadius:100, padding:'13px 24px',
        boxShadow:'0 10px 26px -8px rgba(0,0,0,0.2)',
        animation:'bob 1.9s ease-in-out infinite',
      }}>
        <span style={{ fontSize:19, lineHeight:1 }}>👆</span>
        <span style={{ fontWeight:800, fontSize:'clamp(14px,4vw,16px)', color:'#1A1A1A', letterSpacing:'0.01em' }}>
          {STRINGS.turn.shakeTap}
        </span>
      </div>
    </div>
  );
}

function TurnScreen({ playerName, playerGrad, playerAnimal, isYouth, onAgeChange, onEmotionDrawn, onTurnEnd, onSceneUsed, usedScenes, onListOpen, onScoreOpen, onHome }) {
  /* ── Durum: yetişkin + genç sahne ayrı tutulur (toggle sabit kalsın) ── */
  const [phase, setPhase] = React.useState('idle'); // 'idle' | 'revealed'
  const [sceneAdult, setSceneAdult] = React.useState(null);
  const [sceneYouth, setSceneYouth] = React.useState(null);
  const [emo, setEmo] = React.useState(null);        // { emotion, group }
  const [animKey, setAnimKey] = React.useState(0);
  const emotion = emo && emo.emotion;
  const group = emo && emo.group;
  const scene = isYouth ? sceneYouth : sceneAdult;

  /* ── Sayaç ── */
  const TOTAL = 90;
  const [started, setStarted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(TOTAL);
  const [ended, setEnded] = React.useState(false);

  function finishTurn() {
    if (scene) onSceneUsed(sceneKey(scene));
    onTurnEnd();
  }

  React.useEffect(() => {
    if (!started || ended) return;
    if (timeLeft <= 0) { setEnded(true); finishTurn(); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, timeLeft, ended]);

  function handleEnd() {
    if (ended) return;
    setEnded(true);
    finishTurn();
  }

  /* ── Çekme: çıkmamış sahne + ona uygun duygu; iki yaş için de sahne hazırla ── */
  function drawNew() {
    const curPool = isYouth ? SCENES_GENC : SCENES;
    const curScene = pickFreshScene(curPool, usedScenes);
    const e = pickEmotionForScene(curScene.groups, null);
    const adultSc = isYouth ? pickScene(SCENES, e.group.key, usedScenes, null) : curScene;
    const youthSc = isYouth ? curScene : pickScene(SCENES_GENC, e.group.key, usedScenes, null);
    setSceneAdult(adultSc); setSceneYouth(youthSc); setEmo(e);
    onEmotionDrawn({ emotion: e.emotion, group: e.group });
    setAnimKey(k => k + 1);
    setPhase('revealed');
    setStarted(false); setTimeLeft(TOTAL); setEnded(false);
    haptic([0, 45, 30, 60]); // çekiş titreşimi
  }

  /* ── Yeni tur: "Telefonu Döndür/Salla" ekranına geri dön ── */
  function backToIdle() {
    setPhase('idle');
    setSceneAdult(null); setSceneYouth(null); setEmo(null);
    setStarted(false); setTimeLeft(TOTAL); setEnded(false);
  }

  /* ── Sahneyi değiştir: yalnız aktif yaşın sahnesi değişir (diğeri sabit) ── */
  function changeScene() {
    if (!emo) return;
    if (isYouth) {
      setSceneYouth(pickScene(SCENES_GENC, group.key, usedScenes, sceneYouth && sceneKey(sceneYouth)));
    } else {
      setSceneAdult(pickScene(SCENES, group.key, usedScenes, sceneAdult && sceneKey(sceneAdult)));
    }
    setAnimKey(k => k + 1);
    haptic(25);
  }

  /* ── Duyguyu değiştir: gösterilen sahne sabit; diğer yaşın sahnesi yeni duyguya uyarlanır ── */
  function changeEmotion() {
    if (!scene) return;
    const e = pickEmotionForScene(scene.groups, emotion);
    setEmo(e);
    if (isYouth) setSceneAdult(pickScene(SCENES, e.group.key, usedScenes, null));
    else setSceneYouth(pickScene(SCENES_GENC, e.group.key, usedScenes, null));
    onEmotionDrawn({ emotion: e.emotion, group: e.group });
    haptic(25);
  }

  /* ── Yaş geçişi: sahne yeniden seçilmez, sadece saklanan sahne gösterilir ── */
  function handleAge(v) {
    onAgeChange(v);
    if (phase === 'revealed') setAnimKey(k => k + 1);
  }

  /* ── Sallama algılama ── */
  const [motionEnabled, setMotionEnabled] = React.useState(motionGranted);

  // İzin daha önce verilmemişse, oyuncuya dokunulduğunda (app.js) verilmiş olabilir.
  React.useEffect(() => {
    if (!motionEnabled && motionGranted) setMotionEnabled(true);
  }, []);

  // Sallama; sayaç başlamadıysa yeniden çek.
  const shakeRef = React.useRef();
  shakeRef.current = () => { if (!started) drawNew(); };

  React.useEffect(() => {
    if (!motionEnabled) return;

    if (IS_IOS) {
      // iOS: telefonu döndür/eğ — deviceorientation (geri-al kutusunu tetiklemez).
      let lastTime = 0, lb = null, lg = null;
      function onOrient(e) {
        if (e.beta == null && e.gamma == null) return;
        const b = e.beta || 0, g = e.gamma || 0;
        const now = Date.now();
        if (lb !== null) {
          const delta = Math.abs(b - lb) + Math.abs(g - lg);
          if (delta > 22 && now - lastTime > 900) {
            lastTime = now;
            shakeRef.current();
          }
        }
        lb = b; lg = g;
      }
      window.addEventListener('deviceorientation', onOrient);
      return () => window.removeEventListener('deviceorientation', onOrient);
    }

    // Android/masaüstü: salla — devicemotion.
    let lastTime = 0, lx = null, ly = null, lz = null;
    function onMotion(e) {
      const a = e.accelerationIncludingGravity || e.acceleration;
      if (!a || a.x == null) return;
      const now = Date.now();
      if (lx !== null) {
        const delta = Math.abs(a.x - lx) + Math.abs(a.y - ly) + Math.abs(a.z - lz);
        if (delta > 20 && now - lastTime > 800) {
          lastTime = now;
          shakeRef.current();
        }
      }
      lx = a.x; ly = a.y; lz = a.z;
    }
    window.addEventListener('devicemotion', onMotion);
    return () => window.removeEventListener('devicemotion', onMotion);
  }, [motionEnabled]);

  function handlePromptDraw() {
    // iOS izni daha alınmadıysa bu dokunuşta al (gerçek bir kullanıcı hareketi).
    if (!motionEnabled) {
      ensureMotionPermission().then(ok => { if (ok) setMotionEnabled(true); });
    }
    drawNew();
  }

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
  const isUrgent = timeLeft <= 10;
  const progress = timeLeft / TOTAL;
  const cardW = 'min(280px, 72vw)';

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2' }}>
      <TurnHeader
        playerName={playerName}
        playerGrad={playerGrad}
        playerAnimal={playerAnimal}
        onScoreOpen={onScoreOpen}
        onListOpen={onListOpen}
        onHome={onHome}
      />

      {phase === 'idle' ? (
        <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'clamp(8px,3vw,20px) clamp(16px,4vw,24px) calc(env(safe-area-inset-bottom,0px) + 20px)' }}>
          <ShakePrompt playerGrad={playerGrad} playerAnimal={playerAnimal} onDraw={handlePromptDraw} />
        </div>
      ) : (
        <React.Fragment>
          <div style={{ flex:1, position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(10px,3vw,16px) clamp(16px,5vw,24px)', gap:'clamp(10px,2.5vw,14px)', overflow:'hidden' }}>
            <FloatingBubbles />
            <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'clamp(10px,2.5vw,14px)' }}>
              <SceneCard scene={scene} animKey={animKey} displayNum={usedScenes.length + 1} onChangeScene={changeScene} onChangeEmotion={changeEmotion} group={group} dark={isYouth} emotion={emotion} />
              <AgeToggle isYouth={isYouth} onChange={handleAge} />
            </div>
          </div>

          <div style={{
            padding:'12px clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom,0px) + 16px)',
            display:'flex', alignItems:'center', justifyContent:'center',
            borderTop:'1px solid rgba(0,0,0,0.06)', background:'#FAF7F2', flexShrink:0,
          }}>
            <div style={{ width:cardW, display:'flex', gap:8, height:52 }}>
              {!started ? (
                <button
                  onClick={backToIdle}
                  style={{
                    flex:1, height:'100%',
                    fontFamily:'Nunito', fontWeight:900, fontSize:15, letterSpacing:'0.06em', textTransform:'uppercase',
                    borderRadius:100,
                    background:'linear-gradient(135deg,#B14AED,#3D5AFE)',
                    color:'#fff', border:'none', cursor:'pointer',
                    boxShadow:'0 6px 18px -4px rgba(100,60,220,0.45)',
                  }}
                >{STRINGS.scene.newTurn}</button>
              ) : (
                <div style={{
                  flex:1, height:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:7,
                  background: isUrgent ? 'linear-gradient(135deg,#FF3B30,#FF6B35)' : '#1A1A1A',
                  borderRadius:100,
                  transition:'background 0.4s',
                  boxShadow: isUrgent ? '0 6px 18px -4px rgba(255,59,48,0.55)' : 'none',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
                    <path
                      d={`M 6 6 L 6 1 A 5 5 0 ${progress > 0.5 ? 1 : 0} 1 ${6 + 5*Math.sin(2*Math.PI*(1-progress))} ${6 - 5*Math.cos(2*Math.PI*(1-progress))} Z`}
                      fill="rgba(255,255,255,0.65)"
                    />
                  </svg>
                  <span style={{
                    fontFamily:'Nunito', fontWeight:900, fontSize:16, letterSpacing:'-0.01em',
                    color:'#fff', fontVariantNumeric:'tabular-nums',
                  }}>{timeStr}</span>
                </div>
              )}

              {!started ? (
                <button
                  onClick={() => setStarted(true)}
                  style={{
                    flex:1, height:'100%',
                    fontFamily:'Nunito', fontWeight:900, fontSize:15, letterSpacing:'0.06em', textTransform:'uppercase',
                    borderRadius:100,
                    background:'linear-gradient(135deg,#2ED573,#1DB954)',
                    color:'#fff', border:'none', cursor:'pointer',
                    boxShadow:'0 6px 18px -4px rgba(30,185,84,0.45)',
                  }}
                >{STRINGS.scene.start}</button>
              ) : (
                <button
                  onClick={handleEnd}
                  style={{
                    flex:1, height:'100%',
                    fontFamily:'Nunito', fontWeight:900, fontSize:15, letterSpacing:'0.06em', textTransform:'uppercase',
                    borderRadius:100,
                    background:'linear-gradient(135deg,#FF8C42,#FF3B30)',
                    color:'#fff', border:'none', cursor:'pointer',
                    boxShadow:'0 6px 18px -4px rgba(255,90,50,0.45)',
                  }}
                >{STRINGS.scene.finish}</button>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
