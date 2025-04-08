import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  eng: { translation: {} },
  esp: { translation: {} },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'eng',
    fallbackLng: 'eng',
    interpolation: { escapeValue: false }
  });

export default i18n;
