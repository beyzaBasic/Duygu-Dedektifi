/**
 * scenes.js — sahne kartları
 *
 * groups: hangi duygu gruplarıyla uyumlu olduğunu belirtir
 *   'red'    → Öfke Ailesi
 *   'orange' → Heyecan Ailesi
 *   'yellow' → Mutluluk Ailesi
 *   'green'  → Sevgi Ailesi
 *   'blue'   → Üzüntü Ailesi
 *   'navy'   → Kararlılık Ailesi
 *   'purple' → Korku Ailesi
 */

var SCENES_GENC = [
  {
    title: "Sınav Kağıdı",
    body: "Sınav kağıtları dağıtıldı. Yanındakine baktın, o da tam o anda sana baktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'blue', 'orange', 'purple', 'navy', 'yellow']
  },
  {
    title: "Yanlış Kişiye Mesaj",
    body: "Arkadaşın hakkında şikayet mesajı attın. Ama tıkladığında o kişiye gitmiş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'blue']
  },
  {
    title: "Crush Anı",
    body: "Çok beğendiğin kişi tam yanından geçerken tökezleyip düştün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'red', 'orange', 'green']
  },
  {
    title: "Viral Olan Şey",
    body: "Okul koridorunda çekilen komik videon akşama kadar herkese yayıldı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Sıra Sende",
    body: "Grupta herkes bir şeyler paylaştı. Sıra sana geldi, herkes seni bekliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple', 'navy', 'red', 'green']
  },
  {
    title: "Grup Fotoğrafı",
    body: "Birlikte çekilen fotoğrafın linki geldi. Açmak üzeresin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple', 'green', 'blue', 'red']
  },
  {
    title: "İlk Mesaj",
    body: "Birine ilk mesajı attın. Teslim edildi ama okunmadı. Saatler geçiyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Sevilen Şarkı",
    body: "Kulaklıkla dinlediğin şarkıyı farkında olmadan yüksek sesle söylemeye başlamışsın. Herkes duymuş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Yeni Numara",
    body: "Kayıtlı olmayan bir numaradan mesaj geldi. 'Merhaba, sen misin?' diye soruyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Efsane Gol",
    body: "Maçın son dakikasında golü sen attın ama yanlış kaleye.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'blue', 'navy']
  },
  {
    title: "Ödev Kopyası",
    body: "Ödevin sorularını arkadaşına attın. Öğretmen ikisini de çağırdı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'navy', 'blue']
  },
  {
    title: "Yazıp Silmek",
    body: "Uzun bir şey yazdın. Okudun. Sildın. Tekrar yazmaya başladın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'purple', 'blue', 'red', 'green', 'navy']
  },
  {
    title: "Veda Anı",
    body: "Uzun süredir devam eden bir şey bugün son buluyor. Herkes dağılmak üzere, son birkaç dakika kaldı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'navy']
  },
  {
    title: "Sürpriz Parti",
    body: "Seninle dalga geçtiklerini sanıyordun ama gerçekten sana sürpriz hazırlamışlar.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple', 'green']
  },
  {
    title: "Kapıda Duran",
    body: "Buluşmaya erken geldin, bekliyorsun. Tanımadığın biri yanına gelip oturdu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'green', 'blue', 'red']
  },
  {
    title: "Ödül Sürprizi",
    body: "İsmini okudular. Bir ödül alacağını hiç beklemiyordun, herkes alkışlıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['yellow', 'orange', 'purple', 'green']
  },
  {
    title: "Sınıf Temsili",
    body: "Sınıf başkanı seçiminde adını bile koymamışken herkes seni aday gösterdi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'yellow', 'orange', 'navy']
  },
  {
    title: "Kontrolörün Pili",
    body: "Online oyunun finaline 2 dakika kala kontrolörün titredi. Pil bitiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'orange', 'navy']
  },
  {
    title: "Komik İfade",
    body: "Fotoğraf çekilirken yaptığın komik yüz ifadesi okul gazetesinin kapağına çıktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Hazırlıksız Soru",
    body: "Hiç beklemediğin bir anda biri 'Sen ne düşünüyorsun?' diye sordu. Herkes seni bekliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'purple', 'yellow', 'red', 'navy', 'blue']
  },
  {
    title: "Beklenmedik Haber",
    body: "Bir yerden beklenmedik bir haber geldi. İçerik tam beklediğinin tersiydi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'blue', 'yellow', 'red', 'purple', 'navy']
  },
  {
    title: "Aile Masası",
    body: "Aile yemeğinde büyükler seni konu edinen bir şeyi konuşmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Son Gün",
    body: "Bugün bir şeyin son günü. Birazdan sona erecek.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'navy']
  },
  {
    title: "Konser Önü",
    body: "Sevdiğin sanatçının konserinde tam ön sıraya geldin. Müzik başlamak üzere.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'red', 'green']
  },
  {
    title: "Konu Değişti",
    body: "Arkadaş grubunda herkes bir şeyi konuşurken tam söz alacaktın. O an konu değişti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'blue', 'orange', 'purple', 'green']
  },
  {
    title: "Kayıp Şarj",
    body: "Önemli bir yerden çıkmak üzeresin ama telefon ölüyor, şarjın yok.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Maç Sonrası",
    body: "Maçı kazandınız. Herkes sevinirken takım kaptanı sana baktı ve teşekkür etti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['yellow', 'navy', 'green']
  },
  {
    title: "Sunum Çökmesi",
    body: "Hazırladığın sunumun dosyası bozuldu. Öğretmen adını okudu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'blue', 'navy']
  },
  {
    title: "Şehir Haberi",
    body: "Ailenin başka şehre taşınacağını öğrendin. Bunu okul arkadaşlarına söylemek üzeresin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'purple', 'green']
  },
  {
    title: "Çift Randevu",
    body: "İki ayrı arkadaş grubu seni aynı günün aynı saatine davet etti. İkisine de evet demiştin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Asansör Şarkısı",
    body: "Asansörde yalnız olduğunu sanarak şarkı söylemeye başladın. Kapı açıldı, içeride üç kişi duruyordu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Tanıdık Mı?",
    body: "Karşıdan gelen birine el salladın. O da el salladı. Daha yakına gelince hiç tanımadığını anladın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Beklenen Cevap",
    body: "Saatlerdir cevap beklediğin mesaja nihayet 'gördü' işareti düştü. Ama cevap hâlâ gelmiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'blue', 'purple', 'red']
  },
  {
    title: "Gülmeme Savaşı",
    body: "Çok ciddi bir ortamda komik bir şey aklına geldi. Gülmemeye çalıştıkça daha çok gülüyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Sokak Müzisyeni",
    body: "Kalabalıkta yürürken sokak müzisyeni tam önünde durdu ve sana bakarak çalmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Kahve Felaketi",
    body: "Önemli bir yere gitmeden on dakika önce üstüne kahve döktün. Değişecek kıyafetin yok.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Sabah Bildirimi",
    body: "Telefon çaldı. Sabah yeni bir bildirim — bugün bir şey başlıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Yıllar Sonra",
    body: "Yıllardır görmediğin biriyle aynı yerde karşılaştın. İkiniz de ne diyeceğinizi bilemediniz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'blue', 'green', 'yellow']
  },
  {
    title: "Bilet Dramı",
    body: "Konserin biletini almak için tam kapanma saatinde sayfayı açtın. Sayfa yüklenmeye devam ediyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['red', 'purple', 'orange']
  },
  {
    title: "Sıra Sıkıntısı",
    body: "Uzun kuyrukta yanlışlıkla sıra atladığını fark ettin. Arkandakiler seni izliyor ama kimse bir şey demiyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'purple', 'navy']
  },
  {
    title: "Doğum Günü Baskını",
    body: "Kafede bir anda garsonlar sana doğum günü şarkısı söylemeye başladı. Bütün restoran izliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['yellow', 'orange', 'purple', 'green']
  },
  {
    title: "ATM Dramı",
    body: "ATM'ye kartını taktın, şifreyi üç kez yanlış girdin ve kart içeride kaldı. Arkan uzun kuyruk.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Sessiz Ev",
    body: "Eve döndün, sessizlik var. Her şey yerli yerinde ama bir şeyler değişmiş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Sırılsıklam",
    body: "Kaldırım kenarında beklerken geçen araç birikintiye bastı. Üstten aşağı ıslansın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'blue', 'orange']
  },
  {
    title: "Yabancı Fotoğrafçı",
    body: "Güzel bir yerde tek başına fotoğraf çekmeye çalışıyordun, bir türlü olmadı. Yabancı biri 'ben çekeyim mi?' dedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'green']
  },
  {
    title: "Piknik Karıncası",
    body: "Parkta çim üstüne uzanmıştın. Birden gömleğinin içinde bir kıpırtı — çok sayıda bir kıpırtı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'red', 'purple']
  },
  {
    title: "Yanlış Alarm",
    body: "Saat kurmak isterken yanlışlıkla 47 kişilik gruba mesaj attın. Bildirimler gelmeye başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'red']
  },
  {
    title: "Son Lokma",
    body: "Masadaki son yemeğe aynı anda hem sen hem yanındaki uzandınız. İkiniz de durdu. Bekliyorsunuz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'orange', 'navy']
  },
  {
    title: "Bozuk Para",
    body: "Otobüse bindin, şoföre uzattın. 'Bozuk yok' dedi. Arkanda sıra oluşmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Şarj Yarışı",
    body: "Kafede telefonun ölmek üzere, tek boş prize yürüdün. Tam o anda yan masadaki de kalktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'orange', 'navy']
  }
];

var SCENES = [
  {
    title: "Kütüphane Masası",
    body: "Kütüphanede arkadaşınla yan yana oturuyorsunuz. İkiniz de sessizsiniz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['green', 'blue', 'purple']
  },
  {
    title: "Bekleme Salonu",
    body: "Hastane bekleme salonunda oturuyorsun. Yanındaki kişi sana sürekli sorular soruyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Tanıdık Ses",
    body: "Kalabalıkta seninle aynı anda biri seni çağırdı. Döndün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'green', 'blue', 'yellow', 'purple', 'red']
  },
  {
    title: "Pencere Önü",
    body: "Kafede tek başınasın. Pencereden geçen biri sana baktı, durdu, sonra yoluna devam etti.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'green', 'blue', 'yellow', 'purple', 'red']
  },
  {
    title: "Bulunan Not",
    body: "Eski bir kitabın sayfaları arasından küçük bir not düştü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Eski Çekmece",
    body: "Uzun süredir açmadığın bir çekmeceyi açtın. İçinde beklemediğin bir şeyle karşılaştın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "İsimsiz Not",
    body: "Masanın üstünde sana bırakılmış küçük bir not var. Yazıyı tanımıyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'green', 'yellow', 'blue', 'red']
  },
  {
    title: "Boş Bagaj",
    body: "Havalimanında bagaj bandının önündesin. Herkes gitti, senin valizin gelmedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'blue', 'navy']
  },
  {
    title: "İki Adres",
    body: "Aynı saate iki farklı yere söz verdiğini fark ettin. İkisi de önemli.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'red', 'orange', 'blue', 'navy', 'green']
  },
  {
    title: "Kapı Zili",
    body: "Kapı çalıyor. Komşu kapıda durmuş, sana bir şeyler anlatmaya çalışıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['red', 'purple']
  },
  {
    title: "Restoran Masası",
    body: "Restoranda karşındaki kişi önemli bir itirafta bulunmak üzere.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'red']
  },
  {
    title: "Onay Günü",
    body: "Uzun süredir beklediğin bir kararın bugün açıklanacağını öğrendin. Telefon sessiz duruyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'purple', 'yellow', 'blue', 'navy', 'red']
  },
  {
    title: "Sürpriz Parti",
    body: "Sürpriz parti hazırlıyorsun ama kutlama yapılacak kişi kapıda göründü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'yellow', 'green']
  },
  {
    title: "Kayıp Anahtar",
    body: "Eve geldin ama anahtarların yerinde olmadığını fark ettin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red']
  },
  {
    title: "Kapı Kapandı",
    body: "Kapı kapandı, yola çıktın. Arkana bakmadın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'yellow', 'navy', 'purple', 'blue', 'red']
  },
  {
    title: "İki Kişi Bekliyordu",
    body: "Bir odaya girdiğinde içerideki iki kişi konuşmayı kesti ve sana döndü.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'purple', 'red', 'blue', 'green', 'navy']
  },
  {
    title: "Mülakat Kapısı",
    body: "İş mülakatı için ismin okundu. İçeri girmek üzeresin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'yellow', 'navy']
  },
  {
    title: "Trafik Sıkışması",
    body: "Trafikte bir saattir santim ilerlemedin ve önemli bir randevun var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['red', 'purple', 'navy']
  },
  {
    title: "Gece Yarısı Çalan",
    body: "Gece yarısı telefon çaldı. Ekrana baktın, numarayı gördün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'red', 'blue', 'green', 'yellow']
  },
  {
    title: "Sınav Sonucu",
    body: "Ekranda sınav sonuçları sayfasını açtın, yüklenmesini bekliyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'yellow', 'blue', 'navy']
  },
  {
    title: "İptal Olan Uçuş",
    body: "Uçuşun iptal edildiği anons edildi. Bir sonraki uçak yarına.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['red', 'blue', 'purple', 'navy']
  },
  {
    title: "Komşu Yemeği",
    body: "Komşun sana bir yemek ikram etti ama tadı beklediğinden çok farklı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'green']
  },
  {
    title: "Yan Odadan Sesler",
    body: "Otururken diğer odadan sesler geliyor. Tam duyamıyorsun ama ismin geçti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "İndirimli Ürün",
    body: "Reyondaki son indirimli ürüne seninle aynı anda biri daha uzandı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['navy', 'red']
  },
  {
    title: "Eski Şarkı",
    body: "Tesadüfen eski bir şarkı çalmaya başladı. Tam ne yapıyorsan duraksadın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'purple']
  },
  {
    title: "Sabah Erken",
    body: "Sabahın erken saatinde tek başınasın. Dışarısı henüz uyanmamış.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['green', 'yellow', 'blue', 'orange', 'purple', 'red']
  },
  {
    title: "Yarışma Finali",
    body: "Yarışmanın final sorusu soruldu. Cevabı biliyorsun ama emin değilsin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'yellow', 'orange', 'navy']
  },
  {
    title: "Havalimanı Vedası",
    body: "Güvenlik kapısından geçmeden önce son kez arkana bakıyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['blue', 'red', 'green', 'navy']
  },
  {
    title: "Gizli Hediye",
    body: "Çalışma masanda isimsiz bir hediye buldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'yellow', 'green']
  },
  {
    title: "Spor Salonu",
    body: "Salondaki bir aleti ilk kez kullanmaya çalışıyorsun ve herkes sana bakıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'yellow', 'navy']
  },
  {
    title: "Deniz Kenarı",
    body: "Sahilde tek başına otururken ayağına bir dalga çarpıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['green', 'yellow', 'blue']
  },
  {
    title: "Kitap Kulübü",
    body: "Kitap kulübünde herkes kitaba hayran kaldı ama sen hiç beğenmedin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Sonuç Sayfası",
    body: "Uzun süredir merak ettiğin bir şeyin cevabını bulmak üzeresin. Sayfa yükleniyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'yellow', 'blue', 'navy', 'red']
  },
  {
    title: "Yeni Ev",
    body: "Yeni evinde, henüz kutuların açılmadığı boş bir odanın ortasındasın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['blue', 'yellow', 'orange']
  },
  {
    title: "Boş Toplantı",
    body: "Toplantıya ilk gelen sensin. Oda ıssız, diğerleri hâlâ gelmiyor. Bekliyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'purple', 'orange', 'red', 'navy', 'green']
  },
  {
    title: "Son Bilet",
    body: "Gişedeki görevli 'bu son bilet' diyerek sana uzatıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['yellow', 'orange']
  },
  {
    title: "Boş Koltuk",
    body: "Birine ayrılmış koltuk hâlâ boş. Etkinlik başlamak üzere.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Otel Odası",
    body: "Otelde kartını okuttun ve kapıyı açtın ama içeride başkası var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange']
  },
  {
    title: "İş Teklifi",
    body: "Hiç beklemediğin bir yerden çok iyi bir iş teklifi içeren e-posta aldın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "İlk Gün",
    body: "Yeni bir yere ilk gün başlıyorsun. Kapıya geldin, içeri girmek üzeresin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'purple', 'navy', 'green', 'blue']
  },
  {
    title: "Düğün Masası",
    body: "Düğünde daha önce hiç görmediğin akrabaların olduğu bir masaya oturtuldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['purple', 'green', 'blue']
  },
  {
    title: "İlk Adım",
    body: "Uzun süredir ertelediğin bir şeyi yapmak için harekete geçtin. İlk adımı attın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'yellow', 'navy', 'purple', 'red', 'green']
  },
  {
    title: "Tanıdık Yüz",
    body: "Karşına birinin oturduğunu fark ettin. Nerede gördüğünü çıkaramıyorsun, ama o sana bakıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'purple', 'red', 'blue', 'green']
  },
  {
    title: "Beklenen Karar",
    body: "Toplantı bitti, herkes çantasını topluyor. Karar henüz açıklanmadı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'navy', 'purple', 'blue', 'red', 'yellow']
  },
  {
    title: "Söz Sırası",
    body: "Uzun süre dinledin. Şimdi seni dinlemeleri için sıra sende.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'navy', 'yellow', 'purple', 'red', 'green']
  },
  {
    title: "Piknik Yağmuru",
    body: "Piknik örtüsünü yeni serdin ve aniden sağanak yağmur başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['blue', 'red', 'orange']
  },
  {
    title: "Yarım Kalan",
    body: "Bir şeyi yarım bıraktın. Geri dönmek zorunda değilsin ama hatırlıyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['blue', 'orange', 'navy', 'green', 'red', 'yellow']
  },
  {
    title: "Yanlış Kargo",
    body: "Kapına gelen kargo senin değil ama üzerinde senin adın yazıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['orange', 'purple']
  },
  {
    title: "Uzun Sessizlik",
    body: "Uzun süredir haber alamadığın birinden mesaj geldi. Sadece 'Nasılsın?' yazıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    groups: ['orange', 'blue', 'green', 'red', 'purple', 'yellow']
  },
  {
    title: "Eski Sevgili",
    body: "Kafede otururken eski sevgilin yanındaki boş sandalyeye oturdu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    groups: ['purple', 'orange', 'blue', 'red']
  }
];
