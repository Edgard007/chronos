import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Init config i18n
import { LNG, DEFAULT_LNG } from "./lng";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: LNG ?? DEFAULT_LNG,
    backend: {
      // Configura aquí la URL de tu servidor de traducción
      loadPath: "/{{ns}}/{{lng}}.json",
    },
    fallbackLng: DEFAULT_LNG,
    debug: true,
    interpolation: {
      escapeValue: false, // React se encargará de escapar los valores automáticamente
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
