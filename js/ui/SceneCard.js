/**
 * SceneCard — Sahne kartının render'ından sorumlu sınıf.
 */
export class SceneCard {
  constructor(selectors) {
    this._root     = document.querySelector(selectors.root);
    this._number   = document.querySelector(selectors.number);
    this._title    = document.querySelector(selectors.title);
    this._body     = document.querySelector(selectors.body);
    this._question = document.querySelector(selectors.question);

    this._scene = null;
  }

  /**
   * Sahne kartını gösterir.
   * @param {import('../models/Scene.js').Scene} scene
   */
  show(scene) {
    this._scene = scene;
    this._number.textContent   = scene.label;
    this._title.textContent    = scene.title;
    this._body.textContent     = scene.body;
    this._question.textContent = scene.question;

    this._root.classList.remove('hidden');
    this._root.classList.add('enter');
  }

  hide() {
    this._root.classList.add('hidden');
    this._root.classList.remove('enter');
    this._scene = null;
  }

  get current() { return this._scene; }
}
