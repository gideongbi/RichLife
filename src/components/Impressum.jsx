import React from "react";

const Impressum = () => {
  return (
    <div className="lg:pl-40 lg:pr-40 impressum-container p-6 pb-20 w-full mx-auto">
      <h1 className="text-3xl font-bold text-center pb-6 mb-6">Impressum</h1>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Angaben gemäß § 5 TMG</h2>
      <p>
        Kenstar Gehle<br />
        Rich Life<br />
        Anschrift auf Anfrage<br />
        DE-28309 Bremen
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Kontakt</h2>
      <p>
        Telefon: +49 (0) 178 846 98 04<br />
        E-Mail: <a href="mailto:info@reiches-leben.com" className="text-web underline">info@reiches-leben.com</a>
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Berufsbezeichnung: Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO<br />
        Zuständige Kammer: Handelskammer Bremen für Bremen und Bremerhaven<br />
        Am Markt 13<br />
        28195 Bremen<br />
        Deutschland
      </p>
      <p>Es gelten folgende berufsrechtliche Regelungen:</p>
      <ul className="list-disc pl-6">
        <li>§ 34d Gewerbeordnung (GewO)</li>
        <li>Versicherungsvermittlungsverordnung (VersVermV)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Angaben zur Berufshaftpflichtversicherung</h2>
      <p>
        Name und Sitz des Versicherers: <strong>[Berufshaftpflichtversicherung UNBEDINGT NOCH BEANTRAGEN!!!]</strong><br />
        Geltungsraum der Versicherung: Deutschland
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Registernummer als Versicherungsmakler</h2>
      <p>
        Registrierungsnummer nach § 34d GewO: <strong>[bitte eintragen]</strong><br />
        Eintrag im Vermittlerregister: <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-web underline">www.vermittlerregister.info</a>
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Aufsichtsbehörde</h2>
      <p>
        Handelskammer Bremen für Bremen und Bremerhaven<br />
        Am Markt 13<br />
        28195 Bremen<br />
        Deutschland
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-web underline">https://ec.europa.eu/consumers/odr/</a>.<br />
        Meine E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="flex justify-center text-2xl font-semibold mt-4 mb-2">Verbraucherstreitbeilegung/ Universalschlichtungsstelle</h2>
      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Eins zu eins Coaching</h2>
      <p>
        Neben meiner Tätigkeit als Versicherungsmakler biete ich ein individuelles eins zu eins Coaching an. Dieses Coaching zielt darauf ab, dir zu helfen, ein stabiles finanzielles Fundament zu schaffen und deine persönliche finanzielle Situation zu optimieren. Die Beratung erfolgt auf einer Eins-zu-Eins-Basis und ist unabhängig von meiner Tätigkeit als Versicherungsmakler.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Haftungsausschluss für Coaching-Dienstleistungen</h2>
      <p>
        Für das eins zu eins Coaching übernehme ich keine Garantie für den Erfolg. Die Teilnahme an der Beratung erfolgt auf eigene Verantwortung des Kunden. Das Coaching dient nicht als Ersatz für eine psychologische oder therapeutische Betreuung.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Beratung und Vergütung im Bereich Versicherungen</h2>
      <p>
        Die Tätigkeit als Versicherungsmakler beinhaltet auch Beratung. Die Vergütung der Versicherungsmaklertätigkeit erfolgt entweder als:
      </p>
      <ul className="list-disc pl-6">
        <li>in den Versicherungsprämien enthaltene Provision (Courtage), die vom jeweiligen Produktanbieter gezahlt wird,</li>
        <li>konkret vereinbarte Zahlung durch den Kunden (Honorarberatung) oder</li>
        <li>eine Kombination aus beidem.</li>
      </ul>
      <p>
        Dies hängt von den Wünschen und Bedürfnissen des Kunden sowie den vermittelten Versicherungs- und Vorsorgeprodukten ab.
      </p>
      <p>
        Der Inhaber hält keine unmittelbaren oder mittelbaren Beteiligungen von mehr als 10 % der Stimmrechte oder des Kapitals an einem Versicherungsunternehmen. Ein Versicherungsunternehmen hält keine mittelbaren oder unmittelbaren Beteiligungen von mehr als 10 % der Stimmrechte oder des Kapitals der Gesellschaft.
      </p>
    </div>
  );
};

export default Impressum;
