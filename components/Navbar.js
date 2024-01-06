import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import disableScroll from "disable-scroll";

const Navbar = () => {
  const [openToogle, setOpenToogle] = useState(false);
  const data = [
    {
      name: "Karriere",
      path: "/karriere",
    },
    {
      name: "Kontakt",
      path: "/kontakt",
    },
    {
      name: "Montagepartner",
      path: "/montagepartner",
    },
    // {
    //   name: "Solarrechner",
    //   path: "https://energiesysteme.solar-pvcheck.de",
    //   paint: true,
    // },
  ];

  const dataToggle = [
    {
      name: "Lösungen für Privatkunden",
      path: "/photovoltaik-privatkunden",
    },
    {
      name: "Lösungen für Gewerbekunden",
      path: "/photovoltaik-gewerbekunden",
    },
    {
      name: "Batteriespeicher",
      path: "/batteriespeicher",
    },
    {
      name: "Luftwärmepumpe",
      path: "/warmepumpe",
    },
  ];

  const [openSide, setOpenSide] = useState(false);
  const [otherOpen, setOtherOpen] = useState(0);
  const [time, setTime] = useState(0);
  const router = useRouter();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (openSide) {
      setTime(300);
      disableScroll.on();
    } else {
      setTime(0);
      disableScroll.off();
    }

    const timin = setTimeout(() => {
      setOtherOpen(openSide);
    }, time);

    return () => clearTimeout(timin);
  }, [openSide]);

  useEffect(() => {
    const handleScroll = (event) => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeLei, setActiveLei] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setOpenToogle(false);
    });

    const result = dataToggle.find((item) => {
      if (item.path == router.asPath) {
        return true;
      }
    });

    if (result) {
      setActiveLei(true);
    } else {
      setActiveLei(false);
    }
  }, [router.asPath]);

  return (
    //navbar
    <div data-fixed={scroll > 200 ? true : false} className="nav_container">
      <div
        data-open={openSide ? true : false}
        className={`bg-blue-1 w-full item-container absolute left-0 text-white transition-transform ease-in duration-700 z-50`}>
        <div className="flex flex-col space-y-2.5 text-gray-1 pl-6 font-semibold">
          <div className="flex md:mr-4 flex-col">
            <div
              onClick={() => setOpenToogle(!openToogle)}
              className="flex relative items-center space-x-2 hover:cursor-pointer">
              <div className="relative   text-lg transition-all ease-in duration-150">
                Leistung & Produkte
              </div>
              <div>
                <svg
                  width="14"
                  height="8"
                  className=""
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className=" fill-white transition-all ease-in duration-150"
                    d="M9.7194 0.279313C9.54166 0.100415 9.30123 0 9.05062 0C8.80001 0 8.55958 0.100415 8.38184 0.279313L4.97628 3.67957L1.61816 0.279313C1.44042 0.100415 1.19999 0 0.94938 0C0.698767 0 0.458337 0.100415 0.280601 0.279313C0.191688 0.368606 0.121116 0.474841 0.0729554 0.59189C0.0247951 0.708939 0 0.834485 0 0.961285C0 1.08809 0.0247951 1.21363 0.0729554 1.33068C0.121116 1.44773 0.191688 1.55396 0.280601 1.64326L4.30276 5.71588C4.39095 5.80591 4.49587 5.87736 4.61147 5.92613C4.72706 5.97489 4.85105 6 4.97628 6C5.10151 6 5.2255 5.97489 5.3411 5.92613C5.4567 5.87736 5.56162 5.80591 5.64981 5.71588L9.7194 1.64326C9.80831 1.55396 9.87888 1.44773 9.92704 1.33068C9.9752 1.21363 10 1.08809 10 0.961285C10 0.834485 9.9752 0.708939 9.92704 0.59189C9.87888 0.474841 9.80831 0.368606 9.7194 0.279313Z"
                  />
                </svg>
              </div>
            </div>
            <div
              data-show={openToogle ? true : false}
              className="toogleMenu md:hidden flex rounded-md justify-center px-3 overflow-hidden space-y-3 left-0 flex-col">
              {dataToggle.map((el, index) => {
                return (
                  <Link href={el.path} key={index}>
                    <a
                      className={` ease-in-out duration-150 transition-all text-lg`}>
                      {el.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          {data.map((link, index) => {
            return (
              <div key={index} className="flex">
                {
                  <Link href={link.path}>
                    <a
                      className={`${
                        link.paint
                          ? " text-blue-1 bg-white px-3.5 py-2 border border-white rounded-md mt-2"
                          : ""
                      } text-lg`}>
                      {link.name}
                    </a>
                  </Link>
                }
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white z-50 navbar relative flex lg:py-6 lg:px-16 md:px-6 px-4 py-4 justify-between lg:text-base md:text-sm shadow-md">
        <div>
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
        </div>
        <div className="md:flex hidden relative items-center mr-5">
          <div className="flex space-x-5 lg:mr-14 md:mr-4">
            <div
              onClick={() => setOpenToogle(!openToogle)}
              className="flex relative items-center space-x-2 hover:cursor-pointer group ">
              <div
                className={`relative text-lg  group-hover:text-blue-1 transition-all ease-in duration-150 ${
                  activeLei ? " font-bold text-blue-1 " : ""
                }`}>
                Leistung & Produkte
              </div>
              <div>
                <svg
                  width="14"
                  height="8"
                  className="mt-1 "
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className={`group-hover:fill-blue-1 fill-black transition-all ease-in duration-150 ${
                      activeLei ? " fill-blue-1 " : ""
                    }`}
                    d="M9.7194 0.279313C9.54166 0.100415 9.30123 0 9.05062 0C8.80001 0 8.55958 0.100415 8.38184 0.279313L4.97628 3.67957L1.61816 0.279313C1.44042 0.100415 1.19999 0 0.94938 0C0.698767 0 0.458337 0.100415 0.280601 0.279313C0.191688 0.368606 0.121116 0.474841 0.0729554 0.59189C0.0247951 0.708939 0 0.834485 0 0.961285C0 1.08809 0.0247951 1.21363 0.0729554 1.33068C0.121116 1.44773 0.191688 1.55396 0.280601 1.64326L4.30276 5.71588C4.39095 5.80591 4.49587 5.87736 4.61147 5.92613C4.72706 5.97489 4.85105 6 4.97628 6C5.10151 6 5.2255 5.97489 5.3411 5.92613C5.4567 5.87736 5.56162 5.80591 5.64981 5.71588L9.7194 1.64326C9.80831 1.55396 9.87888 1.44773 9.92704 1.33068C9.9752 1.21363 10 1.08809 10 0.961285C10 0.834485 9.9752 0.708939 9.92704 0.59189C9.87888 0.474841 9.80831 0.368606 9.7194 0.279313Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            data-show={openToogle ? true : false}
            className="toogleMenu absolute top-full bg-white rounded-md  border-blue-1 justify-center px-3 overflow-hidden w-[14.5rem] space-y-3 left-0 flex flex-col">
            {dataToggle.map((el, index) => {
              return (
                <Link href={el.path} key={index}>
                  <a
                    className={` hover:text-blue-1 ease-in-out duration-150 transition-all`}>
                    {el.name}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="flex lg:space-x-7 md:space-x-4">
            {data.map((el, index) => {
              return (
                <Link href={el.path} key={index}>
                  <a
                    className={`${el.paint ? " text-[#F79D15] " : ""} ${
                      router.asPath == el.path ? "font-bold text-blue-1" : ""
                    } hover:text-blue-1 ease-in-out duration-150 transition-all lg:text-lg`}>
                    {el.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center space-x-6 md:hidden">
          <div className="md:hidden hover:cursor-pointer flex relative navigationBar">
            <input
              type="checkbox"
              className="togglemenu"
              checked={openSide ? true : false}
              defaultChecked={false}
            />
            <div
              className="hamburguer"
              onClick={() => {
                setOpenSide(!openSide);
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
