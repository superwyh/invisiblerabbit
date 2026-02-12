import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './locales/zh';
import en from './locales/en';
import ja from './locales/ja';

const resources = {
  zh: { translation: zh },
  en: { translation: en },
  ja: { translation: ja },
};

const savedLang = localStorage.getItem('lang') as 'zh' | 'en' | 'ja' | null;
const defaultLang = savedLang && resources[savedLang] ? savedLang : 'zh';

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
