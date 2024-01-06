import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu() {
  const data1 = [
    {
      source: "/images/mdi_home-lightbulb-outline.svg",
      text: "Leistungen für Privatkunden",
      link: "/photovoltaik-privatkunden",
    },
    {
      source: "/images/bx_building-house.svg",
      text: "Leistungen für Gewerbekunden",
      link: "/photovoltaik-gewerbekunden",
    },
  ];
  const data2 = [
    {
      source: "/images/carbon_container-services.svg",
      text: "DC Partner werden",
      link: "/montagepartner",
    },
    {
      source: "/images/bxs_city.svg",
      text: "AC Partner werden",
      link: "/montagepartner",
    },
    {
      source: "/images/healthicons_city-worker.svg",
      text: "Kontakt",
      link: "/kontakt",
    },
  ];
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeIn",
          },
        }}
        className="hidden z-30 lg:text-base md:text-sm lg:px-6 md:py-6 lg:py-8 md:px-4 rounded-md bg-white md:flex flex-col lg:space-y-6 md:space-y-2 shadow-md justify-center lg:absolute lg:-translate-x-[4.3rem] md:-translate-x-[20rem] lg:w-[55rem] md:w-[45rem] bottom-0 lg:translate-y-[12rem] md:translate-y-[8rem]">
        <div className="flex justify-center">
          {data1.map((el, index) => (
            <div
              key={index}
              className={`flex  lg:py-5 md:py-3 lg:px-14 md:px-8 items-center justify-center  ${
                index == 0 ? " border-r-2 " : ""
              }`}>
              <img src={el.source} alt="" className="mr-4 w-7" />
              <Link href={el.link}>
                <a>{el.text}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="p-[0.5px] bg-black bg-opacity-[10%]"></div>
        <div className="flex justify-center ">
          {data2.map((el, index) => (
            <div
              key={index}
              className={`flex  lg:py-5  md:py-3 lg:px-14 md:px-8  justify-center  items-center${
                index < 2 ? " border-r-2 " : ""
              }`}>
              <img src={el.source} alt="" className="mr-4 w-7" />
              <Link href={el.link}>
                <a>{el.text}</a>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="md:hidden z-30 relative w-full mx-auto flex bg-white px-4 py-3 text-base rounded-lg justify-center flex-wrap  space-y-2">
        <div className="grid gap-y-3">
          {data1.map((el, index) => {
            return (
              <div
                key={index}
                start
                className={`flex py-3 px-3 items-center justify-start border-b-2`}>
                <img src={el.source} alt="" className="mr-2 w-5" />
                <Link href={el.link}>
                  <a className="lg:text-base">{el.text}</a>
                </Link>
              </div>
            );
          })}
          {data2.map((el, index) => {
            return (
              <div
                key={index}
                start
                className={`flex py-3 px-3 items-center justify-start ${
                  index < 2 ? " border-b-2" : ""
                }`}>
                <img src={el.source} alt="" className="mr-2 w-5" />
                <Link href={el.link}>
                  <a className="lg:text-base">{el.text}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
