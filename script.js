let selectedLanguage = "de";

async function init() {
  await includeHTML();
  setSelectedLanguage();
  translate();
}

function translate() {
  if (selectedLanguage == "de") {
    german();
  }
  if (selectedLanguage == "en") {
    america();
  }
  if (selectedLanguage == "pl") {
    polen();
  }
  if (selectedLanguage == "tk") {
    turk();
  }
  if (selectedLanguage == "ar") {
    arabic();
  }
  if (selectedLanguage == "sp") {
    spain();
  }
  if (selectedLanguage == "fr") {
    france();
  }
}

function setSelectedLanguage() {
  selectedLanguage = localStorage.getItem("selectedLanguage") || "de";


}
 
function saveSelectedLanguage(language) {
  selectedLanguage = language;
  localStorage.setItem("selectedLanguage", selectedLanguage)
}



//NAV

window.onscroll = function () {
  let nav = document.getElementById('nav');
  let navbar = document.getElementById('headerr');
  if (window.scrollY > 0) { 
    nav.style = 'top: 0';
    navbar.style = 'display: none'; 
  } else {
    nav.style = '';
    navbar.style = ''; 

  }
}



async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}



function german() {
  saveSelectedLanguage("de");
  document.getElementById('language-start').innerHTML = 'Home';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Dienstleistungen';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Sicherheitsdienstleistungen';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Reinigunsdienstleistungen';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Logistikdienstleistungen';
  document.getElementById('language-kontakt').innerHTML = 'Kontakt';
  document.getElementById('languageh1-1').innerHTML = 'Kundenzufriedenheit ist unsere Priorität';

  document.getElementById('language-h1-slider').innerHTML = 'Security';
  document.getElementById('language-p-slider').innerHTML = 'Sicherheitsdienstleistungen für Gebäude, Personen und Veranstaltungen';
  document.getElementById('language-h1-slider1').innerHTML = 'Reinigung';
  document.getElementById('language-p-slider1').innerHTML = 'Entdecken Sie hier unser breites Spektrum an professionellen Reinigungsdienstleistungen und weiteren Services';
  document.getElementById('language-h1-slider2').innerHTML = 'Logistik und Transport';
  document.getElementById('language-p-slider2').innerHTML = 'Mit optimaler Intralogistik pünktlich beim Kunden ankommen.';
  document.getElementById('language-navi33').innerHTML = 'KONTAKT';
  document.getElementById('language-navi333').innerHTML = 'KONTAKT';
  document.getElementById('language-navi3333').innerHTML = 'KONTAKT';
  document.getElementById('language-welcome-h1').innerHTML = 'Willkommen bei der ISC';
  document.getElementById('language-h33').innerHTML = 'NUR GUT IST UNS NICHT GUT GENUG';
  document.getElementById('language-h333').innerHTML = 'Der Bedarf an Sicherheit richtet sich individuell nach Ihren jeweiligen Belangen. Wir analysieren Ihren Sicherheitsbedarf und entwickeln mit Ihnen gemeinsam eine professionelle und wirtschaftliche Lösung. Das Resultat ist ein intelligentes Sicherheitskonzept mit den für Sie relevanten Leistungen aus unserem Portfolio. Viele unserer namhaften Kunden profitieren durch die Kombination der verschiedenen Leistungsbereiche, die oftmals im Gesamtkonzept sogar zu Kosteneinsparungen führt.';
  document.getElementById('language-h2').innerHTML = 'Sicherheitsdienstleistungen';
  document.getElementById('language-h21').innerHTML = 'Reinigunsdienstleistungen';
  document.getElementById('language-h211').innerHTML = 'Logistikdienstleistungen';
  document.getElementById('language-span').innerHTML = 'Wir entlasten Sie personell und übernehmen Verantwortung für die Sicherheit Ihres Unternehmens. Unsere kompetenten und regelmäßig geschulten Mitarbeiter agieren gemäß unseres Qualitätsversprechens mit einem hohen Maß an Verantwortungsbewusstsein für Ihre Sicherheit. Was wir alles für Sie tun können, erläutern wir Ihnen gerne in einem persönlichen Gespräch.';
  document.getElementById('language-span1').innerHTML = 'Ob Mitarbeiter, Kunden oder Geschäftspartner - in einem sauberen Ambiente fühlen sich alle Menschen in einem Gebäude gleich viel wohler. Die ISC UG haftungsbeschränkt bietet Ihnen eine nachhaltige und umweltschonende Reinigung aller Büroflächen, Treppenhäuser und Gebäuden zu einem verlässlichen Pauschalpreis an. Unsere Reinigungskräfte haben ihre Arbeit bereits erledigt, bevor Sie oder Ihre Mitarbeiter bereits morgens früh die Türe Ihres Gebäudes öffnen.';
  document.getElementById('language-span2').innerHTML = 'Wir die ISC UG Haftungsbeschränkt sind ein junges und dynamisches Team, das den Schwerpunkt auf die klein Transport Beförderung von Paketen und der Umzüge jeglicher Art setzt.Ob gewerblich oder Privat, wir versuchen Ihren Alltag stressfreier zu machen! Lassen Sie sich beraten und finden Sie Ihr optimales Angebot für Ihren Wunsch.';


  document.getElementById('language-lead').innerHTML = 'Geschäftsführer';
  document.getElementById('language-lead1').innerHTML = 'Geschäftsführer';
  document.getElementById('language-contact-text1').innerHTML = 'Kontakt';
  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'HOME';
  document.getElementById('language-navi1').innerHTML = 'DIENSTLEISTUNGEN';
  document.getElementById('language-navi3').innerHTML = 'KONTAKT';
  document.getElementById('language-navi4').innerHTML = 'DATENSCHUTZ';
  document.getElementById('language-navi5').innerHTML = 'IMPRESSUM';
  document.getElementById('language-s-s').innerHTML = 'SOZIALES';
}
function america() {
  saveSelectedLanguage("en");


  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Security services';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Cleaning services';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Logistics services';
  document.getElementById('language-kontakt').innerHTML = 'CONTACT';
  document.getElementById('languageh1-1').innerHTML = 'Customer satisfaction is our priority';

  document.getElementById('language-h1-slider').innerHTML = 'Security';
  document.getElementById('language-p-slider').innerHTML = 'Security services for buildings, people and events';
  document.getElementById('language-h1-slider1').innerHTML = 'Purifying';
  document.getElementById('language-p-slider1').innerHTML = 'Discover our wide range of professional cleaning services and other services here';
  document.getElementById('language-h1-slider2').innerHTML = 'Logistics and transport';
  document.getElementById('language-p-slider2').innerHTML = 'Arriving at the customer on time with optimum intralogistics.';
  document.getElementById('language-navi33').innerHTML = 'CONTACT';
  document.getElementById('language-navi333').innerHTML = 'CONTACT';
  document.getElementById('language-navi3333').innerHTML = 'CONTACT';
  document.getElementById('language-welcome-h1').innerHTML = 'Welcome to the ISC';
  document.getElementById('language-h33').innerHTML = 'ONLY GOOD IS NOT GOOD ENOUGH';
  document.getElementById('language-h333').innerHTML = 'The need for security depends on your individual requirements. We analyze your security requirements and work with you to develop a professional and cost-effective solution. The result is an intelligent security concept with the services from our portfolio that are relevant to you. Many of our well-known customers benefit from the combination of the various service areas, which often even leads to cost savings in the overall concept.';
  document.getElementById('language-h2').innerHTML = 'Security services';
  document.getElementById('language-h21').innerHTML = 'Cleaning services';
  document.getElementById('language-h211').innerHTML = 'Logistics services';
  document.getElementById('language-span').innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, iure! Repudiandae unde praesentium ullam est consectetur odio velit deleniti earum mollitia, consequuntur voluptatem ducimus voluptatibus quasi optio fuga beatae officia, dignissimos iure quisquam aspernatur! Earum praesentium quibusdam quas esse sed.';
  document.getElementById('language-span1').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident debitis iure, tempora harum dolores, sit error culpa hic non saepe velit. Delectus temporibus libero corrupti tempora repellendus assumenda inventore beatae eius ipsum totam nulla perferendis, ad rerum fugit optio suscipit?';
  document.getElementById('language-span2').innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate iste voluptatum odit nostrum doloribus explicabo animi? Sunt tenetur eligendi est saepe perferendis eum id. Rerum nemo officia mollitia exercitationem laborum sint similique sapiente aspernatur, hic suscipit corporis, accusamus quidem excepturi.';
  document.getElementById('language-lead').innerHTML = 'Managing Director';
  document.getElementById('language-lead1').innerHTML = 'Managing Director';
document.getElementById('language-contact-text1').innerHTML = 'Contact us';
  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'HOME';
  document.getElementById('language-navi1').innerHTML = 'PERFORMANCES';
  document.getElementById('language-navi3').innerHTML = 'CONTACT';
  document.getElementById('language-navi4').innerHTML = 'Data privacy';
  document.getElementById('language-navi5').innerHTML = 'Imprint';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
}

function polen() {
  saveSelectedLanguage("pl");


  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Usługi';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'NUsługi ochrony';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Usługi sprzątania';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Usługi logistyczne';
  document.getElementById('language-kontakt').innerHTML = 'Kontakt';
  document.getElementById('languageh1-1').innerHTML = 'Zadowolenie klienta jest naszym priorytetem';

  document.getElementById('language-h1-slider').innerHTML = 'Security';
  document.getElementById('language-p-slider').innerHTML = 'Usługi ochrony budynków, osób i wydarzeń';
  document.getElementById('language-h1-slider1').innerHTML = 'Czyszczenie';
  document.getElementById('language-p-slider1').innerHTML = 'Odkryj naszą szeroką gamę profesjonalnych usług sprzątania i innych usług tutaj';
  document.getElementById('language-h1-slider2').innerHTML = 'Logistyka i transport';
  document.getElementById('language-p-slider2').innerHTML = 'Dotarcie do klienta na czas dzięki optymalnej intralogistyce.';
  document.getElementById('language-navi33').innerHTML = 'KONTAKT';
  document.getElementById('language-navi333').innerHTML = 'KONTAKT';
  document.getElementById('language-navi3333').innerHTML = 'KONTAKT';
  document.getElementById('language-welcome-h1').innerHTML = 'Witamy w ISC';
  document.getElementById('language-h33').innerHTML = 'TYLKO DOBRO NIE JEST DLA NAS WYSTARCZAJĄCO DOBRE';
  document.getElementById('language-h333').innerHTML = 'Potrzeba zapewnienia bezpieczeństwa zależy od indywidualnych wymagań. Analizujemy Twoje wymagania w zakresie bezpieczeństwa i współpracujemy z Tobą w celu opracowania profesjonalnego i opłacalnego rozwiązania. Rezultatem jest inteligentna koncepcja bezpieczeństwa z usługami z naszego portfolio, które są istotne dla klienta. Wielu naszych znanych klientów korzysta z połączenia różnych obszarów usług, co często prowadzi nawet do oszczędności kosztów w całej koncepcji.';
  document.getElementById('language-h2').innerHTML = 'NUsługi ochrony';
  document.getElementById('language-h21').innerHTML = 'Usługi sprzątania';
  document.getElementById('language-h211').innerHTML = 'Usługi logistyczne';
  document.getElementById('language-span').innerHTML = 'Odciążamy personel i bierzemy odpowiedzialność za bezpieczeństwo Twojej firmy. Nasi kompetentni i regularnie szkoleni pracownicy działają zgodnie z naszą obietnicą jakości z wysokim poczuciem odpowiedzialności za bezpieczeństwo. Chętnie wyjaśnimy, co możemy dla Ciebie zrobić podczas osobistego spotkania.';
  document.getElementById('language-span1').innerHTML = 'Czy to pracownicy, klienci czy partnerzy biznesowi - każdy w budynku czuje się znacznie bardziej komfortowo w czystym środowisku. ISC UG haftungsbeschränkt oferuje zrównoważone i przyjazne dla środowiska sprzątanie wszystkich pomieszczeń biurowych, klatek schodowych i budynków w niezawodnej cenie all-inclusive. Nasi sprzątacze wykonali już swoją pracę, zanim Ty lub Twoi pracownicy otworzyli drzwi do budynku wcześnie rano.';
  document.getElementById('language-span2').innerHTML = 'W ISC UG Haftungsbeschränkt jesteśmy młodym i dynamicznym zespołem, który koncentruje się na małym transporcie paczek i wszelkiego rodzaju przeprowadzkach, zarówno komercyjnych, jak i prywatnych, staramy się, aby Twoje codzienne życie było mniej stresujące! Pozwól nam doradzić i znaleźć najlepszą ofertę dla Twoich potrzeb.';

  document.getElementById('language-lead').innerHTML = 'Dyrektor zarządzający';
  document.getElementById('language-lead1').innerHTML = 'Dyrektor zarządzający';
document.getElementById('language-contact-text1').innerHTML = 'Kontakt';
  document.getElementById('language-quick').innerHTML = 'NAWIGACJA';
  document.getElementById('language-navi').innerHTML = 'DOM';
  document.getElementById('language-navi1').innerHTML = 'WYDAJNOŚĆ';
  document.getElementById('language-navi3').innerHTML = 'KONTAKT';
  document.getElementById('language-navi4').innerHTML = 'Ochrona danych';
  document.getElementById('language-navi5').innerHTML = 'Imprint';
  document.getElementById('language-s-s').innerHTML = 'SPOŁECZNY';
}
function turk() {
  saveSelectedLanguage("tk");


  document.getElementById('language-start').innerHTML = 'Başla';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Hizmetler';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Usługi bezpieczeństwa';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Usługi sprzątania';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Usługi logistyczne';
  document.getElementById('language-kontakt').innerHTML = 'İletişim';
  document.getElementById('languageh1-1').innerHTML = 'Müşteri memnuniyeti önceliğimizdir';


  document.getElementById('language-h1-slider').innerHTML = 'Güvenlik';
  document.getElementById('language-p-slider').innerHTML = 'Binalar, kişiler ve etkinlikler için güvenlik hizmetleri';
  document.getElementById('language-h1-slider1').innerHTML = 'Temizlik';
  document.getElementById('language-p-slider1').innerHTML = 'Geniş yelpazedeki profesyonel temizlik hizmetlerimizi ve diğer hizmetlerimizi burada keşfedin'
  document.getElementById('language-h1-slider2').innerHTML = 'Lojistik ve taşimacilik';
  document.getElementById('language-p-slider2').innerHTML = 'Optimum intralojistik ile müşteriye zamaninda ulaşin.';
  document.getElementById('language-navi33').innerHTML = 'İLETİŞİM';
  document.getElementById('language-navi333').innerHTML = 'İLETİŞİM';
  document.getElementById('language-navi3333').innerHTML = 'İLETİŞİM';
  document.getElementById('language-welcome-h1').innerHTML = 'Hoş geldiniz ISC';
  document.getElementById('language-h33').innerHTML = 'SADECE IYI BIZIM IÇIN YETERINCE IYI DEĞILDIR';
  document.getElementById('language-h333').innerHTML = 'Güvenlik ihtiyacı bireysel gereksinimlerinize bağlıdır. Güvenlik gereksinimlerinizi analiz ediyor ve profesyonel ve uygun maliyetli bir çözüm geliştirmek için sizinle birlikte çalışıyoruz. Sonuç, portföyümüzden size uygun hizmetleri içeren akıllı bir güvenlik konseptidir. Tanınmış müşterilerimizin çoğu, çeşitli hizmet alanlarının kombinasyonundan yararlanmakta ve bu da çoğu zaman genel konseptte maliyet tasarrufu sağlamaktadır.';
  document.getElementById('language-h2').innerHTML = 'Güvenlik hizmetleri';
  document.getElementById('language-h21').innerHTML = 'Temizlik Hizmetleri';
  document.getElementById('language-h211').innerHTML = 'Lojistik hizmetleri';
  document.getElementById('language-span').innerHTML = 'Sizi personel konusunda rahatlatıyor ve şirketinizin güvenliğinin sorumluluğunu üstleniyoruz. Yetkin ve düzenli eğitimli çalışanlarımız, güvenliğiniz için yüksek sorumluluk bilinciyle kalite vaadimize uygun hareket etmektedir. Kişisel bir görüşmede sizin için neler yapabileceğimizi açıklamaktan mutluluk duyacağız.';
  document.getElementById('language-span1').innerHTML = 'İster çalışanlar, ister müşteriler veya iş ortakları olsun - bir binadaki herkes temiz bir ortamda kendini çok daha rahat hisseder. ISC UG haftungsbeschränkt size tüm ofis alanlarının, merdiven boşluklarının ve binaların sürdürülebilir ve çevre dostu temizliğini her şey dahil güvenilir bir fiyatla sunar. Temizlik görevlilerimiz, siz veya çalışanlarınız sabahın erken saatlerinde binanızın kapısını açmadan önce işlerini çoktan yapmış olurlar.  ';
  document.getElementById('language-span2').innerHTML = 'Biz ISC UG Haftungsbeschränkt olarak, ister ticari ister özel olsun, her türlü küçük paket taşımacılığı ve nakliye işlerine odaklanan genç ve dinamik bir ekibiz, günlük hayatınızı daha az stresli hale getirmeye çalışıyoruz! Size tavsiyelerde bulunmamıza ve ihtiyaçlarınız için en iyi teklifi bulmamıza izin verin.';

  document.getElementById('language-lead').innerHTML = 'Genel Müdür';
  document.getElementById('language-lead1').innerHTML = 'Genel Müdür';
document.getElementById('language-contact-text1').innerHTML = 'İletişim';
  document.getElementById('language-quick').innerHTML = 'NAVİGASYON';
  document.getElementById('language-navi').innerHTML = 'ANA SAYFA';
  document.getElementById('language-navi1').innerHTML = 'HIZMETLER';
  document.getElementById('language-navi3').innerHTML = 'İLETİŞİM';
  document.getElementById('language-navi4').innerHTML = 'Veri koruma';
  document.getElementById('language-navi5').innerHTML = 'Künye';
  document.getElementById('language-s-s').innerHTML = 'SOSYAL';
}
function arabic() {
  saveSelectedLanguage("ar");


  document.getElementById('language-start').innerHTML = 'بدء';
  document.getElementById('languageDienstleistungen2').innerHTML = "خدمات";
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'خدمات الأمن';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'خدمات التنظيف';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'السوقيات';
  document.getElementById('language-kontakt').innerHTML = 'الاتصال';
  document.getElementById('languageh1-1').innerHTML = 'رضا العملاء هو أولويتنا';

  document.getElementById('language-h1-slider').innerHTML = 'أمن';
  document.getElementById('language-p-slider').innerHTML = 'خدمات أمنية للمباني والأشخاص والمناسبات';
  document.getElementById('language-h1-slider1').innerHTML = 'تنظيف';
  document.getElementById('language-p-slider1').innerHTML = 'اكتشف مجموعتنا الواسعة من خدمات التنظيف الاحترافية والخدمات الأخرى هنا';
  document.getElementById('language-h1-slider2').innerHTML = 'الخدمات اللوجستية والنقل';
  document.getElementById('language-p-slider2').innerHTML = 'الوصول إلى العميل في الوقت المحدد مع الخدمات اللوجستية الداخلية المثلى.';
  document.getElementById('language-navi33').innerHTML = 'الاتصال';
  document.getElementById('language-navi333').innerHTML = 'الاتصال';
  document.getElementById('language-navi3333').innerHTML = 'الاتصال';
  document.getElementById('language-welcome-h1').innerHTML = 'مرحبا بكم في ISC';
  document.getElementById('language-h33').innerHTML = 'الخير فقط ليس جيدا بما يكفي بالنسبة لنا';
  document.getElementById('language-h333').innerHTML = 'تعتمد الحاجة إلى الأمان على احتياجاتك الفردية. نحن نحلل احتياجاتك الأمنية ونعمل معك لتطوير حل احترافي وفعال من حيث التكلفة. والنتيجة هي مفهوم أمان ذكي مع الخدمات ذات الصلة بك من محفظتنا. يستفيد العديد من عملائنا المعروفين من الجمع بين مجالات الخدمة المختلفة ، مما يؤدي في كثير من الأحيان إلى توفير التكاليف في المفهوم العام.';
  document.getElementById('language-h2').innerHTML = 'خدمات الأمن';
  document.getElementById('language-h21').innerHTML = 'خدمات التنظيف';
  document.getElementById('language-h211').innerHTML = 'السوقيات';
  document.getElementById('language-span').innerHTML = 'نحن نعفيك من عبء الموظفين ونتحمل المسؤولية عن أمن شركتك. يعمل موظفونا الأكفاء والمدربون بانتظام وفقا لوعدنا بالجودة بدرجة عالية من المسؤولية عن سلامتك. يسعدنا أن نشرح لك ما يمكننا القيام به من أجلك في محادثة شخصية.';
  document.getElementById('language-span1').innerHTML = 'سواء كانوا موظفين أو عملاء أو شركاء أعمال - في أجواء نظيفة ، يشعر الجميع براحة أكبر في المبنى. تقدم لك ISC UG haftungsbeschränkt تنظيفا مستداما وصديقا للبيئة لجميع المساحات المكتبية والسلالم والمباني بسعر شامل يمكن الاعتماد عليه. لقد قام عمال النظافة لدينا بالفعل بعملهم قبل أن تفتح أنت أو موظفوك باب المبنى الخاص بك في الصباح الباكر.';
  document.getElementById('language-span2').innerHTML = 'نحن فريق شاب وديناميكي يركز على النقل الصغير للطرود وعمليات الإزالة بجميع أنواعها. سواء كانت تجارية أو خاصة ، نحاول أن نجعل حياتك اليومية أقل إرهاقا! دعنا ننصحك ونجد عرضك الأمثل لرغباتك.';

  document.getElementById('language-lead').innerHTML = 'مدير';
  document.getElementById('language-lead1').innerHTML = 'مدير';
document.getElementById('language-contact-text1').innerHTML = 'الاتصال';
  document.getElementById('language-quick').innerHTML = 'ملاحة';
  document.getElementById('language-navi').innerHTML = 'وطن';
  document.getElementById('language-navi1').innerHTML = 'العروض';
  document.getElementById('language-navi3').innerHTML = 'الاتصال';
  document.getElementById('language-navi4').innerHTML = 'الخصوصيه';
  document.getElementById('language-navi5').innerHTML = 'بصمه';
  document.getElementById('language-s-s').innerHTML = 'الشؤون الاجتماعية';
}
function spain() {
  saveSelectedLanguage("sp");


  document.getElementById('language-start').innerHTML = 'Inicio';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Servicios';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Servicios de seguridad';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Servicios de limpieza';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Servicios logísticos';
  document.getElementById('language-kontakt').innerHTML = 'Contacto';
  document.getElementById('languageh1-1').innerHTML = 'La satisfacción del cliente es nuestra prioridad';

  document.getElementById('language-h1-slider').innerHTML = 'Seguridad';
  document.getElementById('language-p-slider').innerHTML = 'Servicios de seguridad para edificios, personas y eventos';
  document.getElementById('language-h1-slider1').innerHTML = 'Limpieza';
  document.getElementById('language-p-slider1').innerHTML = 'Descubra aquí nuestra amplia gama de servicios de limpieza profesional y otros servicios';
  document.getElementById('language-h1-slider2').innerHTML = 'Logística y transporte';
  document.getElementById('language-p-slider2').innerHTML = 'Llegue a tiempo al cliente con una intralogística óptima.';
  document.getElementById('language-navi33').innerHTML = 'CONTACTO';
  document.getElementById('language-navi333').innerHTML = 'CONTACTO';
  document.getElementById('language-navi3333').innerHTML = 'CONTACTO';
  document.getElementById('language-welcome-h1').innerHTML = 'Bienvenido al ISC';
  document.getElementById('language-h33').innerHTML = 'SÓLO LO BUENO NO NOS BASTA';
  document.getElementById('language-h333').innerHTML = 'La necesidad de seguridad depende de sus requisitos individuales. Analizamos sus requisitos de seguridad y desarrollamos con usted una solución profesional y rentable. El resultado es un concepto de seguridad inteligente con los servicios de nuestra cartera que sean relevantes para usted. Muchos de nuestros clientes de renombre se benefician de la combinación de las distintas áreas de servicio, lo que a menudo permite incluso ahorrar costes en el concepto global.';
  document.getElementById('language-h2').innerHTML = 'Servicios de seguridad';
  document.getElementById('language-h21').innerHTML = 'Servicios de limpieza';
  document.getElementById('language-h211').innerHTML = 'Servicios logísticos';
  document.getElementById('language-span').innerHTML = 'Le relevamos de personal y asumimos la responsabilidad de la seguridad de su empresa. Nuestros empleados, competentes y formados regularmente, actúan conforme a nuestra promesa de calidad con un alto sentido de la responsabilidad por su seguridad. Estaremos encantados de explicarle lo que podemos hacer por usted en una reunión personal.';
  document.getElementById('language-span1').innerHTML = 'Ya sean empleados, clientes o socios comerciales, todos los que se encuentran en un edificio se sienten mucho más cómodos en un entorno limpio. ISC UG haftungsbeschränkt le ofrece una limpieza sostenible y respetuosa con el medio ambiente de todos los espacios de oficinas, escaleras y edificios a un precio fiable con todo incluido. Nuestros limpiadores ya han hecho su trabajo antes de que usted o sus empleados abran la puerta de su edificio a primera hora de la mañana.  ';
  document.getElementById('language-span2').innerHTML = 'En ISC UG Haftungsbeschränkt somos un equipo joven y dinámico que se centra en el pequeño transporte de paquetería y mudanzas de todo tipo, ya sean comerciales o privadas, ¡intentamos hacer su día a día menos estresante! Permítanos asesorarle y encontrar la mejor oferta para sus necesidades.';

  document.getElementById('language-lead').innerHTML = 'Director General';
  document.getElementById('language-lead1').innerHTML = 'Director General';
document.getElementById('language-contact-text1').innerHTML = 'Contacto';
  document.getElementById('language-quick').innerHTML = 'NAVEGACIÓN';
  document.getElementById('language-navi').innerHTML = 'INICIO';
  document.getElementById('language-navi1').innerHTML = 'RENDIMIENTO';
  document.getElementById('language-navi3').innerHTML = 'CONTACTO';
  document.getElementById('language-navi4').innerHTML = 'Protección de datos';
  document.getElementById('language-navi5').innerHTML = 'Pie de imprenta';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
}
function france() {
  saveSelectedLanguage("fr");


  document.getElementById('language-start').innerHTML = 'Lancement';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Services de sécurité';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Services de nettoyage';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Services logistiques';
  document.getElementById('language-kontakt').innerHTML = 'Contact';
  document.getElementById('languageh1-1').innerHTML = 'La satisfaction du client est notre priorité';

  document.getElementById('language-h1-slider').innerHTML = 'Sécurité';
  document.getElementById('language-p-slider').innerHTML = 'Services de sécurité pour les bâtiments, les personnes et les événements';
  document.getElementById('language-h1-slider1').innerHTML = 'Nettoyage';
  document.getElementById('language-p-slider1').innerHTML = 'Découvrez ici notre large gamme de prestations de nettoyage professionnel et d autres services';
  document.getElementById('language-h1-slider2').innerHTML = 'Logistique et transport';
  document.getElementById('language-p-slider2').innerHTML = 'Arriver à temps chez le client grâce à une intralogistique optimale.';
  document.getElementById('language-navi33').innerHTML = 'CONTACT';
  document.getElementById('language-navi333').innerHTML = 'CONTACT';
  document.getElementById('language-navi3333').innerHTML = 'CONTACT';
  document.getElementById('language-welcome-h1').innerHTML = "Bienvenue à l'ISC";
  document.getElementById('language-h33').innerHTML = "LE BIEN N'EST PAS SUFFISANT POUR NOUS";
  document.getElementById('language-h333').innerHTML = 'Les besoins en matière de sécurité dépendent de vos besoins spécifiques. Nous analysons vos besoins en matière de sécurité et développons avec vous une solution professionnelle et économique. Le résultat est un concept de sécurité intelligent avec les prestations de notre portefeuille qui vous intéressent. Nombre de nos clients de renom profitent de la combinaison des différents domaines de prestations, qui permet même souvent de réaliser des économies dans le cadre du concept global.';
  document.getElementById('language-h2').innerHTML = 'Services de sécurité';
  document.getElementById('language-h21').innerHTML = 'Services de nettoyage';
  document.getElementById('language-h211').innerHTML = 'Services logistiques';
  document.getElementById('language-span').innerHTML = 'Nous vous soulageons en termes de personnel et prenons la responsabilité de la sécurité de votre entreprise. Nos collaborateurs compétents et régulièrement formés agissent conformément à notre promesse de qualité avec un grand sens des responsabilités pour votre sécurité. Nous vous expliquerons volontiers tout ce que nous pouvons faire pour vous lors d´un entretien personnel.';
  document.getElementById('language-span1').innerHTML = 'Qu´il s´agisse de collaborateurs, de clients ou de partenaires commerciaux, tous se sentent mieux dans un bâtiment propre. ISC UG haftungsbeschränkt vous propose un nettoyage durable et respectueux de l´environnement de tous les bureaux, cages d´escalier et bâtiments à un prix forfaitaire fiable. Nos agents de nettoyage ont déjà fait leur travail avant que vous ou vos collaborateurs n´ouvrent les portes de votre bâtiment dès le matin.';
  document.getElementById('language-span2').innerHTML = 'Nous, ISC UG Haftungsbeschränkt, sommes une équipe jeune et dynamique qui met l´accent sur le petit transport de colis et les déménagements en tout genre, que ce soit pour les professionnels ou les particuliers, nous essayons de rendre votre quotidien moins stressant ! Laissez-nous vous conseiller et trouver l´offre la plus adaptée à vos besoins.';

  document.getElementById('language-lead').innerHTML = 'Directeur général';
  document.getElementById('language-lead1').innerHTML = 'Directeur général';
document.getElementById('language-contact-text1').innerHTML = 'Contacto';

  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'ACCUEIL';
  document.getElementById('language-navi1').innerHTML = 'PERFORMANCES';
  document.getElementById('language-navi3').innerHTML = 'CONTACT';
  document.getElementById('language-navi4').innerHTML = 'Protection des données';
  document.getElementById('language-navi5').innerHTML = 'Mentions légales';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
}

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});