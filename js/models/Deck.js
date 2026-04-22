/**
 * Deck — Generic kart destesi.
 * Hem duygu (70) hem sahne (25) destesi için kullanılır.
 */
export class Deck {
  /**
   * @param {Array} items
   */
  constructor(items = []) {
    this._original = [...items];
    this._pile = [...items];
  }

  get remaining() { return this._pile.length; }
  get total()     { return this._original.length; }
  get isEmpty()   { return this._pile.length === 0; }

  /**
   * Fisher-Yates karıştırma.
   * @returns {this}
   */
  shuffle() {
    for (let i = this._pile.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._pile[i], this._pile[j]] = [this._pile[j], this._pile[i]];
    }
    return this;
  }

  /**
   * Tepeden bir kart çeker (desteden çıkarır).
   * Deste boşsa otomatik resetler (sonsuz tur için).
   * @returns {*|null}
   */
  draw() {
    if (this.isEmpty) {
      this.reset().shuffle();
    }
    return this._pile.pop() || null;
  }

  /**
   * Desteyi orijinaline döndürür ve karıştırır.
   * @returns {this}
   */
  reset() {
    this._pile = [...this._original];
    return this;
  }

  /**
   * Pas hakkı: çekilen kartı geri koyar ve karıştırır.
   * @param {*} card
   * @returns {this}
   */
  putBack(card) {
    if (card != null) {
      this._pile.push(card);
      this.shuffle();
    }
    return this;
  }
}
