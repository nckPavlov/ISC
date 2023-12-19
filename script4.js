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
    document.getElementById('language-m1-1').innerHTML = 'Sicherheitsdienstleistungen';
    document.getElementById('language-m1-2').innerHTML = 'Wir entlasten Sie personell und übernehmen Verantwortung für die Sicherheit Ihres Unternehmens. Unsere kompetenten und regelmäßig geschulten Mitarbeiter agieren gemäß unseres Qualitätsversprechens mit einem hohen Maß an Verantwortungsbewusstsein für Ihre Sicherheit. Was wir alles für Sie tun können, erläutern wir Ihnen gerne in einem persönlichen Gespräch.';
    document.getElementById('language-m1-3').innerHTML = 'Unsere Angebot';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Sicherheit für Messen und Museen</p> <br> <p>Die Sicherheit von Museumsgütern ist durch jüngste Ereignisse erneut in den Fokus der Medien gerückt.</p> <br> <p>Mit unseren Messe- und Museumsdiensten unterstützen wir Museen und Messeveranstalter dabei, sichere Prozesse, Zugänge und Abläufe zu konzipieren und Personen und Sachgüter zu schützen.</p> <br> <p>Zu unseren Dienstleistungen im Bereich der Messe- und Museumsdienste zählen:</p> <br> <li>Einlasskontrollen</li> <li>Parkplatzmanagement</li> <li>Aufsicht in den Ausstellungsräumen</li> <li>Verhinderung von unberechtigten Zutritten und Beschädigungen</li> <li>Ansprechpartner für unseren Kunden, seine Mitarbeiter und Gäste</li> <li>Kontrolle bzgl. Einhaltung der Hausordnung</li> <li>Kontrollgänge zur Sicherung des Geländes sowie Eingang- und (Not-)Ausgangsbewachung</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Werk und Objektschutz</p> <br> <p>Unsere Dienstleistungen im Werk- und Objektschutz stellen sicher, dass Ihr gesamtes Betriebsgelände sowie die sich im Gebäude befindenden Personen den Schutz erhalten, den Sie brauchen.</p> <br> <p>Mit einer branchenübergreifenden Expertise und mehr als 10 Jahren Erfahrungen im Sicherheitsgewerbe  wissen wir, wie Ihre Objekte bestens geschützt werden.</p> <br> <p>Zu unseren Präventivmaßnahmen im Bereich des Werk- und Objektschutz gehören:</p> <br> <li>Zufahrts- und Zugangskontrollen</li> <li>Regelmäßige Streifen- und Kontrollgänge</li> <li>Kundenspezifische Kontrollaufgaben</li> <li>Kontrolle bezüglich der Einhaltung der Hausordnung</li> <li>Telefonzentrale</li> <li>Vorbeugender Brandschutz</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Pförtner und Empfangsdienste</p> <br> <p>SERVICE ÜBER SICHERHEIT HINAUS</p> <br> <p>Ein freundlicher Empfang in Ihrem Unternehmen ist Ihnen genauso wichtig wie der kontrollierte Zugang zu Ihren Objekten?</p> <br> <p>Mit unseren Dienstleistungen im Bereich der Pförtner- und Empfangsdienste haben Sie mit der ISC einen kompetenten Partner an Ihrer Seite, der sogar mehrsprachig wenn gewünscht, sowohl die Sicherheitsaspekte wie auch die Servicekomponente beherrscht.</p> <br> <p>Zu unseren Dienstleistungen im Bereich der Pförtner- und Empfangsdienste zählen:</p> <br> <li>Zufahrts- und Zugangskontrollen</li> <li>Schlüsseldienste</li> <li>Empfangsdienste / Concierge-Aufgaben</li> <li>Umsetzung eines kunden- und serviceorientierten Empfangskonzepts</li> <li>Individuelle Betreuung von Gästen und Besuchern</li> <li>Verwaltung und Abwicklung von Einlass- und Personalkontrollen</li> <li>Sichere Bedienung von technischen Einrichtungen (Telefonanlage/BMA/EMA)</li>';

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
    document.getElementById('language-m1-1').innerHTML = 'Security services';
    document.getElementById('language-m1-2').innerHTML = 'We relieve you of personnel and take responsibility for the security of your company. Our competent and regularly trained employees act in accordance with our quality promise with a high sense of responsibility for your security. We would be happy to explain what we can do for you in a personal meeting.';
    document.getElementById('language-m1-3').innerHTML = 'Our Offer';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Security for Trade Fairs and Museums</p> <br> <p>The security of museum artifacts has once again come into the focus of the media due to recent events.</p> <br> <p>With our trade fair and museum services, we support museums and trade fair organizers in designing secure processes, accesses, and procedures, and in protecting people and tangible assets.</p> <br> <p>Our services in the area of trade fair and museum services include:</p> <br> <li>Admission controls</li> <li>Parking management</li> <li>Supervision in the exhibition rooms</li> <li>Prevention of unauthorized access and damage</li> <li>Contact person for our clients, their employees, and guests</li> <li>Control regarding compliance with house rules</li> <li>Patrols to secure the premises and monitoring of entrances and emergency exits</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Plant and Property Protection</p> <br> <p>Our services in plant and property protection ensure that your entire operational premises, as well as the people inside the building, receive the protection they need.</p> <br> <p>With cross-industry expertise and more than 10 years of experience in the security business, we know how to best protect your properties.</p> <br> <p>Our preventive measures in the area of plant and property protection include:</p> <br> <li>Access and entry controls</li> <li>Regular patrol and control walks</li> <li>Client-specific control tasks</li> <li>Control regarding compliance with house rules</li> <li>Telephone switchboard</li> <li>Preventive fire protection</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Gatekeeper and Reception Services</p> <br> <p>SERVICE BEYOND SECURITY</p> <br> <p>Is a friendly welcome in your company as important to you as controlled access to your facilities?</p> <br> <p>With our services in the area of gatekeeper and reception services, you have ISC as a competent partner by your side, who, if desired, is multilingual and masters both security aspects and the service component.</p> <br> <p>Our services in the area of gatekeeper and reception services include:</p> <br> <li>Access and entry controls</li> <li>Key services</li> <li>Reception services / Concierge tasks</li> <li>Implementation of a customer- and service-oriented reception concept</li> <li>Individual care of guests and visitors</li> <li>Management and processing of admission and personnel checks</li> <li>Secure operation of technical facilities (telephone system/BMA/EMA)</li>';

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
    document.getElementById('language-m1-1').innerHTML = 'Usługi ochrony';
    document.getElementById('language-m1-2').innerHTML = 'Jesteśmy odpowiedzialni za bezpieczeństwo Twojej firmy i pomagamy Ci w zagwarantowaniu spokoju osobistego. Nasi kompetentni i regularnie szkoleni pracownicy działają z dużą odpowiedzialnością wobec Twojego bezpieczeństwa, zgodnie z naszą obietnicą jakości. Chętnie opowiemy Ci, co możemy dla Ciebie zrobić, w osobistym rozmowie.';
    document.getElementById('language-m1-3').innerHTML = 'Nasza oferta';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Bezpieczeństwo na targach i w muzeach</p> <br> <p>Bezpieczeństwo eksponatów muzealnych ponownie stało się tematem numer jeden w mediach z powodu ostatnich wydarzeń.</p> <br> <p>Nasze usługi targowe i muzealne pomagają muzeom i organizatorom targów w opracowaniu bezpiecznych procesów, dostępu i procedur ochrony osób i mienia.</p> <br> <p>Do naszych usług w zakresie targów i muzeów należą:</p> <br> <li>Kontrole wejścia</li> <li>Zarządzanie parkingiem</li> <li>Nadzór w pomieszczeniach wystawowych</li> <li>Zapobieganie nieuprawnionemu dostępowi i uszkodzeniom</li> <li>Kontaktowy punkt obsługi dla klienta, jego pracowników i gości</li> <li>Kontrola przestrzegania regulaminu</li> <li>Patrole w celu zabezpieczenia terenu oraz nadzór nad wejściami i wyjściami (awaryjnymi)</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Ochrona obiektów i zakładów przemysłowych</p> <br> <p>Nasze usługi w zakresie ochrony obiektów i zakładów przemysłowych zapewniają, że cały teren Twojej firmy oraz osoby znajdujące się w budynku są odpowiednio chronione.</p> <br> <p>Dzięki naszej branżowej ekspertyzie i ponad 10-letniemu doświadczeniu w dziedzinie bezpieczeństwa wiemy, jak należy chronić Twoje obiekty.</p> <br> <p>Do naszych działań zapobiegawczych w zakresie ochrony obiektów i zakładów przemysłowych należą:</p> <br> <li>Kontrole dostępu i przejścia</li> <li>Regularne patrole i kontrole</li> <li>Specjalistyczne zadania kontrolne dostosowane do klienta</li> <li>Kontrola przestrzegania regulaminu</li> <li>Centrala telefoniczna</li> <li>Prewencyjna ochrona przeciwpożarowa</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Obsługa bramy i recepcja</p> <br> <p>USŁUGI POZA BEZPIECZEŃSTWEM</p> <br> <p>Przyjazne przywitanie w Twojej firmie jest dla Ciebie tak samo ważne jak kontrolowany dostęp do Twoich obiektów?</p> <br> <p>Dzięki naszym usługom bramowym i recepcyjnym, z ISC masz kompetentnego partnera, który potrafi obsługiwać aspekty bezpieczeństwa oraz aspekt obsługi, a także, jeśli jest to potrzebne, jest wielojęzyczny.</p> <br> <p>Do naszych usług bramowych i recepcyjnych należą:</p> <br> <li>Kontrole dostępu i przejścia</li> <li>Usługi klucza</li> <li>Obsługa recepcji / zadania concierge</li> <li>Wdrożenie spersonalizowanego planu obsługi klienta i obsługi</li> <li>Indywidualna obsługa gości i odwiedzających</li> <li>Zarządzanie i obsługa kontroli wejścia i personelu</li> <li>Bezpieczna obsługa urządzeń technicznych (centrala telefoniczna/BMA/EMA)</li>';

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
    document.getElementById('language-m1-1').innerHTML = 'Güvenlik Hizmetleri';
    document.getElementById('language-m1-2').innerHTML = 'Personelinizi rahatlatıyor ve işletmenizin güvenliğini üstleniyoruz. Deneyimli ve düzenli olarak eğitilen personelimiz, güvenliğiniz için sorumluluk taahhüdümüz çerçevesinde hareket eder. Size neler yapabileceğimizi, kişisel bir görüşmede size memnuniyetle açıklayabiliriz.';
    document.getElementById('language-m1-3').innerHTML = 'Hizmetlerimiz';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Fuar ve Müze Güvenliği</p> <br> <p>Müze koleksiyonlarının güvenliği, son olaylar nedeniyle medyanın ilgi odağı haline geldi.</p> <br> <p>Fuar ve müze hizmetlerimizle müze ve fuar organizatörlerine güvenli süreçler, erişimler ve operasyonlar oluşturmalarında yardımcı oluyor ve kişileri ve malları koruyoruz.</p> <br> <p>Fuar ve müze hizmetlerimiz arasında şunlar bulunmaktadır:</p> <br> <li>Giriş Kontrolleri</li> <li>Otopark Yönetimi</li> <li>Sergi alanlarında gözetim</li> <li>Yetkisiz girişleri ve hasarları engelleme</li> <li>Müşterimiz, çalışanları ve konuklar için iletişim noktası</li> <li>Ev Kurallarının uygulanmasının kontrolü</li> <li>Alanın güvenliğini sağlamak için devriye gezmeleri ve giriş-çıkış kontrolü</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Fabrika ve Obje Güvenliği</p> <br> <p>Fabrika ve obje güvenliği hizmetlerimiz, tesis alanınızın ve içinde bulunan kişilerin ihtiyaç duyduğu korumayı sağlar.</p> <br> <p>Sektörler arası uzmanlık ve 10 yıldan fazla güvenlik sektörü deneyimiyle, objelerinizi en iyi şekilde koruyacağımızı biliyoruz.</p> <br> <p>Fabrika ve obje güvenliği önlemlerimiz arasında şunlar bulunmaktadır:</p> <br> <li>Erişim Kontrolleri</li> <li>Düzenli devriye gezmeleri ve kontrol noktaları</li> <li>Müşteriye özel kontrol görevleri</li> <li>Ev Kurallarının uygulanmasının kontrolü</li> <li>Telefon santrali</li> <li>Önleyici yangın güvenliği</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Kapıcı ve Resepsiyon Hizmetleri</p> <br> <p>GÜVENLİĞİN ÖTESİNDE HİZMET</p> <br> <p>Şirketinizde sıcak bir karşılama, objelerinize kontrol edilen erişim kadar önemli mi?</p> <br> <p>Kapıcı ve resepsiyon hizmetleri alanındaki hizmetlerimizle ISC olarak, güvenlik yönü kadar hizmet yönünü de ustalıkla yönetebilecek yetkin bir ortağınız oluruz. İstenirse çok dilli olarak hizmet sunarız.</p> <br> <p>Kapıcı ve resepsiyon hizmetleri kapsamındaki hizmetlerimiz şunları içerir:</p> <br> <li>Erişim Kontrolleri</li> <li>Anahtar hizmetleri</li> <li>Resepsiyon hizmetleri / Concierge görevleri</li> <li>Müşteri ve ziyaretçilerin kişiselleştirilmiş hizmeti</li> <li>Giriş ve personel kontrolünün yönetimi</li> <li>Teknik ekipmanların güvenli kullanımı (telefon santrali/BMA/EMA)</li>';

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
    saveSelectedLanguage("ar");
    document.getElementById('language-m1-1').innerHTML = 'خدمات الأمن';
    document.getElementById('language-m1-2').innerHTML = 'نحن نقدم دعمًا شخصيًا ونتحمل مسؤولية أمان شركتك. يعمل موظفونا المؤهلون والمدربون بانتظام وفقًا لتعهدنا بالجودة بمسؤولية كبيرة تجاه أمانك. نحن نسعد بشرح كل ما يمكننا فعله من أجلك في محادثة شخصية.';
    document.getElementById('language-m1-3').innerHTML = 'عروضنا';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ أمان المعارض والمتاحف</p> <br> <p>تم رفع قضية أمان القطع الفنية والمتاحف مرة أخرى إلى وسائل الإعلام بسبب الأحداث الأخيرة.</p> <br> <p>مع خدماتنا للمعارض والمتاحف، ندعم المتاحف ومنظمي المعارض في تصميم عمليات وعمليات آمنة وحماية الأشخاص والممتلكات.</p> <br> <p>تشمل خدماتنا في مجال خدمات المعارض والمتاحف:</p> <br> <li>فحص الدخول</li> <li>إدارة مواقف السيارات</li> <li>الإشراف في غرف العرض</li> <li>منع الوصول غير المصرح به والتلفيات</li> <li>نقطة الاتصال لعملائنا وموظفيه وضيوفه</li> <li>مراقبة امتثال النظام الداخلي</li> <li>جولات تفتيش لتأمين المنطقة والمداخل والمخارج (الطارئة)</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ حماية المنشآت والممتلكات</p> <br> <p>تضمن خدماتنا في مجال حماية المنشآت والممتلكات حصول مواقعكم والأشخاص الموجودين داخل المبنى على الحماية التي تحتاجها.</p> <br> <p>بفضل خبرتنا في مجال الأمان عبر الصناعات وأكثر من 10 سنوات من الخبرة في قطاع الأمان، نعرف كيفية حماية ممتلكاتك بشكل ممتاز.</p> <br> <p>تشمل التدابير الوقائية لدينا في مجال حماية المنشآت والممتلكات:</p> <br> <li>ضوابط الوصول والدخول</li> <li>جولات دورية وفحص منتظم</li> <li>مهام تفتيش مخصصة للعملاء</li> <li>مراقبة الامتثال للنظام الداخلي</li> <li>الهاتف المركزي</li> <li>الوقاية من الحرائق</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ خدمات البواب والاستقبال</p> <br> <p>الخدمة تفوق الأمان</p> <br> <p>هل يعتبر استقبال لطيف في شركتك مهمًا بالنسبة لك مثل الوصول المراقب إلى ممتلكاتك؟</p> <br> <p>مع خدماتنا في مجال خدمات البواب والاستقبال، ستكون لديك شريك كفء في ISC على جانبك، والذي يتقن جوانب الأمان والخدمة حتى إذا كنت بحاجة إلى تقديمها بلغات متعددة.</p> <br> <p>تشمل خدماتنا في مجال خدمات البواب والاستقبال:</p> <br> <li>ضوابط الوصول والدخول</li> <li>خدمات القفل</li> <li>خدمات الاستقبال / مهام الكونسيرج</li> <li>تنفيذ تصميم استقبال موجه نحو الخدمة للعملاء</li> <li>متابعة الضيوف والزوار بشكل فردي</li> <li>إدارة وتنفيذ الفحوصات الشخصية والدخول</li> <li>التعامل الآمن مع المرافق الف';

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
    document.getElementById('language-m1-1').innerHTML = 'Servicios de seguridad';
    document.getElementById('language-m1-2').innerHTML = 'Aliviamos su carga de trabajo y asumimos la responsabilidad de la seguridad de su empresa. Nuestros empleados competentes y regularmente capacitados actúan de acuerdo con nuestra promesa de calidad con un alto sentido de responsabilidad hacia su seguridad. Estaremos encantados de explicarle todo lo que podemos hacer por usted en una conversación personal.';
    document.getElementById('language-m1-3').innerHTML = 'Nuestra oferta';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Seguridad para ferias y museos</p> <br> <p>La seguridad de los bienes de museo ha vuelto a estar en el centro de atención debido a eventos recientes.</p> <br> <p>Con nuestros servicios para ferias y museos, ayudamos a museos y organizadores de ferias a diseñar procesos, accesos y operaciones seguras, y a proteger personas y bienes.</p> <br> <p>Nuestros servicios en el área de ferias y museos incluyen:</p> <br> <li>Controles de acceso</li> <li>Control de estacionamiento</li> <li>Supervisión en las salas de exposición</li> <li>Prevención de accesos no autorizados y daños</li> <li>Contacto para nuestro cliente, su personal y sus invitados</li> <li>Control de cumplimiento de las normas de la casa</li> <li>Recorridos de control para la seguridad de las instalaciones y supervisión de entradas y salidas (de emergencia)</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Protección de instalaciones y objetos</p> <br> <p>Nuestros servicios de protección de instalaciones y objetos garantizan que su propiedad y las personas en su edificio reciban la protección que necesitan.</p> <br> <p>Con experiencia en diversas industrias y más de 10 años de experiencia en el sector de seguridad, sabemos cómo proteger sus bienes de la mejor manera posible.</p> <br> <p>Nuestras medidas preventivas en el ámbito de la protección de instalaciones y objetos incluyen:</p> <br> <li>Controles de acceso y entrada</li> <li>Rondas de control regulares</li> <li>Tareas de control personalizadas</li> <li>Control de cumplimiento de las normas de la casa</li> <li>Centralita telefónica</li> <li>Prevención de incendios</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Servicios de portero y recepción</p> <br> <p>SERVICIO MÁS ALLÁ DE LA SEGURIDAD</p> <br> <p>¿Una recepción amigable en su empresa es tan importante para usted como el acceso controlado a sus instalaciones?</p> <br> <p>Con nuestros servicios de portero y recepción, tiene un socio competente en ISC que, si lo desea, domina tanto los aspectos de seguridad como la componente de servicio, incluso en varios idiomas.</p> <br> <p>Nuestros servicios de portero y recepción incluyen:</p> <br> <li>Controles de acceso y entrada</li> <li>Servicios de cerrajería</li> <li>Servicios de recepción / tareas de conserjería</li> <li>Implementación de un concepto de recepción orientado al cliente y al servicio</li> <li>Atención individual a invitados y visitantes</li> <li>Administración y manejo de controles de acceso y personal</li> <li>Operación segura de equipos técnicos (central telefónica/sistemas de alarma contra incendios/sistemas de alarma de emergencia)</li>';

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

    document.getElementById('language-m1-1').innerHTML = 'Services de sécurité';
    document.getElementById('language-m1-2').innerHTML = 'Nous soulageons votre personnel et prenons en charge la sécurité de votre entreprise. Nos employés compétents et régulièrement formés agissent en toute responsabilité pour assurer votre sécurité, conformément à notre engagement qualité. Nous serons heureux de vous expliquer tout ce que nous pouvons faire pour vous lors d une conversation personnelle.';
    document.getElementById('language-m1-3').innerHTML = 'Notre offre';
    document.getElementById('language-m1-4').innerHTML = '<p class="p1-m1">→ Sécurité pour les salons et les musées</p> <br> <p>La sécurité des biens muséaux a de nouveau fait la une des médias en raison dévénements récents.</p> <br> <p>Avec nos services pour salons et musées, nous aidons les musées et les organisateurs de salons à concevoir des processus, des accès et des opérations sécurisés, et à protéger les personnes et les biens.</p> <br> <p>Nos services dans le domaine des salons et des musées incluent :</p> <br> <li>Contrôles d accès</li> <li>Gestion des parkings</li> <li>Surveillance dans les espaces d exposition</li> <li>Prévention des accès non autorisés et des dommages</li> <li>Interlocuteur pour notre client, ses employés et ses invités</li> <li>Contrôle du respect du règlement intérieur</li> <li>Rondes de sécurité pour protéger le site, la sécurité des entrées et sorties (en cas d urgence)</li>';
    document.getElementById('language-m1-5').innerHTML = '<p class="p1-m1">→ Protection des biens et des installations</p> <br> <p>Nos services de protection des biens et des installations garantissent la sécurité de l ensemble de votre site et des personnes présentes dans le bâtiment.</p> <br> <p>Fort de notre expertise intersectorielle et de plus de 10 ans d expérience dans le secteur de la sécurité, nous savons comment protéger au mieux vos biens.</p> <br> <p>Nos mesures préventives en matière de protection des biens et des installations comprennent :</p> <br> <li>Contrôles d accès et de passage</li> <li>Rondes de surveillance régulières</li> <li>Tâches de contrôle spécifiques au client</li> <li>Contrôle du respect du règlement intérieur</li> <li>Standard téléphonique</li> <li>Protection préventive contre les incendies</li>';
    document.getElementById('language-m1-6').innerHTML = '<p class="p1-m1">→ Services de conciergerie et de réception</p> <br> <p>UN SERVICE AU-DELÀ DE LA SÉCURITÉ</p> <br> <p>Un accueil chaleureux dans votre entreprise est aussi important pour vous que l accès contrôlé à vos biens ?</p> <br> <p>Avec nos services de conciergerie et de réception, vous avez un partenaire compétent à vos côtés, capable, si nécessaire, de gérer la sécurité ainsi que la composante service, même dans plusieurs langues.</p> <br> <p>Nos services de conciergerie et de réception incluent :</p> <br> <li>Contrôles d accès et de passage</li> <li>Services de serrurerie</li> <li>Tâches de réception / de conciergerie</li> <li>Mise en œuvre d un concept d accueil orienté client et service</li> <li>Prise en charge individuelle des invités et visiteurs</li> <li>Gestion et traitement des contrôles d accès et du personnel</li> <li>Utilisation sécurisée des installations techniques (standard téléphonique/système de gestion des alarmes incendie/système de gestion des alarmes de sécurité)</li>';
    
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