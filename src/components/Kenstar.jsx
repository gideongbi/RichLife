import React from 'react';
import profileImage from '../assets/image.png'; // Füge dein Bild hier hinzu
import { HashLink } from 'react-router-hash-link'; // Verwende HashLink für Anker-Links
import { SquareArrowUp } from "lucide-react";

const Kenstar = () => {
  // Smooth Scroll Funktion zum Scrollen nach oben
  const smoothScrollToTop = () => {
    smoothScrollTo(0); // Scrollt nach oben, Zielposition ist 0 (ganz oben) und Dauer ist 1700ms
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

  return (
    <div id="kenstar" className="w-full p-8 lg:p-16 bg-white text-gray-800">
      {/* Bild und Text nebeneinander */}
      <div className="flex flex-col lg:flex-row items-start mb-12">
        {/* Linkes Bild (kreisrund) */}
        <div className="w-full lg:w-1/3 flex flex-col items-center mb-6 lg:mb-0 pt-20">
          <img
            src={profileImage}
            alt="Profilbild"
            className="rounded-full w-auto h-[35vh] object-cover shadow-lg"
          />
          
          {/* Bibelvers */}
          <div className="lg:mt-8 text-center lg:text-left lg:w-full">
            <p className="text-xl text-center font-semibold text-gray-700 leading-relaxed mt-8 lg:mt-0">
              "Wer nachlässig arbeitet, wird arm; fleißige Hände aber bringen Reichtum."
            </p>
            <p className="text-lg text-center font-light italic text-gray-500 mt-2">
              Sprüche 10:4 HFA
            </p>
          </div>
        </div>

        {/* Rechter Text */}
        <div className="w-full lg:w-2/3 lg:pl-8 pt-20">
          <h1 className="text-4xl font-bold mb-8 text-web">Wer ich bin?</h1>
          <p className="text-lg leading-8 mb-6">
            Ich bin nur ein Mann mit einer von Gott gegebenen Vision. Einer Vision, die ich gerne mit dir teilen möchte. Auf dieser Seite erfährst du, was hinter dieser Vision steckt und wie sie auch dein Leben verändern kann. Hast du einen Moment Zeit, um dir das anzuhören?
          </p>
          <p className="text-lg leading-8 mb-6">
            Wenn du jetzt noch hier bist, freut mich das sehr, denn ich verspreche dir, dass die nächsten Minuten keine verschwendete Zeit sein werden. Stattdessen erhältst du einen tiefen Einblick in meine Arbeit und wie wir gemeinsam dein Leben in eine völlig neue Richtung lenken können.
          </p>
        </div>
      </div>

      {/* Weiterer Text nach dem Bild und Textbereich */}
      <h2 className="text-3xl font-semibold mb-6 text-web">Worum geht es bei „Rich Life“?</h2>
      <p className="text-lg leading-8 mb-6">
        Ganz einfach: Es geht darum, groß zu träumen und keine Grenzen zu akzeptieren! Viele von uns sind tagtäglich von Menschen umgeben, die uns – oft unbewusst – klein halten wollen. Sie sagen Dinge wie: „Das wird nicht funktionieren, das hat schon jemand versucht“ oder „Bleib lieber auf der sicheren Seite, Risiken sollte man vermeiden.“ Diese Worte mögen gut gemeint sein, aber sie wirken wie unsichtbare Barrieren, die uns daran hindern, unser volles Potenzial zu entfalten.
      </p>
      <p className="text-lg leading-8 mb-6">
        Meine Vision mit „Rich Life“ ist es, diese Barrieren gemeinsam mit dir zu durchbrechen. Ich möchte dir dabei helfen, dein volles Potenzial zu erkennen und zu nutzen – ohne Limits und ohne Einschränkungen.
      </p>
      <p className="text-lg leading-8 mb-6">
        Das Fundament, auf dem wir gemeinsam bauen, besteht aus einer stabilen finanziellen Grundlage, Glauben und dem stetigen Wachstum deiner Persönlichkeit. Denn ein reiches Leben bedeutet mehr als nur finanziellen Wohlstand… Es geht darum, in allen Lebensbereichen erfüllt zu sein und ein Leben zu führen, das du selbst gestaltest.
      </p>

      <h2 className="text-3xl font-semibold mb-6 text-web">Mein Angebot an dich</h2>
      <p className="text-lg leading-8 mb-6">
        Mein Angebot ist klar: Lass uns gemeinsam dein persönliches, reiches Leben gestalten. Wir werden nicht nur dein finanzielles Wissen und deine finanzielle Lage verbessern, sondern auch eine klare Vision erarbeiten, die dir hilft, das Leben zu leben, das du dir immer gewünscht hast.
      </p>

      <h2 className="text-3xl font-semibold mb-6 text-web">Warum bin ich der richtige Ansprechpartner für dich?</h2>
      <p className="text-lg leading-8 mb-6">
        Ich bin mir darüber bewusst, dass ich nicht für jeden die richtige Wahl bin – und das ist auch gut so. Mein Ziel ist es nicht, möglichst viele Menschen zu erreichen, sondern eine ausgewählte Gruppe von maximal 100 Personen. Diese Menschen werde ich mit Bedacht auswählen, um sicherzustellen, dass wir gemeinsam wirklich Großes erreichen können.
      </p>
      <p className="text-lg leading-8 mb-6">
        Für diese 100 Personen verspreche ich eine tiefgreifende Veränderung. Ihr Leben wird sich um 180 Grad drehen, und lang ersehnte Veränderungen werden endlich eintreten!
      </p>
      <p className="text-lg leading-8 mb-6">
        Ich bin bereit für diese Reise. Die Frage ist: Bist du es auch? Wenn du bereit bist, groß zu träumen, mutig zu sein und dein volles Potenzial zu entfalten, dann lass uns gemeinsam diesen Weg gehen. Dein reiches Leben wartet auf dich – und ich freue mich darauf, es mit dir zu gestalten.
      </p>

      {/* Button am Ende */}
      <div className="flex justify-center mt-10">
        <HashLink smooth to="/#Contact">
          <button className="bg-grund text-white px-8 py-4 rounded-full shadow-lg hover:bg-web transition duration-300">
            Starte deine Reise
          </button>
        </HashLink>
      </div>

      {/* Scroll to top button */}
      <div className="relative mt-8">
        <button
          onClick={smoothScrollToTop} // Aufruf der Smooth-Scroll-Funktion
          className="absolute bottom-[-2vh] right-0 xl:right-20 lg:right-30 bg-grund p-3 rounded-lg shadow-lg text-white hover:bg-web transition-all duration-300"
        >
          <SquareArrowUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Kenstar;
