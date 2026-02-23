import { useState } from "react";

import ianChaluo from "../assets/ian_chaluo.jpeg";
import bildadMbuthia from "../assets/bildad_mbuthia.jpeg";
import nilaKhadioli from "../assets/nila_khadioli.jpeg";
import paulWaithaka from "../assets/paul_waithaka.jpeg";
import safiaMohammed from "../assets/safia_mohammed.jpeg";
import antonyOchieng from "../assets/antony_ochieng.jpg";
import bruceLukwa from "../assets/bruce_lukwa.jpeg";

export default function MeetTheTeam() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const team = [
    {
      name: "Chaluo Ian",
      role: "Chief Executive Officer (CEO)",
      shortDescription:
        "Leads Aven Health’s vision and strategy, focused on building community-first digital health solutions.",
      fullDescription:
        "Chaluo provides long-term strategic leadership, oversees stakeholder engagement, and ensures Aven Health remains mission-driven while scaling sustainably across communities.",
      image: ianChaluo,
    },
    {
      name: "Bruce Lukwa",
      role: "Chief Product Officer (CPO)",
      shortDescription:
        "Oversees product strategy and technology architecture.",
      fullDescription:
        "Bruce Lukwa is a product and data professional with hands-on experience designing data-driven solutions to real-world problems across health, finance, and emerging markets. In his career he has contributed to large-scale data reconciliation and automation initiatives that improved financial accuracy and prevented significant losses. As Chief Product Officer at Aven Health, he leads product strategy and the development of ethical, user-centered, AI-enabled platforms.",
      image: bruceLukwa,
    },
    {
      name: "Antony Ochieng",
      role: "Chief Technology Officer (CTO)",
      shortDescription:
        "Drives platform innovation and technical execution.",
      fullDescription:
        "Antony oversees engineering execution, infrastructure design, and digital transformation initiatives, translating complex health needs into intuitive digital experiences.",
      image: antonyOchieng,
    },
    {
      name: "Paul Waithaka",
      role: "Chief Operating Officer (COO)",
      shortDescription:
        "Ensures operational excellence and regulatory alignment.",
      fullDescription:
        "Paul Waithaka is an experienced operations professional with a background in web and systems development and strong knowledge in STEM fields. He brings a unique blend of technical expertise and operational leadership, having previously worked on developing and managing digital systems and web platforms. As Chief Operating Officer, Paul oversees day-to-day operations, streamlines internal processes, and supports strategic execution to ensure efficiency, innovation, and high-quality service delivery. He is passionate about leveraging technology to build scalable systems and drive sustainable growth for the organization.",
      image: paulWaithaka,
    },
    {
      name: "Nila Khadioli",
      role: "Chief Compliance and Partnerships Officer",
      shortDescription:
        "Manages governance and strategic partnerships.",
      fullDescription:
        "Nila ensures regulatory integrity, builds institutional partnerships, and strengthens accountability frameworks across Aven Health’s ecosystem.",
      image: nilaKhadioli,
    },
    {
      name: "Bildad Mbuthia",
      role: "Chief Marketing and Communications Officer",
      shortDescription:
        "Leads growth strategy and communications.",
      fullDescription:
        "Bildad Mwangi Mbuthia is a creative communications professional with a passion for visual storytelling. With expertise in graphic design, photography, and videography, he crafts powerful media content that helps brands connect with their audiences in meaningful ways.He has collaborated with organizations such as Realty Boris Company, Vista Studios, Africa Nazarene University, and Upsyd Media, delivering high-quality media production that elevates brand identity and communication strategies. Bildad believes that great communication is not just seen or heard it is felt.",
      image: bildadMbuthia,
    },
    {
      name: "Safia Mohammed",
      role: "Chief Community Officer",
      shortDescription:
        "Focuses on user insights and evidence-driven growth.",
      fullDescription:
        "Safia is a dedicated and passionate leader, Safia is a champion for positive change in her community. As the first-born daughter, she has developed strong leadership skills, which have earned her recognition as a Barney Servant Leadership Award winner at Africa Nazarene University. Her advocacy focuses on combating retrogressive cultures, including FGM and early marriages, to empower young girls. With experience as a Field Officer at Innovative for Poverty Action, and internships at the Public Service Commission and KANCO, Safia has honed her skills in community development and public service. Currently pursuing a Master's in Monitoring and Evaluation at Kenyatta University, she aspires to drive positive social and economic change, impacting lives and inspiring others. As a wife, and Chief Community Officer at Aven Health, Safia leads initiatives that foster community engagement and inclusivity in healthcare. She embodies a commitment to servant leadership, seeking to make a lasting difference in her community.",
      image: safiaMohammed,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-16">

      <header className="text-left space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Meet the Team
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Aven Health is built by people who believe healthcare should be accessible,
          connected, and centered around everyday life.
        </p>
      </header>
<div className="space-y-8">

  <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-4 justify-center">
    <TeamCard
      member={team[0]}
      index={0}
      openIndex={openIndex}
      toggleDropdown={toggleDropdown}
    />

    {team.slice(1, 4).map((member, index) => (
      <div key={index + 1} className="hidden lg:block">
        <TeamCard
          member={member}
          index={index + 1}
          openIndex={openIndex}
          toggleDropdown={toggleDropdown}
        />
      </div>
    ))}
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
    {team.slice(4, 7).map((member, index) => (
      <div key={index + 4} className="hidden lg:block">
        <TeamCard
          member={member}
          index={index + 4}
          openIndex={openIndex}
          toggleDropdown={toggleDropdown}
        />
      </div>
    ))}

    {team.slice(1, 7).map((member, index) => (
      <div key={"sm-" + index} className="block lg:hidden">
        <TeamCard
          member={member}
          index={index + 1}
          openIndex={openIndex}
          toggleDropdown={toggleDropdown}
        />
      </div>
    ))}
  </div>

</div>
    </section>
  );
}


function TeamCard({ member, index, openIndex, toggleDropdown }) {
  return (
    <div className="bg-cardDark p-6 rounded-xl text-center space-y-5 transition hover:shadow-lg">
      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden bg-cardLight flex items-center justify-center ring-2 ring-accent/40">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
      </div>
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-accent text-sm font-medium">{member.role}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{member.shortDescription}</p>
      <button
        onClick={() => toggleDropdown(index)}
        className="text-accent text-sm font-medium hover:underline transition"
      >
        {openIndex === index ? "Show Less" : "Learn More"}
      </button>
      {openIndex === index && (
        <div className="text-gray-300 text-sm leading-relaxed pt-2 border-t border-white/10 animate-fadeIn">
          {member.fullDescription}
        </div>
      )}
    </div>
  );
}
