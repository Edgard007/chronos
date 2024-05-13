import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es",
    backend: {
      // Configura aquí la URL de tu servidor de traducción
      loadPath: "/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React se encargará de escapar los valores automáticamente
    },
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
  });

export default i18n;
