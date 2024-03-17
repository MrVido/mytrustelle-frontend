// components/CustomSEO.tsx
import { NextSeo } from 'next-seo';
import { SEOProps } from '../types/seoTypes';

const CustomSEO: React.FC<SEOProps> = ({ title, description, imageUrl }) => {
  const defaultTitle = "MyTrustelle Resale Marketplace | Safe, Fast & Trusted";
  const defaultDescription = "Your trusted online marketplace for buying and selling goods. Safe, fast, and trusted transactions.";
  const defaultImageUrl = "https://www.mytrustelle.com/default-sharing-image.jpg";

  return (
    <NextSeo
      title={title ? `${title} | MyTrustelle` : defaultTitle}
      description={description || defaultDescription}
      openGraph={{
        title: title ? `${title} | MyTrustelle` : defaultTitle,
        description: description || defaultDescription,
        images: [
          {
            url: imageUrl || defaultImageUrl,
            width: 800,
            height: 600,
            alt: title || defaultTitle,
          },
        ],
      }}
    />
  );
};

export default CustomSEO;

