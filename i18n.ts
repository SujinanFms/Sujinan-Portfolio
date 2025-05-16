// i18n.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // กำหนด default locale เผื่อ locale เป็น undefined
  const usedLocale = locale ?? "th";

  return {
    locale: usedLocale,
    messages: (await import(`../public/locales/${usedLocale}.json`)).default,
    timeZone: "Asia/Bangkok",
  };
});
