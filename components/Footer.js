import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useRouter } from "next/router";

const Footer = () => {
  const social = [
    {
      path: "https://www.facebook.com/FE-Energiesysteme-109833041525474/",
      src: "/images/face.svg",
    },
    {
      path: "https://instagram.com/fe.energiesysteme?utm_medium=copy_link",
      src: "/images/insta.svg",
    },
    {
      path: "https://www.linkedin.com/showcase/fe-energiesysteme-gmbh/",
      src: "/images/linkedin.svg",
    },
  ];
  const router = useRouter();
  const { sectionName, setSectionName } = useContext(AppContext);

  const links = [
    {
      title: "LEISTUNGEN / PRODUKTE",
      links: [
        {
          name: "Lösungen für Privatkunden",
          path: "/photovoltaik-privatkunden",
        },
        {
          name: "Lösungen für Gewerbekunden",
          path: "/photovoltaik-gewerbekunden",
        },
        {
          name: "Luftwärmepumpe",
          path: "/warmepumpe",
        },
        {
          name: "PV Check",
          path: "https://energiesysteme.solar-pvcheck.de",
        },
      ],
    },
    {
      links: [
        {
          name: "Über uns",
          path: "/kontakt",
          section: "uber",
        },
        {
          name: "Ansprechpartner",
          path: "/",
          section: "team",
        },
      ],
    },
  ];
  return (
    <div className="pb-8">
      <div className="bg-blue-1 py-6 lg:p-10 md:py-8 md:px-10 px-4 ">
        <img
          src="/images/logoFooter.webp"
          alt=""
          className="lg:w-60 md:w-56 w-48"
        />
      </div>
      <div className="grid md:grid-cols-3 md:justify-items-center lg:px-24 md:px-10 lg:py-14 md:py-10 gap-x-2 px-10 py-10 md:gap-y-0 gap-y-8">
        <div>
          <p className="lg:mb-4 md:mb-3 font-bold text-lg">
            FE Energiesysteme GmbH
          </p>
          <p>FE Energiesysteme ist Ihr Experte für die Installation </p>
          <p className="lg:my-3 md:my-2 my-1">Ihrer Energielösung. </p>

          <p>
            Lassen Sie sich gerne jederzeit von uns kostenlos und individuell
            beraten.
          </p>

          <div className="lg:mt-5 md:mt-4 mt-2 flex lg:space-x-3 md:space-x-2 md:flex-row flex-col md:space-y-0 space-y-1">
            <Link href="/kontakt">
              <a className="hover:text-blue-1 transition-all ease-in-out duration-100">
                Kontakt
              </a>
            </Link>
            <Link href="/impressum">
              <a className="hover:text-blue-1 transition-all ease-in-out duration-100">
                Impressum
              </a>
            </Link>
            <Link href="/datenschutz">
              <a className="hover:text-blue-1 transition-all ease-in-out duration-100">
                Datenschutz
              </a>
            </Link>
          </div>
          <p className="font-bold lg:my-3 md:my-2 my-1">
            {" "}
            Copyright © 2022 JESAM Consulting GmbH.
          </p>
          <p className="font-bold lg:my-3 md:my-2 my-1">
            Alle Rechte vorbehalten.
          </p>

          <div className="lg:mt-10 md:mt-8 mt-6">
            <p className="font-bold mb-4">Social Media</p>
            <div className="flex lg:space-x-4 md:space-x-3 space-x-2 items-center">
              {social.map((el, index) => {
                return (
                  <Link href={el.path} key={index}>
                    <a>
                      <img src={el.src} alt="" className="w-[1.5rem]" />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:space-y-4 md:space-y-4 space-y-3">
          {links.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col lg:space-y-3 md:space-y-2"
              >
                {el.title ? (
                  <p className="uppercase font-bold">{el.title}</p>
                ) : (
                  ""
                )}
                {el.links.map((link, index) => {
                  return (
                    <div key={index}>
                      {!link.section ? (
                        <Link href={link.path}>
                          <a className="hover:text-blue-1 transition-all ease-in-out duration-100">
                            {link.name}
                          </a>
                        </Link>
                      ) : (
                        <div
                          onClick={() => {
                            router.push("/kontakt");
                            if (link.section == "uber") {
                              setSectionName("uber");
                            } else if (link.section == "team") {
                              setSectionName("team");
                            }
                          }}
                          className="hover:text-blue-1 hover:cursor-pointer transition-all ease-in-out duration-100"
                        >
                          {link.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="lg:w-[24rem] lg:h-[24rem] w-[20rem] h-[20rem]">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Margarete-Steiff-Allee%2010,%2028832%20Achim+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>

            <div className="lg:mt-5 mt-4">
            <Link href="/">
            <a>
              <div className="two-contnet-alignment">
              <img
              className="image-first"
                src="/images/main-logo.svg"
                alt=""
              />
              <img
              className="sec-first"
                src="/images/child-logo.svg"
                alt=""
              />
              </div>
            </a>
          </Link>
              {/* <div className="h-[5rem] w-[1.5px] bg-black lg:mx-5 md:mx-4 mx-3"></div> */}
              <div className="flex flex-col space-y-1 lg:mt-5 mt-4">
                <span
                  className="lg:text-sm md:text-sm"
                  style={{ fontSize: "14px" }}
                >
                  Margarete-Steiff-Allee 10
                  <br />
                  28832 Achim
                </span>
                <div>
                  <Link href="mailto:info@fe-energiesysteme.de">
                    <a
                      className="hover:text-blue-1 transition-all ease-in-out duration-100"
                      style={{ fontSize: "14px" }}
                    >
                      info@fe-energiesysteme.de
                    </a>
                  </Link>
                </div>

                <div>
                  <Link href="tel:0421 6485230">
                    <a
                      className="hover:text-blue-1 transition-all ease-in-out duration-100"
                      style={{ fontSize: "14px" }}
                    >
                      0421 6485230
                    </a>
                  </Link>
                </div>
                <div>
                  <span
                    className="lg:text-sm md:text-sm"
                    style={{ fontSize: "14px" }}
                  >
                    Werktags erreichbar von 8:00-16:30 Uhr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center md:space-x-5 text-lg lg:mt-8 items-center space-x-4">
        <Link href="/">
          <a className="hover:text-black text-blue-1 transition-all ease-in-out duration-100">
            Kontakt
          </a>
        </Link>
        <div className="bg-blue-1 w-[1.5px] h-6"></div>
        <Link href="/">
          <a className="hover:text-black text-blue-1 transition-all ease-in-out duration-100">
            Impressum
          </a>
        </Link>
        <div className="bg-blue-1 w-[1.5px] h-6"></div>
        <Link href="/">
          <a className="hover:text-black text-blue-1 transition-all ease-in-out duration-100">
            Datenschutz
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
