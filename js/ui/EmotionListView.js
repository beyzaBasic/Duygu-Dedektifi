/**
 * EmotionListView — Duygu havuzu listesi view'i.
 *
 * Sorumluluklar:
 *   - 7 renk × 10 duygu listesini render eder
 *   - Sağa/sola swipe veya tap-zone ile renk geçişi
 *   - Üstteki renk noktalarına tıklayınca da geçiş
 *   - Klavye okları ile geçiş
 *   - Açma/kapama ViewManager üzerinden
 *
 * View, ViewManager tarafından açılıp kapanır; bu sınıf sadece içerikten ve
 * navigasyondan sorumludur.
 */

const COLOR_ORDER = ['Kırmızı', 'Turuncu', 'Sarı', 'Yeşil', 'Mavi', 'Lacivert', 'Mor'];

export class EmotionListView {
  /**
   * @param {Object} opts
   * @param {Array}  opts.groups       - GROUPS dizisi
   * @param {Object} opts.viewManager  - ViewManager nesnesi
   * @param {Object} opts.selectors    - DOM seçicileri
   */
  constructor({ groups, viewManager, selectors }) {
    this.groups = groups;
    this.viewManager = viewManager;

    this._view        = document.querySelector(selectors.view);
    this._tabs        = document.querySelector(selectors.tabs);
    this._slider      = document.querySelector(selectors.slider);
    this._track       = document.querySelector(selectors.track);
    this._tapPrev     = document.querySelector(selectors.tapPrev);
    this._tapNext     = document.querySelector(selectors.tapNext);
    this._openBtns    = document.querySelectorAll(selectors.openBtn);
    this._closeBtns   = document.querySelectorAll(selectors.closeBtn);

    this._index = 0;

    this._drag = {
      active: false,
      startX: 0,
      deltaX: 0,
      width: 0
    };

    this._render();
    this._bindEvents();
  }

  /**
   * İlk açılışta sekmeleri ve slide'ları oluşturur.
   * @private
   */
  _render() {
    // Sekmeler
    this._tabs.innerHTML = '';
    COLOR_ORDER.forEach((color, i) => {
      const btn = document.createElement('button');
      btn.className = 'color-tab';
      btn.setAttribute('data-color', color);
      btn.setAttribute('data-index', i);
      btn.setAttribute('aria-label', `${color} duyguları`);
      if (i === 0) btn.classList.add('is-active');
      this._tabs.appendChild(btn);
    });

    // Slide'lar
    this._track.innerHTML = '';
    COLOR_ORDER.forEach((color) => {
      const group = this.groups.find(g => g.name === color);
      if (!group) return;

      const slide = document.createElement('div');
      slide.className = 'emotion-slide';
      slide.setAttribute('data-color', color);

      group.emotions.forEach((name) => {
        const row = document.createElement('div');
        row.className = 'emotion-row';
        row.textContent = name;
        slide.appendChild(row);
      });

      this._track.appendChild(slide);
    });
  }

  _bindEvents() {
    // Aç butonları (rainbow buton)
    this._openBtns.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    // Kapat (×)
    this._closeBtns.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // Renk noktalarına tıklama
    this._tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.color-tab');
      if (!tab) return;
      this.goTo(Number(tab.dataset.index));
    });

    // Tap zone'lar (sol/sağ tıklama)
    if (this._tapPrev) {
      this._tapPrev.addEventListener('click', () => this.prev());
      this._tapPrev.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
    if (this._tapNext) {
      this._tapNext.addEventListener('click', () => this.next());
      this._tapNext.addEventListener('pointerdown', (e) => e.stopPropagation());
    }

    // Klavye okları + ESC (sadece view aktifken çalışsın)
    document.addEventListener('keydown', (e) => {
      if (this.viewManager.current !== 'emotions') return;
      if (e.key === 'Escape')     this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft')  this.prev();
    });

    // Swipe
    this._slider.addEventListener('pointerdown',  (e) => this._onDragStart(e));
    this._slider.addEventListener('pointermove',  (e) => this._onDragMove(e));
    this._slider.addEventListener('pointerup',    (e) => this._onDragEnd(e));
    this._slider.addEventListener('pointercancel', (e) => this._onDragEnd(e));
    this._slider.addEventListener('dragstart', (e) => e.preventDefault());
  }

  /* ===== Aç/Kapa ===== */

  open() {
    this.viewManager.show('emotions');
    document.body.style.overflow = 'hidden';
    // Açılışta 0'a dön (animasyonsuz)
    this.goTo(0, { instant: true });
  }

  close() {
    this.viewManager.show('game');
    document.body.style.overflow = '';
  }

  /* ===== Slide navigasyonu ===== */

  goTo(index, opts = {}) {
    index = Math.max(0, Math.min(COLOR_ORDER.length - 1, index));
    this._index = index;

    if (opts.instant) {
      this._track.style.transition = 'none';
      requestAnimationFrame(() => {
        this._track.style.transform = `translateX(-${index * 100}%)`;
        requestAnimationFrame(() => {
          this._track.style.transition = '';
        });
      });
    } else {
      this._track.style.transform = `translateX(-${index * 100}%)`;
    }

    // Aktif sekme
    this._tabs.querySelectorAll('.color-tab').forEach((tab, i) => {
      tab.classList.toggle('is-active', i === index);
    });

    // Tap zone'ları sınır durumlarda gizle
    if (this._tapPrev) this._tapPrev.classList.toggle('is-disabled', index === 0);
    if (this._tapNext) this._tapNext.classList.toggle('is-disabled', index === COLOR_ORDER.length - 1);
  }

  next() { this.goTo(this._index + 1); }
  prev() { this.goTo(this._index - 1); }

  /* ===== Swipe ===== */

  _onDragStart(e) {
    if (e.button !== undefined && e.button !== 0) return;

    this._drag.active = true;
    this._drag.startX = e.clientX;
    this._drag.deltaX = 0;
    this._drag.width = this._slider.offsetWidth;
    this._track.classList.add('is-dragging');
    this._slider.setPointerCapture?.(e.pointerId);
  }

  _onDragMove(e) {
    if (!this._drag.active) return;

    this._drag.deltaX = e.clientX - this._drag.startX;
    if (Math.abs(this._drag.deltaX) < 5) return;

    let delta = this._drag.deltaX;
    if (this._index === 0 && delta > 0) delta = delta * 0.3;
    if (this._index === COLOR_ORDER.length - 1 && delta < 0) delta = delta * 0.3;

    const offset = -(this._index * this._drag.width) + delta;
    this._track.style.transform = `translateX(${offset}px)`;
  }

  _onDragEnd(e) {
    if (!this._drag.active) return;
    this._drag.active = false;
    this._track.classList.remove('is-dragging');

    const threshold = this._drag.width * 0.2;
    const delta = this._drag.deltaX;

    this._track.style.transform = '';

    if (delta < -threshold && this._index < COLOR_ORDER.length - 1) {
      this.next();
    } else if (delta > threshold && this._index > 0) {
      this.prev();
    } else {
      this.goTo(this._index);
    }
  }
}
