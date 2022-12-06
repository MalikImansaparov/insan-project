import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import translationEng from './language/eng.json';
import translationRu from './language/rus.json';
import translationKG from './language/kyr.json';
import { initReactI18next, useTranslation } from 'react-i18next';

const availableLanguages = ['en', 'ru', 'ky'];

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: sessionStorage.getItem('lng') || 'ky',
    detection: {
      debug: false,
      checkWhitelist: true,
    },
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      ky: {
        translations: translationKG,
      },
      en: {
        translations: translationEng,
      },
      ru: {
        translations: translationRu,
      },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
