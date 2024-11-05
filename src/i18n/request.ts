import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    return {
      messages: (await import(`../messages/${locale}.json`)).default,
      timeZone: 'America/Guayaquil',
      now: new Date()
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    return {
      messages: {},
      timeZone: 'America/Guayaquil',
      now: new Date()
    };
  }
});