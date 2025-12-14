export default function Home() {
  return (
    <div className="bg-primary min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Your Health, Simplified.</h1>
        <p className="text-lg mb-8">
          A smarter way to track, improve, and manage your wellbeing.
        </p>
        <div className="space-x-4">
          <button className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition">
            Get the App
          </button>
          <button className="border border-accent text-white font-semibold px-6 py-3 rounded hover:bg-accent hover:text-primary transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-6 py-12 max-w-3xl mx-auto text-center">
        <p className="text-lg">
          A modern health app designed to help you stay on top of your daily wellness. Simple features, accurate insights, and a clean experience.
        </p>
      </section>

      {/* Features Highlight (sample icons or placeholders) */}
      <section className="px-6 py-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Track Your Health</h3>
          <p>Monitor your daily habits easily.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Get Accurate Insights</h3>
          <p>Understand your progress over time.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
          <p>Receive personalized tips and reminders.</p>
        </div>
      </section>

      {/* Credibility Markers */}
      <section className="bg-cardDark py-8 text-center max-w-4xl mx-auto rounded-lg">
        <p className="mb-2">Trusted by users.</p>
        <p>Built on secure, privacy-first technology.</p>
      </section>
    </div>
  );
}
