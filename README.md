# Duygu Dedektifi

Bir grup oyunu: oyuncu rastgele bir duygu ve rastgele bir sahne kartı çeker,
sahneyi duygunun üzerine giydirir, diğerleri duyguyu tahmin eder.

## Klasör Yapısı

```
duygu-dedektifi/
├── index.html                  # Markup iskeleti
├── css/
│   ├── base.css                # Reset, değişkenler, tipografi
│   ├── layout.css              # Header, main, footer
│   └── components.css          # Kart, buton, sahne, deste
└── js/
    ├── main.js                 # Giriş noktası — her şeyi bağlar
    ├── data/
    │   ├── emotions.js         # 7 × 10 = 70 duygu
    │   └── scenes.js           # 25 sahne kartı
    ├── models/
    │   ├── Emotion.js          # Duygu modeli
    │   ├── Scene.js            # Sahne modeli
    │   └── Deck.js             # Generic deste (shuffle, draw, reset)
    ├── ui/
    │   ├── EmotionCard.js      # Duygu kartı — flip + blur
    │   ├── SceneCard.js        # Sahne kartı — render
    │   └── MiniEmotion.js      # Bulanık duygu hatırlatıcısı
    └── controllers/
        └── GameController.js   # Oyun akışı, faz geçişleri
```

## Çalıştırma

ES6 module kullanıldığı için dosyaları çift tıklayarak açmak çalışmaz
(tarayıcıların CORS kısıtlaması).

**VSCode:** "Live Server" eklentisi — index.html'e sağ tık → "Open with Live Server"

**Veya terminalden:**
```bash
cd duygu-dedektifi
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

## Oyun Akışı

1. **Faz 1 — Duygu:** Oyuncu butona basar, rastgele bir duygu kartı gelir.
   Kart bulanık açılır, sadece oyuncu dokununca görünür.
2. **Faz 2 — Sahne:** Oyuncu butona basar, rastgele bir sahne kartı açılır.
   Üstte bulanık duygu hatırlatıcısı durur.
3. Oyuncu sahneyi okur, duyguyu üzerine giydirir, soruya cevap verir.
   Diğerleri duyguyu tahmin etmeye çalışır.

## Geliştirme Notları

- Tüm DOM bağları `data-*` attribute'ları üzerinden — seçiciler `main.js`'te toplu.
- Her sınıf JSDoc ile yorumlanmıştır.
- Controller, UI bileşenlerini DI yoluyla alır; bu sayede ileride test yazmak
  ya da başka bir ekran/varyant eklemek kolay.
- `window.__game` üzerinden geliştirme sırasında konsoldan erişilebilir.
