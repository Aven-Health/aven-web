export default function HowItWorks() {
  const steps = [
    { id: 1, title: "Download the app", icon: "⬇️" },
    { id: 2, title: "Create your profile", icon: "👤" },
    { id: 3, title: "Track your daily health", icon: "📊" },
    { id: 4, title: "View insights + improve over time", icon: "📈" },
  ];

  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">How It Works</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-12">
        {steps.map(({ id, title, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center bg-cardDark p-6 rounded-lg"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
