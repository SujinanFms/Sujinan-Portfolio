// import { useTranslations } from 'next-intl';

// export default function HomePage() {
//   const t = useTranslations('Home');

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-sky-700">{t('welcome')}</h1>
//       <p className="text-lg">{t('intro')}</p>
//     </div>
//   );
// }

// src/app/[locale]/home/page.tsx

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('Home.welcome')}</h1>
      <p>{t('Home.intro')}</p>
    </div>
  );
}

