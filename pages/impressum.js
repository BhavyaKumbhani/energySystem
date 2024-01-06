import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Impressum() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="lg:pt-20 md:pt-10 lg:pb-20 md:pb-10 lg:px-20 md:px-10 px-4 py-8">
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <strong>
            <span
              style={{
                fontSize: "24px",

                color: "black",
              }}>
              Impressum
            </span>
          </strong>
        </p>
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <strong>
            <span
              style={{
                color: "black",
              }}>
              FE Energiesysteme GmbH
            </span>
          </strong>
        </p>
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <span style={{ color: "black" }}>
            Margarete-Steiff-Allee 10
            <br />
            28832 Achim
          </span>
          <strong>
            <span
              style={{
                color: "black",
              }}>
              <br />
            </span>
          </strong>
          <span
            style={{
              color: "black",
            }}>
            <br />
            <br />
            Registergericht: Amtsgericht Bremen
            <br />
            HRB-Nr. 37284
            <br />
            USt.-Ident.-Nr. DE
          </span>
          <span
            style={{
              color: "black",
            }}>
            346905002
            <br />
          </span>
          <span
            style={{
              color: "black",
            }}>
            <br />
            E-Mail:{" "}
            <a href="mailto:impressum@fe-energiesysteme.de">
              impressum@fe-energiesysteme.de
            </a>{" "}
            <br />
            Telefon:
          </span>
          
          <span
            style={{
              fontSize: "15px",

              color: "black",
            }}>
            <a href="tel:+49 (0) 421 6485230">+49 (0) 421 6485230</a>
          </span>
        </p>
        <p>
        <span
            style={{
              color: "black",
            }}>
            <br />
            Vertreten durch die Geschäftsführung
            
            <br />
            Jörg Behrens
          </span>
        </p>
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <span
            style={{
              color: "black",
            }}>
            <br />
          </span>
        </p>
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <strong>
            <span
              style={{
                color: "black",
              }}>
              Verbraucherinformation gemäß Verordnung EU Nr. 524/2013
            </span>
          </strong>
          <span
            style={{
              color: "black",
            }}>
            <br />
            <br />
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter
          </span>
          <a
            href="https://www.porsche.com/germany/exit/?exit=yjbL0QxNdOEz5RxNII908LCGuhWKIuDaxofNS79j1CJQaauCUlLOoQ%3D%3D"
            target="_blank"
            rel="noreferrer">
            <span
              style={{
                color: "black",
              }}>
              http://ec.europa.eu/consumers/odr/
            </span>
          </a>
          <span
            style={{
              color: "black",
            }}>
            <br />
            <br />
            Unsere Email-Adresse lautet: impressum@fe-energiesysteme.de
          </span>
        </p>
        <p
          style={{
            margin: "0in",
            fontSize: "16px",
          }}>
          <span
            style={{
              color: "black",
            }}>
            <br />{" "}
            <strong>
              Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
            </strong>
            <br />
            <br />
            Die FE Energiesysteme GmbH sind nicht bereit und verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
            <br />
            <br /> <strong>Rechtlicher Hinweis</strong>
            <br />
            <br />
            Die Texte, Bilder, Grafiken, Animationen, Video- und Audiodateien
            sowie alle weiteren Inhalte auf dieser Webseite unterliegen den
            gesetzlichen Bestimmungen des Urheberrechts und ggf. weiteren
            Rechten des geistigen Eigentums. Der geschützte Inhalt dieser
            Webseite darf ohne Einwilligung des Rechtsinhabers nicht
            vervielfältigt, verbreitet, wiedergegeben, öffentlich zugänglich
            gemacht oder sonst verwertet werden. <br />
            <br />
            Änderungen von Konstruktion, Ausstattung und Lieferumfang sowie
            Abweichungen im Farbton sowie Irrtümer bleiben vorbehalten. Alle
            angegebenen Preise sind unverbindlich.
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
