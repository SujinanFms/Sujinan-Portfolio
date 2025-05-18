// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";

// interface LocaleContextType {
//   locale: string;
//   toggleLocale: () => void;
// }

// const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   // กำหนด locale เริ่มต้นเป็น "th"
//   const [locale, setLocale] = useState<string>("th");

//   useEffect(() => {
//     // ดึง locale จาก path เช่น /th/xxx, /en/xxx
//     const segments = pathname.split("/");
//     const currentLocale = segments[1];

//     if (currentLocale === "en" || currentLocale === "th") {
//       setLocale(currentLocale);
//     } else {
//       // ถ้าไม่มี locale ใน path (เช่น path เป็น "/")
//       // redirect ไป /th
//       router.replace(`/th${pathname}`);
//     }
//   }, [pathname, router]);

//   const toggleLocale = () => {
//     const newLocale = locale === "th" ? "en" : "th";

//     const segments = pathname.split("/");
//     if (segments[1] === "en" || segments[1] === "th") {
//       segments[1] = newLocale;
//     } else {
//       // กรณีไม่มี locale ใน path ให้เพิ่ม locale ใหม่ที่ตำแหน่งที่ 1
//       segments.splice(1, 0, newLocale);
//     }
//     const newPath = segments.join("/") || "/";

//     router.push(newPath);
//   };

//   return (
//     <LocaleContext.Provider value={{ locale, toggleLocale }}>
//       {children}
//     </LocaleContext.Provider>
//   );
// };

// export const useLocale = () => {
//   const context = useContext(LocaleContext);
//   if (!context) {
//     throw new Error("useLocale must be used within a LocaleProvider");
//   }
//   return context;
// };

// /src/context/LocaleContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultLocale, isValidLocale, Locale } from "../../i18n";

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // อ่าน locale จาก cookie "NEXT_LOCALE" ที่ middleware ตั้งไว้
    const match = document.cookie.match(/NEXT_LOCALE=(th|en)/);
    if (match && isValidLocale(match[1])) {
      setLocaleState(match[1] as Locale);
    } else {
      setLocaleState(defaultLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // อัพเดต cookie เพื่อให้ middleware และ server รู้ locale ใหม่
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    // อาจต้อง reload page เพื่อให้ server-side render ใช้ locale ใหม่
    window.location.reload();
  };

  const toggleLocale = () => {
    const newLocale: Locale = locale === "th" ? "en" : "th";
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
