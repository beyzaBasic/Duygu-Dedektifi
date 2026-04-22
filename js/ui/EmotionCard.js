/**
 * EmotionCard — Duygu kartının görsel davranışını yöneten sınıf.
 *
 * Davranış:
 *   1. show(emotion) → kart arka yüzüyle görünür (kapalı)
 *   2. Oyuncu karta dokununca → flip (ön yüz görünür ama bulanık)
 *   3. Ön yüze basılı tutunca → bulanıklık kalkar
 *   4. Bırakınca → bulanıklık geri gelir
 */
export class EmotionCard {
  constructor(selectors) {
    this._wrapper = document.querySelector(selectors.wrapper);
    this._card    = document.querySelector(selectors.card);
    this._front   = document.querySelector(selectors.front);
    this._name    = document.querySelector(selectors.name);

    this._emotion = null;
    this._flipped = false;
    this._flipCallbacks = [];

    this._bindEvents();
  }

  _bindEvents() {
    // Arka yüze dokun → flip
    this._card.addEventListener('click', (e) => {
      // Ön yüzdeyken click flip tetiklemesin (revealOverlay aşağıda ayrı event alıyor)
      if (this._flipped) return;
      this.flip();
    });

    // Ön yüz: basılı tut → göster, bırak → gizle
    const show = () => this.reveal();
    const hide = () => this.hideContent();

    this._front.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      show();
    });
    this._front.addEventListener('pointerup',    hide);
    this._front.addEventListener('pointerleave', hide);
    this._front.addEventListener('pointercancel', hide);

    // Sağ tık/bağlam menüsü engellensin (mobilde kartı kopyalamaya kalkmasın)
    this._front.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  /**
   * Kartı bir duyguyla gösterir. Arka yüz görünür, kart flip edilmemiş.
   * @param {import('../models/Emotion.js').Emotion} emotion
   */
  show(emotion) {
    this._emotion = emotion;
    this._flipped = false;

    // DOM'u doldur
    this._front.setAttribute('data-color', emotion.color);
    this._name.textContent = emotion.name;

    // Görünür hale getir, flip'i sıfırla, bulanıklığı aç
    this._card.classList.remove('is-flipped');
    this._front.classList.add('is-blurred');
    this._wrapper.classList.remove('hidden');
    this._wrapper.classList.add('enter');
  }

  hide() {
    this._wrapper.classList.add('hidden');
    this._wrapper.classList.remove('enter');
    this._card.classList.remove('is-flipped');
    this._front.classList.add('is-blurred');
    this._emotion = null;
    this._flipped = false;
  }

  flip() {
    this._card.classList.add('is-flipped');
    this._flipped = true;
    this._flipCallbacks.forEach(cb => cb(this._emotion));
  }

  reveal()      { this._front.classList.remove('is-blurred'); }
  hideContent() { this._front.classList.add('is-blurred'); }

  /**
   * Kart çevrildiğinde tetiklenecek callback kaydı.
   * @param {(emotion) => void} cb
   */
  onFlipped(cb) {
    this._flipCallbacks.push(cb);
  }

  get current() { return this._emotion; }
}
