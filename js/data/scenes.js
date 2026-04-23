/**
 * scenes.js — 50 sahne kartı (yetişkin versiyonu)
 *
 * Her sahne:
 *   - title:    Sahne başlığı
 *   - body:     Sahnenin anlatımı (1-2 cümle, tek detay)
 *   - question: Sahnenin sonundaki soru
 *   - type:     'person' | 'object' | 'self'
 *               person → "Bu duygu X'in iç sesi olsa, ona ne derdi?"
 *               object → "Bu duygu [nesne] olsa, sana ne derdi?"
 *               self   → "Bu duygu sende olsa, o an ne yapardın?"
 *
 * Tasarım prensibi: Askıda bir an, tek bir kıpırtı, duyguya alan bırakan nötr sahne.
 */

export const SCENES = [
  {
    title: 'Taksici ve Navigasyon',
    body: 'Taksi durdu. Şoför dikiz aynasından sana bakıyor.',
    question: 'Bu duygu şoförün iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Buzdolabı Mıknatısı',
    body: 'Buzdolabında bir mıknatıs eğik duruyor.',
    question: 'Bu duygu o mıknatıs olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Yanlış Kat',
    body: 'Anahtar kilide girmiyor. Yanlış kattasın.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Düğün Fotoğrafçısı',
    body: 'Fotoğrafçı kareyi hazırladı. Kimse gülümsemiyor.',
    question: 'Bu duygu fotoğrafçının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Balkon Çiçeği',
    body: 'Balkonda bir çiçek açmış. Kimse fark etmemiş.',
    question: 'Bu duygu o çiçek olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Market Kuyruğu',
    body: 'Kuyruktasın. Arkandaki kişi iç çekiyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kumaş Oda',
    body: 'Bir odadasın, duvarlar kumaş ve dalgalanıyor.',
    question: 'Bu duygu o kumaş olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Asansör Muhabbeti',
    body: 'Asansörde komşuyla yalnızsın. "Hava değişti" demiş.',
    question: 'Bu duygu komşunun iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Yengeç',
    body: 'Sahilde bir yengeç seninle yürüyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Aile Yemeği',
    body: 'Teyze masanın ucundan sordu: "tadı nasıl olmuş?"',
    question: 'Bu duygu teyzenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Çamaşır Makinesi',
    body: 'Beyaz çamaşırların arasına bir kırmızı çorap karışmış.',
    question: 'Bu duygu o çorap olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Göl Ortasındaki Masa',
    body: 'Bir gölün ortasında masa duruyor. İki sandalye.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Berber',
    body: 'Berber makası durdurdu, aynaya bakıyor.',
    question: 'Bu duygu berberin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Kargo',
    body: 'Kargocu paketi uzattı. Sipariş vermemiştin.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kahve Lekesi',
    body: 'Gömleğinin üstünde bir kahve lekesi. Tam kalbinin üstünde.',
    question: 'Bu duygu o leke olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Gece Bahçesi',
    body: 'Gece bir bahçedesin. Çiçekler ışık saçıyor.',
    question: 'Bu duygu o ışık olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Çocuk Parkı',
    body: 'Çocuk kaydıraktan iniyor: "Anne, bak!"',
    question: 'Bu duygu annenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Ayakkabı',
    body: 'Ayakkabının teki bir numara büyük gelmiş.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Toplantı',
    body: 'Toplantıda biri defterine kuş çiziyor.',
    question: 'Bu duygu çizenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Otel Kahvaltısı',
    body: 'Karşı masada biri seninle aynı tabağı yapmış.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Büyüyen Merdiven',
    body: 'Bir merdiven çıkıyorsun. Her basamakta bir yenisi ekleniyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Çay Bardağı',
    body: 'Masada iki çay bardağı. İkisine de dokunulmamış.',
    question: 'Bu duygu o bardak olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Dans Eden Adam',
    body: 'Durakta bir adam gözleri kapalı, kendi kendine dans ediyor.',
    question: 'Bu duygu adamın iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Kitapçı',
    body: 'Raftan bir kitap hafifçe çıkmış. Diğerleri hizada.',
    question: 'Bu duygu o kitap olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Kapıdaki Not',
    body: 'Kapında bir not: "dönünce konuşalım."',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Metro Vagonu',
    body: 'Metroda biri aynı sesli mesajı tekrar tekrar dinliyor.',
    question: 'Bu duygu o kişinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Uyuyan Laptop',
    body: 'Laptop uykuya daldı. Yarım bir cümle kalmıştı ekranda.',
    question: 'Bu duygu o ekran olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Taksi Şoförü Müziği',
    body: 'Takside bilmediğin bir şarkı çalıyor. Başını sallıyorsun.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Zeytin Tabağı',
    body: 'Dayı zeytin tabağını kendine çekti. Hala fark etti.',
    question: 'Bu duygu dayının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Sahaf',
    body: 'Sahaf vitrininde bir kitap açık. Güneş aynı satırda.',
    question: 'Bu duygu o satır olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Alışveriş Arabası',
    body: 'Market arabasının tekeri sürekli sağa çekiyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Ayın Yarısı',
    body: 'Gökyüzünde ay iki yarıma bölünmüş.',
    question: 'Bu duygu o yarım olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Köpek Parkı',
    body: 'Köpek kaçtı. Sahibi "gel" diyor.',
    question: 'Bu duygu sahibinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Pilates Hocası',
    body: 'Hoca "gülümseyin" dedi. Bir kişinin yüzü değişmedi.',
    question: 'Bu duygu o kişinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Dolmuş Kapısı',
    body: 'Dolmuşta para elinde uzanmış. Şoför "geçtik onu" dedi.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Balon',
    body: 'Kafenin tavanında bir balon takılı kalmış.',
    question: 'Bu duygu o balon olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Kuaför Aynası',
    body: 'Kuaförden çıktın. Aynada tanımadığın biri.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Oto Tamircisi',
    body: 'Tamirci motora eğildi. Hiç kıpırdamıyor.',
    question: 'Bu duygu tamircinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Parktaki Salıncak',
    body: 'Salıncağa oturdun. Ayakların yere değiyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Donmuş Havuz',
    body: 'Yaz ortası, havuz donmuş. Buzun altında yapraklar dönüyor.',
    question: 'Bu duygu o buz olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Banka Kuyruğu',
    body: 'Bankada önündeki kadın sıradan çıkıp giriyor.',
    question: 'Bu duygu kadının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Paket İçindeki Not',
    body: 'Paketin içinde bir el yazısı not: "umarım seversin."',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kahve Poşeti',
    body: 'Kahve poşetinin köşesinde ufak bir delik.',
    question: 'Bu duygu o delik olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Garson',
    body: 'Garson siparişi yanlış masaya getirdi. Mutfağa dönüyor.',
    question: 'Bu duygu garsonun iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Büfe Ağacı',
    body: 'Bir ağacın dallarında plastik su şişeleri asılı.',
    question: 'Bu duygu o ağaç olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Eve Giren Kedi',
    body: 'Tanımadığın bir kedi kapıdan girdi. Sende kedi yok.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Fakülte Bahçesi',
    body: 'Bankta bir adam yemek yiyor. Defter açık.',
    question: 'Bu duygu adamın iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Hep Aynı Saat',
    body: 'Saate her baktığında aynı saat: 14:47.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Market Müziği',
    body: 'Marketin müziği bir saniye durdu. Kimse fark etmedi.',
    question: 'Bu duygu o sessizlik olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Ortak Fotoğraf',
    body: 'Eski bir fotoğrafta sen ve hatırlamadığın biri.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  }
];
