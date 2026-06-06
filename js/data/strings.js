var STRINGS = {

  tutorial: {
    skip:    'Atla',
    next:    'İleri →',
    play:    'Oynayalım 🎮',
    slides: [
      {
        grad:    'linear-gradient(155deg,#FF6B7A 0%,#FF8C42 50%,#FFC93C 100%)',
        shadow:  'rgba(255,100,60,0.5)',
        tag:     'HOŞ GELDİN',
        title:   'Duygu Avı',
        caption: 'En iyi duygu avcısı kim?',
      },
      {
        grad:    'linear-gradient(155deg,#B14AED,#3D5AFE)',
        shadow:  'rgba(100,60,220,0.5)',
        tag:     'ADIM 1',
        title:   'Salla',
        titleIos:'Döndür',
        caption: 'Duygu + sahne gelsin',
      },
      {
        grad:    'linear-gradient(155deg,#2ED573,#1DB954)',
        shadow:  'rgba(30,185,84,0.5)',
        tag:     'ADIM 2',
        title:   'Oyna',
        caption: 'Konuş, canlandır',
        pills:   ['⏱️ 90 sn', '🙊 duygu söyleme'],
      },
      {
        grad:    'linear-gradient(155deg,#5FB8FF,#0B7ED8)',
        shadow:  'rgba(11,126,216,0.5)',
        tag:     'ADIM 3',
        title:   'Tahmin Et',
        caption: null,
        scoring: [
          ['🎯', 'Doğru tahmin',    '+2'],
          ['🎤', 'İyi anlatım',     '+1'],
          ['🌈', '7 rengi tamamla', '+5'],
        ],
      },
    ],
  },

  welcome: {
    archiveLabel:    'Arşiv',
    archiveTitle:    'Kayıtlı Oyunlar',
    archiveEmpty:    'Henüz kayıtlı oyun yok',
    archiveEmptySub: 'Oyun bitince otomatik kaydedilir',
    archiveSwipeHint:'Silmek için sola kaydır',
    tagline:         'Salla · Oyna · Tahmin',
    taglineIos:      'Döndür · Oyna · Tahmin',
    steps:           ['Salla', 'Oyna', 'Tahmin'],
    stepRotate:      'Döndür',
    newGame:      'Yeni Oyun →',
    continueGame: 'Haydi Oynayalım! →',
  },

  playerSetup: {
    titleLine1:          'Kim',
    titleLine2:          'oynuyor?',
    statusEmpty:         'En az 3 kişiyle oynanır',
    statusNeedMore:      (n) => `${n} kişi daha ekle`,
    statusReady:         (n) => `${n} oyuncu hazır 🎉`,
    gameNamePlaceholder: 'Oyun adı (opsiyonel)',
    playerPlaceholder:   'İsim gir...',
    startBtn:            'Oynayalım! →',
    needMoreBtn:         (n) => `${n} oyuncu daha ekle`,
  },

  playerList: {
    nextPlayer: 'Sıradaki oyuncu',
    tapHint:    'dokun, turuna başla',
  },

  emotion: {
    titleDeck:  'Duygunu Çek.',
    titleReady: 'Duyguyla Hazırlan.',
    deckLabel:  'Duygu Destesi',
    deckSub:    '70 Kart',
    sceneBtn:   'Sahne Zamanı →',
  },

  scene: {
    newTurn:  'Yeni Tur',
    start:    'Başla',
    finish:   'Tamamla',
    ageAdult: 'YETİŞKİN',
    ageYouth: 'GENÇ',
  },

  turn: {
    shakeTitle:   'Telefonu Salla!',
    rotateTitle:  'Telefonu Döndür!',
    shakeSub:     'duygu + sahne kartın gelsin',
    shakeTap:     'veya dokun',
    drawBtn:      'Salla ya da Seç →',
    titleReady:   'Sahneni Oyna.',
    reshakeHint:  'Yeniden çekmek için salla 🎲',
  },

  roundResult: {
    header:   'Tur bitti · Kim',
    headerHL: 'buldu?',
    telling:  'anlatıyordu',
    nobody:   'Kimse bilemedi',
    retry:    'Yeniden',
    confirm:  'Onayla →',
  },

  scoreboard: {
    label:    'Skor',
    title:    'Sıralama',
    rounds:   'tur',
    rankUp:   (n) => `↑ ${n} sıra`,
    rankDown: (n) => `↓ ${n} sıra`,
    progress: (a, b) => `${a}/${b}`,
    continueBtn: 'Devam →',
  },

  emotionList: {
    title:       'Duygu Havuzu',
    subtitle:    '70 duygu · 7 renk ailesi',
    groupSuffix: 'Duygular',
  },

  exit: {
    message: 'Oyun kaydedildi.\nAna menüden kaldığın yerden devam edebilirsin.',
    cancel:  'İptal',
    confirm: 'Ana Menüye Dön →',
  },

};
