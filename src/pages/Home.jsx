import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, scaleHover } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import GetStartedModal from "../components/getstarted";
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
      text: `Aven Health is a leading digital healthcare platform that simplifies how individuals and communities access, understand, and engage with healthcare services, putting people at the center of their health journey.`,
    },
    {
      text: `Experience a fully integrated digital health ecosystem, connect seamlessly with trusted healthcare providers, pharmacies, and wellness tools, all in one secure and user-friendly platform.`,
    },
    {
      text: `Take control of your health with actionable preventive care insights, personalized health data, and community support, making everyday healthcare smarter, more accessible, and proactive.`,
    },
  ];
  const [current, setCurrent] = useState(0);
  const learnMoreRef = useRef(null);

  const [showGetStarted, setShowGetStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);


  const handleLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



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
                className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "bg-accent" : "bg-white/30"
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
          onClick={() => setShowGetStarted(true)}

              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg"
            >
              Get Aven Health App         
                 </motion.button>

            <motion.button
              {...scaleHover}
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10"
              onClick={handleLearnMore}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full overflow-hidden bg-cardDark rounded-2xl"
        >
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(150px) brightness(0.7)",
              zIndex: 0,
              maskImage: `
        linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
        linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
      `,
              WebkitMaskImage: `
        linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
        linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
      `,
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
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
              className="w-full h-auto object-cover relative z-10 rounded-2xl"
              style={{
                WebkitMaskImage: `
          linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
          linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)
        `,
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
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
        className="overflow-hidden py-8"
      >
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[
            { letter: "A", title: "Access" },
            { letter: "V", title: "Vitality" },
            { letter: "E", title: "Empowerment" },
            { letter: "N", title: "Network" },
            { dot: true },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 min-w-[200px] flex flex-col items-center justify-center shadow-lg rounded-2xl p-6 ${item.dot ? "" : "bg-backgroundDark"
                }`}
            >
              {item.dot ? (
                <div className="text-accent text-5xl font-bold">&middot;</div>
              ) : (
                <>
                  <div className="text-accent text-5xl font-bold mb-2">
                    {item.letter}
                  </div>
                  <p className="font-medium">{item.title}</p>
                </>
              )}
            </div>
          ))}


          {[
            { letter: "A", title: "Access" },
            { letter: "V", title: "Vitality" },
            { letter: "E", title: "Empowerment" },
            { letter: "N", title: "Network" },
            { dot: true },
          ].map((item, index) => (
            <div
              key={`dup-${index}`}
              className={`flex-shrink-0 min-w-[200px] flex flex-col items-center justify-center shadow-lg rounded-2xl p-6 ${item.dot ? "" : "bg-backgroundDark"
                }`}
            >
              {item.dot ? (
                <div className="text-accent text-5xl font-bold">&middot;</div>
              ) : (
                <>
                  <div className="text-accent text-5xl font-bold mb-2">
                    {item.letter}
                  </div>
                  <p className="font-medium">{item.title}</p>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </motion.section>
      <section ref={learnMoreRef} className="grid lg:grid-cols-2 gap-16 items-center">

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
              Our mission is to empower individuals and communities by improving social health, serving each person’s needs, building strong communities, and advancing integrated health technology for connected, healthier living.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300">
              To create a healthier, integrated future by connecting people, care, and data as the everyday health companion for informed and thriving communities.
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
            Aven Health puts communities first, combining human-centered care with smart, technology-enabled solutions. Connect with care providers, pharmacies, insights, and conversations that empower better health decisions every day at your comfort.
          </p>
        </motion.div>
      </section>

      <motion.section className=" p-8 sm:p-12 overflow-hidden">
        <motion.div
          className="flex gap-10"
          style={{ display: "flex" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[
            { title: "Trusted Care", image: sectionImage2 },
            { title: "Connected Ecosystem", image: sectionImage4 },
            { title: "Everyday Wellness", image: sectionImage5 },
            { title: "Trusted Care", image: sectionImage2 },
            { title: "Connected Ecosystem", image: sectionImage4 },
            { title: "Everyday Wellness", image: sectionImage5 },
          ].map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="space-y-4 min-w-[200px] text-center flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mx-auto h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </motion.div>
      </motion.section>


      <section className="space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-left">
          Trusted by Users and Communities
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              quote:
                "Aven Health makes healthcare simple and accessible for me. And its very simple to use",
              name: "Deborah Ayuma",
              role: "User",
            },
            {
              quote:
                "I can easily connect with pharmacies and providers in one place.",
              name: "Sharon Potishoi",
              role: "User",
            },
            {
              quote:
                "The platform feels modern, trustworthy, and built for real people.",
              name: "Dr. Amina",
              role: "Healthcare Professional",
            },
          ].map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-cardDark p-6 rounded-xl h-full flex flex-col justify-between">
                <p className="text-gray-300 italic">“{review.quote}”</p>
                <div className="mt-4">
                  <p className="text-accent font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold ">
          Start Your Health Journey with Aven Health
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto">
          Join the community shaping the future of everyday health.
        </p>

        <motion.button
          {...scaleHover}
          onClick={() => setShowGetStarted(true)}
          className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.section>


      <GetStartedModal
        isOpen={showGetStarted}
        onClose={() => setShowGetStarted(false)}
      />
    </div>
  );
}
