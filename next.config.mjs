import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['storage.googleapis.com', 'res.cloudinary.com'],
    formats: ['image/webp'],
  },
};
 
export default withNextIntl(config);