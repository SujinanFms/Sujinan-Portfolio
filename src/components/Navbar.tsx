// - Sticky top
// - Links to: About, Education, Work History, Portfolio, Recommendation, Contact
// - Language toggle button (TH/EN)

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';  // นำเข้าไอคอน

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = pathname.startsWith('/th') ? 'en' : 'th';
    const pathWithoutLocale = pathname.replace(/^\/(en|th)/, '') || '/';
    startTransition(() => {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    });
  };

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/work-history', label: 'Work History' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/recommendation', label: 'Recommendation' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">My Portfolio</div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col space-y-2 justify-center items-center"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-gray-700" />  // ใช้ X icon เมื่อเมนูเปิด
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-700" />  // ใช้ Menu icon เมื่อเมนูปิด
          )}
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-sky-500 transition-colors ${pathname === link.href ? 'font-bold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language Toggle Button with Icon */}
        <button
          onClick={toggleLanguage}
          disabled={isPending}
          className="flex items-center bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
        >
          {pathname.startsWith('/th') ? (
            <span className="mr-2">EN</span>
          ) : (
            <span className="mr-2">TH</span>
          )}
          <span>
            {pathname.startsWith('/th') ? (
              <span className="w-4 h-4">🇺🇸</span> // สามารถใส่ไอคอนแฟล็กหรือไอคอนภาษาอื่นๆ
            ) : (
              <span className="w-4 h-4">🇹🇭</span>
            )}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const isEnglish = pathname.startsWith("/en");

//   return (
//     <nav className="sticky top-0 z-50 bg-sky-500 text-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <Link
//           href={`/${isEnglish ? "en" : "th"}/home`}
//           className="text-xl font-bold"
//         >
//           My Portfolio
//         </Link>
//         <div className="flex items-center gap-4">
//           <Link
//             href={`/${isEnglish ? "th" : "en"}/home`}
//             className="hover:underline"
//           >
//             {isEnglish ? "ไทย" : "EN"}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




