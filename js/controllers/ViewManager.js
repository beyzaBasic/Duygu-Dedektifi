/**
 * ViewManager — Uygulamadaki view'ler (sayfalar) arasında geçişi yönetir.
 *
 * Kullanım:
 *   const vm = new ViewManager();
 *   vm.show('game');     // ana oyun view'i
 *   vm.show('emotions'); // duygu listesi view'i
 *   vm.current;          // 'emotions'
 *
 * View'ler HTML'de [data-view="..."] ile işaretlenir.
 * Sadece aktif olan görünür (.is-active sınıfı).
 */
export class ViewManager {
  constructor() {
    /** Mevcut aktif view adı @type {string|null} */
    this._current = null;

    /** view name → callback dizisi (open) */
    this._onOpenCallbacks = new Map();
    /** view name → callback dizisi (close) */
    this._onCloseCallbacks = new Map();
  }

  /**
   * Belirli bir view'i aktifleştirir, diğerlerini gizler.
   * @param {string} name - data-view değeri
   */
  show(name) {
    const previous = this._current;
    if (previous === name) return;

    document.querySelectorAll('.view').forEach(view => {
      const active = view.dataset.view === name;
      view.classList.toggle('is-active', active);
    });

    this._current = name;

    // Önceki view'in close callback'lerini tetikle
    if (previous) {
      const closeCbs = this._onCloseCallbacks.get(previous) || [];
      closeCbs.forEach(cb => cb());
    }

    // Yeni view'in open callback'lerini tetikle
    const openCbs = this._onOpenCallbacks.get(name) || [];
    openCbs.forEach(cb => cb());
  }

  /**
   * Bir view açıldığında tetiklenecek callback kaydı.
   * @param {string} name
   * @param {() => void} cb
   */
  onOpen(name, cb) {
    if (!this._onOpenCallbacks.has(name)) {
      this._onOpenCallbacks.set(name, []);
    }
    this._onOpenCallbacks.get(name).push(cb);
  }

  /**
   * Bir view kapandığında tetiklenecek callback kaydı.
   * @param {string} name
   * @param {() => void} cb
   */
  onClose(name, cb) {
    if (!this._onCloseCallbacks.has(name)) {
      this._onCloseCallbacks.set(name, []);
    }
    this._onCloseCallbacks.get(name).push(cb);
  }

  get current() { return this._current; }
}
