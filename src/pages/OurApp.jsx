import PageHelmet from "../components/pagehelmet";

export default function OurApp() {
  return (
    <section className="space-y-24">
      <PageHelmet
        title="Aven Health App | Download Kenya's Digital Healthcare Platform"
        description="Discover what the Aven Health app does — connect with doctors, find pharmacies, access preventive care insights, and join health communities. Download Kenya's integrated health app today."
        url="https://www.avenhealth.co.ke/our-app"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Aven Health App",
          applicationCategory: "HealthApplication",
          operatingSystem: "Android, iOS",
          description:
            "Aven Health is a digital healthcare platform that connects users in Kenya with doctors, pharmacies, and health communities in one integrated ecosystem.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
          url: "https://www.avenhealth.co.ke/our-app",
          publisher: {
            "@type": "Organization",
            name: "Aven Health",
            url: "https://www.avenhealth.co.ke",
          },
        }}
      />

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          What Aven Health Does
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Aven Health brings healthcare access, guidance, and connection into one
          simple, everyday experience.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="bg-cardDark p-10 rounded-xl text-center max-w-4xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed">
          Aven Health is a digital health platform designed to help individuals discover
          care providers, manage everyday health needs, and engage with a
          supportive health community — all in one place.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Care Access",
            text: "Find trusted doctors, pharmacies, and health services near you.",
          },
          {
            title: "Preventative Insights",
            text: "Receive health information and guidance focused on prevention and wellbeing.",
          },
          {
            title: "Community Connection",
            text: "Engage with health discussions and shared experiences within your community.",
          },
          {
            title: "Smart Discovery",
            text: "Search health resources quickly with a centralized discovery system.",
          },
          {
            title: "Personal Health Journey",
            text: "Interact with healthcare on your terms — informed, proactive, and supported.",
          },
          {
            title: "Secure by Design",
            text: "Privacy-first architecture built with trust and security at its core.",
          },
        ].map(({ title, text }) => (
          <div key={title} className="bg-cardLight p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-accent">{title}</h3>
            <p className="mt-3 text-gray-300">{text}</p>
          </div>
        ))}
      </div>

      {/* POSITIONING */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          Built for Everyday Health
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          Aven Health is not a replacement for healthcare providers. It is the bridge
          that connects people to the right care, at the right time, with the
          right information, empowering healthier daily decisions.
        </p>
      </div>
    </section>
  );
}