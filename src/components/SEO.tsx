import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'ElevateModernZone | Business Consulting & Digital Solutions',
  description = 'Professional business consulting, data analysis, and AI-powered content solutions. Based in Dubai, serving clients globally.',
  keywords = ['business consulting', 'data analysis', 'AI solutions', 'Dubai', 'UAE', 'digital transformation'],
  image = 'https://elevatemodernzone.com/images/emzOG.png',
  url = 'https://elevatemodernzone.com',
  type = 'website',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ElevateModernZone',
    url: url,
    logo: `${url}/logo.png`,
    description: description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971585110565',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://wa.me/971585110565',
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ElevateModernZone" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Ayman Mohamed" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 