import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SectionDescription from "../components/SectionDescription";
import SectionPlans from "../components/SectionPlans";

export default function PhotovoltaikGewerbekunden() {
  const card1 = {
    title: "Photovoltaik für Gewerbekunden",
    text: [
      "Wenn Sie ein Unternehmen führen und dabei nicht nur für Sie und Ihre Kunden, sondern auch für die Erhaltung unserer Umwelt eine Photovoltaik-Lösung in Betracht ziehen, sind Sie bei uns richtig. Die Vorteile? Nicht nur eine große Einsparung bei Ihren Energiekosten, sondern auch ein geringerer CO²-Ausstoß und ein wichtiger Beitrag zum Klimaschutz.",
    ],
    direction: false,
    path: "/images/3.webp",
  };

  const name = "PHOTOVOLTAIKLÖSUNGEN FÜR GEWERBEKUNDEN";
  const data = [
    {
      titulo: "MACHEN SIE IHR UNTERNEHMEN EIN BISSCHEN GRÜNER",
      text: [
        "Umweltschonende Methoden, Energie zu erzeugen, können nicht nur bei Privathäusern, sondern auch bei Gewerbeimmobilien einen Unterschied machen. Wir stehen Ihnen als Experten für PV-Anlagen, aber auch für fortschrittliche e-Mobilität und Ladestationen für e-Fahrzeuge zur Seite und übernehmen Planung und Vermittlung an professionelle Montagepartner. So konnten schon viele Aufträge zur Zufriedenheit unserer Kunden ausgeführt und die Gewerbeimmobilien ein bedeutendes Stück umweltfreundlicher gemacht werden. Sollten also auch Sie eine Investition in eine PV-Anlage für Ihr Unternehmen in Betracht ziehen, können Sie gern einen Termin für ein persönliches Gespräch mit unseren Spezialisten für Gewerbeanlagen vereinbaren.",
      ],
    },
    {
      titulo:
        "IST EINE INVESTITION IN EINE PV-ANLAGE FÜR IHR UNTERNEHMEN SINNVOLL?",
      text: [
        "Die Strom- und Energiekosten steigen, besonders derzeit, nahezu täglich. Und das gilt natürlich nicht nur für Privathaushalte, sondern auch für Unternehmen. Aktuell wachsen die Energiekosten für so gut wie alle Gewerbetreibenden und werden besonders für die Firmen, die einen hohen Bedarf an Energie haben, zur Herausforderung. Parallel dazu sind sich Politik und Bevölkerung einig, dass der Ausstieg aus Methoden der fossilen Energiegewinnung wie Kohle- oder Atomkraft unabdingbar ist, um dem Klimawandel entgegenzuwirken.",
        "Dementsprechend führt auch in der Firmenlandschaft kein Weg an nachhaltigeren Arten der Energieerzeugung vorbei. Besonders im Hinblick auf die Kosteneinsparung ist der Umstieg auf eine nachhaltige und effiziente Photovoltaikanlage eine gute Wahl. Sollten auch Sie ein Gewerbe betreiben und nach einer Möglichkeit suchen, Ihren Strom auf eine umweltfreundliche Art und Weise zu produzieren, sind Sie bei uns und unseren Spezialisten im Bereich Gewerbeberatung genau richtig!",
      ],
    },
  ];

  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <Card {...card1} />
      <SectionDescription title={name} data={data} />
      <SectionPlans />
      <Footer />
    </div>
  );
}
