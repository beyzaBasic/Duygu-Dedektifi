/**
 * MiniEmotion — Sahne fazında ekranda duran bulanık duygu rozeti.
 * Oyuncu üstüne basılı tuttuğunda görünür.
 */
export class MiniEmotion {
  constructor(selectors) {
    this._root  = document.querySelector(selectors.root);
    this._chip  = document.querySelector(selectors.chip);
    this._label = document.querySelector(selectors.label);

    this._emotion = null;

    this._bindEvents();
  }

  _bindEvents() {
    const reveal = (e) => {
      e.preventDefault();
      this._root.classList.remove('is-hidden');
    };
    const hide = () => {
      this._root.classList.add('is-hidden');
    };

    this._root.addEventListener('pointerdown',  reveal);
    this._root.addEventListener('pointerup',    hide);
    this._root.addEventListener('pointerleave', hide);
    this._root.addEventListener('pointercancel', hide);
    this._root.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  /**
   * Rozeti bir duyguya bağlar ve görünür hale getirir (bulanık).
   * @param {import('../models/Emotion.js').Emotion} emotion
   */
  bind(emotion) {
    this._emotion = emotion;
    this._chip.setAttribute('data-color', emotion.color);
    this._label.textContent = emotion.name;
    this._root.classList.remove('hidden');
    this._root.classList.add('is-hidden'); // bulanık başla
  }

  hide() {
    this._root.classList.add('hidden');
    this._emotion = null;
  }
}
