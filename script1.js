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
  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'Security services';
  document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Cleaning services';
  document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Logistics services';
  document.getElementById('language-kontakt').innerHTML = 'CONTACT';
  document.getElementById('languageh1-1').innerHTML = 'Customer satisfaction is our priority';

  document.getElementById('languagee').innerHTML = 'Why Us?';
    
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
    document.getElementById('language-start').innerHTML = 'Start';
    document.getElementById('languageDienstleistungen2').innerHTML = 'Usługi';
    document.getElementById('language-Sicherheitsdienstleistungen').innerHTML = 'NUsługi ochrony';
    document.getElementById('language-Reinigunsdienstleistungen').innerHTML = 'Usługi sprzątania';
    document.getElementById('language-Logistikdienstleistungen').innerHTML = 'Usługi logistyczne';
    document.getElementById('language-kontakt').innerHTML = 'Kontakt';
    document.getElementById('languageh1-1').innerHTML = 'Zadowolenie klienta jest naszym priorytetem';
  
    document.getElementById('languagee').innerHTML = ' Dlaczego my ';
    
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
  


