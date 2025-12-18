export default function HowItWorks() {
  return (
    <section className="space-y-24">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          How AVEN Works
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          A simple, human-centered approach to everyday healthcare access and
          engagement.
        </p>
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Discover",
            text:
              "Explore healthcare providers, pharmacies, and resources within your community.",
          },
          {
            step: "02",
            title: "Connect",
            text:
              "Access trusted information, plan care, and engage with health services that fit your needs.",
          },
          {
            step: "03",
            title: "Empower",
            text:
              "Make informed health decisions supported by community insights and preventative guidance.",
          },
        ].map(({ step, title, text }) => (
          <div
            key={step}
            className="bg-cardDark p-8 rounded-xl text-center"
          >
            <span className="text-accent text-4xl font-bold">
              {step}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {title}
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="bg-cardLight p-10 rounded-xl text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          Built Around Real Life
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          AVEN fits naturally into everyday life — helping users stay informed,
          prepared, and connected to care without needing to navigate complex
          healthcare systems.
        </p>
      </div>

    </section>
  );
}
