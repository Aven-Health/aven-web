export default function Features() {
  return (
    <section className="space-y-24">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Platform Features
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          AVEN is designed to support everyday health decisions by connecting
          people, care providers, and trusted health resources into one
          ecosystem.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Doctor & Care Provider Directory",
            text:
              "Discover verified healthcare professionals and services based on your location and needs.",
          },
          {
            title: "Appointment Discovery & Booking",
            text:
              "Explore availability and plan appointments with healthcare providers seamlessly.",
          },
          {
            title: "Pharmacy & Health Services Access",
            text:
              "Locate pharmacies, wellness centers, and essential health services near you.",
          },
          {
            title: "Preventative Health Guidance",
            text:
              "Access health information focused on prevention, lifestyle, and long-term wellbeing.",
          },
          {
            title: "Community Health Engagement",
            text:
              "Participate in discussions, shared experiences, and community-driven health insights.",
          },
          {
            title: "Centralized Health Search",
            text:
              "Find doctors, services, and resources quickly through a single, intelligent search.",
          },
        ].map(({ title, text }) => (
          <div
            key={title}
            className="bg-cardDark p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-accent">
              {title}
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* BRAND POSITION */}
      <div className="bg-cardLight p-10 rounded-xl text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          Designed for Simplicity & Trust
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          Every feature in AVEN is intentionally designed to reduce complexity,
          build trust, and encourage proactive health choices — without
          overwhelming the user.
        </p>
      </div>

    </section>
  );
}
