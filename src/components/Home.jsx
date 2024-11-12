import React from 'react';

import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Contact from "./Contact";
import Cards from "./Cards";
import NavigationButtons from "./NavigationButtons";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      {/* Hero Section - Hauptbereich der Startseite */}
      <HeroSection />
      
      {/* Kartenabschnitt */}
      <Cards />
      
      {/* Service- und AboutMe-Bereich, eingerahmt in einen Container für ein einheitliches Layout */}
      <div className="bg-white">
        <Services />
        <AboutMe />
      </div>
      
      {/* Kontaktbereich */}
      <Contact id="contact-section" />
      
      {/* FAQ-Bereich mit zusätzlichem Abstand am Ende */}
      <div className="pb-[20vh] pt-[5vh]">
        <FAQ />
      </div>
      
      {/* Navigationsbuttons */}
      <NavigationButtons />
    </div>
  );
}

export default Home;
