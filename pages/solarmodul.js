import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SectionText from "../components/SectionText";
import SectionThreeText from "../components/SectionThreeText";
import SectionPlans from "../components/SectionPlans";

export default function Solarmodul() {
  const title = "DIE PHOTOVOLTAIKANLAGE - IHRE EIGENE ENERGIEQUELLE";
  const text = [
    "In Zeiten, in denen Klimaschutz und besonders nachhaltige, unabhängige Methoden der Energiegewinnung immer wichtiger werden, ist das Umsteigen auf eine Photovoltaikanlage ein großer Schritt in Richtung einer grünen Zukunft. Mithilfe von Sonnenenergie, einer der klimafreundlichsten Ressourcen, können Sie Strom und Wärme erzeugen und sich so von den großen Energieversorgern und den steigenden Preisen unabhängig machen. Außerdem leisten Sie mit der Installation einer eigenen PV-Anlage einen Beitrag zur Energiewende - nachhaltige Energieerzeugung ist also nicht nur für Sie, sondern auch für die Natur ein wichtiger Punkt. ",
  ];
  const card1 = {
    title: "PHOTOVOLTAIK",
    text: [
      "Alle Solaranlagen werden von unseren kompetenten Montagepartnern gebaut und bei unseren Kunden installiert.",
    ],
    direction: false,
    path: "/images/11.webp",
  };

  const card2 = {
    title: "PHOTOVOLTAIK-WISSEN",
    text: [
      "Sie wollen noch mehr über Photovoltaik wissen oder immer auf dem neuesten Stand sein, wenn es um aktuelle Themen in diesem Bereich geht? Dann können Sie sich hier genauer über die Energielösungen von FE Energiesysteme informieren.",
    ],
    direction: true,
    path: "/images/4.webp",
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Card {...card1} />
      <div className="my-20">
        <SectionText title={title} text={text} />
      </div>
      <SectionThreeText />

      <div className="mt-20">
        <SectionPlans />
      </div>
      <Card {...card2} />
      <Footer />
    </div>
  );
}
