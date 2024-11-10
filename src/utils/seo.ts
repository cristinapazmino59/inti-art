import type { Metadata } from 'next';

type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: OpenGraphType,
}


export const generateSEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
}: SEOProps): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image
        ? [
            {
              url: `${baseUrl}${image}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
      url: url ? `${baseUrl}${url}` : undefined,
      type,
      siteName: 'Inti Art Gallery',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [`${baseUrl}${image}`] : undefined,
      creator: '@inti_quito',
    },
    alternates: {
      canonical: url ? `${baseUrl}${url}` : undefined,
      languages: {
        'es-ES': '/es',
        'en-US': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
};