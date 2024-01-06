import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionDescription from "../components/SectionDescription";
import SectionText from "../components/SectionText";
import SectionThreeText from "../components/SectionThreeText";

export default function Batteriespeicher() {
  const card1 = {
    title:
      "Dank Batteriespeicher einen weiteren Schritt in Richtung Unabhängigkeit",
    text: [
      "Mit einem auf Lithium-Ionen-Technik basierenden Batteriespeicher sind Sie auf Alles vorbereitet: Abhängig von der Kapazität können Sie zwischen 5 und 15 Kilowattstunden Strom speichern, um ihn später nutzen zu können, egal ob zum Heizen oder zum Aufladen technischer Geräte. ",
      "Besonders im Sommer wird häufig mehr Strom produziert als benötigt wird - diesen können Sie nicht nur jederzeit, sondern auch im Winter noch nutzen, wenn Sie Ihren Strom nicht nur in Ihrem Batteriespeicher, sondern in der virtuellen Cloud unseres Premium-Partners SENEC speichern.",
      `"Gerne informieren wir Sie unverbindlich über unsere Energielösungen."`,
    ],
    name_btn: "Jetzt Termin anfragen",
    direction: true,
    path: "/images/8.webp",
    redirectTo: "/kontakt",
  };

  const card2 = {
    title: "Ihr autarkes Zuhause",
    text: [
      "Durch die Möglichkeit, Ihre erzeugte Energie in der Cloud zu speichern, profitieren Sie auch Monate später noch davon. So werden Sie vollkommen unabhängig, was Stromerzeugung angeht.",
      "Im Sommer für den Winter vorsorgen: Mit einem Batteriespeicher und der Cloud können Sie Strom vorproduzieren, um diesen dann im Winter nutzen zu können. So sorgen Sie in den warmen Monaten für die nötige Energie, um auch in der kalten Jahreszeit immer ein warmes Zuhause zu haben.",
      "Mithilfe der Cloud können Sie Ihren selbsterzeugten Strom nutzen, wann Sie wollen. So sind Sie nicht mehr auf externen Strom angewiesen und können von einem autarken Lebensstil profitieren, der nicht nur ihr Portemonnaie, sondern auch das Klima schont.",
    ],

    direction: false,

    path: "/images/9.webp",
  };

  // const card3 = {
  //   title: "Auch im Winter Wärme durch selbst produzierten Strom",
  //   text: [

  //   ],
  //   direction: true,
  //   path: "/images/10.webp",
  // };

  // const card4 = {
  //   title: "Dank der Cloud unabhängig und klimafreundlich",
  //   text: [

  //   ],
  //   direction: false,
  //   path: "/images/11.webp",
  // };

  const card5 = {
    title: "PHOTOVOLTAIK-WISSEN",
    text: [
      "Sie wollen noch mehr über Photovoltaik wissen oder immer auf dem neuesten Stand sein, wenn es um aktuelle Themen in diesem Bereich geht? Dann können Sie sich hier genauer über die Energielösungen von FE Energiesysteme informieren.",
    ],
    direction: true,
    name_btn: "Jetzt mehr erfahren",
    toFaq: true,
    path: "/images/4.webp",
  };

  const name = "Unser Plan - Ihre Energielösung!";
  const data = [
    {
      text: [
        "Mit den Photovoltaikanlagen unserer Partner produzieren Sie Energie mithilfe von Sonnenlicht - und das ist meist so viel, dass es den Bedarf des eigenen Haushalts übersteigt und ein Teil des erzeugten Stroms verloren geht. Der effizientere Weg ist daher eine PV-Anlage mit Batteriespeicher, um Ihre erzeugte Energie ganz nach Bedarf nutzen zu können. So profitieren Sie langfristig von den Vorteilen einer autarken Stromversorgung. ",
      ],
    },
    {
      titulo: "MEHR EFFIZIENZ MIT EINEM BATTERIESPEICHER",
      text: [
        "Der Speicher macht bei einer Solaranlage den entscheidenden Unterschied: Abhängig von der Kapazität können Sie zwischen 5 und 15 Kilowattstunden Strom speichern, um ihn später nutzen zu können - egal ob zum Heizen oder zum Aufladen technischer Geräte.",
      ],
    },
    {
      text: [
        "An den Kosten der Solaranlage selbst ändert sich im Grunde nichts - die Kosten für den Speicher werden individuell ermittelt und sind abhängig von Dachgröße und Verbrauch des Kunden. ",
        "Im Durchschnitt beträgt der Preis 600 bis 1.900€ pro kWh Speicherkapazität, abhängig von Modell und Speicherkapazität. Der durchschnittliche Haushalt nutzt Batterien, die eine Kapazität von ca. 8 kWh haben. Diese Kosten rentieren sich jedoch schnell: Ihr Eigenverbrauch wird durch eine Aufrüstung auf bis zu 75% angehoben, sodass Sie langfristig Energiekosten einsparen. ",
      ],
    },
    {
      text: [
        "Wenn Sie die Neuanschaffung einer PV-Anlage in Betracht ziehen, dann ist es sinnvoll, im Zuge dessen direkt auch einen Batteriespeicher mit einzuplanen. Denn durch die Unabhängigkeit von externen Anbietern und die effiziente Nutzung Ihres selbst produzierten Stroms haben sich die Kosten für die Anlage nach Ablauf ihrer Lebensdauer bereits refinanziert. Wir stellen Ihnen die Vorteile einer Photovoltaikanlage mit Batteriespeicher gerne in einem Gespräch mit unseren Beratern vor!",
      ],
    },
  ];
  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <Card {...card1} />

      <div className="lg:my-20 md:my-14">
        <Card {...card2} />
      </div>
      {/* <div className="lg:my-20 md:my-14">
        <Card {...card3} />
      </div>
      <div className="mt-20">
        <Card {...card4} />
      </div> */}
      <SectionDescription title={name} data={data} />
      <div className="lg:mb-20 md:mb-14 mb-10">
        <SectionText
          title="DIE PHOTOVOLTAIKANLAGE - IHRE EIGENE ENERGIEQUELLE"
          text={[
            "In Zeiten, in denen Klimaschutz und besonders nachhaltige, unabhängige Methoden der Energiegewinnung immer wichtiger werden, ist das Umsteigen auf eine Photovoltaikanlage ein großer Schritt in Richtung einer grünen Zukunft. Mithilfe von Sonnenenergie, einer der klimafreundlichsten Ressourcen, können Sie Strom und Wärme erzeugen und sich so von den großen Energieversorgern und den steigenden Preisen unabhängig machen. Außerdem leisten Sie mit der Installation einer eigenen PV-Anlage einen Beitrag zur Energiewende - nachhaltige Energieerzeugung ist also nicht nur für Sie, sondern auch für die Natur ein wichtiger Punkt.",
          ]}
        />
      </div>

      <SectionThreeText />

      <div className="lg:my-20 md:my-14">
        <Card {...card5} />
      </div>
      <Footer />
    </div>
  );
}
