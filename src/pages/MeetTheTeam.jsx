import ianChaluo from "../assets/ian_chaluo.jpeg";
import bildadMbuthia from "../assets/bildad_mbuthia.jpeg";
import nilaKhadioli from "../assets/nila_khadioli.jpeg";
import paulWaithaka from "../assets/paul_waithaka.jpeg";
import safiaMohammed from "../assets/safia_mohammed.jpeg";
import antonyOchieng from "../assets/antony_ochieng.jpg";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Chaluo Ian",
      role: "Chief Executive Officer (CEO)",
      description:
        "Leads AVEN’s vision and strategy, focused on building community-first digital health solutions that are accessible, ethical, and impactful.",
      image: ianChaluo,
    },
    {
      name: "Bruce",
      role: "Chief Product Officer (CPO)",
      description:
        "Oversees product strategy and technology architecture to ensure AVEN delivers scalable, secure, and human-centered solutions.",
      image: null,
    },
    {
      name: "Antony Ochieng",
      role: "Chief Technology Officer (CTO)",
      description:
        "Drives platform innovation and technical execution, translating health needs into intuitive digital experiences.",
      image: antonyOchieng,
    },
    {
      name: "Paul Waithaka",
      role: "Chief Operating Officer (COO)",
      description:
        "Ensures operational excellence and regulatory alignment, supporting safe and compliant healthcare delivery.",
      image: paulWaithaka,
    },
    {
      name: "Nila Khadioli",
      role: "Chief Compliance and Partnerships Officer",
      description:
        "Manages governance and compliance processes to maintain trust, quality, and accountability across the platform.",
      image: nilaKhadioli,
    },
    {
      name: "Bildad Mbuthia",
      role: "Chief Marketing and Communications Officer",
      description:
        "Leads growth strategy, partnerships, and research to expand AVEN’s impact and reach within communities.",
      image: bildadMbuthia,
    },
    {
      name: "Safia Mohammed",
      role: "Chief Community Officer",
      description:
        "Focuses on user insights, market research, and evidence-driven growth initiatives.",
      image: safiaMohammed,
    },
    {
      name: "Dr. Mathias",
      role: "Chief Medical Officer (CMO)",
      description:
        "Provides clinical guidance and medical oversight to ensure AVEN’s solutions are accurate, responsible, and patient-centered.",
      image: null,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-16">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Meet the Team
        </h1>

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
            className="bg-cardDark p-6 rounded-xl text-center space-y-5 hover:shadow-lg transition"
          >

            {/* Profile Image / Initials */}
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden bg-cardLight flex items-center justify-center ring-2 ring-accent/40">

              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <span className="text-accent font-bold text-3xl">
                  {member.name.charAt(0)}
                </span>
              )}

            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-white">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-accent text-sm font-medium">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {member.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
