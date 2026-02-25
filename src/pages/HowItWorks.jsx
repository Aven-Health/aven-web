import { motion } from "framer-motion";
import howImage2 from "../assets/doc.jpg";
import howImage1 from "../assets/circle.jpg";

import Banner from "../components/banner";
 


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {

    const slides = [
    {
      title: "Your Digital Health Companion",
      description:
        "Aven Health makes healthcare simple, connected, and personal. Explore providers, access resources, and engage with communities.",
    },
    {
      title: "Seamless Access to Care",
      description:
        "Connect with verified healthcare providers, pharmacies, and wellness resources with just a few taps.",
    },
    {
      title: "Empower Your Health Decisions",
      description:
        "Stay proactive with personalized guidance, preventative care insights, and trusted community advice.",
    },
    {
      title: "Healthcare That Fits Your Life",
      description:
        "Integrate health management into your daily routine and never miss critical updates or appointments.",
    },
    {
      title: "Trusted & Secure",
      description:
        "All your health information is safely managed and easily accessible anytime, anywhere.",
    },
  ];


  return (
    <section className="space-y-20">
     <Banner backgroundImage={howImage2} slides={slides} interval={6000} />
   

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
          className=" "
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
            src={howImage1}
            alt="User interacting with Aven Health digital healthcare app"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
