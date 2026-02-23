import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner({
  backgroundImage,
  slides = [],
  interval = 6000,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[300px] md:h-[380px]">
        
        <img
          src={backgroundImage}
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
                  {slides[current].title}
                </h1>

                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
                  {slides[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {slides.length > 1 && (
              <div className="flex gap-3 pt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-accent"
                        : "w-4 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}