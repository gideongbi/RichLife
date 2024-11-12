import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kenstar from "./components/Kenstar"; 
import AGB from './components/AGB'; 
import Datenschutz from './components/Datenschutz'; 
import Impressum from './components/Impressum'; 

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar auf allen Seiten sichtbar */}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kenstar" element={<Kenstar />} />
          <Route path="/AGB" element={<AGB />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/Impressum" element={<Impressum />} />
        </Routes>
      </div>

      {/* Footer bleibt auf allen Seiten */}
      <Footer />
    </Router>
  );
}

export default App;
