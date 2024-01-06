import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MonstaSlide from "../components/MonstaSlide";

export default function Montagepartner() {
  return (
    <div className="bg-[#EDEDED] relative">
      <Header />
      <Navbar />
      <div className="lg:p-24 md:p-10 py-6 px-4" id="container-montage">
        <h2 className="lg:text-5xl md:text-3xl text-2xl">Montagepartner</h2>
        <p className="lg:my-10 md:my-6 my-4">
          Auf geht’s, lassen Sie uns gemeinsam bauen! Die FE Energiesyteme GmbH
          sucht für Ihr Vorhaben zuverlässige Partner für Montagen auf unseren
          Baustellen unterschiedlichster Formate in ganz Deutschland. Egal, ob
          Sie alleine oder mit Mitarbeitern tätig werden wollen, es findet sich
          sicher ein passendes Projekt. Dabei garantieren wir
          Planungssicherheit, geringen Verwaltungsaufwand und eine zeitnahe
          Vergütung. Haben Sie Interesse? Weitere Informationen erhalten Sie,
          wenn sie überprüfen, ob wir auch in Ihrer Region nach Montagepartnern
          suchen:
        </p>

        <MonstaSlide />
      </div>
      <Footer />
    </div>
  );
}
