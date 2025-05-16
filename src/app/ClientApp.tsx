// /src/app/ClientApp.tsx
"use client";

import { useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import AppLayout from "@/components/AppLayout";
import { App, ConfigProvider, Spin } from "antd";
// import thMessages from "../../public/locales/th.json";

export default function ClientApp({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [messages, setMessages] = useState<Record<string, unknown> | null>(
    null
  );

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

  console.log("messages", messages);

  console.log("locale", locale);

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
