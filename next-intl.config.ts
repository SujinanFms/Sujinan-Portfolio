// next-intl.config.ts
import { IntlConfig } from 'next-intl';

const config: IntlConfig = {
  locale: 'en',  // กำหนด locale หลักที่นี่
//   loadLocale: async (locale: string) => {
//     try {
//       const messages = await import(`./locales/${locale}.json`);
//       return messages;
//     } catch (error) {
//       console.error(`Error loading locale file for ${locale}:`, error);
//       throw error;
//     }
//   },
};

export default config;



