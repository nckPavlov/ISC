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

  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('language-info').innerHTML = 'Über uns';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Dienstleistungen';
  document.getElementById('language-kontakt').innerHTML = 'Kontakt';

    
  document.getElementById('laaanguage').innerHTML = 'Unsere Dienstleistungen';
  document.getElementById('language-welcome-h1').innerHTML = 'Security';
  document.getElementById('language-welcome-h3').innerHTML = 'Kennen Sie das mangelhafte Problem an Sicherheit und Schutz, den mangelnden Transportfähigkeiten von A nach B oder den dreckigen Räumlichkeiten? Unsere Vision vereint alle Aspekte in einem und greift somit ineinander ein. Ob Verantwortung, Vertrauen oder die Arbeit, alles beruht auf gegenseitigkeit. Den nur als Gruppe sind wir stark !';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Treten Sie mit uns in Kontakt';
  document.getElementById('language-welcome-span').innerHTML = 'KONTAKT';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Reinigung';
  document.getElementById('language-welcome-h31').innerHTML = 'Die Lösung für all das Problem ist eine Zusammenfügung von Kompetenten Personal, der ständigen Weiterbildung und Jahre lange Erfahrung in den verschiedensten Bereichen. Denn nur wenn man sich Sicher fühlt, erweckt man Vertrauen und mit Vertrauen gewinnt man ebenfalls eine nähere Bindung und eine steigende Zufriedenheit.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Treten Sie mit uns in Kontakt';
  document.getElementById('language-welcome-span1').innerHTML = 'KONTAKT';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Logistik';
  document.getElementById('language-welcome-h311').innerHTML = 'Die Lösung für all das Problem ist eine Zusammenfügung von Kompetenten Personal, der ständigen Weiterbildung und Jahre lange Erfahrung in den verschiedensten Bereichen. Denn nur wenn man sich Sicher fühlt, erweckt man Vertrauen und mit Vertrauen gewinnt man ebenfalls eine nähere Bindung und eine steigende Zufriedenheit.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Treten Sie mit uns in Kontakt';
  document.getElementById('language-welcome-span2').innerHTML = 'KONTAKT';
    
  document.getElementById('language-contact-text1').innerHTML = 'Kontakt';
  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'HOME';
  document.getElementById('language-navi1').innerHTML = 'ÜBER UNS';
  document.getElementById('language-navi2').innerHTML = 'LEISTUNGEN';
  document.getElementById('language-navi3').innerHTML = 'KONTAKT';
  document.getElementById('language-navi4').innerHTML = 'Datenschutz';
  document.getElementById('language-navi5').innerHTML = 'Impressum';
  document.getElementById('language-s-s').innerHTML = 'SOZIALES';

  }
function america() {
      
  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('language-info').innerHTML = 'About us';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-kontakt').innerHTML = 'Contact us';
 
  document.getElementById('laaanguage').innerHTML = 'Our services';
  document.getElementById('language-welcome-h1').innerHTML = 'Security';
  document.getElementById('language-welcome-h3').innerHTML = 'Do you know the lack of safety and security, the lack of transport capabilities from A to B or the dirty premises? Our vision combines all aspects in one and thus interlocks. Whether responsibility, trust or the work, everything is based on mutuality. Only as a group we are strong !';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Get in touch';
  document.getElementById('language-welcome-span').innerHTML = 'CONTACT';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Purifying';
  document.getElementById('language-welcome-h31').innerHTML = 'The solution to all these problems is a combination of competent personnel, continuous training and years of experience in various fields. Because only when you feel safe, you inspire confidence and with confidence you also gain a closer relationship and increasing satisfaction.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Get in touch';
  document.getElementById('language-welcome-span1').innerHTML = 'CONTACT';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Logistics';
  document.getElementById('language-welcome-h311').innerHTML = 'The solution to all these problems is a combination of competent personnel, continuous training and years of experience in various fields. Because only when you feel safe, you inspire confidence and with confidence you also gain a closer relationship and increasing satisfaction.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Get in touch';
  document.getElementById('language-welcome-span2').innerHTML = 'CONTACT';
  document.getElementById('language-contact-text1').innerHTML = 'Contact us';
  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'HOME';
  document.getElementById('language-navi1').innerHTML = 'ABOUT US';
  document.getElementById('language-navi2').innerHTML = 'PERFORMANCES';
  document.getElementById('language-navi3').innerHTML = 'CONTACT';
  document.getElementById('language-navi4').innerHTML = 'Data privacy';
  document.getElementById('language-navi5').innerHTML = 'Imprint';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
  }
  
function polen() {
  document.getElementById('language-start').innerHTML = 'Start';
  document.getElementById('language-info').innerHTML = 'O nas';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Usługi';
  document.getElementById('language-kontakt').innerHTML = 'Kontakt';
  

  document.getElementById('laaanguage').innerHTML = 'Nasze usługi';
  document.getElementById('language-welcome-h1').innerHTML = 'Ochrona';
  document.getElementById('language-welcome-h3').innerHTML = 'Czy znasz brak bezpieczeństwa i ochrony, brak możliwości transportu z punktu A do punktu B lub brudne pomieszczenia? Nasza wizja łączy wszystkie aspekty w jedno i w ten sposób zazębia się. Niezależnie od tego, czy chodzi o odpowiedzialność, zaufanie czy pracę, wszystko opiera się na wzajemności. Ponieważ tylko jako grupa jesteśmy silni!';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Skontaktuj się z nami';
  document.getElementById('language-welcome-span').innerHTML = 'KONTAKT';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Czyszczenie';
  document.getElementById('language-welcome-h31').innerHTML = 'Rozwiązaniem tych wszystkich problemów jest połączenie kompetentnego personelu, ciągłych szkoleń i wieloletniego doświadczenia w różnych dziedzinach. Ponieważ tylko wtedy, gdy czujesz się bezpiecznie, wzbudzasz zaufanie, a wraz z zaufaniem zyskujesz również bliższe relacje i rosnącą satysfakcję.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Skontaktuj się z nami';
  document.getElementById('language-welcome-span1').innerHTML = 'KONTAKT';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Logistyka';
  document.getElementById('language-welcome-h311').innerHTML = 'Rozwiązaniem tych wszystkich problemów jest połączenie kompetentnego personelu, ciągłych szkoleń i wieloletniego doświadczenia w różnych dziedzinach. Ponieważ tylko wtedy, gdy czujesz się bezpiecznie, wzbudzasz zaufanie, a wraz z zaufaniem zyskujesz również bliższe relacje i rosnącą satysfakcję.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Skontaktuj się z nami';
  document.getElementById('language-welcome-span2').innerHTML = 'KONTAKT';
  document.getElementById('language-contact-text1').innerHTML = 'Kontakt';
  document.getElementById('language-quick').innerHTML = 'NAWIGACJA';
  document.getElementById('language-navi').innerHTML = 'DOM';
  document.getElementById('language-navi1').innerHTML = 'O NAS';
  document.getElementById('language-navi2').innerHTML = 'WYDAJNOŚĆ';
  document.getElementById('language-navi3').innerHTML = 'KONTAKT';
  document.getElementById('language-navi4').innerHTML = 'Ochrona danych';
  document.getElementById('language-navi5').innerHTML = 'Imprint';
  document.getElementById('language-s-s').innerHTML = 'SPOŁECZNY';
  }
function turk() {;
  document.getElementById('language-start').innerHTML = 'Başla';
  document.getElementById('language-info').innerHTML = 'Bizim hakkimizda';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Hizmetler';
  document.getElementById('language-kontakt').innerHTML = 'İletişim';
  

  document.getElementById('laaanguage').innerHTML = 'Bizim hizmetlerimiz';
  document.getElementById('language-welcome-h1').innerHTML = 'Güvenlik';
  document.getElementById('language-welcome-h3').innerHTML = 'Güvenlik ve koruma eksikliğini, A noktasindan B noktasina taşima olanaklarinin yetersizliğini veya kirli binalari biliyor musunuz? Vizyonumuz tüm unsurlari bir araya getirir ve böylece birbirine kenetlenir. Sorumluluk, güven veya iş olsun, her şey karşilikliliğa dayanir. Çünkü sadece bir grup olarak güçlüyüz!';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Bizimle iletişime geçin';
  document.getElementById('language-welcome-span').innerHTML = 'İLETİŞİM';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Temizlik';
  document.getElementById('language-welcome-h31').innerHTML = 'Tüm bu sorunlarin çözümü, yetkin personel, sürekli eğitim ve çeşitli alanlarda yillarin deneyiminin birleşimidir. Çünkü ancak kendinizi güvende hissettiğinizde güven verirsiniz ve güvenle birlikte daha yakin bir ilişki ve artan bir memnuniyet elde edersiniz.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Bizimle iletişime geçin';
  document.getElementById('language-welcome-span1').innerHTML = 'İLETİŞİM';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Lojistik';
  document.getElementById('language-welcome-h311').innerHTML = 'Tüm bu sorunlarin çözümü, yetkin personel, sürekli eğitim ve çeşitli alanlarda yillarin deneyiminin birleşimidir. Çünkü ancak kendinizi güvende hissettiğinizde güven verirsiniz ve güvenle birlikte daha yakin bir ilişki ve artan bir memnuniyet elde edersiniz.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Bizimle iletişime geçin';
  document.getElementById('language-welcome-span2').innerHTML = 'İLETİŞİM';
  document.getElementById('language-contact-text1').innerHTML = 'İletişim';
  document.getElementById('language-quick').innerHTML = 'NAVİGASYON';
  document.getElementById('language-navi').innerHTML = 'ANA SAYFA';
  document.getElementById('language-navi1').innerHTML = 'BİZİM HAKKIMIZDA';
  document.getElementById('language-navi2').innerHTML = 'HIZMETLER';
  document.getElementById('language-navi3').innerHTML = 'İLETİŞİM';
  document.getElementById('language-navi4').innerHTML = 'Veri koruma';
  document.getElementById('language-navi5').innerHTML = 'Künye';
  document.getElementById('language-s-s').innerHTML = 'SOSYAL';
    
  }
function arabic() {
  document.getElementById('language-start').innerHTML = 'بدء';
  document.getElementById('language-info').innerHTML = 'من نحن';
  document.getElementById('languageDienstleistungen2').innerHTML = "خدمات";
  document.getElementById('language-kontakt').innerHTML = 'الاتصال';
  

  document.getElementById('laaanguage').innerHTML = 'خدماتنا';
  document.getElementById('language-welcome-h1').innerHTML = 'أمن';
  document.getElementById('language-welcome-h3').innerHTML = 'هل أنت على دراية بنقص السلامة والأمن ، ونقص مهارات النقل من A إلى B أو المباني القذرة؟ رؤيتنا توحد جميع الجوانب في واحد وبالتالي تتشابك مع بعضها البعض. سواء كانت مسؤولية أو ثقة أو عمل ، فكل شيء متبادل. لأننا أقوياء فقط كمجموعة!';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'ابق على تواصل معنا';
  document.getElementById('language-welcome-span').innerHTML = 'الاتصال';
  
  document.getElementById('language-welcome-h11').innerHTML = 'تنظيف';
  document.getElementById('language-welcome-h31').innerHTML = 'الحل لجميع هذه المشكلة هو مزيج من الموظفين الأكفاء والتدريب المستمر وسنوات من الخبرة في مختلف المجالات. لأنه فقط عندما تشعر بالأمان ، فإنك تلهم الثقة وبالثقة تكتسب أيضا رابطة أوثق ورضا متزايدا.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'ابق على تواصل معنا';
  document.getElementById('language-welcome-span1').innerHTML = 'الاتصال';
  
  document.getElementById('language-welcome-h111').innerHTML = 'السوقيات';
  document.getElementById('language-welcome-h311').innerHTML = 'الحل لجميع هذه المشكلة هو مزيج من الموظفين الأكفاء والتدريب المستمر وسنوات من الخبرة في مختلف المجالات. لأنه فقط عندما تشعر بالأمان ، فإنك تلهم الثقة وبالثقة تكتسب أيضا رابطة أوثق ورضا متزايدا.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'ابق على تواصل معنا';
  document.getElementById('language-welcome-span2').innerHTML = 'الاتصال';
  document.getElementById('language-contact-text1').innerHTML = 'الاتصال';
  document.getElementById('language-quick').innerHTML = 'ملاحة';
  document.getElementById('language-navi').innerHTML = 'وطن';
  document.getElementById('language-navi1').innerHTML = 'من نحن';
  document.getElementById('language-navi2').innerHTML = 'العروض';
  document.getElementById('language-navi3').innerHTML = 'الاتصال';
  document.getElementById('language-navi4').innerHTML = 'الخصوصيه';
  document.getElementById('language-navi5').innerHTML = 'بصمه';
  document.getElementById('language-s-s').innerHTML = 'الشؤون الاجتماعية';
   
  }
function spain() {
  document.getElementById('language-start').innerHTML = 'Inicio';
  document.getElementById('language-info').innerHTML = 'Quiénes somos';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Servicios';
  document.getElementById('language-kontakt').innerHTML = 'Contacto';
  
 
  document.getElementById('laaanguage').innerHTML = 'Nuestros servicios';
  document.getElementById('language-welcome-h1').innerHTML = 'Seguridad';
  document.getElementById('language-welcome-h3').innerHTML = '¿Conoce la falta de seguridad y protección, la falta de capacidad de transporte de A a B o los locales sucios? Nuestra visión combina todos los aspectos en uno y así se entrelazan. Ya sea la responsabilidad, la confianza o el trabajo, todo se basa en la reciprocidad. ¡Porque sólo como grupo somos fuertes!';
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Póngase en contacto con nosotros';
  document.getElementById('language-welcome-span').innerHTML = 'CONTACTO';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Limpieza';
  document.getElementById('language-welcome-h31').innerHTML = 'La solución a todos estos problemas es una combinación de personal competente, formación continua y años de experiencia en diversos campos. Porque sólo cuando uno se siente seguro inspira confianza, y con la confianza también se consigue una relación más estrecha y una satisfacción cada vez mayor.';
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Póngase en contacto con nosotros';
  document.getElementById('language-welcome-span1').innerHTML = 'CONTACTO';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Logística';
  document.getElementById('language-welcome-h311').innerHTML = 'La solución a todos estos problemas es una combinación de personal competente, formación continua y años de experiencia en diversos campos. Porque sólo cuando uno se siente seguro inspira confianza, y con la confianza también se consigue una relación más estrecha y una satisfacción cada vez mayor.';
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Póngase en contacto con nosotros';
  document.getElementById('language-welcome-span2').innerHTML = 'CONTACTO';
  document.getElementById('language-contact-text1').innerHTML = 'Contacto';
  document.getElementById('language-quick').innerHTML = 'NAVEGACIÓN';
  document.getElementById('language-navi').innerHTML = 'INICIO';
  document.getElementById('language-navi1').innerHTML = 'SOBRE NOSOTROS';
  document.getElementById('language-navi2').innerHTML = 'RENDIMIENTO';
  document.getElementById('language-navi3').innerHTML = 'CONTACTO';
  document.getElementById('language-navi4').innerHTML = 'Protección de datos';
  document.getElementById('language-navi5').innerHTML = 'Pie de imprenta';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
  }
function france() {
  document.getElementById('language-start').innerHTML = 'Lancement';
  document.getElementById('language-info').innerHTML = 'À propos de nous';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-kontakt').innerHTML = 'Contact';
  

  document.getElementById('laaanguage').innerHTML = 'Nos services';
  document.getElementById('language-welcome-h1').innerHTML = 'Sécurité';
  document.getElementById('language-welcome-h3').innerHTML = "Connaissez-vous les problèmes de sécurité et de protection, le manque de capacité de transport de A à B ou la saleté des locaux ? Notre vision réunit tous ces aspects en un seul et s'imbriquent donc les uns dans les autres. Qu'il s'agisse de responsabilité, de confiance ou de travail, tout est basé sur l'entraide. Car c'est seulement en tant que groupe que nous sommes forts !";
  document.getElementById('language-welcome-h3-h3').innerHTML = 'Contactez-nous';
  document.getElementById('language-welcome-span').innerHTML = 'CONTACT';
  
  document.getElementById('language-welcome-h11').innerHTML = 'Nettoyage';
  document.getElementById('language-welcome-h31').innerHTML = "La solution à tous ces problèmes est une combinaison de personnel compétent, de formation continue et d'années d'expérience dans les domaines les plus divers. Car ce n'est qu'en se sentant en sécurité que l'on inspire confiance, et avec la confiance, on gagne également un lien plus étroit et une satisfaction croissante.";
  document.getElementById('language-welcome-h3-h31').innerHTML = 'Contactez-nous';
  document.getElementById('language-welcome-span1').innerHTML = 'CONTACT';
  
  document.getElementById('language-welcome-h111').innerHTML = 'Logistique';
  document.getElementById('language-welcome-h311').innerHTML = "La solution à tous ces problèmes est une combinaison de personnel compétent, de formation continue et d'années d'expérience dans les domaines les plus divers. Car ce n'est qu'en se sentant en sécurité que l'on inspire confiance, et avec la confiance, on gagne également un lien plus étroit et une satisfaction croissante.";
  document.getElementById('language-welcome-h3-h311').innerHTML = 'Contactez-nous';
  document.getElementById('language-welcome-span2').innerHTML = 'CONTACT';
  document.getElementById('language-contact-text1').innerHTML = 'Contacto';
  
  document.getElementById('language-quick').innerHTML = 'NAVIGATION';
  document.getElementById('language-navi').innerHTML = 'ACCUEIL';
  document.getElementById('language-navi1').innerHTML = 'À PROPOS DE NOUS';
  document.getElementById('language-navi2').innerHTML = 'PERFORMANCES';
  document.getElementById('language-navi3').innerHTML = 'CONTACT';
  document.getElementById('language-navi4').innerHTML = 'Protection des données';
  document.getElementById('language-navi5').innerHTML = 'Mentions légales';
  document.getElementById('language-s-s').innerHTML = 'SOCIAL';
}
  


