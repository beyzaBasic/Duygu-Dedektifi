/**
 * emotions.js — 7 duygu grubu, her grupta 10 duygu (toplam 70)
 *
 * Her grup:
 *   - name:   Renk adı (Kırmızı, Turuncu, ...)
 *   - emoji:  Görsel etiket
 *   - family: Ailenin adı (Öfke Ailesi, ...)
 *   - emotions: 10 duygudan oluşan dizi
 */

export const GROUPS = [
  {
    name: 'Kırmızı',
    emoji: '❤️',
    family: 'Öfke Ailesi',
    emotions: [
      'Nefret', 'Kızgınlık', 'Arzu', 'Sabırsızlık', 'İnat',
      'İsyan', 'Hınç', 'Tutku', 'Hırs', 'Aşk'
    ]
  },
  {
    name: 'Turuncu',
    emoji: '🧡',
    family: 'Heyecan Ailesi',
    emotions: [
      'Heyecan', 'Coşku', 'Merak', 'Cesaret', 'Şaşkınlık',
      'Heves', 'İlham', 'Yaratıcılık', 'Şevk', 'Büyülenme'
    ]
  },
  {
    name: 'Sarı',
    emoji: '💛',
    family: 'Mutluluk Ailesi',
    emotions: [
      'Mutluluk', 'Neşe', 'Umut', 'Gurur', 'Özgürlük',
      'Tatmin', 'Keyif', 'Rahatlama', 'Özgüven', 'Zafer'
    ]
  },
  {
    name: 'Yeşil',
    emoji: '💚',
    family: 'Sevgi Ailesi',
    emotions: [
      'Sevgi', 'Şefkat', 'Güven', 'Merhamet', 'Şükran',
      'Huzur', 'Bağışlama', 'Aidiyet', 'Empati', 'Sakinlik'
    ]
  },
  {
    name: 'Mavi',
    emoji: '💙',
    family: 'Üzüntü Ailesi',
    emotions: [
      'Üzüntü', 'Özlem', 'Yalnızlık', 'Pişmanlık', 'Hayal Kırıklığı',
      'Dışlanmışlık', 'Boşluk', 'Tükenmişlik', 'Çaresizlik', 'Melankoli'
    ]
  },
  {
    name: 'Lacivert',
    emoji: '🔹',
    family: 'Kararlılık Ailesi',
    emotions: [
      'Kararlılık', 'Hayranlık', 'Sadakat', 'Sorumluluk', 'Kıskançlık',
      'Adalet', 'Suçluluk', 'Kibir', 'Onur', 'Rekabet'
    ]
  },
  {
    name: 'Mor',
    emoji: '💜',
    family: 'Korku Ailesi',
    emotions: [
      'Korku', 'Kaygı', 'Utanç', 'Kafa Karışıklığı', 'Güvensizlik',
      'Gözü Kalmak', 'Yetersizlik', 'Mahcubiyet', 'Tedirginlik', 'Panik'
    ]
  }
];
