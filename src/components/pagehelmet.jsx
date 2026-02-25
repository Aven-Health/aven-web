import React from "react";
import { Helmet } from "react-helmet";
import defaultBanner from "../assets/aven.png";

export default function PageHelmet({
  title = "Aven Health – Your Trusted Digital Health Platform",
  description = "Aven Health connects you with verified doctors, wellness professionals, and healthcare resources in a secure, easy-to-use platform.",
  url = "https://www.avenhealth.co.ke",
  image = defaultBanner,
keywords = "Aven Health, Healthcare, Doctors, Wellness, Online Appointments, In-app Video Call, Appointments, Telemedicine, Online Consultation, Medical Professionals, Specialists, Patient Care, Secure Booking, Health Services, Virtual Doctor, Medical Advice, Clinic, Health Platform, Digital Health, Trusted Doctors, Health Management, Wellness Resources, Preventive Care, Mental Health, Fitness, Nutrition, Chronic Disease, Pediatrics, Cardiology, Dermatology, Online Pharmacy, Health Tips, EHR, Lab Tests, Health Records, Medical Education, Surgery, Emergency Care, Rehabilitation, Health Monitoring, Women's Health, Men's Health, Senior Care",
  author = "Aven Health",
  robots = "index, follow",
  twitterHandle = "@avenHealth",
  favicon = "/favicon.ico",
  jsonLd = null,
}) {
  const ogImage = image || defaultBanner;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Aven Health" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1f2a33" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}