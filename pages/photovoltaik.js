import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import AccordionItem from "../components/AccordionItem";

export default function Photovoltaik() {
  const card1 = {
    title: "PHOTOVOLTAIK-WISSEN",
    text: [
      "Sie wollen noch mehr über Photovoltaik wissen oder immer auf dem neuesten Stand sein, wenn es um aktuelle Themen in diesem Bereich geht? Dann können Sie sich hier genauer über die Energielösungen von FE Energiesysteme informieren. ",
    ],
    direction: true,
    path: "/images/photovoltaik.webp",
  };

  const card2 = {
    title: "DER VITAMIN-D BOOST FÜR IHR DACH",
    text: [
      "Um Ihre Photovoltaik-Anlage möglichst effizient nutzen zu können, ist die optimale Dachbelegung und die korrekte Ausrichtung der Solarmodule besonders wichtig. Zur richtigen Dachbelegung bei Ihnen zu Hause berät unser FE Energiesysteme Team Sie gerne direkt vor Ort!",
    ],
    direction: false,
    name_btn: "Solarfachberatung anfordern",
    path: "/images/11.webp",
    redirectTo: "/kontakt",
  };

  const accordionData = [
    {
      title:
        "Bietet mein Dach die Voraussetzungen für eine Photovoltaikanlage?",
      text:
        "Eine Photovoltaikanlage kann prinzipiell auf fast jedem Dach installiert werden - bestimmte Faktoren wie Neigung und Ausrichtung können allerdings für eine noch größere Effizienz sorgen. FE Energiesysteme und unsere Partner beraten Sie dahingehend gerne und erstellen Ihnen ein Angebot, das die Effizienz und finanziellen Vorteile einer PV-Anlage auf Ihrem Dach zeigt. ",
    },
    {
      title: "Ist eine Investition in Photovoltaik sinnvoll?",
      text:
        "Dolore tempor eu nulla sit qui do pariatur anim dolor aliquip mollit labore veniam. Anim est amet culpa velit duis ea nostrud ipsum. Cupidatat dolore anim tempor adipisicing voluptate. Aliquip eiusmod laboris cillum tempor quis officia do enim.",
    },
    {
      title: "Ist eine Versicherung meiner PV-Anlage möglich?",
      text:
        "Exercitation eu proident qui est id nulla velit exercitation velit voluptate tempor. Qui amet esse exercitation ut elit dolore exercitation excepteur pariatur. Sint veniam dolore excepteur nostrud ex mollit commodo magna ex. Est laboris aliqua dolor adipisicing deserunt non incididunt Lorem fugiat cupidatat. Adipisicing amet dolor amet exercitation qui irure ad irure non sint id ea consequat est. Deserunt minim laboris dolore eu enim fugiat amet incididunt nisi nulla.",
    },
    {
      title: "Wie lange hält und funktioniert eine Photovoltaikanlage?",
      text:
        "Cillum ut nulla laboris ex veniam consequat aute mollit eiusmod eu duis fugiat ipsum. Dolore exercitation sint et excepteur est ullamco veniam est aliquip nostrud. Et et magna aute ullamco tempor excepteur aliquip cillum fugiat aliqua culpa aliqua commodo. Incididunt est deserunt amet cupidatat fugiat esse quis ad qui.",
    },
  ];

  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <Card {...card1} />

      <div className="my-20">
        <Card {...card2} />
      </div>
      <div className="flex flex-col items-center lg:max-w-[60rem] mx-auto mb-20">
        <h2 className="text-lg">FAQ - HÄUFIG GESTELLTE FRAGEN</h2>
        <h2 className="lg:text-5xl text-center mb-10 ">
          Sie wünschen sich für Ihr Zuhause eine Photovoltaikanlage?
        </h2>
        {accordionData.map((el, index) => {
          return (
            <div className="my-3 flex" key={index}>
              <AccordionItem {...el} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
