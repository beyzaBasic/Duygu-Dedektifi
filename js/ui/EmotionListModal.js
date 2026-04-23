/**
 * EmotionListModal — Duygu havuzu listesini gösteren modal.
 *
 * Sorumluluklar:
 *   - 7 renk × 10 duygu listesini render eder
 *   - Sağa/sola kaydırma (swipe) ile renkler arası geçiş
 *   - Üstteki renk sekmelerine tıklayınca da geçiş
 *   - Klavye okları ile geçiş
 *   - Backdrop'a ya da × butonuna tıklayınca kapanır
 *   - ESC tuşu ile kapanır
 */

const COLOR_ORDER = ['Kırmızı', 'Turuncu', 'Sarı', 'Yeşil', 'Mavi', 'Lacivert', 'Mor'];

export class EmotionListModal {
  /**
   * @param {Object} opts
   * @param {Array}  opts.groups    - emotions.js GROUPS dizisi (ham veri)
   * @param {Object} opts.selectors - DOM seçicileri
   */
  constructor({ groups, selectors }) {
    this.groups = groups;

    this._modal       = document.querySelector(selectors.modal);
    this._panel       = document.querySelector(selectors.panel);
    this._tabs        = document.querySelector(selectors.tabs);
    this._slider      = document.querySelector(selectors.slider);
    this._track       = document.querySelector(selectors.track);
    this._familyLabel = document.querySelector(selectors.familyLabel);
    this._openBtns    = document.querySelectorAll(selectors.openBtn);
    this._closeBtns   = document.querySelectorAll(selectors.closeBtn);

    /** Aktif slide indeksi (0-6) */
    this._index = 0;

    /** Sürükleme durumu */
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

      group.emotions.forEach((name, i) => {
        const row = document.createElement('div');
        row.className = 'emotion-row';
        row.innerHTML = `
          <span class="emotion-row-index">${String(i + 1).padStart(2, '0')}</span>
          <span class="emotion-row-dot" data-color="${color}"></span>
          <span>${name}</span>
        `;
        slide.appendChild(row);
      });

      this._track.appendChild(slide);
    });
  }

  _bindEvents() {
    // Aç
    this._openBtns.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    // Kapat (× ve backdrop)
    this._closeBtns.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // Sekme tıklaması
    this._tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.color-tab');
      if (!tab) return;
      this.goTo(Number(tab.dataset.index));
    });

    // Klavye okları + ESC
    document.addEventListener('keydown', (e) => {
      if (this._modal.classList.contains('hidden')) return;
      if (e.key === 'Escape')     this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft')  this.prev();
    });

    // Swipe (pointer events)
    this._slider.addEventListener('pointerdown',  (e) => this._onDragStart(e));
    this._slider.addEventListener('pointermove',  (e) => this._onDragMove(e));
    this._slider.addEventListener('pointerup',    (e) => this._onDragEnd(e));
    this._slider.addEventListener('pointercancel', (e) => this._onDragEnd(e));
    // Yatay drag: Chrome'un default image-drag'ini engelle
    this._slider.addEventListener('dragstart', (e) => e.preventDefault());
  }

  /* ===== Aç/Kapa ===== */

  open() {
    this._modal.classList.remove('hidden');
    this._modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Açılışta 0'a dön
    this.goTo(0, { instant: true });
  }

  close() {
    this._modal.classList.add('hidden');
    this._modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ===== Slide navigasyonu ===== */

  /**
   * Belirli bir slide'a geçer.
   * @param {number} index
   * @param {Object} [opts]
   * @param {boolean} [opts.instant] - true ise animasyonsuz
   */
  goTo(index, opts = {}) {
    // Sınırla
    index = Math.max(0, Math.min(COLOR_ORDER.length - 1, index));
    this._index = index;

    // Transform
    if (opts.instant) {
      this._track.style.transition = 'none';
      requestAnimationFrame(() => {
        this._track.style.transform = `translateX(-${index * 100}%)`;
        // transition'ı bir sonraki frame'de geri aç
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

    // Aile etiketi
    const color = COLOR_ORDER[index];
    const group = this.groups.find(g => g.name === color);
    if (group && this._familyLabel) {
      this._familyLabel.textContent = `${color} · ${group.family}`;
    }
  }

  next() { this.goTo(this._index + 1); }
  prev() { this.goTo(this._index - 1); }

  /* ===== Swipe ===== */

  _onDragStart(e) {
    // Sadece ana buton veya dokunma
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

    // Kenarda direnç uygula (ilk/son slide'da fazla gitmesin)
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

    // Stil'e tekrar % cinsinden dönmek için transform'u temizle
    this._track.style.transform = '';

    const threshold = this._drag.width * 0.2; // %20 yeterli
    if (this._drag.deltaX < -threshold) {
      this.next();
    } else if (this._drag.deltaX > threshold) {
      this.prev();
    } else {
      // Yetersizse mevcut sayfaya geri
      this.goTo(this._index);
    }
  }
}
