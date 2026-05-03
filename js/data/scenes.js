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
// data.js

var SCENES = [
  {
    title: "Kütüphane Masası",
    body: "Kütüphanede arkadaşınla yan yana oturuyorsunuz. İkiniz de sessizsiniz.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Bekleme Salonu",
    body: "Hastane bekleme salonunda oturuyorsun. Yanındaki kişi sana sürekli sorular soruyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Asansördeki Ayna",
    body: "Asansörde ayna karşısında duruyorsun. Işıklar bir anlığına yanıp sönüyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Kasadaki Bant",
    body: "Süpermarket kasasında bant hareket etmiyor. Arkanda uzun bir kuyruk oluştu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Eski Kare",
    body: "Eski bir fotoğrafı elinde tutuyorsun. Görüntüdeki detaylar çok net.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Boş Cüzdan",
    body: "Hesap geldi ve cüzdanın boş olduğunu fark ettin. Garson masanın başında bekliyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Kaçan Bilet",
    body: "Piyango biletine bakıyorsun, ikramiye tek rakamla kaçtı.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Boş Bagaj",
    body: "Havalimanında bagaj bandının önündesin. Herkes gitti, senin valizin gelmedi.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Yanlış Mesaj",
    body: "Telefonunda bir mesaj gönderdin ve mesajı alan kişi tam karşında oturuyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Kapı Zili",
    body: "Kapı çalıyor. Komşu kapıda durmuş, sana bir şeyler anlatmaya çalışıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Restoran Masası",
    body: "Restoranda karşındaki kişi önemli bir itirafta bulunmak üzere.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Gece Otobüsü",
    body: "Son otobüsü kaçırdın ve yağmur başlamak üzere.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Sürpriz Parti",
    body: "Sürpriz parti hazırlıyorsun ama kutlama yapılacak kişi kapıda göründü.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Kayıp Anahtar",
    body: "Eve geldin ama anahtarların yerinde olmadığını fark ettin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Yanlış Tren",
    body: "Trende yanlış yöne gittiğini anonsu duyduğunda anladın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Fırtınalı Kulübe",
    body: "Dışarıda fırtına var, sen eski bir kulübede mahsur kaldın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Mülakat Kapısı",
    body: "İş mülakatı için ismin okundu. İçeri girmek üzeresin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Trafik Sıkışması",
    body: "Trafikte bir saattir santim ilerlemedin ve önemli bir randevun var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Kamp Ateşi",
    body: "Ormanda ateşin etrafında oturuyorsun. Karanlığın içinden bir ses geldi.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Sınav Sonucu",
    body: "Ekranda sınav sonuçları sayfasını açtın, yüklenmesini bekliyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "İptal Olan Uçuş",
    body: "Uçuşun iptal edildiği anons edildi. Bir sonraki uçak yarına.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Komşu Yemeği",
    body: "Komşun sana bir yemek ikram etti ama tadı beklediğinden çok farklı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Kayıp İlanı",
    body: "Sokakta kayıp bir evcil hayvan ilanı görüyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "İndirimli Ürün",
    body: "Reyondaki son indirimli ürüne seninle aynı anda biri daha uzandı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Cam Asansör",
    body: "Cam asansör 30. katta aniden durdu.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Karantina Balkonu",
    body: "Balkonda oturmuş boş sokağı izliyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Yarışma Finali",
    body: "Yarışmanın final sorusu soruldu. Cevabı biliyorsun ama emin değilsin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Havalimanı Vedası",
    body: "Güvenlik kapısından geçmeden önce son kez arkana bakıyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Gizli Hediye",
    body: "Çalışma masanda isimsiz bir hediye buldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Spor Salonu",
    body: "Salondaki bir aleti ilk kez kullanmaya çalışıyorsun ve herkes sana bakıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Deniz Kenarı",
    body: "Sahilde tek başına otururken ayağına bir dalga çarpıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Kitap Kulübü",
    body: "Kitap kulübünde herkes kitaba hayran kaldı ama sen hiç beğenmedin.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Doktor Bekleme",
    body: "Doktorun kapısında isminin yazılı olduğu tabelaya bakıyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Yeni Ev",
    body: "Yeni evinde, henüz kutuların açılmadığı boş bir odanın ortasındasın.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Tiyatro Sahnesi",
    body: "Sahnedesin ve söyleyeceğin ilk kelimeyi unuttun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Son Bilet",
    body: "Gişedeki görevli 'bu son bilet' diyerek sana uzatıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Buz Pisti",
    body: "Buz pistinde dengeni kaybettin ve herkesin içinde düştün.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Otel Odası",
    body: "Otelde kartını okuttun ve kapıyı açtın ama içeride başkası var.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "İş Teklifi",
    body: "Hiç beklemediğin bir yerden çok iyi bir iş teklifi içeren e-posta aldın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Kayıp Telefon",
    body: "Çantanda telefonunu arıyorsun ama bulamıyorsun.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Düğün Masası",
    body: "Düğünde daha önce hiç görmediğin akrabaların olduğu bir masaya oturtuldun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Tıkış Tıkış Otobüs",
    body: "Otobüste kollarının arasında sıkışıp kaldın, kimse kımıldayamıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Selfie Kazası",
    body: "Çektiğin bir fotoğrafı yanlışlıkla tüm rehbere gönderdin.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Sinema Sessizliği",
    body: "Sinemada en sessiz sahnede elindeki mısır kutusunu yere düşürdün.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Yanlış Toplantı",
    body: "Bir ofis binasında yanlış toplantı odasına girdin ve herkes sana bakıyor.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Piknik Yağmuru",
    body: "Piknik örtüsünü yeni serdin ve aniden sağanak yağmur başladı.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Canlı Yayın",
    body: "Yanlışlıkla sosyal medyada canlı yayın başlattın.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Yanlış Kargo",
    body: "Kapına gelen kargo senin değil ama üzerinde senin adın yazıyor.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  },
  {
    title: "Sisli Yol",
    body: "Yolda yürürken aniden bastıran yoğun sis yüzünden önünü göremiyorsun.",
    question: "Bu duygu iç sesin olsa, sana ne derdi?",
    type: "İç Ses"
  },
  {
    title: "Eski Sevgili",
    body: "Kafede otururken eski sevgilin yanındaki boş sandalyeye oturdu.",
    question: "Bu duygu sende olsa, o an ne yapardın?",
    type: "Self"
  }
];
