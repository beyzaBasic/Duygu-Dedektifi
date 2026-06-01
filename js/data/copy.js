var COPY = {

  tutorial: {
    skip:    'Atla',
    next:    'İleri →',
    play:    'Oynayalım 🎮',
    slides: [
      {
        grad:   'linear-gradient(155deg,#FF6B7A 0%,#FF8C42 50%,#FFC93C 100%)',
        shadow: 'rgba(255,100,60,0.5)',
        emoji:  '🎭',
        tag:    'HOŞ GELDİN',
        title:  'Duygu Avı',
        body:   'Duygular gizlenir, sahnelenir ve yakalanır.\nGrupta en iyi duygu avcısı kim?',
        hint:   null,
      },
      {
        grad:   'linear-gradient(155deg,#B14AED,#3D5AFE)',
        shadow: 'rgba(100,60,220,0.5)',
        emoji:  '🃏',
        tag:    'ADIM 1',
        title:  'Duygunu Çek',
        body:   'Sıra sana gelince bir duygu kartı çekiyorsun. Sadece sen görüyorsun — kimseye söyleme!',
        hint:   '70 farklı duygu kartı',
      },
      {
        grad:   'linear-gradient(155deg,#FF8C42,#FF6B00)',
        shadow: 'rgba(255,100,20,0.5)',
        emoji:  '🎬',
        tag:    'ADIM 2',
        title:  'Sahneyi Oyna',
        body:   '90 saniyede rastgele bir sahne gelir. O sahneyi kartındaki duyguyla yorumla — duygunun adını söyleme, hissettir!',
        hint:   'Sahneyi değiştirebilirsin',
      },
      {
        grad:   'linear-gradient(155deg,#5FB8FF,#0B7ED8)',
        shadow: 'rgba(11,126,216,0.5)',
        emoji:  '🔍',
        tag:    'ADIM 3',
        title:  'Tahmin Et',
        body:   'Diğerleri senin duygununu tahmin etmeye çalışır. Ne kadar iyi anlatırsan o kadar çok puan!',
        hint:   null,
        scoring: [
          ['🎯', 'Doğru tahmin',    '+2 puan'],
          ['🎤', 'İyi anlatım',     '+1 puan'],
          ['🌈', '7 rengi tamamla', '+5 bonus'],
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
    tagline:         'Sahne · Duygu · Tahmin',
    howToPlay:       'Nasıl oynanır',
    howToPlayItems: [
      ['🃏', 'Duygu çek',    'Kart bulanık gelir — sadece sen görürsün',       'linear-gradient(135deg,#FF6B7A,#FF8C42)', 'rgba(255,100,80,0.35)'],
      ['🎬', 'Sahneyi oyna', 'Sahneyi duygunla yorumla, soruyu cevapla',        'linear-gradient(135deg,#FFC93C,#2ED573)', 'rgba(46,213,115,0.35)'],
      ['🔍', 'Tahmin et',    'Diğerleri senin duygunun ne olduğunu bulmalı',    'linear-gradient(135deg,#5FB8FF,#B14AED)', 'rgba(100,60,220,0.35)'],
    ],
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
    sceneBtn:   'Sahne Seç →',
  },

  scene: {
    newTurn: 'Yeni Tur',
    start:   'Başla',
    finish:  'Tamamla',
  },

  roundResult: {
    header:   'Tur bitti · Kim',
    headerHL: 'buldu?',
    telling:  'anlatıyordu',
    nobody:   'Kimse bilemedi',
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
