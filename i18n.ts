// i18n.ts
import { getRequestConfig } from "next-intl/server";
import en from "./public/locales/en.json";
import th from "./public/locales/th.json";

export const messagesMap = {
  en,
  th,
} as const;

export type Locale = keyof typeof messagesMap;

export const defaultLocale: Locale = "th";

export const isValidLocale = (locale: string): locale is Locale =>
  Object.keys(messagesMap).includes(locale);

export default getRequestConfig(({ requestLocale }) => {
  const locale =
    typeof requestLocale === "string" ? requestLocale : defaultLocale;
  const safeLocale: Locale = locale === "th" ? "th" : "en";
  const messages = messagesMap[safeLocale];
  return { messages };
});

// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async ({ locale }) => {
//   // กำหนด default locale เผื่อ locale เป็น undefined
//   const usedLocale = locale ?? "th";

//   return {
//     locale: usedLocale,
//     messages: (await import(`../locales/${usedLocale}.json`)).default,
//     timeZone: "Asia/Bangkok",
//   };
// });

// i18n.ts
// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

// const locales = ["th", "en"];

// export default getRequestConfig(async ({ requestLocale }) => {
//   const locale = await requestLocale;

//   if (!locale || !locales.includes(locale)) {
//     notFound();
//   }

//   const messages = (await import(`./public/locales/${locale}.json`)).default;

//   return {
//     locale,
//     messages,
//     timeZone: "Asia/Bangkok",
//   };
// });
//! ----

// /Users/sujinan/Sujinan-Portfolio/i18n.ts
// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async ({ locale }) => {
//   const usedLocale = locale ?? "th";

//   console.log("usedLocale", usedLocale);

//   const messagesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/locales/${usedLocale}.json`
//   );
//   if (!messagesRes.ok) {
//     throw new Error(`Could not load messages for locale: ${usedLocale}`);
//   }
//   const messages = await messagesRes.json();

//   return {
//     locale: usedLocale,
//     messages,
//     timeZone: "Asia/Bangkok",
//   };
// });
