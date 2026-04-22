/**
 * Scene — Tek bir sahne kartını temsil eden model sınıfı.
 */
export class Scene {
  /**
   * @param {Object} opts
   * @param {string} opts.title
   * @param {string} opts.body
   * @param {string} opts.question
   * @param {'person'|'object'|'self'} opts.type
   * @param {number} opts.number - 1-25 arası sıra
   */
  constructor({ title, body, question, type, number }) {
    this.title = title;
    this.body = body;
    this.question = question;
    this.type = type;
    this.number = number;
  }

  /**
   * "SAHNE №07" formatında etiket.
   * @returns {string}
   */
  get label() {
    const padded = String(this.number).padStart(2, '0');
    return `SAHNE №${padded}`;
  }

  /**
   * Ham SCENES dizisinden Scene nesneleri oluşturur.
   * @param {Array} raw
   * @returns {Scene[]}
   */
  static fromRawList(raw) {
    return raw.map((item, i) => new Scene({
      title: item.title,
      body: item.body,
      question: item.question,
      type: item.type,
      number: i + 1
    }));
  }
}
