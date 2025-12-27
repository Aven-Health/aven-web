import heroImage from "../assets/01.png";
import sectionImage1 from "../assets/02.png";
import sectionImage2 from "../assets/03.png";
import sectionImage3 from "../assets/04.png";
import sectionImage4 from "../assets/05.png";

export default function Home() {
  return (
    <div className="space-y-28">

      {/* ================= HERO SECTION ================= */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Health, <br /> Connected & Simplified
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            AVEN exists to simplify how people access, understand, and engage with 
            healthcare, putting individuals and communities at the center of everything.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90">
              Get the App
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Digital healthcare experience"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= AVEN VALUES ================= */}
      <section className="bg-cardDark rounded-3xl p-12">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { letter: "A", title: "Access" },
            { letter: "V", title: "Vitality" },
            { letter: "E", title: "Empowerment" },
            { letter: "N", title: "Network" },
          ].map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="text-accent text-5xl font-bold">
                {item.letter}
              </div>
              <p className="text-white font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300">
              Our mission is to empower individuals and communities with accessible,
              preventative, and connected healthcare tools that enable healthier
              everyday living.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300">
              Our vision is to create healthier, more informed communities by
              becoming the everyday health companion that bridges people, care,
              and data into one unified experience.
            </p>
          </div>
        </div>

        <img
          src={sectionImage1}
          alt="Healthcare professionals collaborating"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* ================= COMMUNITY FIRST ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <img
          src={sectionImage3}
          alt="Community-centered healthcare"
          className="rounded-2xl shadow-lg order-last lg:order-first"
        />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            A Community-First Health Platform
          </h2>

          <p className="text-gray-300 text-lg">
            AVEN is not hospital-first. It is community-first — technology-enabled
            but human-centered. We help you discover care providers, pharmacies,
            health insights, and conversations that support better decisions every day.
          </p>
        </div>
      </section>

      {/* ================= TRUST & PRIVACY ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Secure & Privacy-First</h2>

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Built for Everyday Health</li>
            <li>Designed for Real People</li>
          </ul>
        </div>

        <img
          src={sectionImage2}
          alt="Secure digital health technology"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* ================= WHY AVEN ================= */}
      <section className="bg-cardDark rounded-3xl p-12">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Trusted Care",
              image: sectionImage2,
            },
            {
              title: "Connected Ecosystem",
              image: sectionImage1,
            },
            {
              title: "Everyday Wellness",
              image: sectionImage3,
            },
          ].map((item, index) => (
            <div key={index} className="space-y-4">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mx-auto h-40 object-cover"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Start Your Health Journey with AVEN
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto">
          Join the Community
        </p>

        <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90">
          Get Started
        </button>
      </section>

    </div>
  );
}
