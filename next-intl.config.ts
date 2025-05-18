// next-intl.config.ts
import type { NextRequest } from "next/server";
import en from "./public/locales/en.json";
import th from "./public/locales/th.json";

const messagesMap = {
  en,
  th,
} as const;

export default function getRequestConfig(request: NextRequest) {
  // ใช้ header เพื่ออ่าน locale จาก middleware
  const locale = request.nextUrl.locale as keyof typeof messagesMap;

  return {
    locale,
    messages: messagesMap[locale],
  };
}
