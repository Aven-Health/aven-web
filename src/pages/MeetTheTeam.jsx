export default function MeetTheTeam() {
  const team = [
    {
      name: "Chaluo Ian",
      role: "CEO",
      description:
        "Focused on building community-first digital health solutions that are accessible, ethical, and impactful.",
    },
    {
      name: "Health Advisory Team",
      role: "Medical & Wellness Advisors",
      description:
        "A group of professionals guiding AVEN’s direction to ensure accuracy, responsibility, and user wellbeing.",
    },
    {
      name: "Engineering & Design",
      role: "Platform Builders",
      description:
        "Designers and engineers dedicated to creating intuitive, human-centered digital health experiences.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-16">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Meet the Team</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          AVEN is built by people who believe healthcare should be accessible,
          connected, and centered around everyday life.
        </p>
      </header>

      {/* Team Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-cardDark p-6 rounded-xl text-center space-y-4 hover:shadow-lg transition"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-cardLight flex items-center justify-center text-accent font-bold text-xl">
              {member.name.charAt(0)}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {member.name}
            </h3>

            <p className="text-accent text-sm font-medium">
              {member.role}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
