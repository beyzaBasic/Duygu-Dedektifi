/**
 * GameController — Oyunun akışını yöneten ana sınıf.
 */
const TINT_CLASSES = ['tint-red', 'tint-orange', 'tint-yellow', 'tint-green',
                      'tint-blue', 'tint-navy', 'tint-purple'];

export class GameController {
  constructor({ emotionDeck, sceneDeck, emotionCard, sceneCard, miniEmotion }) {
    this.emotionDeck  = emotionDeck;
    this.sceneDeck    = sceneDeck;
    this.emotionCard  = emotionCard;
    this.sceneCard    = sceneCard;
    this.miniEmotion  = miniEmotion;

    this.phase = 'emotion';
    this.currentEmotion = null;
    this.currentScene = null;
  }

  start() {
    // Desteleri karıştır
    this.emotionDeck.shuffle();
    this.sceneDeck.shuffle();

    // Event'leri bağla
    this._bindActions();

    // Başlangıç fazı
    this.goTo('emotion');
  }

  /**
   * Tüm [data-action] butonlarını ve deste tıklamalarını yakalar.
   */
  _bindActions() {
    // Buton tıklamaları (data-action)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;

      switch (action) {
        case 'redraw-emotion': this.redrawEmotion(); break;
        case 'go-scene':       this.goTo('scene'); break;
        case 'redraw-scene':   this.redrawScene(); break;
        case 'restart':        this.restart(); break;
      }
    });

    // Deste tıklamaları — buton yerine artık deste tıklanarak kart çekiliyor
    const emotionDeckEl = document.querySelector('[data-emotion-deck]');
    const sceneDeckEl   = document.querySelector('[data-scene-deck]');

    if (emotionDeckEl) {
      emotionDeckEl.addEventListener('click', () => this.drawEmotion());
    }
    if (sceneDeckEl) {
      sceneDeckEl.addEventListener('click', () => this.drawScene());
    }

    // Kart gösterilince → "Sahne Zamanı" ve "Başka Kart" butonları gelsin
    this.emotionCard.onShown(() => {
      this._show('[data-action="go-scene"]');
      this._show('[data-action="redraw-emotion"]');
    });
  }

  /**
   * Faz geçişleri.
   * @param {'emotion'|'scene'} phase
   */
  goTo(phase) {
    this.phase = phase;

    // Bölümleri göster/gizle
    document.querySelectorAll('[data-phase]').forEach(section => {
      const active = section.dataset.phase === phase;
      section.classList.toggle('hidden', !active);
    });

    // Adım göstergesi
    document.querySelectorAll('.steps .dot').forEach(dot => {
      const step = Number(dot.dataset.step);
      dot.classList.remove('is-active', 'is-done');
      if (phase === 'emotion' && step === 1) dot.classList.add('is-active');
      if (phase === 'scene'   && step === 1) dot.classList.add('is-done');
      if (phase === 'scene'   && step === 2) dot.classList.add('is-active');
    });

    // Sahne fazına geçtiğimizde mini-emotion'ı bağla
    if (phase === 'scene' && this.currentEmotion) {
      this.miniEmotion.bind(this.currentEmotion);
    }

    // Sahne fazında zemin nötr olsun (diğerleri görüyor — ele vermemeli)
    if (phase === 'scene') {
      this._clearTint();
    } else if (phase === 'emotion' && this.currentEmotion) {
      // Faz 1'e geri dönüldüyse (restart sonrası değil) rengi tekrar uygula
      this._applyTint(this.currentEmotion);
    }

    // Yumuşak scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Sahne fazına geçer geçmez sahneyi otomatik aç
    if (phase === 'scene' && !this.currentScene) {
      this.drawScene();
    }
  }

  drawEmotion() {
    // Kart zaten görünürse tekrar çekme (mesela desteye iki kez tıklamasın)
    if (this.currentEmotion) return;

    const emotion = this.emotionDeck.draw();
    if (!emotion) return;

    this.currentEmotion = emotion;
    this.emotionCard.show(emotion);

    // Desteyi gizle
    this._hide('[data-emotion-deck]');

    // Zemin o duygunun rengine dönüşsün
    this._applyTint(emotion);
  }

  redrawEmotion() {
    // Mevcut duyguyu desteye geri koy
    if (this.currentEmotion) {
      this.emotionDeck.putBack(this.currentEmotion);
      this.currentEmotion = null;
    }

    // Yeni bir duygu çek — kart ekranda kalır, sadece içeriği değişir
    const emotion = this.emotionDeck.draw();
    if (!emotion) return;

    this.currentEmotion = emotion;
    this.emotionCard.show(emotion);

    // Zemin rengi yeni duygunun rengine geç
    this._applyTint(emotion);
  }

  drawScene() {
    // Sahne zaten açıksa bir daha çekme
    if (this.currentScene) return;

    const scene = this.sceneDeck.draw();
    if (!scene) return;

    this.currentScene = scene;
    this.sceneCard.show(scene);

    this._hide('[data-scene-deck]');
    this._show('[data-action="redraw-scene"]');
    this._show('[data-action="restart"]');
  }

  redrawScene() {
    // Mevcut sahneyi desteye geri koy
    if (this.currentScene) {
      this.sceneDeck.putBack(this.currentScene);
      this.currentScene = null;
    }

    // Yeni bir sahne çek — kart ekranda kalır, içeriği değişir
    const scene = this.sceneDeck.draw();
    if (!scene) return;

    this.currentScene = scene;
    this.sceneCard.show(scene);
  }

  restart() {
    // Durumu temizle
    this.currentEmotion = null;
    this.currentScene = null;

    // UI'ı sıfırla
    this.emotionCard.hide();
    this.sceneCard.hide();
    this.miniEmotion.hide();

    // Deste görünürlükleri
    this._show('[data-emotion-deck]');
    this._show('[data-scene-deck]');
    this._hide('[data-action="redraw-emotion"]');
    this._hide('[data-action="go-scene"]');
    this._hide('[data-action="redraw-scene"]');
    this._hide('[data-action="restart"]');

    this._clearTint();

    // İlk faza dön
    this.goTo('emotion');
  }

  /* ===== yardımcılar ===== */

  _applyTint(emotion) {
    this._clearTint();
    document.body.classList.add(`tint-${emotion.colorKey}`);
  }

  _clearTint() {
    document.body.classList.remove(...TINT_CLASSES);
  }

  _show(selector) {
    document.querySelectorAll(selector).forEach(el => el.classList.remove('hidden'));
  }

  _hide(selector) {
    document.querySelectorAll(selector).forEach(el => el.classList.add('hidden'));
  }
}
