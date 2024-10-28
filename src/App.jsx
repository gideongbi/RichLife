import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NavigationButtons from "./components/NavigationButtons";
import FAQ from "./components/FAQ";
import Kenstar from "./components/Kenstar"; // Importiere Kenstar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar auf allen Seiten sichtbar */}

      <Routes>
        {/* Route für die Startseite */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection /> {/* HeroSection nur auf der Startseite */}
                <Cards />
              <div className="bg-white">
                <Services />
                <AboutMe />
              </div>
              <Contact id="contact-section" />
              <div className="pb-[20vh] pt-[5vh]">
                <FAQ />
              </div>
              <NavigationButtons />
            </>
          } 
        />

        {/* Route für die eigenständige Kenstar-Seite */}
        <Route path="/kenstar" element={<Kenstar />} /> 
      </Routes>

      {/* Footer bleibt auf allen Seiten */}
      <Footer />
    </Router>
  );
}

export default App;
