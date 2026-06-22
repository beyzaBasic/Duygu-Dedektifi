/**
 * scenes.js — sahne kartları (tek kaynak)
 *
 * Tüm içerikler tek bir dizide (SCENES_ALL) tutulur ve yaş uygunluğuna göre
 * etiketlenir:
 *   audience: 'adult'  → yalnız yetişkin
 *   audience: 'youth'  → yalnız genç
 *   audience: 'both'   → ikisine de uygun
 *
 * SCENES (yetişkin havuzu) ve SCENES_GENC (genç havuzu) bu diziden türetilir.
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

var SCENES_ALL = [

  /* ═══════════════════════════════════════════════════════════
     ORTAK MEKANİKLER — her iki yaşa da uygun (audience: 'both')
     ═══════════════════════════════════════════════════════════ */

  /* ─── BEDEN DİLİ ─── duyguyu sadece bedenle anlat (her duyguya uyar) */
  {
    title: "Sessiz Sahne",
    body: "Konuşmak yok. Tek araçların yüzün, ellerin, omuzların ve duruşun.",
    question: "Bu duyguyu tek kelime etmeden, sadece beden dilinle anlat.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Donmuş Kare",
    body: "Bir fotoğraf çekilecek ve sonsuza dek o pozda kalacaksın.",
    question: "Bu duyguyu anlatan tek bir poz ver ve öylece don.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Yavaş Çekim",
    body: "Her hareketin üç kat yavaşladı, zaman ağırlaştı.",
    question: "Bu duyguyu ağır çekimde, sadece beden dilinle göster.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Sadece Eller",
    body: "Yüzünü saklıyorsun, yüz ifaden görünmüyor. Geriye yalnızca ellerin kaldı.",
    question: "Bu duyguyu sadece ellerinle anlat.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Sadece Yüz",
    body: "Ellerin cebinde, yerinden kıpırdayamıyorsun. Geriye yalnızca yüzün kaldı.",
    question: "Bu duyguyu sadece yüz ifadenle anlat.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Emoji Ol",
    body: "Bu duygu bir emoji olsaydı, ekranda hep o ifadeyle dururdu.",
    question: "O emojiyi yüzünle ve bedeninle canlandır.",
    type: "Beden Dili",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },

  /* ─── CANLANDIR ─── duygu bir insan olsa nasıl davranırdı */
  {
    title: "Kapıdan Giriş",
    body: "Bu duygu bir insan olsaydı ve şu an kapıdan içeri girseydi.",
    question: "Onun yerine geç: Kapıyı nasıl açar, içeri nasıl girer, nasıl yürürdü?",
    type: "Canlandır",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Telefonu Açmak",
    body: "Bu duygu bir insan ve telefonu yeni çaldı.",
    question: "Onun yerine geç: Telefonu nasıl açar, karşıdakiyle nasıl konuşurdu?",
    type: "Canlandır",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Kahve Siparişi",
    body: "Bu duygu bir insan ve kafeye girip sıraya geçti.",
    question: "Onun yerine geç: Sırasını nasıl bekler, siparişini nasıl verirdi?",
    type: "Canlandır",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Masaya Oturmak",
    body: "Bu duygu bir insan ve kalabalık bir masaya yeni oturdu.",
    question: "Onun yerine geç: Nasıl oturur, nasıl selam verir, nasıl yer kaplardı?",
    type: "Canlandır",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },

  /* ─── BİRİNİ SEÇ ─── bu duygu sen olsan birine nasıl davranırdın */
  {
    title: "Selam Ver",
    body: "Gruptan birini seç. Bu duygu sen olsaydın.",
    question: "Seçtiğin kişiye sadece bu duygunun yönlendirdiği gibi selam ver.",
    type: "Birini Seç",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Kulağa Fısılda",
    body: "Gruptan birini seç. Kulağına bir şey söyleyeceksin.",
    question: "Bu duygu sen olsaydın, seçtiğin kişiye nasıl yaklaşırdın?",
    type: "Birini Seç",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Bir Şey Uzat",
    body: "Gruptan birini seç. Eline hayali bir şey tutuşturacaksın.",
    question: "Bu duygu sen olsaydın, onu seçtiğin kişiye nasıl uzatırdın?",
    type: "Birini Seç",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Veda Et",
    body: "Gruptan birini seç. Ona veda edeceksin.",
    question: "Bu duygu sen olsaydın, seçtiğin kişiye nasıl veda ederdin?",
    type: "Birini Seç",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Çak Bir Beşlik",
    body: "Gruptan birini seç. Onunla 'çak' yapacaksın.",
    question: "Bu duygu sen olsaydın, seçtiğin kişiyle nasıl el çırpardın?",
    type: "Birini Seç",
    audience: 'both',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },

  /* ═══════════════════════════════════════════════════════════
     GENÇ İÇERİKLERİ (audience: 'youth')
     ═══════════════════════════════════════════════════════════ */

  {
    title: "Sınav Kağıdı",
    body: "Sınav kağıtları dağıtıldı. Yanındakine baktın, o da tam o anda sana baktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['red', 'blue', 'orange', 'purple', 'navy', 'yellow']
  },
  {
    title: "Yanlış Kişiye Mesaj",
    body: "Arkadaşın hakkında şikayet mesajı attın. Ama tıkladığında o kişiye gitmiş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'blue']
  },
  {
    title: "Crush Anı",
    body: "Çok beğendiğin kişi tam yanından geçerken tökezleyip düştün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'red', 'orange', 'green']
  },
  {
    title: "Viral Olan Şey",
    body: "Okul koridorunda çekilen komik videon akşama kadar herkese yayıldı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Sıra Sende",
    body: "Grupta herkes bir şeyler paylaştı. Sıra sana geldi, herkes seni bekliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'yellow', 'purple', 'navy', 'red', 'green']
  },
  {
    title: "Grup Fotoğrafı",
    body: "Birlikte çekilen fotoğrafın linki geldi. Açmak üzeresin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'yellow', 'purple', 'green', 'blue', 'red']
  },
  {
    title: "İlk Mesaj",
    body: "Birine ilk mesajı attın. Teslim edildi ama okunmadı. Saatler geçiyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Sevilen Şarkı",
    body: "Kulaklıkla dinlediğin şarkıyı farkında olmadan yüksek sesle söylemeye başlamışsın. Herkes duymuş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Yeni Numara",
    body: "Kayıtlı olmayan bir numaradan mesaj geldi. 'Merhaba, sen misin?' diye soruyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Efsane Gol",
    body: "Maçın son dakikasında golü sen attın ama yanlış kaleye.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'blue', 'navy']
  },
  {
    title: "Ödev Kopyası",
    body: "Ödevin sorularını arkadaşına attın. Öğretmen ikisini de çağırdı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'navy', 'blue']
  },
  {
    title: "Yazıp Silmek",
    body: "Uzun bir şey yazdın. Okudun. Sildın. Tekrar yazmaya başladın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'purple', 'blue', 'red', 'green', 'navy']
  },
  {
    title: "Veda Anı",
    body: "Uzun süredir devam eden bir şey bugün son buluyor. Herkes dağılmak üzere, son birkaç dakika kaldı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'navy']
  },
  {
    title: "Sürpriz Parti",
    body: "Seninle dalga geçtiklerini sanıyordun ama gerçekten sana sürpriz hazırlamışlar.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'yellow', 'purple', 'green']
  },
  {
    title: "Kapıda Duran",
    body: "Buluşmaya erken geldin, bekliyorsun. Tanımadığın biri yanına gelip oturdu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'green', 'blue', 'red']
  },
  {
    title: "Ödül Sürprizi",
    body: "İsmini okudular. Bir ödül alacağını hiç beklemiyordun, herkes alkışlıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['yellow', 'orange', 'purple', 'green']
  },
  {
    title: "Sınıf Temsili",
    body: "Sınıf başkanı seçiminde adını bile koymamışken herkes seni aday gösterdi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'yellow', 'orange', 'navy']
  },
  {
    title: "Kontrolörün Pili",
    body: "Online oyunun finaline 2 dakika kala kontrolörün titredi. Pil bitiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'red', 'orange', 'navy']
  },
  {
    title: "Komik İfade",
    body: "Fotoğraf çekilirken yaptığın komik yüz ifadesi okul gazetesinin kapağına çıktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Hazırlıksız Soru",
    body: "Hiç beklemediğin bir anda biri 'Sen ne düşünüyorsun?' diye sordu. Herkes seni bekliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'purple', 'yellow', 'red', 'navy', 'blue']
  },
  {
    title: "Beklenmedik Haber",
    body: "Bir yerden beklenmedik bir haber geldi. İçerik tam beklediğinin tersiydi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'blue', 'yellow', 'red', 'purple', 'navy']
  },
  {
    title: "Aile Masası",
    body: "Aile yemeğinde büyükler seni konu edinen bir şeyi konuşmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Son Gün",
    body: "Bugün bir şeyin son günü. Birazdan sona erecek.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'navy']
  },
  {
    title: "Konser Önü",
    body: "Sevdiğin sanatçının konserinde tam ön sıraya geldin. Müzik başlamak üzere.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'yellow', 'red', 'green']
  },
  {
    title: "Konu Değişti",
    body: "Arkadaş grubunda herkes bir şeyi konuşurken tam söz alacaktın. O an konu değişti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'blue', 'orange', 'purple', 'green']
  },
  {
    title: "Kayıp Şarj",
    body: "Önemli bir yerden çıkmak üzeresin ama telefon ölüyor, şarjın yok.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Maç Sonrası",
    body: "Maçı kazandınız. Herkes sevinirken takım kaptanı sana baktı ve teşekkür etti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['yellow', 'navy', 'green']
  },
  {
    title: "Sunum Çökmesi",
    body: "Hazırladığın sunumun dosyası bozuldu. Öğretmen adını okudu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'blue', 'navy']
  },
  {
    title: "Şehir Haberi",
    body: "Ailenin başka şehre taşınacağını öğrendin. Bunu okul arkadaşlarına söylemek üzeresin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['blue', 'purple', 'green']
  },
  {
    title: "Çift Randevu",
    body: "İki ayrı arkadaş grubu seni aynı günün aynı saatine davet etti. İkisine de evet demiştin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Asansör Şarkısı",
    body: "Asansörde yalnız olduğunu sanarak şarkı söylemeye başladın. Kapı açıldı, içeride üç kişi duruyordu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Tanıdık Mı?",
    body: "Karşıdan gelen birine el salladın. O da el salladı. Daha yakına gelince hiç tanımadığını anladın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Beklenen Cevap",
    body: "Saatlerdir cevap beklediğin mesaja nihayet 'gördü' işareti düştü. Ama cevap hâlâ gelmiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'blue', 'purple', 'red']
  },
  {
    title: "Gülmeme Savaşı",
    body: "Çok ciddi bir ortamda komik bir şey aklına geldi. Gülmemeye çalıştıkça daha çok gülüyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Sokak Müzisyeni",
    body: "Kalabalıkta yürürken sokak müzisyeni tam önünde durdu ve sana bakarak çalmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Kahve Felaketi",
    body: "Önemli bir yere gitmeden on dakika önce üstüne kahve döktün. Değişecek kıyafetin yok.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Sabah Bildirimi",
    body: "Telefon çaldı. Sabah yeni bir bildirim — bugün bir şey başlıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "Yıllar Sonra",
    body: "Yıllardır görmediğin biriyle aynı yerde karşılaştın. İkiniz de ne diyeceğinizi bilemediniz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'blue', 'green', 'yellow']
  },
  {
    title: "Bilet Dramı",
    body: "Konserin biletini almak için tam kapanma saatinde sayfayı açtın. Sayfa yüklenmeye devam ediyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['red', 'purple', 'orange']
  },
  {
    title: "Sıra Sıkıntısı",
    body: "Uzun kuyrukta yanlışlıkla sıra atladığını fark ettin. Arkandakiler seni izliyor ama kimse bir şey demiyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'purple', 'navy']
  },
  {
    title: "Doğum Günü Baskını",
    body: "Kafede bir anda garsonlar sana doğum günü şarkısı söylemeye başladı. Bütün restoran izliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['yellow', 'orange', 'purple', 'green']
  },
  {
    title: "ATM Dramı",
    body: "ATM'ye kartını taktın, şifreyi üç kez yanlış girdin ve kart içeride kaldı. Arkan uzun kuyruk.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Sessiz Ev",
    body: "Eve döndün, sessizlik var. Her şey yerli yerinde ama bir şeyler değişmiş.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Sırılsıklam",
    body: "Kaldırım kenarında beklerken geçen araç birikintiye bastı. Üstten aşağı ıslansın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'blue', 'orange']
  },
  {
    title: "Yabancı Fotoğrafçı",
    body: "Güzel bir yerde tek başına fotoğraf çekmeye çalışıyordun, bir türlü olmadı. Yabancı biri 'ben çekeyim mi?' dedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'yellow', 'green']
  },
  {
    title: "Piknik Karıncası",
    body: "Parkta çim üstüne uzanmıştın. Birden gömleğinin içinde bir kıpırtı — çok sayıda bir kıpırtı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'red', 'purple']
  },
  {
    title: "Yanlış Alarm",
    body: "Saat kurmak isterken yanlışlıkla 47 kişilik gruba mesaj attın. Bildirimler gelmeye başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'red']
  },
  {
    title: "Son Lokma",
    body: "Masadaki son yemeğe aynı anda hem sen hem yanındaki uzandınız. İkiniz de durdu. Bekliyorsunuz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'orange', 'navy']
  },
  {
    title: "Bozuk Para",
    body: "Otobüse bindin, şoföre uzattın. 'Bozuk yok' dedi. Arkanda sıra oluşmaya başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Şarj Yarışı",
    body: "Kafede telefonunun şarjı bitmek üzere, tek boş prize doğru yürüdün. Tam o anda yan masadaki de kalktı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'orange', 'navy']
  },

  /* ─── GENÇ CANLANDIR ─── okul/sosyal medya temalı */
  {
    title: "Sınıfa Giriş",
    body: "Bu duygu bir öğrenci olsaydı ve zil çaldıktan sonra sınıfa girseydi.",
    question: "Onun yerine geç: Kapıdan nasıl girer, sırasına nasıl otururdu?",
    type: "Canlandır",
    audience: 'youth',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Story Atmak",
    body: "Bu duygu bir insan ve tam şimdi telefonuna story atıyor.",
    question: "Onun yerine geç: Nasıl poz verir, ne yazıp paylaşırdı?",
    type: "Canlandır",
    audience: 'youth',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Servise Binmek",
    body: "Bu duygu bir insan ve okul servisine yeni bindi.",
    question: "Onun yerine geç: Nasıl biner, nereye nasıl otururdu?",
    type: "Canlandır",
    audience: 'youth',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },
  {
    title: "Selfie Çekmek",
    body: "Bu duygu bir insan ve bir selfie çekmek üzere.",
    question: "Onun yerine geç: Telefonu nasıl tutar, nasıl poz verirdi?",
    type: "Canlandır",
    audience: 'youth',
    groups: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
  },

  /* ─── GENÇ ROL ─── okul rolleri */
  {
    title: "Dinlenmeyen Sunum",
    body: "Sınıfın önünde sunum yapıyorsun ama kimse dinlemiyor, herkes fısıldaşıyor.",
    question: "Bu duygu sende olsa, sunuma nasıl devam ederdin?",
    type: "Rol",
    audience: 'youth',
    groups: ['red', 'blue', 'navy', 'purple']
  },
  {
    title: "Takım Kaptanı",
    body: "Takım kaptanısın. Maça iki dakika kala herkesi bir araya toplaman gerekiyor.",
    question: "Bu duygu sende olsa, takımına nasıl seslenirdin?",
    type: "Rol",
    audience: 'youth',
    groups: ['red', 'orange', 'yellow', 'navy']
  },
  {
    title: "Yeni Okul",
    body: "Yeni bir okula geldin. İlk kez sınıfın kapısından içeri gireceksin.",
    question: "Bu duygu sende olsa, sınıfa nasıl girer, nasıl tanışırdın?",
    type: "Rol",
    audience: 'youth',
    groups: ['orange', 'blue', 'navy', 'purple']
  },
  {
    title: "Grup Ödevi",
    body: "Grup ödevinde herkes işi sana bıraktı ve sunum yarın.",
    question: "Bu duygu sende olsa, gruba ne der, ne yapardın?",
    type: "Rol",
    audience: 'youth',
    groups: ['red', 'blue', 'navy', 'purple']
  },
  {
    title: "Perde Açılmadan",
    body: "Okul gösterisinde sahneye çıkmana saniyeler kaldı. Perde birazdan açılıyor.",
    question: "Bu duygu sende olsa, perde açılmadan ne yapardın?",
    type: "Rol",
    audience: 'youth',
    groups: ['orange', 'yellow', 'navy', 'purple']
  },
  {
    title: "Münazara",
    body: "Münazaradasın. Karşı takım tam senin söyleyeceğin şeyi söyledi.",
    question: "Bu duygu sende olsa, sıra sana gelince ne yapardın?",
    type: "Rol",
    audience: 'youth',
    groups: ['red', 'orange', 'navy', 'purple']
  },

  /* ─── YENİ GENÇ İÇERİKLERİ (50 adet) ─── */
  {
    title: "Grup Projesi Sunumu",
    body: "Grup projesinde sunum sırası sana geldi. Grubun arkanda, sınıf önünde.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'navy', 'red', 'orange']
  },
  {
    title: "Takip İsteği",
    body: "Beğendiğin kişi seni geri takip etti. Bildirim ekranda duruyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple', 'green']
  },
  {
    title: "Story'de Etiket",
    body: "Arkadaşın seni hiç beğenmediğin bir fotoğrafla story'sinde etiketledi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['red', 'purple', 'orange']
  },
  {
    title: "Beğeni Yağmuru",
    body: "Paylaştığın gönderi beklemediğin kadar çok beğeni aldı. Telefon titreyip duruyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "Sınıf Grubu",
    body: "Sınıf grubunda biri senin hakkında bir şey yazdı, herkes görüyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'purple', 'blue']
  },
  {
    title: "Son Seçilen",
    body: "Beden dersinde takımlar seçiliyor. Sıra azaldı, sen hâlâ seçilmedin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['blue', 'purple', 'red']
  },
  {
    title: "Kantin Sırası",
    body: "Kantin sırasında biri önüne geçti. Zil çalmak üzere.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'navy', 'purple']
  },
  {
    title: "Unutulan Ödev",
    body: "Öğretmen ödevleri istedi. Senin ödevin evde kaldı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'blue', 'red']
  },
  {
    title: "Telefon Toplandı",
    body: "Öğretmen derste telefonunu masasına aldı. Ders bitene kadar orada kalacak.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'blue', 'purple']
  },
  {
    title: "Yeni Sıra Arkadaşı",
    body: "Öğretmen yerleri değiştirdi. Yeni sıra arkadaşın hiç tanımadığın biri.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['orange', 'purple', 'green', 'yellow']
  },
  {
    title: "Karne Günü",
    body: "Karneni aldın, çantana koymadan önce bir kez daha baktın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['yellow', 'blue', 'purple', 'navy']
  },
  {
    title: "Penaltı Anı",
    body: "Maçın son penaltısını sen atacaksın. Herkes nefesini tuttu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'navy', 'orange', 'red']
  },
  {
    title: "Tahtaya Kalkma",
    body: "Öğretmen 'tahtaya kim gelmek ister?' dedi ve gözleri sende durdu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Geç Kalan İsim",
    body: "Derse geç kaldın, kapıyı açtığında öğretmen tam senin adını okuyordu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Derste Mesaj",
    body: "Sıra arkadaşın derste sana not uzattı, tam o an öğretmen döndü.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'red']
  },
  {
    title: "Davet Edilmeyen",
    body: "Bütün sınıf bir doğum gününden bahsediyor. Sen davet edilmemişsin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['blue', 'red', 'purple']
  },
  {
    title: "Gruptan Çıkarılma",
    body: "Arkadaş grubundan sessizce çıkarıldığını fark ettin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['blue', 'red', 'purple']
  },
  {
    title: "Yeni Telefon",
    body: "Arkadaşın yepyeni bir telefon aldı ve herkese gösteriyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'green', 'blue', 'red']
  },
  {
    title: "Yeni Saç",
    body: "Saçını kestirdin, sabah sınıfa girdiğinde herkes sana baktı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Herkeste Var",
    body: "Herkesin giydiği o ayakkabıdan sende yok. Konu yine açıldı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'red', 'navy']
  },
  {
    title: "Solo Sıra",
    body: "Müzik dersinde tek tek söyleyeceğiz dedi öğretmen. Sıra sana yaklaşıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'navy']
  },
  {
    title: "Asılan Resim",
    body: "Çizdiğin resim okul panosuna asıldı. Önünden geçenler duruyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['yellow', 'orange', 'purple', 'green']
  },
  {
    title: "Sessizlikte Zil",
    body: "Kütüphanede tam sessizken telefonun en yüksek sesle çaldı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'red']
  },
  {
    title: "Otobüste Yer",
    body: "Otobüste oturuyorsun, yaşlı biri bindi ve yanında durdu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['navy', 'green', 'purple', 'blue']
  },
  {
    title: "Ortada Kalmak",
    body: "İki yakın arkadaşın küstü ve ikisi de senden taraf tutmanı istiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'blue', 'navy', 'red']
  },
  {
    title: "Arkamdan Sustular",
    body: "Bir gruba yaklaştın, sen gelince konuşmayı kestiler.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['purple', 'blue', 'red']
  },
  {
    title: "Rakip Kazandı",
    body: "Tuttuğun takım kaybetti, rakip takımı tutan arkadaşın seninle dalga geçiyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'blue', 'navy']
  },
  {
    title: "İnternet Kesildi",
    body: "Online sınavın tam ortasında internetin gitti. Süre işliyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Kamera Aç",
    body: "Online derste öğretmen 'herkes kamerasını açsın' dedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'blue']
  },
  {
    title: "Donan Ekran",
    body: "Görüntülü grup görüşmesinde tam konuşurken ekranın dondu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['purple', 'orange', 'red']
  },
  {
    title: "Sınıfın Yenisi",
    body: "Bugün sınıfa yeni biri geldi ve boş tek sıra senin yanın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'green', 'purple', 'yellow']
  },
  {
    title: "Beslenme Kutusu",
    body: "Annenin hazırladığı yemeği açtın, yanındaki ne olduğunu sordu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['orange', 'green', 'purple']
  },
  {
    title: "Kaçan Servis",
    body: "Servise koşarak yetişmeye çalışıyorsun ama kapı tam önünde kapandı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'purple', 'blue']
  },
  {
    title: "Dolaptaki Not",
    body: "Dolabını açtın, içinden imzasız küçük bir not düştü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['orange', 'purple', 'green', 'red']
  },
  {
    title: "Şaka Kurbanı",
    body: "Sınıfça birine şaka yapılıyordu, bu sefer hedef sendin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'purple', 'orange']
  },
  {
    title: "Konuşmayanlar",
    body: "Arkadaşların bir anda seninle konuşmayı kesti, nedenini bilmiyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'red', 'purple']
  },
  {
    title: "Bilgi Yarışması",
    body: "Sınıflar arası yarışmada son soru senin grubuna geldi, cevap sende.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'navy', 'orange']
  },
  {
    title: "Telefonsuz Gün",
    body: "Okulda telefonlar bir günlüğüne tamamen yasaklandı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['red', 'blue', 'navy', 'orange']
  },
  {
    title: "Defterime Çizilmiş",
    body: "Defterini açtın, biri en güzel sayfana karalama yapmış.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['red', 'purple', 'blue']
  },
  {
    title: "Koşarken Düştüm",
    body: "Beden dersinde koşarken herkesin önünde düştün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'red', 'orange']
  },
  {
    title: "Sözü Unutmak",
    body: "Gösteride sahnedesin, ezberlediğin sözler bir anda uçtu gitti.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'blue', 'red']
  },
  {
    title: "Lider Seçimi",
    body: "Grup lideri seçiliyor ve birkaç kişi senin adını söyledi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'yellow', 'navy', 'orange']
  },
  {
    title: "Serbest Kıyafet",
    body: "Bugün serbest kıyafet günü, ne giydiğin herkesin gözünde.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['purple', 'orange', 'yellow']
  },
  {
    title: "Kötü Yorum",
    body: "Paylaşımının altına tanımadığın biri kırıcı bir yorum yazdı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'red', 'purple']
  },
  {
    title: "Gezide Yan Koltuk",
    body: "Sınıf gezisinde otobüste yanına kimin oturacağı belli oluyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['orange', 'green', 'purple', 'blue']
  },
  {
    title: "Okunmayan İsim",
    body: "Ödül töreninde isimler okundu, seninki listede yoktu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['blue', 'navy', 'purple', 'red']
  },
  {
    title: "Son Zil",
    body: "Okulun son günü, son zil çaldı. Herkes birbirine sarılıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['blue', 'green', 'yellow', 'orange']
  },
  {
    title: "Yanlış Cevap",
    body: "Emin bir şekilde cevap verdin ama bütün sınıf güldü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Takım Forması",
    body: "Okul takımına seçildin, formanı ilk kez giyiyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'youth',
    groups: ['yellow', 'orange', 'navy', 'green']
  },
  {
    title: "Veli Toplantısı",
    body: "Bugün veli toplantısı var, öğretmen ailenle senin hakkında konuşacak.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'youth',
    groups: ['purple', 'blue', 'navy']
  },

  /* ═══════════════════════════════════════════════════════════
     YETİŞKİN İÇERİKLERİ (audience: 'adult')
     ═══════════════════════════════════════════════════════════ */

  {
    title: "Kütüphane Masası",
    body: "Kütüphanede arkadaşınla yan yana oturuyorsunuz. İkiniz de sessizsiniz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['green', 'blue', 'purple']
  },
  {
    title: "Bekleme Salonu",
    body: "Hastane bekleme salonunda oturuyorsun. Yanındaki kişi sana sürekli sorular soruyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'red', 'blue']
  },
  {
    title: "Tanıdık Ses",
    body: "Kalabalıkta seninle aynı anda biri seni çağırdı. Döndün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'green', 'blue', 'yellow', 'purple', 'red']
  },
  {
    title: "Pencere Önü",
    body: "Kafede tek başınasın. Pencereden geçen biri sana baktı, durdu, sonra yoluna devam etti.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'green', 'blue', 'yellow', 'purple', 'red']
  },
  {
    title: "Bulunan Not",
    body: "Eski bir kitabın sayfaları arasından küçük bir not düştü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Eski Çekmece",
    body: "Uzun süredir açmadığın bir çekmeceyi açtın. İçinde beklemediğin bir şeyle karşılaştın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "İsimsiz Not",
    body: "Masanın üstünde sana bırakılmış küçük bir not var. Yazıyı tanımıyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'green', 'yellow', 'blue', 'red']
  },
  {
    title: "Boş Bagaj",
    body: "Havalimanında bagaj bandının önündesin. Herkes gitti, senin valizin gelmedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'red', 'blue', 'navy']
  },
  {
    title: "İki Adres",
    body: "Aynı saate iki farklı yere söz verdiğini fark ettin. İkisi de önemli.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['purple', 'red', 'orange', 'blue', 'navy', 'green']
  },
  {
    title: "Kapı Zili",
    body: "Kapı çalıyor. Komşu kapıda durmuş, sana bir şeyler anlatmaya çalışıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['red', 'purple']
  },
  {
    title: "Restoran Masası",
    body: "Restoranda karşındaki kişi önemli bir itirafta bulunmak üzere.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['orange', 'purple', 'red']
  },
  {
    title: "Onay Günü",
    body: "Uzun süredir beklediğin bir kararın bugün açıklanacağını öğrendin. Telefon sessiz duruyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['orange', 'purple', 'yellow', 'blue', 'navy', 'red']
  },
  {
    title: "Sürpriz Parti",
    body: "Sürpriz parti hazırlıyorsun ama kutlama yapılacak kişi kapıda göründü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['orange', 'purple', 'yellow', 'green']
  },
  {
    title: "Kayıp Anahtar",
    body: "Eve geldin ama anahtarların yerinde olmadığını fark ettin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'red']
  },
  {
    title: "Kapı Kapandı",
    body: "Kapı kapandı, yola çıktın. Arkana bakmadın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'navy', 'purple', 'blue', 'red']
  },
  {
    title: "İki Kişi Bekliyordu",
    body: "Bir odaya girdiğinde içerideki iki kişi konuşmayı kesti ve sana döndü.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'purple', 'red', 'blue', 'green', 'navy']
  },
  {
    title: "Mülakat Kapısı",
    body: "İş mülakatı için ismin okundu. İçeri girmek üzeresin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['purple', 'yellow', 'navy']
  },
  {
    title: "Trafik Sıkışması",
    body: "Trafikte bir saattir santim ilerlemedin ve önemli bir randevun var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['red', 'purple', 'navy']
  },
  {
    title: "Gece Yarısı Çalan",
    body: "Gece yarısı telefon çaldı. Ekrana baktın, numarayı gördün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'red', 'blue', 'green', 'yellow']
  },
  {
    title: "Sınav Sonucu",
    body: "Ekranda sınav sonuçları sayfasını açtın, yüklenmesini bekliyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['purple', 'yellow', 'blue', 'navy']
  },
  {
    title: "İptal Olan Uçuş",
    body: "Uçuşun iptal edildiği anons edildi. Bir sonraki uçak yarına.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['red', 'blue', 'purple', 'navy']
  },
  {
    title: "Komşu Yemeği",
    body: "Komşun sana bir yemek ikram etti ama tadı beklediğinden çok farklı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange', 'green']
  },
  {
    title: "Yan Odadan Sesler",
    body: "Otururken diğer odadan sesler geliyor. Tam duyamıyorsun ama ismin geçti.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'blue', 'red', 'green']
  },
  {
    title: "İndirimli Ürün",
    body: "Reyondaki son indirimli ürüne seninle aynı anda biri daha uzandı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['navy', 'red']
  },
  {
    title: "Eski Şarkı",
    body: "Tesadüfen eski bir şarkı çalmaya başladı. Tam ne yapıyorsan duraksadın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'red', 'purple']
  },
  {
    title: "Sabah Erken",
    body: "Sabahın erken saatinde tek başınasın. Dışarısı henüz uyanmamış.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['green', 'yellow', 'blue', 'orange', 'purple', 'red']
  },
  {
    title: "Yarışma Finali",
    body: "Yarışmanın final sorusu soruldu. Cevabı biliyorsun ama emin değilsin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['purple', 'yellow', 'orange', 'navy']
  },
  {
    title: "Havalimanı Vedası",
    body: "Güvenlik kapısından geçmeden önce son kez arkana bakıyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['blue', 'red', 'green', 'navy']
  },
  {
    title: "Gizli Hediye",
    body: "Çalışma masanda isimsiz bir hediye buldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'yellow', 'green']
  },
  {
    title: "Spor Salonu",
    body: "Salondaki bir aleti ilk kez kullanmaya çalışıyorsun ve herkes sana bakıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'yellow', 'navy']
  },
  {
    title: "Deniz Kenarı",
    body: "Sahilde tek başına otururken ayağına bir dalga çarpıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['green', 'yellow', 'blue']
  },
  {
    title: "Kitap Kulübü",
    body: "Kitap kulübünde herkes kitaba hayran kaldı ama sen hiç beğenmedin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['purple', 'red', 'navy']
  },
  {
    title: "Sonuç Sayfası",
    body: "Uzun süredir merak ettiğin bir şeyin cevabını bulmak üzeresin. Sayfa yükleniyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'yellow', 'blue', 'navy', 'red']
  },
  {
    title: "Yeni Ev",
    body: "Yeni evinde, henüz kutuların açılmadığı boş bir odanın ortasındasın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['blue', 'yellow', 'orange']
  },
  {
    title: "Boş Toplantı",
    body: "Toplantıya ilk gelen sensin. Oda ıssız, diğerleri hâlâ gelmiyor. Bekliyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['blue', 'purple', 'orange', 'red', 'navy', 'green']
  },
  {
    title: "Son Bilet",
    body: "Gişedeki görevli 'bu son bilet' diyerek sana uzatıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['yellow', 'orange']
  },
  {
    title: "Boş Koltuk",
    body: "Birine ayrılmış koltuk hâlâ boş. Etkinlik başlamak üzere.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'green', 'orange', 'yellow', 'purple', 'red']
  },
  {
    title: "Otel Odası",
    body: "Otelde kartını okuttun ve kapıyı açtın ama içeride başkası var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['purple', 'orange']
  },
  {
    title: "İş Teklifi",
    body: "Hiç beklemediğin bir yerden çok iyi bir iş teklifi içeren e-posta aldın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'adult',
    groups: ['orange', 'yellow', 'purple']
  },
  {
    title: "İlk Gün",
    body: "Yeni bir yere ilk gün başlıyorsun. Kapıya geldin, içeri girmek üzeresin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'yellow', 'purple', 'navy', 'green', 'blue']
  },
  {
    title: "Düğün Masası",
    body: "Düğünde daha önce hiç görmediğin akrabaların olduğu bir masaya oturtuldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['purple', 'green', 'blue']
  },
  {
    title: "İlk Adım",
    body: "Uzun süredir ertelediğin bir şeyi yapmak için harekete geçtin. İlk adımı attın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'yellow', 'navy', 'purple', 'red', 'green']
  },
  {
    title: "Tanıdık Yüz",
    body: "Karşına birinin oturduğunu fark ettin. Nerede gördüğünü çıkaramıyorsun, ama o sana bakıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'purple', 'red', 'blue', 'green']
  },
  {
    title: "Beklenen Karar",
    body: "Toplantı bitti, herkes çantasını topluyor. Karar henüz açıklanmadı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'navy', 'purple', 'blue', 'red', 'yellow']
  },
  {
    title: "Söz Sırası",
    body: "Uzun süre dinledin. Şimdi seni dinlemeleri için sıra sende.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'navy', 'yellow', 'purple', 'red', 'green']
  },
  {
    title: "Piknik Yağmuru",
    body: "Piknik örtüsünü yeni serdin ve aniden sağanak yağmur başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['blue', 'red', 'orange']
  },
  {
    title: "Yarım Kalan",
    body: "Bir şeyi yarım bıraktın. Geri dönmek zorunda değilsin ama hatırlıyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['blue', 'orange', 'navy', 'green', 'red', 'yellow']
  },
  {
    title: "Yanlış Kargo",
    body: "Kapına gelen kargo senin değil ama üzerinde senin adın yazıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'both',
    groups: ['orange', 'purple']
  },
  {
    title: "Uzun Sessizlik",
    body: "Uzun süredir haber alamadığın birinden mesaj geldi. Sadece 'Nasılsın?' yazıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses",
    audience: 'both',
    groups: ['orange', 'blue', 'green', 'red', 'purple', 'yellow']
  },
  {
    title: "Eski Sevgili",
    body: "Kafede otururken eski sevgilin yanındaki boş sandalyeye oturdu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self",
    audience: 'adult',
    groups: ['purple', 'orange', 'blue', 'red']
  },

  /* ─── YETİŞKİN ROL ─── meslek/role gir, bu duygu sende olsa ne yapardın */
  {
    title: "Dinlenmeyen Öğretmen",
    body: "Bir öğretmensin. Sınıfta kimse seni dinlemiyor, herkes kendi dünyasında.",
    question: "Bu duygu sende olsa, o sınıfta nasıl davranırdın?",
    type: "Rol",
    audience: 'adult',
    groups: ['red', 'blue', 'navy', 'purple']
  },
  {
    title: "Yoğun Garson",
    body: "Bir garsonsun. Bütün masalar dolu ve herkes aynı anda seni çağırıyor.",
    question: "Bu duygu sende olsa, bu akşamı nasıl idare ederdin?",
    type: "Rol",
    audience: 'adult',
    groups: ['red', 'orange', 'navy', 'purple']
  },
  {
    title: "Sahnedeki Sunucu",
    body: "Bir sunucusun. Sahnedesin, mikrofon açık, yüzlerce kişi sana bakıyor.",
    question: "Bu duygu sende olsa, sahneye nasıl çıkar, nasıl konuşurdun?",
    type: "Rol",
    audience: 'adult',
    groups: ['orange', 'yellow', 'navy', 'purple']
  },
  {
    title: "Acil Servis Doktoru",
    body: "Bir doktorsun. Aynı anda iki hasta birden sana yetişmeye çalışıyor.",
    question: "Bu duygu sende olsa, bu vardiyada nasıl davranırdın?",
    type: "Rol",
    audience: 'adult',
    groups: ['green', 'red', 'navy', 'purple']
  },
  {
    title: "İlk Günkü Patron",
    body: "Yeni bir ekibin yöneticisisin. İlk kez hepsinin karşısına çıkacaksın.",
    question: "Bu duygu sende olsa, ekibinle ilk kez nasıl tanışırdın?",
    type: "Rol",
    audience: 'adult',
    groups: ['orange', 'yellow', 'navy', 'purple']
  },
  {
    title: "Müşteri Temsilcisi",
    body: "Bir müşteri temsilcisisin. Karşındaki kişi telefonda dakikalardır bağırıyor.",
    question: "Bu duygu sende olsa, bu görüşmeyi nasıl yönetirdin?",
    type: "Rol",
    audience: 'adult',
    groups: ['red', 'green', 'blue', 'navy']
  },
  {
    title: "Pilot Anonsu",
    body: "Bir pilotsun. Uçaktaki yolculara anons yapman gerekiyor.",
    question: "Bu duygu sende olsa, anonsu nasıl yapardın?",
    type: "Rol",
    audience: 'adult',
    groups: ['yellow', 'green', 'navy', 'purple']
  },
  {
    title: "Düğün Fotoğrafçısı",
    body: "Bir fotoğrafçısın. Dağınık kalabalığı toplayıp poz verdirmen gerekiyor.",
    question: "Bu duygu sende olsa, kalabalığı nasıl yönetirdin?",
    type: "Rol",
    audience: 'adult',
    groups: ['red', 'orange', 'yellow', 'navy']
  }
];

// Havuzları tek kaynaktan türet — 'both' her ikisine de dahil edilir.
var SCENES      = SCENES_ALL.filter(function(s) { return s.audience !== 'youth'; });
var SCENES_GENC = SCENES_ALL.filter(function(s) { return s.audience !== 'adult'; });
