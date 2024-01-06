import React, { useRef, useEffect } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerMain({ title, text }) {
  return (
    <div className="bg-blue-1 lg:py-24 lg:px-20 md:py-14 md:px-10 px-4 py-10 relative">
      <div className="flex md:flex-row flex-col lg:space-x-0 md:space-x-10 md:justify-center justify-end lg:items-center">
        <div className="lg:w-[45%] md:w-[50%] w-full flex flex-col lg:items-start md:items-end text-white md:mr-auto lg:mt-6 md:mt-4">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="lg:text-5xl md:text-3xl text-2xl lg:max-w-lg">
            <div className="">
              Willkommen bei
              <br /> FE Energiesysteme
            </div>
          </motion.h1>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeInOut",
            }}
            className="font-light lg:text-lg md:text-sm text-base">
            <p className="lg:max-w-lg lg:mt-6 md:mt-3 lg:text-base md:text-sm mt-4 text-base">
              {text}
            </p>

            <div className="lg:mt-10 md:mt-8 mt-6 flex">
              <Link href="/kontakt">
                <a className="border-white border-2 bg-blue-1 text-white md:px-12 px-10 hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 md:py-3 py-2 rounded-md">
                  Jetzt anfragen
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="md:w-[55%] relative lg:mt-0 md:mt-6 mt-6 md:mb-0 mb-6 md:overflow-visible overflow-hidden">
          <img
            src="/images/bg1.webp"
            alt=""
            className="lg:w-[50rem] mx-auto md:h-auto h-[15rem] lg:translate-y-0 md:translate-y-4 translate-y-2 object-cover md:px-0 px-3 object-center"
          />
          <div className="hidden md:block lg:mt-0 mt-10">
            <Menu />
          </div>
          <div className="block md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
