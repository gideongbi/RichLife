import React from 'react';

const Legal = () => {
  return (
    <div id='legal' className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Rechtliche Informationen</h1>

      {/* AGB Abschnitt */}
      <div className="mb-8" id='agb'>
        <h3 className="text-lg font-semibold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h3>
        <p className="text-gray-600">
          Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Bedingungen für die Nutzung unserer Dienstleistungen und den Kauf unserer Produkte. Durch den Zugriff auf unsere Website und die Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu. 
          Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Dienste in Anspruch nehmen.
        </p>
      </div>

      {/* Terms of Service Abschnitt */}
      <div className="mb-8" id='tos'>
        <h3 className="text-lg font-semibold mb-4">Nutzungsbedingungen</h3>
        <p className="text-gray-600">
          Unsere Nutzungsbedingungen legen die Regeln und Vorschriften für die Nutzung unserer Website fest. Diese Bedingungen gelten für alle Besucher, Nutzer und andere, die auf unsere Website zugreifen oder unsere Dienste nutzen. 
          Indem Sie auf die Website zugreifen, erklären Sie sich mit diesen Bedingungen einverstanden. 
        </p>
      </div>

      {/* Cookie Policy Abschnitt */}
      <div id='cok'>
        <h3 className="text-lg font-semibold mb-4">Datenschutzerklärung & Cookie-Richtlinie</h3>
        <p className="text-gray-600">
          Diese Richtlinie beschreibt, wie wir Cookies verwenden und welche Informationen wir sammeln, wenn Sie unsere Website besuchen. 
          Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert werden, um Ihre Erfahrung auf unserer Website zu verbessern. 
          Wenn Sie mehr über unsere Verwendung von Cookies erfahren möchten, lesen Sie bitte unsere vollständige Cookie-Richtlinie.
        </p>
      </div>
    </div>
  );
};

export default Legal;
