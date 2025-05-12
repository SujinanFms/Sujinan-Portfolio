// src/app/layout.tsx
import "./globals.css";
import { Share_Tech } from "next/font/google";
import ClientApp from "./ClientApp";
import "@ant-design/v5-patch-for-react-19";

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400", // คุณสามารถเลือกน้ำหนักฟอนต์ได้ เช่น 400, 700 เป็นต้น
});

export const metadata = {
  title: "My Portfolio",
  description: "Created with NextJs",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || "th";

  return (
    <html lang={locale} className={shareTech.className}>
      <body className="min-h-screen font-sharetech">
        <ClientApp locale={locale}>{children}</ClientApp>
      </body>
    </html>
  );
}
