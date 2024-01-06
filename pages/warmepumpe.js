import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Warmepumpe() {
  const card1 = {
    title: "Eine Wärmepumpe - was ist das und wie funktioniert sie?",
    text: [
      "Wärmepumpen sind ein effizienter und umweltschonender Weg, Ihre Heizung zu betreiben. Außerdem helfen Sie bei der Warmwasseraufbereitung und können bei heißem Wetter für das Kühlen der Wohnräume genutzt werden. Die dafür nötige Energie wird über Luft, das Grundwasser oder die Erde gewonnen - somit sind die notwendigen Ressourcen allesamt natürlich, grenzenlos verfügbar und mit keinen Kosten verbunden. Weil die benötigte Antriebsenergie nur ein Viertel des Stromes benötigt, gilt diese Art der Wärmeerzeugung als besonders klimaschonend und wird vom Staat mit einer Förderung von bis zu 50% bezuschusst.",
    ],
    direction: true,
    path: "/images/10.webp",
  };
  const card2 = {
    title: "Kann auch ich eine Wärmpepumpe nutzen?",
    text: [
      "Besonders in älteren Immobilien wird häufig mit Radiatoren geheizt. Sollen diese Immobilien modernisiert werden, müssen die hohen Vorlauftemperaturen der Radiatoren mit einbezogen werden. Die Luft/Wasser-Wärmepumpen, die von unseren Montagepartnern verbaut werden, erreichen im Wärmepumpenbetrieb Vorlauftemperaturen von bis zu 75°C. Also ist auch der Betrieb von älteren Systemen mit Radiatoren mit einer Wärmepumpe möglich und in den meisten Fällen eine effiziente Methode, ihr Heizsystem zu verbessern. ",
    ],
    direction: false,
    path: "/images/3.webp",
  };
  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <Card {...card1} />

      <div className="lg:my-20 md:my-14">
        <Card {...card2} />
      </div>
      <Footer />
    </div>
  );
}
