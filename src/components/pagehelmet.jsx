import React from "react";
import { Helmet } from "react-helmet";
import defaultBanner from "../assets/aven.png";

export default function PageHelmet({
  title = "Aven Health | Digital Healthcare Platform in Kenya – Telehealth & Online Doctor Consultation",
  description = "Aven Health is Kenya's leading digital healthcare platform. Connect with doctors online, access telehealth services, find pharmacies, and join a thriving health community — all in one integrated health ecosystem.",
  url = "https://www.avenhealth.co.ke",
  image = defaultBanner,
  keywords = "digital healthcare platform, telehealth platform Kenya, online doctor consultation Kenya, integrated health platform, healthcare ecosystem, connected healthcare platform, digital health Kenya, healthcare app Kenya, telemedicine Kenya, community health platform, connect with pharmacies online, healthcare services Kenya, telehealth services Kenya, virtual healthcare services, remote healthcare platform, digital health ecosystem, healthcare technology platform, online doctor Kenya, health discussion platform, patient support community, download healthcare app, healthcare mobile app, Aven Health, avenhealth, avenhealth.co.ke, digital healthcare platform Kenya, connect with healthcare providers online, integrated digital health ecosystem, online health services platform, healthcare community platform, pharmacy connection platform, digital pharmacy network, healthcare access platform, health advice online, doctors online Kenya, telemedicine Africa, digital health services Africa",
  author = "Aven Health",
  robots = "index, follow",
  twitterHandle = "@avenHealth",
  favicon = "/favicon.ico",
  jsonLd = null,
  locale = "en_KE",
  type = "website",
}) {
  const ogImage = image || defaultBanner;
  const siteName = "Aven Health";

  // Default Organization schema always injected
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteName,
    url: "https://www.avenhealth.co.ke",
    logo: "https://www.avenhealth.co.ke/favicon.ico",
    description:
      "Aven Health is a digital healthcare platform in Kenya connecting users with doctors, pharmacies, and health communities through an integrated telehealth ecosystem.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    sameAs: [
      "https://twitter.com/avenHealth",
      "https://www.linkedin.com/company/avenhealth",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Swahili"],
      url: "https://www.avenhealth.co.ke/contact",
    },
  };

  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={favicon} />

      {/* ── Viewport & Theme ── */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1f2a33" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* ── Geo Targeting ── */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Kenya" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-KE" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      {twitterHandle && (
        <meta name="twitter:site" content={twitterHandle} />
      )}
      {twitterHandle && (
        <meta name="twitter:creator" content={twitterHandle} />
      )}

      {/* ── Structured Data ── */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}