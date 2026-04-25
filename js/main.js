/**
 * main.js — Uygulamanın giriş noktası.
 *
 * Burada:
 *   1. Veri dosyaları import edilir
 *   2. Model nesneleri üretilir (Emotion'lar, Scene'ler)
 *   3. Desteler oluşturulur
 *   4. UI bileşenleri ve view'ler kurulur
 *   5. ViewManager ve GameController başlatılır
 */

import { GROUPS } from './data/emotions.js';
import { SCENES } from './data/scenes.js';

import { Emotion } from './models/Emotion.js';
import { Scene } from './models/Scene.js';
import { Deck } from './models/Deck.js';

import { EmotionCard } from './ui/EmotionCard.js';
import { SceneCard } from './ui/SceneCard.js';
import { MiniEmotion } from './ui/MiniEmotion.js';
import { EmotionListView } from './ui/EmotionListView.js';

import { ViewManager } from './controllers/ViewManager.js';
import { GameController } from './controllers/GameController.js';

/* ============================================================
   DOM seçicileri
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
  emotionListView: {
    view:     '[data-view="emotions"]',
    tabs:     '[data-color-tabs]',
    slider:   '[data-emotion-slider]',
    track:    '[data-slider-track]',
    tapPrev:  '[data-tap-prev]',
    tapNext:  '[data-tap-next]',
    openBtn:  '[data-open-emotion-list]',
    closeBtn: '[data-close-emotion-list]'
  }
};

/* ============================================================
   Boot
   ============================================================ */
function boot() {
  // 1. Model listeleri
  const emotions = Emotion.allFromGroups(GROUPS);
  const scenes = Scene.fromRawList(SCENES);

  // 2. Desteler
  const emotionDeck = new Deck(emotions);
  const sceneDeck = new Deck(scenes);

  // 3. UI bileşenleri
  const emotionCard = new EmotionCard(SELECTORS.emotionCard);
  const sceneCard = new SceneCard(SELECTORS.sceneCard);
  const miniEmotion = new MiniEmotion(SELECTORS.miniEmotion);

  // 4. View Manager
  const viewManager = new ViewManager();

  // 5. Duygu listesi view'i
  const emotionListView = new EmotionListView({
    groups: GROUPS,
    viewManager,
    selectors: SELECTORS.emotionListView
  });

  // 6. Game Controller
  const game = new GameController({
    emotionDeck,
    sceneDeck,
    emotionCard,
    sceneCard,
    miniEmotion
  });

  // 7. Başlangıç view'ini ayarla ve oyunu başlat
  viewManager.show('game');
  game.start();

  // Geliştirme rahatlığı için
  window.__game = game;
  window.__view = emotionListView;
  window.__vm   = viewManager;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* ============================================================
   Kopyala/yapıştır/seç engelleme
   ============================================================ */
// Sağ tık menüsünü engelle
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Cmd/Ctrl+A ile tüm metni seçmeyi engelle
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
  }
});

// Sürükle bırak (drag) engelle
document.addEventListener('dragstart', (e) => e.preventDefault());

// Kopyalamayı engelle (yine de Cmd+C basılırsa)
document.addEventListener('copy', (e) => e.preventDefault());
