/**
 * Emotion — Tek bir duyguyu temsil eden model sınıfı.
 */
export class Emotion {
  /**
   * @param {Object} opts
   * @param {string} opts.name   - Duygu adı (örn. "Sabırsızlık")
   * @param {string} opts.color  - Grup rengi (örn. "Kırmızı")
   * @param {string} opts.family - Aile adı (örn. "Öfke Ailesi")
   * @param {string} opts.emoji  - Görsel etiket
   * @param {number} opts.index  - Grup içindeki sırası (1-10)
   */
  constructor({ name, color, family, emoji, index }) {
    this.name = name;
    this.color = color;
    this.family = family;
    this.emoji = emoji;
    this.index = index;
  }

  /**
   * Renk adından İngilizce/kısaltılmış key üretir
   * — CSS sınıfları (tint-red vs.) için.
   * @returns {string}
   */
  get colorKey() {
    const map = {
      'Kırmızı': 'red',
      'Turuncu': 'orange',
      'Sarı': 'yellow',
      'Yeşil': 'green',
      'Mavi': 'blue',
      'Lacivert': 'navy',
      'Mor': 'purple'
    };
    return map[this.color] || 'red';
  }

  /**
   * Ham grup verisinden tek bir Emotion üretir.
   * @param {Object} group
   * @param {number} idx - 0-tabanlı sıra
   * @returns {Emotion}
   */
  static fromGroup(group, idx) {
    return new Emotion({
      name: group.emotions[idx],
      color: group.name,
      family: group.family,
      emoji: group.emoji,
      index: idx + 1
    });
  }

  /**
   * GROUPS dizisinden 70 Emotion nesnesi üretir.
   * @param {Array} groups
   * @returns {Emotion[]}
   */
  static allFromGroups(groups) {
    const list = [];
    for (const group of groups) {
      for (let i = 0; i < group.emotions.length; i++) {
        list.push(Emotion.fromGroup(group, i));
      }
    }
    return list;
  }
}
