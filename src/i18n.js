import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  eng: {
    translation: {
      "technology": "Technology News",
      "language": "Language"
    }
  },
  esp: {
    translation: {
      "technology": "Tecnología Noticias",
      "language": "Idioma"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'eng',
  interpolation: { escapeValue: false }
});

export default i18n;
