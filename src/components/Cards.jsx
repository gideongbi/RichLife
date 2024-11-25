import React, { useState, useRef } from "react";
import { nums } from "../constants/index";
import { motion, AnimatePresence } from "framer-motion";

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Aktive Karte
  const containerRef = useRef(null); // Referenz für den Kartencontainer
  const startTouchX = useRef(0); // Position, um den Start des Swipes zu speichern

  // Swipe-Funktionalität für mobile Geräte
  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX; // Speichert die X-Koordinate des ersten Touchpunkts
  };

  const handleTouchMove = (e) => {
    const currentTouchX = e.touches[0].clientX;
    const swipeDistance = currentTouchX - startTouchX.current;

    if (swipeDistance > 50) {
      // Swipe nach rechts
      setActiveIndex((prevIndex) => (prevIndex === 0 ? nums.length - 1 : prevIndex - 1));
    } else if (swipeDistance < -50) {
      // Swipe nach links
      setActiveIndex((prevIndex) => (prevIndex + 1) % nums.length);
    }
  };

  // Framer-Motion-Animationen für Kartenwechsel
  const cardVariants = {
    hidden: { opacity: 0, x: 50 }, // Startzustand: Unsichtbar und leicht nach unten verschoben
    visible: { opacity: 1, x: 0 }, // Zielzustand: Voll sichtbar und in Position
    exit: { opacity: 0, x: -50 }, // Wenn verlassen wird: Leicht nach oben verschoben und ausgeblendet
  };

  return (
    <motion.div
      id="Cards"
      className="w-full p-8 flex flex-col md:flex-row pt-[5vh] pb-[15vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // Animation startet bei 40% Sichtbarkeit
      transition={{ duration: 1.2, ease: "easeInOut" }} // Sanfte Übergänge
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Linker Bereich für den Text */}
      <div className="flex flex-col justify-center md:w-1/2 md:pr-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-left mb-8 text-web mt-20">
        Du möchtest endlich deine Finanzen selbst in die Hand nehmen?
        </h2>

        <div className="border-t-2 border-gray-300 my-8"></div>

        <p className="text-xl text-neutral-500 mb-4">
        Ich biete dir ein persönliches eins zu eins Coaching an und helfe dir dabei, deine persönliche Vision zu schärfen, langfristige Strategien zu entwickeln und ein solides finanzielles Fundament aufzubauen. 
        </p>
        <p className="text-xl text-neutral-500 mb-4">
        Das eins zu eins Coaching wird auf maximal 100 Personen beschränkt sein, welche ich mit bedacht auswählen werde. 
        </p>
      </div>

      {/* Rechter Bereich für die Karten */}
      <div className="flex flex-col justify-center items-center relative md:w-1/2">
        <div
          ref={containerRef}
          className="relative w-full h-[550px] lg:h-[750px] overflow-hidden flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Dynamische Karten */}
          <AnimatePresence>
            {nums.map((card, index) =>
              index === activeIndex ? (
                <motion.div
                  key={card.title}
                  className="absolute w-full h-full flex flex-col items-center justify-center text-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  transition={{ duration: 0.8 }}
                >
                  {/* Card Inhalt */}
                  <motion.div
                    className="bg-gradient-to-b from-web to-grund rounded-lg p-8 shadow-lg w-[90%] h-[90%] flex flex-col justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {card.title}
                    </h2>
                    <p className="text-2xl text-white">{card.description}</p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Pagination Navigation direkt unter den Karten */}
          <div className="absolute bottom-0 flex justify-center w-full">
            {nums.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full mx-1 ${
                  index === activeIndex ? "bg-web" : "bg-neutral-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
