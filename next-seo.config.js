// next-seo.config.js

const defaultSEOConfig = {
    defaultTitle: "MyTrustelle Resale Marketplace | Safe, Fast & Trusted",
    titleTemplate: "%s | MyTrustelle",
    description: "Your trusted online marketplace for buying and selling goods. Safe, fast, and trusted transactions.",
    canonical: "https://www.mytrustelle.com/",
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.mytrustelle.com/',
        site_name: 'MyTrustelle Resale Marketplace',
        images: [
            {
                url: 'https://www.mytrustelle.com/default-sharing-image.jpg',
                width: 1200,
                height: 630,
                alt: 'MyTrustelle, Your Trusted Marketplace',
            },
        ],
    },
    twitter: {
        handle: '@mytrustelle',
        site: '@mytrustelle',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            property: 'dc:creator',
            content: 'MyTrustelle Team',
        },
        {
            name: 'application-name',
            content: 'MyTrustelle',
        },
        {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
        },
        {
            name: 'apple-mobile-web-app-title',
            content: 'MyTrustelle',
        },
        // Add more custom meta tags here as needed
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: 'https://www.mytrustelle.com/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            href: 'https://www.mytrustelle.com/apple-touch-icon.png',
            sizes: '76x76',
        },
        {
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        // Add more links such as icons, manifests, etc.
    ],
};

export default defaultSEOConfig;
