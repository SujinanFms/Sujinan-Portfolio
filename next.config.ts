// next.config.js
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

// import createNextIntlPlugin from "next-intl/plugin";
// import type { NextConfig } from "next";

// const withNextIntl = createNextIntlPlugin("./i18n.ts");

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   serverActions: true,
//   i18n: {
//     locales: ["en", "th"], // รายชื่อ locale ที่รองรับ
//     defaultLocale: "th", // เปลี่ยน defaultLocale เป็น 'th' (ถ้าคุณอยากให้ default เป็นภาษาไทย)
//     localeDetection: false, // ปิด auto redirect locale ถ้าอยากควบคุมเอง
//   },
// };

// export default withNextIntl(nextConfig);
