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
    document.getElementById('language-standort').innerHTML = 'Standort';
      document.getElementById('language-nummer').innerHTML = 'Telefonnummer';
      document.getElementById('language-sozial').innerHTML = 'SOZIALE MEDIEN';
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
    document.getElementById('language-standort').innerHTML = 'Location';
      document.getElementById('language-nummer').innerHTML = 'Phone number';
      document.getElementById('language-sozial').innerHTML = 'SOCIAL MEDIA';
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
    document.getElementById('language-standort').innerHTML = 'Lokalizacja';
      document.getElementById('language-nummer').innerHTML = 'Numer telefonu';
      document.getElementById('language-sozial').innerHTML = 'MEDIA SPOŁECZNOŚCIOWE';
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
function turk() {
  ;
  document.getElementById('language-start').innerHTML = 'Başla';
  document.getElementById('language-info').innerHTML = 'Bizim hakkimizda';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Hizmetler';
  document.getElementById('language-kontakt').innerHTML = 'İletişim';
    document.getElementById('language-standort').innerHTML = 'Lokasyon';
      document.getElementById('language-nummer').innerHTML = 'Telefon numarası';
      document.getElementById('language-sozial').innerHTML = 'SOSYAL MEDYA';
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
    document.getElementById('language-standort').innerHTML = 'مكان';
  document.getElementById('language-nummer').innerHTML = 'رقم الهاتف';
  document.getElementById('language-email').innerHTML = 'مينا';
      document.getElementById('language-sozial').innerHTML = 'وسائل التواصل الاجتماعي';
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
  document.getElementById('language-start').innerHTML = 'Lancement';
  document.getElementById('language-info').innerHTML = 'À propos de nous';
  document.getElementById('languageDienstleistungen2').innerHTML = 'Services';
  document.getElementById('language-kontakt').innerHTML = 'Contact';
  document.getElementById('language-standort').innerHTML = 'Localización';
  document.getElementById('language-nummer').innerHTML = 'Teléfono';
  document.getElementById('language-sozial').innerHTML = 'MEDIOS SOCIALES';
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
    document.getElementById('language-standort').innerHTML = 'Emplacement';
      document.getElementById('language-nummer').innerHTML = 'Téléphone';
      document.getElementById('language-sozial').innerHTML = 'MÉDIAS SOCIAUX';
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
    
  
  
  