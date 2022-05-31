const HttpBackend = require("i18next-http-backend/cjs");
const path = require("path");

const localePath = path.resolve("./public/locales");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      // "es"
    ],
    fallbackLng: {
      // es: ["en"],
      default: ["en"],
    },
    localePath,
    react: {
      useSuspense: false,
    },
  },
  use: process.env.NODE_ENV === "development" && process.browser ? [HttpBackend] : [],
};
