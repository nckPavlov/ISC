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

function german() {
    saveSelectedLanguage("de");
    document.getElementById('language-m2-1').innerHTML = 'Reinigunsdienstleistungen';
    document.getElementById('language-m2-2').innerHTML = '<p> Ob Mitarbeiter, Kunden oder Geschäftspartner – in einem sauberen Ambiente fühlen sich alle Menschen in einem Gebäude gleich viel wohler. Die ISC UG haftungsbeschränkt bietet Ihnen eine nachhaltige und umweltschonende Reinigung aller Büroflächen, Treppenhäuser und Gebäuden zu einem verlässlichen Pauschalpreis an. Unsere Reinigungskräfte haben ihre Arbeit bereits erledigt, bevor Sie oder Ihre Mitarbeiter bereits morgens früh die Türe Ihres Gebäudes öffnen. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Fensterreinigung';
    document.getElementById('language-m2-4').innerHTML = 'schon ab 29€';
    document.getElementById('language-m2-5').innerHTML = 'Treppenhausreinigung';
    document.getElementById('language-m2-6').innerHTML = 'schon ab 39€';
    document.getElementById('language-m2-7').innerHTML = 'Büroreinigung';
    document.getElementById('language-m2-8').innerHTML = 'schon ab 89€';
    document.getElementById('language-m2-9').innerHTML = 'Gebäudereinigung';
    document.getElementById('language-m2-10').innerHTML = 'schon ab 199€';
    document.getElementById('language-m2-11').innerHTML = 'Unsere Angebot';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Text Reinigungskräfte</p> <br> <p> Unsere Reinigungskräfte nutzen ausschließlich moderne Geräte und umweltschonende Reinigungsmittel. Die ISC UG haftungsbeschränkt kann Ihnen nicht nur die Gebäudereinigung anbieten, sondern auch beispielsweise die Büroreinigung, Treppenhausreinigung, Teppichreinigung oder Fensterreinigung. <br> Sie können diese Leistungen separat oder im Paket buchen – ganz wie Sie es benötigen. <br> Selbstverständlich kommen unsere Reinigungskräfte außerhalb der Bürozeiten zu Ihnen. Sie legen fest, wann und wie oft bei Ihnen gereinigt werden soll. Dabei setzen wir unsere Reinigungskräfte wann immer möglich als feste Teams ein – so sind sie bestens mit Ihren Räumlichkeiten vertraut und können besser auf Ihre individuellen Wünsche eingehen. <br> Wenn Sie also zuverlässige und gewissenhafte Reinigungskräfte suchen, sind Sie bei uns genau richtig! </p> <br> <p>Unsere Dienstleistungen:</p> <li>Gebäudereinigung</li> <li>Fensterreinigung</li> <li>Praxisreinigung</li> <li>Büroreinigung</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Treppenhausreinigung</p> <br> <p> Treppenhausreinigung <br> Ein blitzblanker Flur und saubere Treppen sollten eine Selbstverständlichkeit sein – schließlich fungiert dieser Bereich oft genug als Visitenkarte eines Unternehmens. <br> Ein tadelloses Treppenhaus vermittelt auch dem Kunden, dass er sich in guten Händen befindet. <br> Und dieser erste Eindruck ist oft der wichtigste! Andererseits muss beachtet werden, dass das Treppenhaus zu den am stärksten frequentierten und somit beanspruchten Bereichen einer Firma zählt. Genau hier kommt unsere Treppenhausreinigung ins Spiel – unsere erfahrenen Reinigungskräfte säubern gründlich und pünktlich Flure, selbstverständlich inklusive aller Zugangswege. <br> Auf der anderen Seite gehen wir der Sache auch gern tiefer auf den Grund und reinigen ihre Keller-, Wasch- und Trockenräume. <br> Zu unseren langjährigen zufriedenen Kunden zählen auch viele Genossenschaften und Hausverwaltungen – mit uns geht es also hoch hinaus! <br> Testen Sie unsere Treppenhausreinigung </p>';


    document.getElementById('language-start').innerHTML = 'Home';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Dienstleistungen';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Sicherheitsdienstleistungen';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Reinigunsdienstleistungen';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Logistikdienstleistungen';
    document.getElementById('language-kontakt').innerHTML = 'Kontakt';
    document.getElementById('languageh1-1').innerHTML = 'Kundenzufriedenheit ist unsere Priorität';

    document.getElementById('language-welcome-h117').innerHTML = 'UNSERE VISION';
    document.getElementById('language-h3-h3').innerHTML = 'Kennen Sie das mangelhafte Problem an Sicherheit und Schutz, den mangelnden Transportfähigkeiten von A nach B oder den dreckigen Räumlichkeiten? Unsere Vision vereint alle Aspekte in einem und greift somit ineinander ein. Ob Verantwortung, Vertrauen oder die Arbeit, alles beruht auf gegenseitigkeit. Den nur als Gruppe sind wir stark !';
    document.getElementById('language-welcome-h17').innerHTML = 'UNSERE LÖSUNGEN';
    document.getElementById('language-h3-h3-h3').innerHTML = 'Die Lösung für all das Problem ist eine Zusammenfügung von Kompetenten Personal, der ständigen Weiterbildung und Jahre lange Erfahrung in den verschiedensten Bereichen. Denn nur wenn man sich Sicher fühlt, erweckt man Vertrauen und mit Vertrauen gewinnt man ebenfalls eine nähere Bindung und eine steigende Zufriedenheit.';
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
    document.getElementById('language-m2-1').innerHTML = 'Cleaning Services';
    document.getElementById('language-m2-2').innerHTML = '<p> Whether it s employees, customers, or business partners – everyone feels more comfortable in a clean environment. ISC UG (limited liability) offers you sustainable and eco-friendly cleaning services for all office spaces, stairwells, and buildings at a reliable flat rate. Our cleaning staff has already completed their work before you or your employees open the doors to your building in the early morning. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Window Cleaning';
    document.getElementById('language-m2-4').innerHTML = 'starting from €29';
    document.getElementById('language-m2-5').innerHTML = 'Stairwell Cleaning';
    document.getElementById('language-m2-6').innerHTML = 'starting from €39';
    document.getElementById('language-m2-7').innerHTML = 'Office Cleaning';
    document.getElementById('language-m2-8').innerHTML = 'starting from €89';
    document.getElementById('language-m2-9').innerHTML = 'Building Cleaning';
    document.getElementById('language-m2-10').innerHTML = 'starting from €199';
    document.getElementById('language-m2-11').innerHTML = 'Our Offerings';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Cleaning Staff</p> <br> <p> Our cleaning staff exclusively use modern equipment and eco-friendly cleaning agents. ISC UG (limited liability) can offer you not only building cleaning but also services such as office cleaning, stairwell cleaning, carpet cleaning, or window cleaning. <br> You can book these services separately or as a package – whichever suits your needs. <br> Our cleaning staff is available outside of office hours. You decide when and how often they should clean for you. Whenever possible, we assign our cleaning staff as fixed teams – they are familiar with your premises and can better accommodate your individual preferences. <br> So, if you re looking for reliable and diligent cleaning staff, you ve come to the right place! </p> <br> <p>Our Services:</p> <li>Building Cleaning</li> <li>Window Cleaning</li> <li>Medical Office Cleaning</li> <li>Office Cleaning</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Stairwell Cleaning</p> <br> <p> Stairwell Cleaning <br> A spotless corridor and clean stairwells should be a given – after all, this area often serves as a company s business card. <br> An impeccable stairwell also conveys to the customer that they are in good hands. This first impression is often the most important! On the other hand, it should be noted that the stairwell is one of the most heavily trafficked and therefore stressed areas of a company. This is where our stairwell cleaning comes into play – our experienced cleaning staff thoroughly and punctually clean corridors, including all access routes, of course. <br> On the other hand, we are also happy to dig deeper and clean your basement, laundry, and drying rooms. <br> Many cooperatives and property management companies are among our long-standing satisfied customers – so we aim high! <br> Try our stairwell cleaning service </p>';


    document.getElementById('language-start').innerHTML = 'Start';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Security services';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Cleaning services';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Logistics services';
    document.getElementById('language-kontakt').innerHTML = 'CONTACT';
    document.getElementById('languageh1-1').innerHTML = 'Customer satisfaction is our priority';


    document.getElementById('language-welcome-h117').innerHTML = 'OUR VISION';
    document.getElementById('language-h3-h3').innerHTML = 'Do you know the lack of safety and security, the lack of transport capabilities from A to B or the dirty premises? Our vision combines all aspects in one and thus interlocks. Whether responsibility, trust or the work, everything is based on mutuality. Only as a group we are strong !';
    document.getElementById('language-welcome-h17').innerHTML = 'OUR SOLUTIONS';
    document.getElementById('language-h3-h3-h3').innerHTML = 'The solution to all these problems is a combination of competent personnel, continuous training and years of experience in various fields. Because only when you feel safe, you inspire confidence and with confidence you also gain a closer relationship and increasing satisfaction.';
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
    document.getElementById('language-m2-1').innerHTML = 'Usługi sprzątające';
    document.getElementById('language-m2-2').innerHTML = '<p> Niezależnie od pracowników, klientów czy partnerów biznesowych – wszyscy czują się lepiej w czystym otoczeniu. ISC UG haftungsbeschränkt oferuje trwałe i przyjazne dla środowiska czyszczenie biur, klatek schodowych i budynków w przystępnej cenie. Nasi pracownicy sprzątają już przed tym, zanim otworzysz drzwi swojego budynku o poranku. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Czyszczenie okien';
    document.getElementById('language-m2-4').innerHTML = 'już od 29€';
    document.getElementById('language-m2-5').innerHTML = 'Czyszczenie klatek schodowych';
    document.getElementById('language-m2-6').innerHTML = 'już od 39€';
    document.getElementById('language-m2-7').innerHTML = 'Czyszczenie biur';
    document.getElementById('language-m2-8').innerHTML = 'już od 89€';
    document.getElementById('language-m2-9').innerHTML = 'Czyszczenie budynków';
    document.getElementById('language-m2-10').innerHTML = 'już od 199€';
    document.getElementById('language-m2-11').innerHTML = 'Nasza oferta';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Tekst o pracownikach sprzątających</p> <br> <p> Nasi pracownicy sprzątający używają tylko nowoczesnych urządzeń i środków czyszczących przyjaznych dla środowiska. ISC UG haftungsbeschränkt oferuje nie tylko czyszczenie budynków, ale także na przykład czyszczenie biur, klatek schodowych, czyszczenie dywanów czy czyszczenie okien. <br> Możesz wybrać te usługi osobno lub w pakiecie, w zależności od potrzeb. <br> Nasi pracownicy sprzątający przychodzą do Ciebie poza godzinami pracy biurowej. Ty decydujesz, kiedy i jak często mają sprzątać. Staramy się też zatrudniać naszych pracowników sprzątających w stałych zespołach, dzięki czemu lepiej znają Twoje pomieszczenia i mogą lepiej dostosować się do Twoich indywidualnych potrzeb. <br> Jeśli więc szukasz niezawodnych i sumiennych pracowników sprzątających, to jesteś u nas w odpowiednim miejscu! </p> <br> <p>Nasze usługi:</p> <li>Czyszczenie budynków</li> <li>Czyszczenie okien</li> <li>Czyszczenie gabinetów lekarskich</li> <li>Czyszczenie biur</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Czyszczenie klatek schodowych</p> <br> <p> Czyszczenie klatek schodowych <br> Błyszczący korytarz i czyste schody powinny być normą – przecież to często jest wizytówka firmy. <br> Bez skazy klatka schodowa sprawia również klientowi, że jest w dobrych rękach. <br> A pierwsze wrażenie jest często najważniejsze! Z drugiej strony trzeba pamiętać, że klatka schodowa jest jednym z najbardziej uczęszczanych i obciążonych miejsc w firmie. Dokładnie tu wchodzi nasze czyszczenie klatek schodowych – nasi doświadczeni pracownicy sprzątający dokładnie i punktualnie sprzątają korytarze, oczywiście wraz z wszystkimi przejściami. <br> Z drugiej strony chętnie sięgamy głębiej i czyszcimy piwnice, pralnie i suszarnie. <br> Wśród naszych zadowolonych klientów są również liczne spółdzielnie i zarządcy nieruchomości – więc z nami można osiągnąć naprawdę wysoki poziom! <br> Wypróbuj nasze czyszczenie klatek schodowych </p>';

    document.getElementById('language-start').innerHTML = 'Start';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Usługi';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'NUsługi ochrony';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Usługi sprzątania';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Usługi logistyczne';
    document.getElementById('language-kontakt').innerHTML = 'Kontakt';
    document.getElementById('languageh1-1').innerHTML = 'Zadowolenie klienta jest naszym priorytetem';


    document.getElementById('language-welcome-h117').innerHTML = 'NASZA WIZJA';
    document.getElementById('language-h3-h3').innerHTML = 'Czy znasz brak bezpieczeństwa i ochrony, brak możliwości transportu z punktu A do punktu B lub brudne pomieszczenia? Nasza wizja łączy wszystkie aspekty w jedno i w ten sposób zazębia się. Niezależnie od tego, czy chodzi o odpowiedzialność, zaufanie czy pracę, wszystko opiera się na wzajemności. Ponieważ tylko jako grupa jesteśmy silni!';
    document.getElementById('language-welcome-h17').innerHTML = 'NASZE ROZWIĄZANIE';
    document.getElementById('language-h3-h3-h3').innerHTML = 'Rozwiązaniem tych wszystkich problemów jest połączenie kompetentnego personelu, ciągłych szkoleń i wieloletniego doświadczenia w różnych dziedzinach. Ponieważ tylko wtedy, gdy czujesz się bezpiecznie, wzbudzasz zaufanie, a wraz z zaufaniem zyskujesz również bliższe relacje i rosnącą satysfakcję.';
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
    document.getElementById('language-m2-1').innerHTML = 'Temizlik Hizmetleri';
    document.getElementById('language-m2-2').innerHTML = '<p> Çalışanlarınız, müşterileriniz veya iş ortaklarınız - temiz bir ortamda herkes bir binada aynı derecede rahat hisseder. ISC Sınırlı Sorumluluk Şirketi size tüm ofis alanlarının, merdivenlerin ve binaların sürdürülebilir ve çevre dostu bir şekilde temizliğini güvenilir bir sabit fiyatla sunar. Temizlik personelimiz, binanızın kapısını sabah erken saatlerde bile açmadan önce işlerini bitirmiş olur. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Cam Temizliği';
    document.getElementById('language-m2-4').innerHTML = 'sadece 29€\'dan başlayan fiyatlarla';
    document.getElementById('language-m2-5').innerHTML = 'Merdiven Temizliği';
    document.getElementById('language-m2-6').innerHTML = 'sadece 39€\'dan başlayan fiyatlarla';
    document.getElementById('language-m2-7').innerHTML = 'Ofis Temizliği';
    document.getElementById('language-m2-8').innerHTML = 'sadece 89€\'dan başlayan fiyatlarla';
    document.getElementById('language-m2-9').innerHTML = 'Bina Temizliği';
    document.getElementById('language-m2-10').innerHTML = 'sadece 199€\'dan başlayan fiyatlarla';
    document.getElementById('language-m2-11').innerHTML = 'Tekliflerimiz';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Temizlik Personeli</p> <br> <p> Temizlik personelimiz yalnızca modern ekipmanlar ve çevre dostu temizlik ürünleri kullanır. ISC Sınırlı Sorumluluk Şirketi size sadece bina temizliği sunmakla kalmaz, aynı zamanda ofis temizliği, merdiven temizliği, halı temizliği veya cam temizliği gibi hizmetleri de sunabilir. <br> Bu hizmetleri ayrı ayrı veya paket halinde rezerve edebilirsiniz - ihtiyacınıza göre. <br> Temizlik personelimiz size uygun saatler dışında gelir. Temizlik ne zaman ve ne sıklıkta yapılmalıdır siz belirlersiniz. Ayrıca temizlik personelimizi mümkün olduğunca sabit ekipler olarak kullanıyoruz - böylece mekanlarınıza daha iyi hakimler ve özel isteklerinize daha iyi yanıt verebilirler. <br> Yani güvenilir ve özenli temizlik personeli arıyorsanız, doğru yerdesiniz! </p> <br> <p>Hizmetlerimiz:</p> <li>Bina Temizliği</li> <li>Cam Temizliği</li> <li>Pratik Temizliği</li> <li>Ofis Temizliği</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Merdiven Temizliği</p> <br> <p> Merdiven Temizliği <br> Parlayan bir koridor ve temiz merdivenler genellikle bir şirketin kartviziti olarak görev yapmalıdır - çünkü bu alan genellikle bir işletmenin ilk izlenimini oluşturur. <br> Kusursuz bir merdiven, müşteriye kendini iyi ellerde hissettirir. <br> Ve bu ilk izlenim genellikle en önemli olandır! Öte yandan merdivenler, bir şirketin en yoğun ve dolayısıyla en fazla kullanılan alanlarından biri olarak kabul edilmelidir. İşte burada merdiven temizliğimiz devreye giriyor - deneyimli temizlik personelimiz koridorları temiz ve düzenli bir şekilde temizler, elbette tüm erişim yollarını içerir. <br> Diğer yandan, bodrum, çamaşır ve kurutma odalarını da temizleme konusunda derinlemesine bir çalışma yaparız. <br> Memnun müşterilerimiz arasında birçok kooperatif ve apartman yönetimi bulunmaktadır - bu yüzden bizimle yükseklere çıkabilirsiniz! <br> Merdiven temizliğimizi deneyin </p>';

    document.getElementById('language-start').innerHTML = 'Başla';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Hizmetler';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Usługi bezpieczeństwa';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Usługi sprzątania';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Usługi logistyczne';
    document.getElementById('language-kontakt').innerHTML = 'İletişim';
    document.getElementById('languageh1-1').innerHTML = 'Müşteri memnuniyeti önceliğimizdir';

    document.getElementById('languagee').innerHTML = " Neden Biz ";

    document.getElementById('language-welcome-h117').innerHTML = 'BİZİM VİZYONUMUZ';
    document.getElementById('language-h3-h3').innerHTML = "Güvenlik ve koruma eksikliğini, A noktasindan B noktasina taşima olanaklarinin yetersizliğini veya kirli binalari biliyor musunuz? Vizyonumuz tüm unsurlari bir araya getirir ve böylece birbirine kenetlenir. Sorumluluk, güven veya iş olsun, her şey karşilikliliğa dayanir. Çünkü sadece bir grup olarak güçlüyüz!";
    document.getElementById('language-welcome-h17').innerHTML = 'BİZİM ÇÖZÜMLERİMİZ';
    document.getElementById('language-h3-h3-h3').innerHTML = 'Tüm bu sorunlarin çözümü, yetkin personel, sürekli eğitim ve çeşitli alanlarda yillarin deneyiminin birleşimidir. Çünkü ancak kendinizi güvende hissettiğinizde güven verirsiniz ve güvenle birlikte daha yakin bir ilişki ve artan bir memnuniyet elde edersiniz.';
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
    document.getElementById('language-m2-1').innerHTML = 'خدمات التنظيف';
    document.getElementById('language-m2-2').innerHTML = '<p> سواء كان الموظفون أو العملاء أو شركاء الأعمال - في بيئة نظيفة، يشعر جميع الأشخاص في المبنى بالراحة. تقدم ISC UG محدودة المسؤولية خدمات تنظيف مستدامة وصديقة للبيئة لجميع مساحات المكاتب والسلالم والمباني بأسعار ثابتة موثوقة. قام موظفو التنظيف لدينا بإنجاز عملهم بالفعل قبل أن تفتح أبواب مبناك أو موظفيك في الصباح الباكر. </p>';
    document.getElementById('language-m2-3').innerHTML = 'تنظيف النوافذ';
    document.getElementById('language-m2-4').innerHTML = 'بدءًا من 29 يورو';
    document.getElementById('language-m2-5').innerHTML = 'تنظيف السلالم';
    document.getElementById('language-m2-6').innerHTML = 'بدءًا من 39 يورو';
    document.getElementById('language-m2-7').innerHTML = 'تنظيف المكاتب';
    document.getElementById('language-m2-8').innerHTML = 'بدءًا من 89 يورو';
    document.getElementById('language-m2-9').innerHTML = 'تنظيف المباني';
    document.getElementById('language-m2-10').innerHTML = 'بدءًا من 199 يورو';
    document.getElementById('language-m2-11').innerHTML = 'عروضنا';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ نص حول موظفي التنظيف</p> <br> <p> يستخدم موظفو التنظيف لدينا فقط أجهزة حديثة ومنظفات صديقة للبيئة. يمكن لشركة ISC UG المحدودة المسؤولية أن تقدم لك ليس فقط خدمات تنظيف المباني، ولكن أيضًا خدمات تنظيف المكاتب، وخدمات تنظيف السلالم، وخدمات تنظيف السجاد، أو خدمات تنظيف النوافذ على سبيل المثال. <br> يمكنك حجز هذه الخدمات بشكل منفصل أو كحزمة - حسب احتياجاتك. <br> بالطبع، يأتي موظفو التنظيف لدينا إلى موقعك خارج ساعات العمل في المكتب. تحدد أنت متى وكم مرة يجب أن يتم التنظيف لديك. نحن نستخدم موظفي التنظيف كفرق ثابتة في أقصى الحالات - حيث يكونون على دراية تامة بمساحاتك ويمكنهم تلبية رغباتك الفردية بشكل أفضل. <br> إذا كنت تبحث عن موظفي تنظيف موثوقين ومحترفين، فأنت في المكان الصحيح!</p> <br> <p>خدماتنا:</p> <li>خدمات تنظيف المباني</li> <li>خدمات تنظيف النوافذ</li> <li>خدمات تنظيف العيادات</li> <li>خدمات تنظيف المكاتب</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ خدمات تنظيف السلالم</p> <br> <p> تنظيف السلالم <br> يجب أن يكون الرواق النظيف والسلالم النظيفة أمرًا طبيعيًا - حيث يعتبر هذا المجال في كثير من الأحيان بمثابة بطاقة العرض للشركة. <br> الرواق الذي لا يشوبه عيب والسلالم النظيفة يعطيان العميل أيضًا الإحساس بأنه في أيدي جيدة. <br> وهذا الانطباع الأول غالبًا ما يكون الأهم! ومن ناحية أخرى، يجب مراعاة أن السلالم تعتبر واحدة من أكثر المناطق توجيها وبالتالي استخدامًا في الشركة. هنا تأتي خدمة تنظيف السلالم لدينا - حيث يقوم موظفو التنظيف ذوي الخبرة لدينا بتنظيف الرواقات بعمق وفي الوقت المناسب، بما في ذلك جميع الممرات. ';

    document.getElementById('language-start').innerHTML = 'بدء';
    document.getElementById('languageDienstleistungen2').innerHTML = "خدمات";
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'خدمات الأمن';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'خدمات التنظيف';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'السوقيات';
    document.getElementById('language-kontakt').innerHTML = 'الاتصال';
    document.getElementById('languageh1-1').innerHTML = 'رضا العملاء هو أولويتنا';
  
  
  
    document.getElementById('language-welcome-h117').innerHTML = 'رؤيتنا';
    document.getElementById('language-h3-h3').innerHTML = 'هل أنت على دراية بنقص السلامة والأمن ، ونقص مهارات النقل من A إلى B أو المباني القذرة؟ رؤيتنا توحد جميع الجوانب في واحد وبالتالي تتشابك مع بعضها البعض. سواء كانت مسؤولية أو ثقة أو عمل ، فكل شيء متبادل. لأننا أقوياء فقط كمجموعة';
    document.getElementById('language-welcome-h17').innerHTML = 'حلولنا';
    document.getElementById('language-h3-h3-h3').innerHTML = 'الحل لجميع هذه المشكلة هو مزيج من الموظفين الأكفاء والتدريب المستمر وسنوات من الخبرة في مختلف المجالات. لأنه فقط عندما تشعر بالأمان ، فإنك تلهم الثقة وبالثقة تكتسب أيضا رابطة أوثق ورضا متزايدا.';
  
  
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
    document.getElementById('language-m2-1').innerHTML = 'Servicios de limpieza';
    document.getElementById('language-m2-2').innerHTML = '<p> Ya sea personal, clientes o socios comerciales, todos se sienten mucho más cómodos en un ambiente limpio en un edificio. ISC UG haftungsbeschränkt le ofrece un servicio de limpieza sostenible y respetuoso con el medio ambiente para todas las áreas de oficina, escaleras y edificios a un precio fijo confiable. Nuestros trabajadores de limpieza ya han completado su trabajo antes de que usted o sus empleados abran las puertas de su edificio por la mañana. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Limpieza de ventanas';
    document.getElementById('language-m2-4').innerHTML = 'desde 29€';
    document.getElementById('language-m2-5').innerHTML = 'Limpieza de escaleras';
    document.getElementById('language-m2-6').innerHTML = 'desde 39€';
    document.getElementById('language-m2-7').innerHTML = 'Limpieza de oficinas';
    document.getElementById('language-m2-8').innerHTML = 'desde 89€';
    document.getElementById('language-m2-9').innerHTML = 'Limpieza de edificios';
    document.getElementById('language-m2-10').innerHTML = 'desde 199€';
    document.getElementById('language-m2-11').innerHTML = 'Nuestra oferta';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Trabajadores de limpieza</p> <br> <p> Nuestros trabajadores de limpieza utilizan exclusivamente equipos modernos y productos de limpieza respetuosos con el medio ambiente. ISC UG haftungsbeschränkt no solo puede ofrecerle servicios de limpieza de edificios, sino también servicios como la limpieza de oficinas, la limpieza de escaleras, la limpieza de alfombras o la limpieza de ventanas, por ejemplo. <br> Puede contratar estos servicios por separado o en paquetes, según sus necesidades. <br> Por supuesto, nuestros trabajadores de limpieza acuden a su lugar fuera del horario de oficina. Usted decide cuándo y con qué frecuencia se debe realizar la limpieza. En la medida de lo posible, utilizamos equipos de limpieza fijos, para que estén bien familiarizados con sus instalaciones y puedan satisfacer mejor sus necesidades individuales. <br> Si está buscando trabajadores de limpieza confiables y cuidadosos, ¡ha venido al lugar correcto! </p> <br> <p>Nuestros servicios:</p> <li>Limpieza de edificios</li> <li>Limpieza de ventanas</li> <li>Limpieza de consultorios</li> <li>Limpieza de oficinas</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Limpieza de escaleras</p> <br> <p> Limpieza de escaleras <br> Un pasillo impecable y escaleras limpias deberían ser una obviedad, ya que esta área a menudo actúa como la tarjeta de presentación de una empresa. <br> Un pasillo impecable también le muestra al cliente que está en buenas manos. ¡Y esa primera impresión es a menudo la más importante! Por otro lado, es importante tener en cuenta que el pasillo y las escaleras son áreas de una empresa que suelen estar muy transitadas y, por lo tanto, muy exigidas. Aquí es donde entra en juego nuestra limpieza de escaleras: nuestros experimentados trabajadores de limpieza limpian a fondo y puntualmente los pasillos, incluidas todas las vías de acceso. <br> Por otro lado, también podemos profundizar y limpiar sus sótanos, lavanderías y salas de secado. <br> Entre nuestros clientes satisfechos de muchos años también se encuentran muchas cooperativas y administradores de propiedades, ¡así que con nosotros llegará muy lejos! <br> Pruebe nuestra limpieza de escaleras </p>';

    document.getElementById('language-start').innerHTML = 'Inicio';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Servicios';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Servicios de seguridad';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Servicios de limpieza';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Servicios logísticos';
    document.getElementById('language-kontakt').innerHTML = 'Contacto';
    document.getElementById('languageh1-1').innerHTML = 'La satisfacción del cliente es nuestra prioridad';

    document.getElementById('language-start').innerHTML = 'Inicio';
    document.getElementById('language-info').innerHTML = 'Quiénes somos';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Servicios';
    document.getElementById('language-kontakt').innerHTML = 'Contacto';

    document.getElementById('languagee').innerHTML = ` ¿Por qué nosotros? `;

    document.getElementById('language-welcome-h117').innerHTML = 'NUESTRA VISIÓN';
    document.getElementById('language-h3-h3').innerHTML = '¿Conoce la falta de seguridad y protección, la falta de capacidad de transporte de A a B o los locales sucios? Nuestra visión combina todos los aspectos en uno y así se entrelazan. Ya sea la responsabilidad, la confianza o el trabajo, todo se basa en la reciprocidad. ¡Porque sólo como grupo somos fuertes!';
    document.getElementById('language-welcome-h17').innerHTML = 'NUESTRAS SOLUCIONES';
    document.getElementById('language-h3-h3-h3').innerHTML = 'La solución a todos estos problemas es una combinación de personal competente, formación continua y años de experiencia en diversos campos. Porque sólo cuando uno se siente seguro inspira confianza, y con la confianza también se consigue una relación más estrecha y una satisfacción cada vez mayor.';
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
    document.getElementById('language-m2-1').innerHTML = 'Services de nettoyage';
    document.getElementById('language-m2-2').innerHTML = '<p> Que ce soit pour les employés, les clients ou les partenaires commerciaux, un environnement propre rend tout le monde plus à l aise dans un bâtiment. La société ISC UG à responsabilité limitée vous propose un service de nettoyage durable et respectueux de l environnement pour tous les espaces de bureau, les cages d escalier et les bâtiments à un tarif forfaitaire fiable. Nos agents de nettoyage ont déjà terminé leur travail avant que vous ou vos employés n ouvriez la porte de votre bâtiment tôt le matin. </p>';
    document.getElementById('language-m2-3').innerHTML = 'Nettoyage des fenêtres';
    document.getElementById('language-m2-4').innerHTML = 'à partir de 29€';
    document.getElementById('language-m2-5').innerHTML = 'Nettoyage des cages d escalier';
    document.getElementById('language-m2-6').innerHTML = 'à partir de 39€';
    document.getElementById('language-m2-7').innerHTML = 'Nettoyage de bureau';
    document.getElementById('language-m2-8').innerHTML = 'à partir de 89€';
    document.getElementById('language-m2-9').innerHTML = 'Nettoyage de bâtiments';
    document.getElementById('language-m2-10').innerHTML = 'à partir de 199€';
    document.getElementById('language-m2-11').innerHTML = 'Notre offre';
    document.getElementById('language-m2-12').innerHTML = '<p class="p1-m1">→ Agents de nettoyage</p> <br> <p> Nos agents de nettoyage utilisent exclusivement des équipements modernes et des produits de nettoyage respectueux de l environnement. ISC UG à responsabilité limitée peut non seulement vous proposer des services de nettoyage de bâtiments, mais aussi, par exemple, le nettoyage de bureaux, le nettoyage des cages d escalier, le nettoyage de tapis ou le nettoyage des fenêtres. <br> Vous pouvez réserver ces services séparément ou sous forme de forfait, selon vos besoins. <br> Bien entendu, nos agents de nettoyage interviennent en dehors des heures de bureau. Vous déterminez quand et à quelle fréquence le nettoyage doit être effectué chez vous. Dans la mesure du possible, nous formons nos équipes de nettoyage de manière stable - elles sont ainsi très familières avec vos locaux et peuvent mieux répondre à vos besoins individuels. <br> Si vous recherchez donc des agents de nettoyage fiables et consciencieux, vous êtes au bon endroit ! </p> <br> <p>Nos services :</p> <li>Nettoyage de bâtiments</li> <li>Nettoyage des fenêtres</li> <li>Nettoyage de cabinets médicaux</li> <li>Nettoyage de bureaux</li>';
    document.getElementById('language-m2-13').innerHTML = '<p class="p1-m1">→ Nettoyage des cages d escalier</p> <br> <p> Nettoyage des cages d escalier <br> Un couloir impeccable et des escaliers propres devraient être une évidence, car cette zone sert souvent de carte de visite à une entreprise. <br> Un hall d entrée impeccable montre également au client qu il est entre de bonnes mains. <br> Et cette première impression est souvent la plus importante ! D un autre côté, il faut noter que les cages d escalier font partie des zones les plus fréquentées et les plus sollicitées d une entreprise. C est là que notre service de nettoyage des cages d escalier entre en jeu - nos agents de nettoyage expérimentés nettoient les couloirs en profondeur et à temps, y compris tous les accès. <br> D autre part, nous sommes également prêts à effectuer un nettoyage approfondi de vos caves, buanderies et séchoirs. <br> Parmi nos clients satisfaits depuis de nombreuses années figurent de nombreuses coopératives et sociétés de gestion immobilière - avec nous, vous atteindrez de nouveaux sommets ! <br> Essayez notre service de nettoyage des cages d escalier </p>';

    
    document.getElementById('language-start').innerHTML = 'Lancement';
    document.getElementById('language-info').innerHTML = 'À propos de nous';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
    document.getElementById('language-kontakt').innerHTML = 'Contact';

    document.getElementById('languagee').innerHTML = 'Pourquoi nous ?';

    document.getElementById('language-welcome-h117').innerHTML = 'NOTRE VISION';
    document.getElementById('language-h3-h3').innerHTML = "Connaissez-vous les problèmes de sécurité et de protection, le manque de capacité de transport de A à B ou la saleté des locaux ? Notre vision réunit tous ces aspects en un seul et s'imbriquent donc les uns dans les autres. Qu'il s'agisse de responsabilité, de confiance ou de travail, tout est basé sur l'entraide. Car c'est seulement en tant que groupe que nous sommes forts !";
    document.getElementById('language-welcome-h17').innerHTML = 'NOS SOLUTIONS';
    document.getElementById('language-h3-h3-h3').innerHTML = "La solution à tous ces problèmes est une combinaison de personnel compétent, de formation continue et d'années d'expérience dans les domaines les plus divers. Car ce n'est qu'en se sentant en sécurité que l'on inspire confiance, et avec la confiance, on gagne également un lien plus étroit et une satisfaction croissante.";
    document.getElementById('language-contact-text1').innerHTML = 'Contacto';

    document.getElementById('language-quick').innerHTML = 'NAVIGATION';
    document.getElementById('language-navi').innerHTML = 'ACCUEIL';
    document.getElementById('language-navi1').innerHTML = 'PERFORMANCES';
    document.getElementById('language-navi3').innerHTML = 'CONTACT';
    document.getElementById('language-navi4').innerHTML = 'Protection des données';
    document.getElementById('language-navi5').innerHTML = 'Mentions légales';
    document.getElementById('language-s-s').innerHTML = 'SOCIAL';

}