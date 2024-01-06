import AccordionItem from "../components/AccordionItem";
import BannerMain from "../components/BannerMain";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionKwh from "../components/SectionKwh";
import SectionPlans from "../components/SectionPlans";
import SectionText from "../components/SectionText";
import SectionThreeText from "../components/SectionThreeText";
import { useRouter } from "next/router";
import { useRef, useEffect, useContext } from "react";
import AppContext from "../Context/AppContext";

export default function Home() {
  const router = useRouter();
  const FAQ = useRef(null);
  const { sectionName, setSectionName } = useContext(AppContext);

  useEffect(() => {
    if (sectionName != "home") {
      if (sectionName == "faq") {
        const timin = setTimeout(() => {
          if (FAQ.current.classList.contains("-translate-y-[10rem]")) {
            FAQ.current.classList.remove("-translate-y-[10rem]");
          }
          FAQ.current.classList.add("-translate-y-[14.5rem]");
          FAQ.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          setSectionName("home");
          FAQ.current.classList.add("-translate-y-[10rem]");
          if (FAQ.current.classList.contains("-translate-y-[15rem]")) {
            FAQ.current.classList.remove("-translate-y-[14.5rem]");
          }
        }, 200);

        return () => {
          clearTimeout(timin);
        };
      }
    }
  }, [sectionName]);

  const data = [
    {
      title: "Photovoltaik für Gewerbekunden",
      text: [
        "Wenn Sie ein Unternehmen führen und dabei nicht nur für Sie und Ihre Kunden, sondern auch für die Erhaltung unserer Umwelt eine Photovoltaik-Lösung in Betracht ziehen, sind Sie bei uns richtig. Die Vorteile? Nicht nur eine große Einsparung bei Ihren Energiekosten, sondern auch ein geringerer CO²-Ausstoß und ein wichtiger Beitrag zum Klimaschutz. ",
      ],
      name_btn: "Solarfachberatung anfordern",
      direction: false,
      path: "/images/12.png",
      redirectTo: "/kontakt",
    },
    {
      title: "Batteriespeicher",
      text: [
        "Mit einem auf Lithium-Ionen-Technik basierenden Batteriespeicher sind Sie auf Alles vorbereitet: Abhängig von der Kapazität können Sie zwischen 5 und 15 Kilowattstunden Strom speichern, um ihn später nutzen zu können, egal ob zum Heizen oder zum Aufladen technischer Geräte. ",
        "Besonders im Sommer wird häufig mehr Strom produziert als benötigt wird - diesen können Sie nicht nur jederzeit, sondern auch im Winter noch nutzen, wenn Sie Ihren Strom nicht nur in Ihrem Batteriespeicher, sondern in der virtuellen Cloud unseres Premium-Partners SENEC speichern. ",
      ],
      name_btn: "Solarfachberatung anfordern ",
      direction: true,
      path: "/images/2.webp",
      redirectTo: "/kontakt",
    },
    {
      title: "CLOUD-LÖSUNG",
      text: [
        "Besonders im Sommer wird häufig mehr Strom produziert als benötigt wird - diesen können Sie nicht nur jederzeit, sondern auch im Winter noch nutzen, wenn Sie Ihren Strom nicht nur in Ihrem Batteriespeicher, sondern in der virtuellen Cloud unseres Premium-Partners SENEC speichern.",
        "SENEC springt dann ein, wenn ihr eigener Batteriespeicher voll ist  - denn besonders im Sommer passiert es schnell, dass der Speicher an seine Grenzen kommt. Sobald dieser Zustand erreicht ist, wird der überschüssige Strom als virtuelles Guthaben in Ihrer Cloud gespeichert. Dieses Guthaben können Sie dann zu einem späteren Zeitpunkt nutzen, beispielsweise in den dunklen Wintermonaten, wenn Ihr selbst produzierter Strom nicht mehr ausreicht, um Ihren Bedarf zu decken.",
      ],
      direction: false,
      path: "/images/Vector 20.png",
    },
    {
      title: "PHOTOVOLTAIK",
      text: [
        "Die von uns verbauten Solaranlagen werden von unserem Partner Ampere bereitgestellt. Die Anlage wird mit sogenannten Premium Doppelglas-Modulen verbaut, die eine Reihe von Vorteilen mit sich bringen. Durch moderne und effiziente Halbzellen werden Leistungseinschränkungen durch äußere Umstände wie Verschattung reduziert. Außerdem können die Doppelglas-Module sowohl über die Vorder- als auch über die Rückseite Sonneneinstrahlung aufnehmen und so Mehrerträge von bis zu 30% erzeugen, die auch bifaziale Stromausbeute genannt werden. Und das lohnt sich: Mit den Solarmodulen unseres Partners werden Ihnen 28% mehr Leistung über 30 Jahre garantiert.",
        "Wenn Sie noch mehr über die Doppelglas-Module erfahren wollen, können Sie sich hier informieren.",
      ],
      name_btn: "Solarfachberatung anfordern ",
      direction: true,
      path: "/images/3.png",
      redirectTo: "/kontakt",
    },
  ];

  const title = "DIE PHOTOVOLTAIKANLAGE - IHRE EIGENE ENERGIEQUELLE";
  const text = [
    "In Zeiten, in denen Klimaschutz und besonders nachhaltige, unabhängige Methoden der Energiegewinnung immer wichtiger werden, ist das Umsteigen auf eine Photovoltaikanlage ein großer Schritt in Richtung einer grünen Zukunft. Mithilfe von Sonnenenergie, einer der klimafreundlichsten Ressourcen, können Sie Strom und Wärme erzeugen und sich so von den großen Energieversorgern und den steigenden Preisen unabhängig machen. Außerdem leisten Sie mit der Installation einer eigenen PV-Anlage einen Beitrag zur Energiewende - nachhaltige Energieerzeugung ist also nicht nur für Sie, sondern auch für die Natur ein wichtiger Punkt. ",
  ];

  const accordionData = [
    {
      title:
        "Bietet mein Dach die Voraussetzungen für eine Photovoltaikanlage?",
      text:
        "Eine Photovoltaikanlage kann prinzipiell auf fast jedem Dach installiert werden - bestimmte Faktoren wie Neigung und Ausrichtung können allerdings für eine noch größere Effizienz sorgen. FE Energiesysteme und unsere Partner beraten Sie dahingehend gerne und erstellen Ihnen ein Angebot, das die Effizienz und finanziellen Vorteile einer PV-Anlage auf Ihrem Dach zeigt.",
    },
    {
      title: "Lohnt sich eine Investition in eine Photovoltaikanlage noch?",
      text:
        "Definitiv. Besonders für den Eigenstromverbrauch lohnt sich die Investition in eine PV-Anlage immer - denn dieser ist in der Regel deutlich günstiger als der Strom, den Sie von großen Anbietern kaufen können. Außerdem erhalten Sie über einen Zeitraum von 20 Jahren die Einspeisevergütung für nicht selbst verbrauchten Strom. Sie sparen nicht nur Geld, sondern machen sich auch langfristig unabhängig vom öffentlichen Stromnetz.",
    },
    {
      title: "Muss eine PV-Anlage regelmäßig gereinigt werden?",
      text:
        "Durch die glatte Oberflächenstruktur der Solarmodule werden diese normalerweise durch Regen und Schnee gereinigt - Sie selbst müssen also nichts tun, um Ihre PV-Anlage sauber zu halten.",
    },
    {
      title: "Was ist bei bewölktem Himmel?",
      text:
        "Sollte der Himmel nicht klar sein, ist das kein Problem. Die Photovoltaik-Module nutzen die diffuse Strahlung, die durch die Wolken gelangt, genau so wie direktes Sonnenlicht. Den einzigen Unterschied macht die erzeugte Leistung, denn diese hängt von der Helligkeit ab: Je heller es ist, desto mehr Leistung kann erzeugt werden. In Deutschland macht der diffuse Anteil der Einstrahlung ungefähr die Hälfte der Gesamteinstrahlung aus - Sie können Ihre PV-Anlage also auch hervorragend bei bewölktem Himmel nutzen!",
    },
    {
      title: "Wie lange hält eine Photovoltaikanlage?",
      text:
        "Die Nutzungs- und Lebensdauer einer Photovoltaikanlage liegt zwischen 20 und 40 Jahren. Wie lange genau Sie Ihre Anlage nutzen können, hängt von verschiedenen Faktoren ab: Fachgerechte Planung und Auslegung, Ausführungsqualität der Montage und Elektroinstallation, Wartung und Kontrolle.",
    },
  ];

  const titleMain = "Willkommen bei FE Energiesysteme";
  const textMain = `Sie wollen langfristig unabhängig von großen Stromanbietern sein
  und Ihren eigenen Strom erzeugen, speichern und nutzen? Dann
  unterstützen wir Sie gerne bei der Planung Ihrer eigenen
  Photovoltaikanlage und vermitteln Ihnen professionelle und
  zuverlässige Montagepartner für ihr Vorhaben!`;

  return (
    <div className="bg-[#EDEDED]">
      <Header />
      <Navbar />
      <BannerMain title={titleMain} text={textMain} />
      <div className="lg:pt-40 md:pt-28 lg:pb-20 md:pb-10 lg:px-0 md:px-10 px-4 py-8">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[60%] lg:pl-36">
            <h1 className="lg:text-5xl md:text-3xl text-2xl text-left">
              Produzieren Sie mit unserer Hilfe Ihren eigenen Strom!
            </h1>
            <p className="lg:mt-8 md:mt-4 mt-3">
              Wir sind der Meinung, dass die Art, wie wir unsere Energie
              produzieren, einen großen Einfluss auf den Zustand und die
              Entwicklung unserer Umwelt hat. Während Kohle- und Atomkraftwerke
              schon lange nicht mehr zeitgemäß sind, ist die Nutzung von
              Sonnenlicht zur Energieerzeugung eine klimafreundliche und
              langfristig kostengünstige Alternative - und das nicht nur für
              große Unternehmen, sondern auch für jeden einzelnen
              Privathaushalt. Wir von FE Energiesysteme haben uns auf die
              Montage von effizienten Photovoltaikanlagen und die Installation
              von praktischen Batteriespeichern zur optimalen Nutzung des selbst
              produzierten Stroms spezialisiert, um unseren Beitrag zur
              Energiewende zu leisten. Wir beraten Sie professionell zu den
              verschiedenen Arten von PV-Anlagen und stehen Ihnen bei sämtlichen
              Schritten der Umsetzung mit all unserem Wissen zur Seite.
            </p>
          </div>
          <div className="lg:mt-0 md:mt-8 lg:w-[40%] mt-6 flex lg:flex-col md:flex-row md:flex-wrap flex-col md:space-y-0 space-y-4 md:items-center lg:space-y-6 lg:justify-end md:justify-center">
            <div className="lg:mr-0 md:mr-4">
              <div
                onClick={() => {
                  FAQ.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-blue-1 md:py-3.5 py-3 md:w-[17rem] w-[16rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Photovoltaik Wissen
              </div>
            </div>
            <div className="lg:ml-0 md:ml-4">
              <div
                onClick={() => {
                  router.push("/photovoltaik-privatkunden");
                }}
                className="border border-blue-1 md:py-3.5 py-3 md:w-[17rem] w-[16rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Montage & Installation
              </div>
            </div>
            <div className="lg:mt-0 md:mt-6">
              <div
                onClick={() => {
                  router.push("/kontakt");
                }}
                className="border border-blue-1 md:py-3.5 py-3 md:w-[17rem] w-[16rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Solarfachberatung anfordern
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.map((el, index) => {
        return (
          <div key={index} className="lg:my-20 md:my-10 my-8">
            {index == 0 ? (
              <>
                <Card {...el} />
                <div className="lg:my-14 md:my-10 my-8">
                  <SectionKwh />
                </div>
              </>
            ) : (
              <Card {...el} />
            )}
          </div>
        );
      })}

      <div className="lg:mb-20 md:mb-14 my-8">
        <SectionText title={title} text={text} />
      </div>

      <SectionThreeText />

      <div className="lg:mt-20 md:mt-14 my-8">
        <SectionPlans />
      </div>

      <div className="lg:my-20 md:my-14 my-8">
        <Card
          title="PHOTOVOLTAIK-WISSEN"
          text={[
            "Sie wollen noch mehr über Photovoltaik wissen oder immer auf dem neuesten Stand sein, wenn es um aktuelle Themen in diesem Bereich geht? Dann können Sie sich hier genauer über die Energielösungen von FE Energiesysteme informieren. ",
          ]}
          path="/images/4.webp"
          direction={true}
        />
      </div>

      <div className="flex relative flex-col items-center lg:max-w-[60rem] md:max-w-[40rem] mx-auto lg:mb-20 md:mb-14 px-4 mb-10">
        <div ref={FAQ} className="absolute -z-10 top-0"></div>

        <h2 className="md:text-lg">FAQ - HÄUFIG GESTELLTE FRAGEN</h2>
        <h2 className="lg:text-xl md:text-lg text-lg text-center lg:mb-10 md:mb-8 mb-6">
          Bei der Planung und Anschaffung einer Photovoltaikanlage stellen sich
          in der Regel einige Fragen. Die häufigsten haben wir daher auf dieser
          Seite für Sie zusammengestellt und beantwortet.
        </h2>
        {accordionData.map((el, index) => {
          return (
            <div className="lg:my-3 md:my-2 my-1 flex" key={index}>
              <AccordionItem {...el} />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
