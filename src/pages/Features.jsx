export default function Features() {
  const features = [
    { id: 1, title: "Health Tracking", description: "Monitor your daily health data easily." },
    { id: 2, title: "Accurate Insights", description: "Get precise and actionable health reports." },
    { id: 3, title: "Personalized Tips", description: "Receive tailored advice to improve wellness." },
    { id: 4, title: "Privacy First", description: "Your data is securely encrypted and never shared." },
    { id: 5, title: "Community Support", description: "Engage with a supportive health community." },
  ];

  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-cardLight p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
