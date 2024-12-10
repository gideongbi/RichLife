import logo from "../assets/design.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";  // Framer Motion importieren

const AboutMe = () => {

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrollt die Seite ganz nach oben
  };

  return (
    <div id="AboutMe" className="w-full p-8 border-t-2 border-grey">
      {/* Überschrift oben links */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-left mb-8 text-web mt-20">
        Unsere Mission
      </h2>
      {/* Horizontale Linie oben */}
      <div className="border-t-2 border-gray-300 my-8"></div>

      {/* Hauptbereich: Bild und Text */}
      <div className="flex flex-col md:flex-row items-start">

        {/* Linkes Bild mit Animation */}
        <motion.div 
          className="w-full md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, y: -100 }} // Startet außerhalb des Bildschirms (nach links verschoben)
          whileInView={{ opacity: 1, y: 0 }} // Bewegt sich in den Sichtbereich
          transition={{ duration: 1, ease: "easeInOut" }} // Sanfte Bewegung mit Dauer von 1 Sekunde
          viewport={{ once: true }} // Animation wird nur einmal abgespielt
        >
          <img 
            src={logo} 
            alt="Über mich" 
            className="rounded-lg shadow-lg w-full h-auto max-h-[50vh] object-contain" 
          />
        </motion.div>

        {/* Rechter Text mit Animation */}
        <motion.div 
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, y: 100 }} // Startet außerhalb des Bildschirms (nach rechts verschoben)
          whileInView={{ opacity: 1, y: 0 }} // Bewegt sich in den Sichtbereich
          transition={{ duration: 1, ease: "easeInOut" }} // Sanfte Bewegung mit Dauer von 1 Sekunde
          viewport={{ once: true }} // Animation wird nur einmal abgespielt
        >
          <p className="text-lg text-neutral-500 mb-4">
            Ich werde gemeinsam mit dir ein Fundament schaffen für deine finanziellen Träume,
            einen genauen Blick mit dir auf die Gegenwart und Zukunft werfen und deine
            individuellen Träume gemeinsam mit dir erfüllen.
          </p>
          <p className="text-lg text-neutral-500 mb-12">
            Der Faulpelz will zwar viel, erreicht aber nichts; der Fleißige bekommt, was er
            sich wünscht, im Überfluss. <p><i>Sprüche 13:4 HFA</i></p>
          </p>

          {/* Mehr erfahren Button */}
          <div className="flex justify-end mt-40">
            <button 
              className="bg-grund text-white px-6 py-3 rounded-full shadow-lg hover:bg-web transition duration-300"
              onClick={() => handleLinkClick("/aboutme")}
            >
              Mehr erfahren
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontale Linie unten */}
      <div className="border-t-2 border-gray-300 my-8"></div>
    </div>
  );
};

export default AboutMe;
