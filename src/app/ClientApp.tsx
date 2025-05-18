// /src/app/ClientApp.tsx
"use client";

import { useEffect, useState } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

import { App, ConfigProvider, Spin } from "antd";

import AppLayout from "components/AppLayout";
import { LocaleProvider, useLocale } from "context/LocaleContext";

function InnerClientApp({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await fetch(`/locales/${locale}.json`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("❌ Error loading messages:", error);
      }
    }

    loadMessages();
  }, [locale]);

  if (!messages) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: { siderBg: "#ffffff" },
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

export default function ClientApp({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <InnerClientApp>{children}</InnerClientApp>
    </LocaleProvider>
  );
}

// function flattenMessages(obj: Record<string, any>): Record<string, string> {
//   const result: Record<string, string> = {};
//   for (const [key, value] of Object.entries(obj)) {
//     set(result, key, value);
//   }
//   return result;
// }
