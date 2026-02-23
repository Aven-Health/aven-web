import { motion } from "framer-motion";
import howImage2 from "../assets/how02.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <section className="space-y-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h1 className="text-left md:text-5xl font-bold text-white">
          How Aven Health Works: Your Digital Health Companion
        </h1>

        <div className=" mx-auto px-">
          <div className="bg-cardDark p-8 rounded-2xl shadow-lg">
            <p className="text-left text-gray-300 text-lg leading-relaxed">
              Aven Health makes healthcare simple, connected, and personal.
              Explore providers, access resources, and engage with communities
              all in one app designed to support your wellness journey.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center"
          >
            <span className="text-accent text-5xl font-bold">01</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">Discover</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Search and explore{" "}
              <strong>
                healthcare providers, pharmacies, and wellness resources
              </strong>{" "}
              in your area. Find the right services for your needs and access
              verified, trusted information at your fingertips.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center md:mt-24"
          >
            <span className="text-accent text-5xl font-bold">02</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">Connect</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Engage directly with{" "}
              <strong>
                healthcare providers, pharmacies, and community experts
              </strong>
              . Plan your care, ask questions, and receive guidance that fits
              your personal health needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center md:mt-48"
          >
            <span className="text-accent text-5xl font-bold">03</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">Empower</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Make <strong>informed health decisions</strong> using insights
              from your community, personalized guidance, and preventative care
              recommendations. Stay proactive and confident in managing your
              wellness.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-cardLight p-12 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">
            Built Around Everyday Life
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Aven Health fits naturally into your daily routine keeping you informed,
            prepared, and connected to care without navigating complex
            healthcare systems. Access resources, community support, and
            professional guidance anytime, anywhere, all in one app.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src={howImage2}
            alt="User interacting with Aven Health digital healthcare app"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
