import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionDescription from "../components/SectionDescription";
import SectionPlans from "../components/SectionPlans";
import SectionText from "../components/SectionText";
import SectionThreeText from "../components/SectionThreeText";

export default function PhotovoltaikPrivatkunden() {
  const card1 = {
    title: "Photovoltaik Privatkunden",
    text: [
      "Die Installation einer Photovoltaik-Anlage ist nicht nur im Gewerbebereich, sondern auch für die meisten Privathaushalte eine effiziente Lösung, um Energiekosten zu sparen. Denn auch, wenn die Kosten anfangs vergleichsweise hoch sind - langfristig gesehen ist selbst produzierte Energie deutlich günstiger.",
    ],
    name_btn: "Solarfachberatung anfordern",
    direction: true,
    path: "/images/7.webp",
    redirectTo: "/kontakt",
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

      <SectionDescription title={name} data={data} btn={true} />

      <div className="lg:my-20 md:my-14 my-10">
        <SectionText
          title="DIE PHOTOVOLTAIKANLAGE - IHRE EIGENE ENERGIEQUELLE"
          text={[
            "In Zeiten, in denen Klimaschutz und besonders nachhaltige, unabhängige Methoden der Energiegewinnung immer wichtiger werden, ist das Umsteigen auf eine Photovoltaikanlage ein großer Schritt in Richtung einer grünen Zukunft. Mithilfe von Sonnenenergie, einer der klimafreundlichsten Ressourcen, können Sie Strom und Wärme erzeugen und sich so von den großen Energieversorgern und den steigenden Preisen unabhängig machen. Außerdem leisten Sie mit der Installation einer eigenen PV-Anlage einen Beitrag zur Energiewende - nachhaltige Energieerzeugung ist also nicht nur für Sie, sondern auch für die Natur ein wichtiger Punkt.",
          ]}
        />
      </div>

      <SectionThreeText />

      <div className="lg:mt-20 md:mt-14 my-10">
        <SectionPlans />
      </div>
      <Footer />
    </div>
  );
}
