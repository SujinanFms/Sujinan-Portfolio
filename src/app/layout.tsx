// src/app/layout.tsx
import "./globals.css";
import { Share_Tech } from "next/font/google";

import "@ant-design/v5-patch-for-react-19";
import ClientApp from "./ClientApp";

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
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
  return (
    <html lang="th" className={shareTech.className}>
      <body className="min-h-screen font-sharetech">
        <ClientApp>{children}</ClientApp>
      </body>
    </html>
  );
}
