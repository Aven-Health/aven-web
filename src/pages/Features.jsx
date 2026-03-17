import PageHelmet from "../components/pagehelmet";

export default function Features() {
  return (
    <section className="space-y-24">
      <PageHelmet
        title="Aven Health Features | Telehealth, Doctor Directory & Health Communities"
        description="Explore Aven Health's full platform features — online doctor consultations, pharmacy connections, appointment booking, preventive care guidance, and community health engagement in Kenya."
        url="https://www.avenhealth.co.ke/features"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aven Health Platform Features",
          description:
            "Key features of the Aven Health digital healthcare platform in Kenya",
          url: "https://www.avenhealth.co.ke/features",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Doctor & Care Provider Directory",
              description:
                "Discover verified healthcare professionals and services based on your location and needs.",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Appointment Discovery & Booking",
              description:
                "Explore availability and plan appointments with healthcare providers seamlessly.",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Pharmacy & Health Services Access",
              description:
                "Locate pharmacies, wellness centers, and essential health services near you.",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Preventative Health Guidance",
              description:
                "Access health information focused on prevention, lifestyle, and long-term wellbeing.",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Community Health Engagement",
              description:
                "Participate in discussions, shared experiences, and community-driven health insights.",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Centralized Health Search",
              description:
                "Find doctors, services, and resources quickly through a single, intelligent search.",
            },
          ],
        }}
      />

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Platform Features
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Aven Health is designed to support everyday health decisions by connecting
          people, care providers, and trusted health resources into one
          ecosystem.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Doctor & Care Provider Directory",
            text: "Discover verified healthcare professionals and services based on your location and needs.",
          },
          {
            title: "Appointment Discovery & Booking",
            text: "Explore availability and plan appointments with healthcare providers seamlessly.",
          },
          {
            title: "Pharmacy & Health Services Access",
            text: "Locate pharmacies, wellness centers, and essential health services near you.",
          },
          {
            title: "Preventative Health Guidance",
            text: "Access health information focused on prevention, lifestyle, and long-term wellbeing.",
          },
          {
            title: "Community Health Engagement",
            text: "Participate in discussions, shared experiences, and community-driven health insights.",
          },
          {
            title: "Centralized Health Search",
            text: "Find doctors, services, and resources quickly through a single, intelligent search.",
          },
        ].map(({ title, text }) => (
          <div key={title} className="bg-cardDark p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-accent">{title}</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* BRAND POSITION */}
      <div className="bg-cardLight p-10 rounded-xl text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          Designed for Simplicity & Trust
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          Every feature in Aven Health is intentionally designed to reduce complexity,
          build trust, and encourage proactive health choices — without
          overwhelming the user.
        </p>
      </div>
    </section>
  );
}