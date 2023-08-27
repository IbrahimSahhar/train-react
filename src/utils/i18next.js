import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../assets/ar.json";
import en from "../assets/en.json";
// import langs from "../assets/langs.json";

const lang = localStorage.getItem("lang") || "en";
i18n.use(initReactI18next).init({
  resources: {
    ...en,
    ...ar,
    // ...langs,
  },
  lng: lang,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
