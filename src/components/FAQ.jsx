import React, { useState, useEffect } from "react";
import { faqs } from '../constants/index';  
import { SquareArrowUp } from "lucide-react";

const FAQ = () => {
  // Smooth Scroll Funktion zum Scrollen nach oben
  const smoothScrollToTop = () => {
    smoothScrollTo(0); // Scrollt nach oben, Zielposition ist 0 (ganz oben)
  };

  // Smooth Scroll Funktion, die eine Zielposition und Dauer übergibt
  const smoothScrollTo = (targetPosition, duration = 1700) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [typedText, setTypedText] = useState('');

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      setTypedText(''); // Reset typed text when a new FAQ is opened
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      const answer = faqs[openIndex].answer;
      let i = 0;
      const typingEffect = setInterval(() => {
        setTypedText(answer.substring(0, i + 3)); // Increase the character count to speed up typing
        i += 3; // Increase step size to add more characters per interval

        if (i >= answer.length) clearInterval(typingEffect);
      }, 30); // Speed up typing by reducing interval time (30ms)

      return () => clearInterval(typingEffect); // Cleanup interval on unmount
    }
  }, [openIndex]);

  return (
    <div id="FAQ" className="faq-container p-5 max-w-2xl mx-auto relative"> {/* relative hinzugefügt */}
      <h1 className="text-center text-4xl pb-[3vh] font-semibold mt-10">Frequently Asked Questions</h1>
      <p className="pb-20 text-center">Wir sind hier um dir mit Fragen jeglicher Art zu helfen. Falls du nicht findest, was du suchst, kontaktiere
        uns unter 
        <p><a href="mailto:info@reiches-leben.com" className="text-web underline">info@reiches-leben.com  </a></p>
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item mb-6">
          <div
            className={`faq-question bg-grund hover:bg-web transition-colors duration-300 p-4 rounded-lg cursor-pointer flex justify-between items-center ${
              openIndex === index ? "border-b border-gray-300" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.title}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer bg-gray-100 p-4 mt-2 text-sm rounded-lg">
              {typedText}
            </div>
          )}
        </div>
      ))}

      <div className="relative">
        {/* Scroll-to-Top Button */}
        <button
          onClick={smoothScrollToTop} // Aufruf der Smooth-Scroll-Funktion
          className="absolute bottom-[-20vh] right-5 lg:right-[-20vh] xl:right-[-35vh] rounded-xl p-3 bg-grund text-white font-semibold hover:bg-web transition-all duration-300"
        >
          <SquareArrowUp className="w-6 h-6" /> {/* Icon rechts neben dem Text */}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
