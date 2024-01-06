const curentDate = new Date();
const date = new Date("2023-04-01");

export const team = [
  {
    name:
      curentDate.getTime() < date.getTime() ? "Mathis Thoden" : "Jörg Behrens",
    occupation: "‑CEO | Geschäftsführer‑",
    cell: "0421 6485230",
    email: "info@fe-energiesysteme.de",
    src: "/images/Jörg Behrens.jpg",
  },
  // {
  //   name: "Jörg Behrens",
  //   occupation: "‑COO | Geschäftsführer‑",
  //   cell: "0421 6485230",
  //   email: "info@fe-energiesysteme.de",
  //   src: "/images/notimage.webp",
  // },
  // {
  //   name: "Johanna Fersch",
  //   occupation: "-Leitung Personal-",
  //   cell: "0421 6485230",
  //   email: "bewerbungen@fe-energiesysteme.de",
  //   src: "/images/notimage.webp",
  // },
  {
    name: "Maurice Blum",
    occupation: "-Abteilungsleiter DC-",
    cell: "0421 6485230",
    email: "dc-montage@fe-energiesysteme.de",
    src: "/images/Maurice Blum.jpg",
  },
  // {
  //   name: "Pia Scheidereiter",
  //   occupation: "-Leitung AC Montage-",
  //   cell: "0421 6485230",
  //   email: "ac-montage@fe-energiesysteme.de",

  //   src: "/images/notimage.webp",
  // },
  // {
  //   name: "Tatjana Hera",
  //   occupation: "-Leitung Netzanmeldung-",
  //   cell: "0421 6485230",
  //   email: "netzanmeldung@fe-energiesysteme.de",

  //   src: "/images/notimage.webp",
  // },
  {
    name: "Boris Schwitters",
    occupation: "-Abteilungsleiter AC-",
    cell: "0421 6485230",
    email: "reklamationen@fe-energiesysteme.de",

    src: "/images/Boris Schwitters.jpg", //
  },
  // {
  //   name: "Robin Brede",
  //   occupation: "-Leitung Technischer Support-",
  //   cell: "0421 6485230",
  //   email: "info@fe-energiesysteme.de",

  //   src: "/images/notimage.webp",
  // },
  {
    name: " Jana Rabzewitsch",
    occupation: "-Manager Human Resources / Recruiting-",
    cell: "+49 1741854862",
    email: "j.rabzewitsch@fe-energiesysteme.de",

    src: "/images/JanaBea.jpg",
  },
];
