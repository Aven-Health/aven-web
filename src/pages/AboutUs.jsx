import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

import aboutImage1 from "../assets/about.jpg";
import aboutImage2 from "../assets/about2.avif";
import aboutImage3 from "../assets/about03.png";

export default function AboutUs({}) {
  const slides = [
    {
      heading: "Healthcare, Simplified. Connected. Built Around You.",
      text: "Aven Health is creating a unified digital health ecosystem that brings providers, pharmacies, and communities into one seamless experience, empowering individuals to take control of their health with clarity and confidence.",
    },
    {
      heading: "Find Trusted Care When You Need It Most",
      text: "Discover verified healthcare professionals, compare services transparently, and book appointments effortlessly within a secure platform designed to make access faster and stress-free.",
    },
    {
      heading: "Stronger Communities. Smarter Health Decisions.",
      text: "Access credible health information, connect with supportive communities, and stay engaged in your wellness journey — anytime, anywhere.",
    },
  ];

  const corePrinciples = [
    "Accessible Healthcare for All",
    "Transparent & Trusted Systems",
    "Patient Empowerment Through Information",
    "Community-Centered Care",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 md:space-y-10 max-w-7xl mx-auto">
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[300px] md:h-[380px]">
          <img
            src={aboutImage1}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 h-full flex items-center px-8 md:px-10">
            <div className="max-w-3xl space-y-6 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {slides[current].heading}
                  </h1>

                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
                    {slides[current].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-3 pt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === index ? "w-8 bg-accent" : "w-4 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-hidden py-4 px-4 md:px-8"
      >
        <motion.div className="flex gap-4 whitespace-nowrap text-white font-medium text-lg text-center animate-scroll">
          {corePrinciples.map((principle, index) => (
            <span key={index}>
              {principle}
              {index < corePrinciples.length - 1 && (
                <span className="mx-2 text-accent">•</span>
              )}
            </span>
          ))}

          {corePrinciples.map((principle, index) => (
            <span key={`repeat-${index}`}>
              {principle}
              {index < corePrinciples.length - 1 && (
                <span className="mx-2 text-accent">•</span>
              )}
            </span>
          ))}
        </motion.div>

        <style jsx>{`
          .animate-scroll {
            display: inline-flex;
            animation: scroll 40s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </motion.section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <motion.div
          variants={fadeUp}
          className=" space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-accent">
            Why Aven Health Was Created
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Modern healthcare is fragmented, reactive, and often overwhelming to
            navigate. Patients struggle to find trusted providers, compare
            services, or access reliable medical information in one place. Aven Health
            Health was created to solve this problem by building a connected
            digital healthcare platform that simplifies access, improves
            transparency, and supports proactive health decisions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our mission is to make preventive healthcare accessible,
            community-driven, and digitally connected enabling individuals to
            discover healthcare providers, access pharmacies, and engage with
            credible health resources before minor concerns become major
            emergencies.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <img
            src={aboutImage2}
            alt="Healthcare professionals collaborating"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <motion.div variants={fadeUp}>
          <img
            src={aboutImage3}
            alt=""
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className=" space-y-5"

        >
          <h2 className="text-2xl font-semibold text-accent">
            What We Believe About the Future of Healthcare
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              • Healthcare should start within communities, not only inside
              hospitals
            </li>
            <li>
              • Preventive care and early access lead to better long-term
              outcomes
            </li>
            <li>
              • Digitizing social healthcare empowers communities to share,
              learn, and support one another online
            </li>
            <li>
              • Digital health technology should enhance human care not
              replace it
            </li>
            <li>
              • Transparency, trust, and accessibility are essential to quality
              healthcare
            </li>
          </ul>
        </motion.div>
      </motion.section>
    </div>
  );
}
