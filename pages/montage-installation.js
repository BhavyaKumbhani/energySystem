import React from "react";
import BannerMain from "../components/BannerMain";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionPlans from "../components/SectionPlans";
import SectionServices from "../components/SectionServices";

export default function MontageInstallation() {
  const titleMain = "Montage & PV-Installation";
  const textMain =
    "Sie wollen auf ein passives Netz umsteigen? Dann unterstützen wir Sie bei der Planung und vermitteln Ihnen professionelle und zuverlässige Montagepartner für ihr Vorhaben. Außerdem bieten wir Ihnen im Feld unserer Lösungen für Gewerbekunden die aktuellsten und hochwertigsten  für eine grüne Stromproduktion. ";

  const card1 = {
    title: "DER VITAMIN-D BOOST FÜR IHR DACH",
    text: [
      "Um Ihre Photovoltaik-Anlage möglichst effizient nutzen zu können, ist die optimale Dachbelegung und die korrekte Ausrichtung der Solarmodule besonders wichtig. Zur richtigen Dachbelegung bei Ihnen zu Hause berät unser FE Energiesysteme Team Sie gerne direkt vor Ort!",
    ],
    name_btn: "Solarfachberatung anfordern",
    direction: true,
    path: "/images/5.webp",
    redirectTo: "/kontakt",
  };

  const card2 = {
    title: "Ist Solarenergie bei mir Zuhause möglich?",
    text: [
      "Ob die Installation einer PV-Anlage auf Ihrem Dach möglich ist, hängt von einigen Faktoren ab: Dachneigung und -ausrichtung sowie der Zustand und die verfügbare Fläche spielen eine wichtige Rolle. Wie die Gegebenheiten bei Ihnen sind, prüfen wir und unsere Partner gerne für Sie. ",
    ],
    direction: false,
    path: "/images/6.webp",
  };
  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <BannerMain title={titleMain} text={textMain} />
      <div className="pt-20">
        <div className="mt-20">
          <SectionPlans />
        </div>
        <div className="my-20">
          <Card {...card1} />
        </div>
        <div className="my-14">
          <SectionServices />
        </div>
        <div className="my-20">
          <Card {...card2} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
