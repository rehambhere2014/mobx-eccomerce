import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
supportedLngs:['en','ar'],
fallbackLng: "en",
  
detection: {
  order: ['path', 'cookie', 'htmlTag'],
  caches: ['cookie'],

},
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',

    }
  });

  export default i18n;
