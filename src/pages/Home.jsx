import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, scaleHover } from "../utils/motion";
import Tilt from "react-parallax-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import heroImage from "../assets/01.jpg";
import sectionImage1 from "../assets/02.png";
import sectionImage2 from "../assets/03.jpg";
import sectionImage3 from "../assets/04.jpg";
import sectionImage4 from "../assets/05.png";
import sectionImage5 from "../assets/06.jpg";

export default function Home() {
  const slides = [
    {
      text: `AVEN is a leading digital healthcare platform that simplifies how individuals and communities access, understand, and engage with healthcare services, putting people at the center of their health journey.`,
    },
    {
      text: `Experience a fully integrated digital health ecosystem, connect seamlessly with trusted healthcare providers, pharmacies, and wellness tools, all in one secure and user-friendly platform.`,
    },
    {
      text: `Take control of your health with actionable preventive care insights, personalized health data, and community support, making everyday healthcare smarter, more accessible, and proactive.`,
    },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="space-y-20 md:space-y-28">
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-2.5xl sm:text-3xl md:text-5xl font-bold leading-tight"
          >
            Your Health, <br className="hidden sm:block" />
            Connected & Integrated
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-gray-300 text-base sm:text-lg"
            >
              {slides[current].text}
            </motion.p>
          </AnimatePresence>

          <div className="flex justify-center lg:justify-start gap-2 mt-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-accent" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              {...scaleHover}
              className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg"
            >
              Get the App
            </motion.button>

            <motion.button
              {...scaleHover}
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="relative w-full overflow-hidden bg-cardDark"
>
  {/* Full border blending overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(150px) brightness(0.7)",
      zIndex: 0,
      // fade out top, bottom, left, right
      maskImage: `
        linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
        linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
      `,
      WebkitMaskImage: `
        linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
        linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
      `,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: "cover",
      WebkitMaskSize: "cover",
    }}
  />

  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
    <img
      src={heroImage}
      alt="Digital healthcare experience"
      className="w-full h-auto object-cover relative z-10"
      style={{
        // same mask for the image itself
        WebkitMaskImage: `
          linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
          linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
        `,
        maskImage: `
          linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
          linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
        `,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }}
    />
  </Tilt>
</motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-cardDark rounded-3xl p-8 sm:p-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { letter: "A", title: "Access" },
            { letter: "V", title: "Vitality" },
            { letter: "E", title: "Empowerment" },
            { letter: "N", title: "Network" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="space-y-3"
            >
              <div className="text-accent text-4xl sm:text-5xl font-bold">
                {item.letter}
              </div>
              <p className="font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300">
              Our mission is to empower individuals and communities with
              accessible, preventative, and connected healthcare tools that
              enable healthier everyday living.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300">
              To create healthier, more informed communities by becoming the
              everyday health companion that bridges people, care, and data.
            </p>
          </motion.div>
        </motion.div>

        <motion.img
          src={sectionImage1}
          alt="Healthcare professionals collaborating"
          className="rounded-2xl shadow-xl w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* ================= COMMUNITY FIRST ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.img
          src={sectionImage3}
          alt="Community-centered healthcare"
          className="rounded-2xl shadow-xl order-last lg:order-first w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            A Community-First Health Platform
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            AVEN is not hospital-first. It is community-first technology-enabled
            but human-centered. Discover care providers, pharmacies, insights,
            and conversations that support better decisions every day.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY AVEN ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-cardDark rounded-3xl p-8 sm:p-12"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Trusted Care", image: sectionImage2 },
            { title: "Connected Ecosystem", image: sectionImage4 },
            { title: "Everyday Wellness", image: sectionImage5 },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="space-y-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mx-auto h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= COMMUNITY TESTIMONIALS ================= */}
      <section className="space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Trusted by Communities
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-cardDark p-6 rounded-xl h-full">
                <p className="text-gray-300">
                  “AVEN makes healthcare simple and accessible.”
                </p>
                <p className="mt-4 text-accent font-semibold">
                  Community Member
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          Start Your Health Journey with AVEN
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto">
          Join the community shaping the future of everyday health.
        </p>

        <motion.button
          {...scaleHover}
          className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
