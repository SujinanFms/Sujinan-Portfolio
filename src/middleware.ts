// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  // ดึง locale จาก URL
  const localeFromUrl = pathname.split('/')[1];
  
  // กำหนดค่าที่ถูกต้องของ locale
  const validLocales = ['en', 'th'];
  let locale = 'th'; // ค่า default ถ้าไม่ได้ค่า locale จาก URL
  
  console.log('localeFromUrl:', localeFromUrl);

  if (validLocales.includes(localeFromUrl)) {
    locale = localeFromUrl; // ใช้ locale ที่ได้จาก URL
  } else {
    const localeFromCookie = request.cookies.get('NEXT_LOCALE');
    console.log('localeFromCookie:', localeFromCookie?.value);
    if (localeFromCookie?.value && validLocales.includes(localeFromCookie.value)) {
      locale = localeFromCookie.value; // ใช้ locale จาก cookie
    }
  }

  // สร้าง Response และตั้งค่าคุกกี้
  const response = NextResponse.next();
  console.log('Setting NEXT_LOCALE:', locale);
  response.cookies.set('NEXT_LOCALE', locale, { 
    path: '/', 
    httpOnly: true, 
    maxAge: 60 * 60 * 24 * 365 // 1 ปี
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // ไม่ทำงานกับ API หรือไฟล์ static
};




//! =--------------

// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const { nextUrl } = request;
//   const { pathname } = nextUrl;

//   // ดึงค่า locale จาก URL (เช่น /en หรือ /th)
//   const localeFromUrl = pathname.split('/')[1];

//   // ตรวจสอบว่า locale ใน URL ถูกต้องหรือไม่ (en หรือ th)
//   const validLocales = ['en', 'th'];
//   let locale = 'th'; // ค่าเริ่มต้น

//   // ตรวจสอบจาก URL
//   if (validLocales.includes(localeFromUrl)) {
//     locale = localeFromUrl; // ใช้ locale ที่ได้จาก URL
//   } else {
//     // ดึงค่า locale จาก cookie ถ้ามี
//     const localeFromCookie = request.cookies.get('NEXT_LOCALE');
//     if (localeFromCookie?.value && validLocales.includes(localeFromCookie.value)) {
//       locale = localeFromCookie.value; // ใช้ค่า locale จาก cookie
//     }
//   }

//   // ตั้งค่า NEXT_LOCALE คุกกี้เมื่อไม่ตรงกับที่คาดไว้
//   const response = NextResponse.next();
//   response.cookies.set('NEXT_LOCALE', locale, { path: '/' });

//   // ตรวจสอบให้แน่ใจว่าไม่วนลูปในกรณีที่ยังไม่มี locale ใน URL หรือ Cookie
//   if (!validLocales.includes(localeFromUrl)) {
//     // เมื่อไม่พบ locale ใน URL ให้ทำการ redirect ไปยัง /[locale]/home
//     return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
//   }

//   return response;
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'], // กำหนดให้ middleware ทำงานกับ URL ที่ไม่ใช่ api หรือ static files
// };
//! =-----------------
// import { NextRequest, NextResponse } from 'next/server';

// const PUBLIC_FILE = /\.(.*)$/;

// export function middleware(request: NextRequest) {
//   const { nextUrl } = request;
//   const { pathname } = nextUrl;

//   // Ignore files like /favicon.ico or /_next/static/xxx
//   if (
//     pathname.startsWith('/_next') ||
//     pathname.startsWith('/api') ||
//     PUBLIC_FILE.test(pathname)
//   ) {
//     return NextResponse.next();
//   }

//   // Check if pathname already includes locale
//   if (pathname.startsWith('/th') || pathname.startsWith('/en')) {
//     return NextResponse.next();
//   }

//   // Default redirect to /th
//   return NextResponse.redirect(new URL(`/th${pathname}`, request.url));
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };
