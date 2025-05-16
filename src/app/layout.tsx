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
}: {
  children: React.ReactNode;
}) {
  // ตั้งค่า locale เริ่มต้นเป็น "th" ที่นี่
  const locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "th"; // ใช้ locale ที่กำหนดใน .env หรือ fallback เป็น "th"

  return (
    <html lang={locale} className={shareTech.className}>
      <body className="min-h-screen font-sharetech">
        <ClientApp locale={locale}>{children}</ClientApp>
      </body>
    </html>
  );
}
