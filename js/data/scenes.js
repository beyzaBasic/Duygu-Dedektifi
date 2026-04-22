/**
 * scenes.js — 25 sahne kartı (yetişkin versiyonu)
 *
 * Her sahne:
 *   - title:    Sahne başlığı
 *   - body:     Sahnenin anlatımı (2-3 cümle)
 *   - question: Sahnenin sonundaki soru
 *   - type:     'person' | 'object' | 'self'
 *               person → "Bu duygu X'in iç sesi olsa, ona ne derdi?"
 *               object → "Bu duygu [nesne] olsa, sana ne derdi?"
 *               self   → "Bu duygu sende olsa, o an ne yapardın?"
 */

export const SCENES = [
  {
    title: 'Taksici ve Navigasyon',
    body: 'Taksici üç kere aynı çıkışı kaçırdı. Navigasyon her seferinde sakin bir sesle "rotayı yeniden hesaplıyorum" diyor. Arka koltuktaki yolcu telefona bakıyor, başını kaldırmıyor.',
    question: 'Bu duygu taksicinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Buzdolabı Mıknatısı',
    body: 'Buzdolabının kapağında on iki tane mıknatıs var. On biri düz duruyor, bir tanesi hep eğik. Kim düzeltirse düzeltsin, ertesi gün yine eğik.',
    question: 'Bu duygu o mıknatıs olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Yanlış Kat',
    body: 'Asansörden indin, koridor tanıdık geldi ama kapı numaraları yabancı. Anahtarı çıkardın, kilide soktun, girmiyor. Bir kat yukarı çıkmışsın. Alt katta biri kapıyı açıyor, seni bekliyor olabilir.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Düğün Fotoğrafçısı',
    body: 'Fotoğrafçı bütün aileyi topladı, herkes gülümsüyor, dayı sürekli gözlerini kırpıyor. On ikinci karede hâlâ aynı kare, hâlâ aynı gülümseme, dayı yine kırptı.',
    question: 'Bu duygu fotoğrafçının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Balkon Çiçeği',
    body: 'Balkondaki üç saksıdan ikisi kurudu. Ortadaki çiçek açtı bu hafta, kimsenin özel ilgisi olmadan. Komşu balkonlardan görünmüyor bile.',
    question: 'Bu duygu o çiçek olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Market Kuyruğu',
    body: 'Marketteki kuyrukta arkandaki kişi sürekli iç çekiyor. Elinde bir tek ekmek var, senin sepetin dolu. Kasada fiyat bakılıyor, üç dakika oldu.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kumaş Oda',
    body: 'Bir odadasın, duvarlar kumaş, hafifçe dalgalanıyor. Pencere var ama dışarısı görünmüyor, sadece ışık geliyor. Zemin sıcak.',
    question: 'Bu duygu o kumaş olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Asansör Muhabbeti',
    body: 'Asansöre komşu bindi, "hava değişti değil mi" dedi. Katına gelene kadar dört kat vardı, henüz bir kat geçti. Komşu tekrar "evet epey değişti" dedi.',
    question: 'Bu duygu komşunun iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Yengeç',
    body: 'Sahilde yürüyorsun, bir yengeç senin hızına eşlik ediyor, yan yan. Durdun, o da durdu. Yürüdün, o da yürüdü. Beş dakika oldu.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Aile Yemeği',
    body: 'Teyze masanın ucundan üçüncü kez "tadı nasıl olmuş" diye sordu. Sofrada sekiz kişi var, herkes farklı bir konuşmanın ortasında. Teyze tabağa bakıyor, kaşık elinde duruyor.',
    question: 'Bu duygu teyzenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Çamaşır Makinesi',
    body: 'Makine döner durumda, camın içinde kırmızı bir çorap dönüyor tek başına. Beyaz çamaşırların arasına karışmış, ama henüz hiçbirine değmemiş gibi.',
    question: 'Bu duygu o çorap olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Göl Ortasındaki Masa',
    body: 'Bir gölün ortasında yürüyorsun, su bileklerine kadar, tuzlu. Tam ortada bir masa, iki sandalye. Bir sandalyede kimse yok, diğeri sana bakıyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Berber',
    body: 'Berber müşterinin saçını keserken elindeki makası durdurdu, aynaya baktı, başını hafifçe yana yatırdı. Müşteri gözlerini kapalı tutuyor. Bir makas daha kesti, yine baktı.',
    question: 'Bu duygu berberin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Kargo',
    body: 'Zil çaldı, kargocu geldi. Paketin üstünde senin adın yazıyor ama hiçbir şey sipariş etmemişsin. Kargocu acelesi var gibi, "imzalayın" diyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kahve Lekesi',
    body: 'Beyaz gömleğin göğsünde bir kahve lekesi, tam kalbin üstünde. Sabah dökülmüş, daha fark etmemişsin. İş toplantısına girmek üzeresin.',
    question: 'Bu duygu o leke olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Gece Bahçesi',
    body: 'Bir bahçede geceleyin yürüyorsun, çiçekler kendi ışıklarıyla yanıyor. Hiçbirinin rengi aynı değil. Bir tanesi sen geçerken söndü, sonra yine yandı.',
    question: 'Bu duygu o çiçek olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Çocuk Parkı',
    body: 'Anne bankta oturuyor, telefonuna bakıyor, çocuk kaydıraktan beşinci kez iniyor. "Anne bak" diyor her inişte. Anne "bakıyorum" diyor, başını kaldırmadan.',
    question: 'Bu duygu annenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Ayakkabı',
    body: 'Kapıda ayakkabılarını giyiyorsun, sol ayakkabı sağ ayakkabıdan bir numara büyük. Dün öyle değildi. Geç kaldın.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Toplantı',
    body: 'On iki kişilik toplantıda biri sunum yapıyor, slaytlar geçiyor. Masanın ucunda biri not alıyor, defterinde bambaşka bir şey çiziyor — bir kuş, ayrıntılı.',
    question: 'Bu duygu çizenin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Otel Kahvaltısı',
    body: 'Otelin açık büfesinde tabağını hazırladın, dolu dolu. Masaya oturdun, karşındaki masada biri aynı tabağı yapmış, aynı sırayla. Göz göze geldiniz.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Büyüyen Merdiven',
    body: 'Merdiveni çıkıyorsun, her basamakta bir üst basamak eklenen bir merdiven. Aşağı bakıyorsun, başladığın yer hâlâ yakın. Yukarı bakıyorsun, sonu yok.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Çay Bardağı',
    body: 'Masada iki çay bardağı var, biri senin, biri karşındakinin. Seninki soğudu, diğerine kimse dokunmadı. Konuşma on beş dakika önce bitti.',
    question: 'Bu duygu o bardak olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Dans Eden Adam',
    body: 'Otobüs durağında bir adam kulaklığıyla dans ediyor, hafifçe, kendi kendine. Durakta beş kişi daha var, kimse bakmıyor. Adam gözlerini kapatmış.',
    question: 'Bu duygu adamın iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Kitapçı',
    body: 'Kitapçıda bir kitap yerinden hafif dışarı çıkmış, diğerleri hizada. Kimin çektiği belli değil. Sen geçerken gözüne takıldı.',
    question: 'Bu duygu o kitap olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Kapıdaki Not',
    body: 'Eve geldin, kapında küçük bir not: "dönünce konuşalım." El yazısı tanıdık ama kimin olduğunu çıkaramıyorsun. Kapı kilitli, içeride kimse olmadığını biliyorsun.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  }
];
