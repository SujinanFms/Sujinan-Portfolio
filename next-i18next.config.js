//next-i18next.config.js
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"],
  },
  localePath: "./public/locales",
  reloadOnPrerender: true,
};

export default nextI18NextConfig;
