const langBtn = document.createElement('button');
langBtn.innerText = 'EN';
langBtn.classList.add('lang-btn');
document.body.appendChild(langBtn);

const translations = {
  tr: {
    title: 'Çeliksan',
    servicesBtn: 'Hizmetlerimiz',
  },
  en: {
    title: 'Celiksan',
    servicesBtn: 'Our Services',
  },
};

let currentLang = 'tr';

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  langBtn.innerText = currentLang === 'tr' ? 'EN' : 'TR';
  updateTexts();
});

function updateTexts() {
  document.title = translations[currentLang].title;
  document.querySelector('.hero a.btn').innerText = translations[currentLang].servicesBtn;
}

updateTexts();