import React from "react";
import backgroundImage from "../assets/background.png"; // Füge dein Bild ein
import { Button } from "./Button"; // Importiere die Button-Komponente
import { motion } from "framer-motion"; // Importiere Framer Motion

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <motion.div
      id="HeroSection"
      className="flex h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Animation startet, wenn 50% des Elements sichtbar sind
      transition={{ duration: 1.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Linker Bereich mit Hintergrundbild und Text */}
      <div
        className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}
      >
        {/* Text auf dem Hintergrundbild */}
        <div className="text-center bg-black bg-opacity-50 p-8 mt-40 rounded-lg">
          <motion.h1
            className="pt-5 text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-grund bg-clip-text">
              Rich Life: Wir formen dein reiches Leben
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-neutral-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Erreiche gemeinsam mit mir deine finanziellen Träume und lasse es
            nicht nur Träume bleiben.
          </motion.p>
          <div className="flex justify-center my-10">
            <Button
              borderRadius="1.75rem"
              containerClassName="bg-black text-white w-2/3 sm:w-1/2 md:w-1/5 rounded-full shadow-lg hover:bg-web transition duration-300"
              onClick={() => scrollToSection("Contact")}
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
