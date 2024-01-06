import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import AppContext from "../Context/AppContext";

const Card = ({
  direction,
  path,
  title,
  text,
  name_btn,
  redirectTo,
  toFaq,
}) => {
  const router = useRouter();
  const { sectionName, setSectionName } = useContext(AppContext);

  return (
    <div
      className={`flex items-center lg:pt-8 md:pt-8 md:pb-8 lg:pb-12 py-6 lg:space-x-0 md:space-x-4 md:space-y-0 space-y-3 bg-contain bg-no-repeat bg-center md:px-0 px-4${
        direction
          ? " md:flex-row-reverse flex-col-reverse"
          : " md:flex-row flex-col-reverse"
      } ${
        direction
          ? "bg-[url('/images/bgr.webp')] bg-right bg-cover"
          : "bg-[url('/images/bgl.webp')] bg-left bg-cover"
      }`}>
      <div
        className={`flex flex-col lg:space-y-8 md:space-y-4 md:w-[45%] space-y-3 ${
          direction ? " lg:pr-20 md:pr-10" : " lg:pl-20 md:pl-10"
        }`}>
        <motion.h2
          initial={{
            x: direction ? 50 : -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className={`lg:text-5xl md:text-xl text-2xl font-bold md:mt-0 mt-4 ${
            direction ? " md:text-right text-left" : " md:text-left text-right"
          }`}>
          {title}
        </motion.h2>
        <motion.div
          initial={{
            x: direction ? 50 : -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1.5,
              delay: 0.3,
            },
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}>
          {text.map((el, index) => {
            return (
              <p
                key={index}
                className={`my-1 lg:text-base md:text-sm ${
                  direction
                    ? " md:text-right text-left"
                    : " md:text-left text-right"
                } `}>
                {el}
              </p>
            );
          })}
        </motion.div>

        {redirectTo ? (
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 0.5,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className={`flex ${
              direction
                ? " md:justify-end justify-start"
                : " md:justify-start justify-end"
            }`}>
            <div
              onClick={() => {
                router.push(`${redirectTo}`);
              }}
              className="border border-blue-1 md:py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 py-3">
              {name_btn}
            </div>
          </motion.div>
        ) : (
          toFaq && (
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.5,
                },
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className={`flex ${
                direction
                  ? " md:justify-end justify-start"
                  : " md:justify-start justify-end"
              }`}>
              <div
                onClick={() => {
                  router.push("/");
                  setSectionName("faq");
                }}
                className="border border-blue-1 md:py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 py-3">
                {name_btn}
              </div>
            </motion.div>
          )
        )}
      </div>
      <motion.div
        initial={{
          x: direction ? -50 : 50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        className={`md:w-[55%] flex w-full`}>
        <img
          src={path}
          alt=""
          className={`md:w-[45rem] w-full md:px-0 ${
            direction ? " mr-auto " : " ml-auto "
          }]`}
        />
      </motion.div>
    </div>
  );
};

export default Card;
