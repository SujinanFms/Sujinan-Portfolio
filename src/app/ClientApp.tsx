"use client";

import { useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import AppLayout from "@/components/AppLayout";
import { App, ConfigProvider } from "antd";

export default function ClientApp({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const localeMessages = await import(`@/locales/${locale}.json`);
        setMessages(localeMessages.default);
      } catch (error) {
        const fallbackMessages = await import("@/locales/en.json");
        setMessages(fallbackMessages.default);
      }
    };
    loadMessages();
  }, [locale]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#ffffff",
          },
          Button: {
            colorPrimary: "var(--color-primary)",
            colorPrimaryHover: "var(--color-hover)",
          },
        },
      }}
    >
      <App>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AppLayout>{children}</AppLayout>
        </NextIntlClientProvider>
      </App>
    </ConfigProvider>
  );
}

// function flattenMessages(obj: Record<string, any>): Record<string, string> {
//   const result: Record<string, string> = {};
//   for (const [key, value] of Object.entries(obj)) {
//     set(result, key, value);
//   }
//   return result;
// }
