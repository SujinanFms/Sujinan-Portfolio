// app/page.tsx
"use client";

import { App as AntdApp, ConfigProvider } from "antd";
import ContentPage from "components/navBar/components/content";

export default function HomePage() {
  return (
    <div>
      <ConfigProvider>
        <AntdApp>
          <ContentPage />
        </AntdApp>
      </ConfigProvider>
    </div>
  );
}
