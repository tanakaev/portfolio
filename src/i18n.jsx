import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "en",
    lang: "en",
    backend: {
      loadPath: "/tanakaev-portfolio/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });
