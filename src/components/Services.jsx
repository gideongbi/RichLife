import { checklistItems } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Ausgangszustand für Scroll-Animation
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="Services" className="relative bg-white py-20">
      {/* Hintergrundelement */}
      <div className="absolute inset-0 bg-gradient-to-r from-grund to-web opacity-10 pointer-events-none"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Überschrift */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide text-black font-bold mb-6">
          Unsere Dienstleistungen
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Was erwartet dich?
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full px-6">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white relative p-8 shadow-lg rounded-xl transition-transform duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }} // Hover-Effekt in framer-motion integriert
            >
              {/* Nummer und Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-web text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Inhalt */}
              <div className="mt-16">
                <h5 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  {item.title}
                </h5>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
