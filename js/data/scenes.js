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
  },
  {
    title: 'Metro Vagonu',
    body: 'Metro vagonunda biri sesli mesaj dinliyor, kulaklığı yok. Üç saniyelik bir mesaj, tekrar tekrar dinliyor. Etraftakiler konuşmayı ezberledi.',
    question: 'Bu duygu o kişinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Uyuyan Laptop',
    body: 'Masada açık duran laptop uykuya daldı, ekran karardı. Sen kalkmadın, o karar verdi. Klavyede yarım bir cümle duruyor ekranda, az önce vardı.',
    question: 'Bu duygu o karanlık ekran olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Taksi Şoförü Müziği',
    body: 'Takside şoför müziği açtı, hiç tanımadığın bir şarkı. İkinci dakikada başını sallamaya başladığını fark ettin. Şoför dikiz aynasından sana bakıyor, gülümsüyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Zeytin Tabağı',
    body: 'Yemekte dayı zeytinleri kendine çekti, üç kez. Halası fark etti, bir şey demedi. Dayı dördüncüsünü alırken halayla göz göze geldi.',
    question: 'Bu duygu dayının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Sahaf',
    body: 'Sahaf vitrininde bir kitap, sayfası açık bırakılmış. Güneş her gün aynı satırın üstünde duruyor, kâğıt o bölgeden sararmış. Satır bir soruyla bitiyor.',
    question: 'Bu duygu o sararmış satır olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Alışveriş Arabası',
    body: 'Market çıkışında arabayı bıraktın, sol tekeri inatla sağa çekiyor. Yolun yarısında fark ettin, geri dönmek çok uzak. Bir yaşlı adam "bende aynısı olurdu" dedi sana gülümseyerek.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Ayın Yarısı',
    body: 'Gece gökyüzüne baktın, ay ikiye bölünmüş. Bir yarısı olması gereken yerde, diğer yarısı şehrin öbür tarafında duruyor, aynı yükseklikte. İkisi arasında hiç yıldız yok.',
    question: 'Bu duygu o eksik yarı olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Köpek Parkı',
    body: 'Köpek sahibi tasmayı tutmayı unutmuş, köpek koşuyor. Sahip "gel gel" diyor, ses her seferinde biraz daha tiz çıkıyor. Köpek duruyor, sahibine bakıyor, bir kez daha koşuyor.',
    question: 'Bu duygu sahibinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Pilates Hocası',
    body: 'Sekiz kişilik grup pilates dersinde hocanın "gülümseyin" dediği an. Yedi kişi gülümsedi. Birisi duydu ama yüzü hiç değişmedi.',
    question: 'Bu duygu o kişinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Dolmuş Kapısı',
    body: 'Dolmuşa bindin, paranı uzattın, şoför "geçtik onu" dedi. Arkadakiler seni izliyor, sen onları. Şoför devam etti, sen elinde parayla ortada kaldın.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Balon',
    body: 'Bir çocuğun elinden kaçmış bir balon tavanda takılı kaldı, kafede. Üç gün oldu, hâlâ orada. Her gün biraz inmiş gibi görünüyor ama inmiyor.',
    question: 'Bu duygu o balon olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Kuaför Aynası',
    body: 'Kuaförde yeni saçınla ayaktan ilk kez kalktın. Tanımadığın biri sana bakıyor aynadan. Hoşuna gitti mi, bilmiyorsun, yüzün henüz karar vermedi.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Oto Tamircisi',
    body: 'Tamirci arabanın motoruna eğilmiş, bir dakikadır hiç hareket etmiyor. Sonunda doğruldu, ellerini sildi, arabaya baktı, bir daha eğildi. Tek kelime etmedi.',
    question: 'Bu duygu tamircinin iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Parktaki Salıncak',
    body: 'Park boş, salıncağa oturdun, on yıldır oturmamıştın. Ayaklar yerde kalıyor, artık küçük geldi. Yine de bir iki kez ittin kendini.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Donmuş Havuz',
    body: 'Bir bahçede havuz donmuş, yaz ortasında. Buzun altında yaprakların yavaşça döndüğünü görüyorsun, akıntı gibi. Hiç ses yok.',
    question: 'Bu duygu o buz olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Banka Kuyruğu',
    body: 'Bankada numara 47, şu an 32\'de. Önündeki kadın sıra geldikçe sıradan çıkıyor, tekrar giriyor, yine çıkıyor. Hiç numarası değişmedi.',
    question: 'Bu duygu kadının iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Paket İçindeki Not',
    body: 'Sipariş verdiğin pantolon geldi, paketin içinde küçük bir el yazısı not: "umarım seversin, iyi günlerde giy." Kargocunun yazısı değil. Üreticinin de değil.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Kahve Poşeti',
    body: 'Kahve poşetinin köşesinde bir delik var, farkında değildin. Çekmecede her yer kahve izi — üç gündür dökülüyor. Poşet hâlâ yarı dolu.',
    question: 'Bu duygu o delik olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Garson',
    body: 'Kalabalık restoranda garson altıncı masaya sipariş getiriyor, yanlış masa. "Affedersiniz" diyor, geri dönüyor. Mutfağa girmeden önce bir saniye durup nefes aldı.',
    question: 'Bu duygu garsonun iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Büfe Ağacı',
    body: 'Sahilde bir ağaç, dallarında plastik su şişeleri asılı, meyve gibi. Hepsi dolu, hepsi kapalı. Kimsenin bilmediği bir bahçıvan her sabah yenilerini takıyor olmalı.',
    question: 'Bu duygu o ağaç olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Eve Giren Kedi',
    body: 'Kapıyı açtın, tanımadığın bir kedi içeri daldı, doğruca mutfağa gitti. Kedi mama tabağının önünde durdu, sana baktı, bekliyor. Sende kedi bile yok.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Fakülte Bahçesi',
    body: 'Fakülte bahçesinde bir adam bankta tek başına yemek yiyor. Her lokma arasında defterine bir şey yazıyor, sonra etrafına bakıyor. Defteri kapattı, bir daha açtı.',
    question: 'Bu duygu adamın iç sesi olsa, ona ne derdi?',
    type: 'person'
  },
  {
    title: 'Hep Aynı Saat',
    body: 'Bütün gün saate her baktığında aynı saat: 14:47. Telefon, duvar saati, mikrodalga. İnsanlar normal hareket ediyor, trafik akıyor, sadece saatler duruyor.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  },
  {
    title: 'Market Müziği',
    body: 'Marketin müziği birdenbire bir saniye durdu, sonra devam etti. Sadece sen fark ettin. Aynı noktada yine duracakmış gibi bir his var, duruyorsun, bekliyorsun.',
    question: 'Bu duygu o sessizlik olsa, sana ne derdi?',
    type: 'object'
  },
  {
    title: 'Ortak Fotoğraf',
    body: 'On yıl önce çekilmiş bir fotoğrafta sensin, yanında hatırlamadığın biri var. Yüzü tanıdık değil, kolun omzunda, ikiniz de gülüyorsunuz. Fotoğrafın arkasında tarih yazıyor, başka bir şey yok.',
    question: 'Bu duygu sende olsa, o an ne yapardın?',
    type: 'self'
  }
];
