/**
 * EmotionCard — Duygu kartının görsel davranışını yöneten sınıf.
 *
 * Davranış (flip YOK):
 *   1. show(emotion) → kart direkt bulanık ön yüzüyle görünür
 *   2. Karta basılı tut → bulanıklık kalkar, duygu görünür
 *   3. Bırak → bulanıklık geri gelir
 */
export class EmotionCard {
  constructor(selectors) {
    this._wrapper = document.querySelector(selectors.wrapper);
    this._card    = document.querySelector(selectors.card);
    // 'front' artık card elementinin kendisi (aynı element iki data-* attribute tutuyor)
    this._front   = document.querySelector(selectors.front);
    this._name    = document.querySelector(selectors.name);

    this._emotion = null;
    this._shownCallbacks = [];

    this._bindEvents();
  }

  _bindEvents() {
    const show = (e) => {
      e.preventDefault();
      this.reveal();
    };
    const hide = () => this.hideContent();

    this._card.addEventListener('pointerdown',   show);
    this._card.addEventListener('pointerup',     hide);
    this._card.addEventListener('pointerleave',  hide);
    this._card.addEventListener('pointercancel', hide);
    this._card.addEventListener('contextmenu',   (e) => e.preventDefault());
  }

  /**
   * Kartı bir duyguyla gösterir. Direkt bulanık ön yüz.
   * @param {import('../models/Emotion.js').Emotion} emotion
   */
  show(emotion) {
    this._emotion = emotion;

    this._card.setAttribute('data-color', emotion.color);
    this._name.textContent = emotion.name;

    // Duygu adının uzunluğuna göre dinamik font boyutu
    this._applyDynamicSize(emotion.name);

    this._card.classList.add('is-blurred');
    this._wrapper.classList.remove('hidden');
    this._wrapper.classList.add('enter');

    // Kart gösterilince tetiklenen callback (controller buradan butonları gösteriyor)
    this._shownCallbacks.forEach(cb => cb(emotion));
  }

  /**
   * Duygu adının uzunluğuna göre font boyutu sınıfı atar.
   * Kısa (≤ 8)        → normal (sınıf yok)
   * Orta (9-11)       → .size-md
   * Uzun (12+ ya da iki kelime içinde uzun parça) → .size-sm
   * @private
   */
  _applyDynamicSize(name) {
    this._name.classList.remove('size-md', 'size-sm');

    const len = name.length;
    const longestWord = Math.max(...name.split(/\s+/).map(w => w.length));

    // İki kelimelik bile olsa, en uzun parça > 10 ise küçültmek gerek
    if (len >= 12 || longestWord >= 10) {
      this._name.classList.add('size-sm');
    } else if (len >= 9 || longestWord >= 8) {
      this._name.classList.add('size-md');
    }
  }

  hide() {
    this._wrapper.classList.add('hidden');
    this._wrapper.classList.remove('enter');
    this._card.classList.add('is-blurred');
    this._emotion = null;
  }

  reveal()      { this._card.classList.remove('is-blurred'); }
  hideContent() { this._card.classList.add('is-blurred'); }

  /**
   * Kart gösterildiğinde tetiklenecek callback kaydı.
   * @param {(emotion) => void} cb
   */
  onShown(cb) {
    this._shownCallbacks.push(cb);
  }

  get current() { return this._emotion; }
}
