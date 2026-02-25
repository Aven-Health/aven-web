import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import { fadeUp } from "../utils/motion";

import doctor1 from "../assets/secure.png";
import feature1 from "../assets/mnurse.png";
import feature2 from "../assets/visit.png";
import feature3 from "../assets/new-app.jfif";
import feature4 from "../assets/diff.jpg";
import feature5 from "../assets/03.png";
import feature6 from "../assets/03.png";
import feature8 from "../assets/03.png";

import feature7 from "../assets/03.png";

import Banner from "../components/banner";


export default function DoctorDirectory() {


const features = [
  {
    image: feature1,
    items: [
      {
        title: "Easy 2-Step Booking",
        description:
          "Choose your doctor and confirm your appointment in just two effortless steps, simple, fast, and stress-free.",
      },
      {
        title: "Fast, Convenient Scheduling",
        description:
          "Book appointments quickly and avoid long waiting times, get care when you need it most.",
      },
      {
        title: "Web Booking Coming Soon",
        description:
          "Currently app-exclusive, but web-based booking will be available in the next update for even more convenience.",
      },
    ],
  },
  {
    image: feature2,
    items: [
      {
        title: "Encrypted Doctor Chat & Secure Appointments",
        description:
          "Connect with your chosen doctor via fully encrypted chat and schedule highly secure, private consultations you can trust.",
      },
      {
        title: "Flexible Consultations",
        description:
          "Decide between in-person visits or virtual appointments, healthcare that fits your lifestyle.",
      },
      {
        title: "Access Any Medical Professional",
        description:
          "Reach verified general practitioners, specialists, and mental health experts anytime, without barriers.",
      },
    ],
  },
  {
    image: feature4,
    items: [
      {
        title: "Get Digital Diagnosis",
        description:
          "Receive accurate digital diagnoses directly from certified doctors to guide your next steps.",
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Work with your doctor to create tailored treatment plans and stay guided every step of the way.",
      },
      {
        title: "Integrated Digital Experience",
        description:
          "All appointments, consultations, and communication unified in one secure platform.",
      },
    ],
  },
];

  return (
    <section className="w-full px-4 sm:px-1 lg:px-2 py-1 ">

      <Banner
        backgroundImage={doctor1}
        interval={6500}
        slides={[
          {
            title: "Secure. Reliable. Private.",
            description:
              "Every consultation is protected with encrypted communication and strict privacy standards you can trust.",
          },
          {
            title: "Modern Appointment Booking, Simplified",
            description:
              "Aven Health makes finding and scheduling healthcare effortless through a secure, integrated digital experience.",
          },
          {
            title: "Healthcare Designed Around You",
            description:
              "Book appointments with trusted professionals in a system built for clarity, speed, and patient-first convenience.",
          },

          {
            title: "Connected Care, One Platform",
            description:
              "Access verified doctors, specialists, and wellness professionals in a unified ecosystem of digital healthcare.",
          },


          {
            title: "Flexible Care for Modern Living",
            description:
              "Choose between in-person visits or virtual consultations, healthcare that adapts to your lifestyle.",
          },
          {
            title: "The Future of Booking Is Integrated",
            description:
              "Appointments today in the app, with full web functionality launching soon to expand your access to care.",
          },
        ]}
      />
      <div className="space-y-24 mb-20 mt-10">
  {features.map((group, index) => {
    const isReversed = index % 2 !== 0;

    return (
      <motion.div
        key={index}
        className="grid lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div
          className={`space-y-8 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {group.items.map((item, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <img
              src={group.image}
              alt="feature"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

      <section className="p-8 text-center max-w-4xl mx-auto mt-16 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Verified Professionals & Secure Booking</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Aven only lists verified doctors, specialists, and medical professionals to ensure safe, reliable, and trusted care.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Schedule your appointments confidently knowing you’re connecting with qualified healthcare providers.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Web booking is coming soon for now, appointments are fully available via the Aven Health app for a seamless experience.
        </p>
      </section>
    </section>
  );
}
