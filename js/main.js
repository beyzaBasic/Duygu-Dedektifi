/**
 * main.js — Uygulamanın giriş noktası.
 *
 * Burada:
 *   1. Veri dosyaları import edilir
 *   2. Model nesneleri üretilir (Emotion'lar, Scene'ler)
 *   3. Desteler oluşturulur
 *   4. UI bileşenleri DOM seçicileriyle bağlanır
 *   5. GameController kurulur ve start() edilir
 *
 * Tek bir yerden tüm bağımlılıklar görülebilsin diye
 * dependency-injection tarzı kullanılıyor.
 */

import { GROUPS } from './data/emotions.js';
import { SCENES } from './data/scenes.js';

import { Emotion } from './models/Emotion.js';
import { Scene } from './models/Scene.js';
import { Deck } from './models/Deck.js';

import { EmotionCard } from './ui/EmotionCard.js';
import { SceneCard } from './ui/SceneCard.js';
import { MiniEmotion } from './ui/MiniEmotion.js';
import { EmotionListModal } from './ui/EmotionListModal.js';

import { GameController } from './controllers/GameController.js';

/* ============================================================
   DOM seçicileri — HTML'deki data-* attribute'larına karşılık
   ============================================================ */
const SELECTORS = {
  emotionCard: {
    wrapper: '[data-emotion-card-wrapper]',
    card:    '[data-emotion-card]',
    front:   '[data-emotion-front]',
    name:    '[data-emotion-name]'
  },
  sceneCard: {
    root:     '[data-scene-card]',
    number:   '[data-scene-number]',
    title:    '[data-scene-title]',
    body:     '[data-scene-body]',
    question: '[data-scene-question]'
  },
  miniEmotion: {
    root:  '[data-mini-emotion]',
    chip:  '[data-mini-chip]',
    label: '[data-mini-label]'
  },
  emotionListModal: {
    modal:       '[data-emotion-list-modal]',
    panel:       '[data-emotion-panel]',
    tabs:        '[data-color-tabs]',
    slider:      '[data-emotion-slider]',
    track:       '[data-slider-track]',
    familyLabel: '[data-current-family]',
    openBtn:     '[data-open-emotion-list]',
    closeBtn:    '[data-modal-close]'
  }
};

/* ============================================================
   Boot
   ============================================================ */
function boot() {
  // 1. Model listelerini üret — bu çağrılar Adım 2'de çalışır hale gelecek
  const emotions = Emotion.allFromGroups(GROUPS);
  const scenes = Scene.fromRawList(SCENES);

  // 2. Desteler
  const emotionDeck = new Deck(emotions);
  const sceneDeck = new Deck(scenes);

  // 3. UI bileşenleri
  const emotionCard = new EmotionCard(SELECTORS.emotionCard);
  const sceneCard = new SceneCard(SELECTORS.sceneCard);
  const miniEmotion = new MiniEmotion(SELECTORS.miniEmotion);

  // Duygu listesi modal'ı — GROUPS'u direkt alıyor (Emotion modeli yerine ham veri)
  const emotionListModal = new EmotionListModal({
    groups: GROUPS,
    selectors: SELECTORS.emotionListModal
  });

  // 4. Controller
  const game = new GameController({
    emotionDeck,
    sceneDeck,
    emotionCard,
    sceneCard,
    miniEmotion
  });

  // 5. Başlat
  game.start();

  // Geliştirme rahatlığı için global'e koy — istersen sil
  window.__game = game;
  window.__modal = emotionListModal;
}

// DOM hazır olunca boot et
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
