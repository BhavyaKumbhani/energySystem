import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Ihre Solaranlage - Jetzt kostenloses Angebot anfordern!</title>
        <meta
          name="description"
          content="Profitieren Sie von der Energiewende und gestalten die Zukunft! Erhalten Sie 
heute ein unverbindliches Angebot für Ihre Photovoltaikanlage."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
};

export default Header;
