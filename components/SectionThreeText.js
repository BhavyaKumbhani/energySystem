import React from "react";
import { animate, motion } from "framer-motion";

const SectionThreeText = () => {
  const FadeUp = {
    offscreen: {
      opacity: 0,
      y: 100,
    },

    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="bg-[#82CCD5] bg-opacity-20 lg:px-24 md:px-10 justify-center lg:py-14 md:py-10 grid md:grid-cols-3 lg:gap-x-20 md:space-x-16 px-4 md:gap-y-0 gap-y-6 py-8">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{ staggerChildren: 0.4 }}
        className="flex flex-col">
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl font-bold">
          01
        </motion.h2>
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl lg:my-3 md:my-2 my-1 uppercase">
          Vertrieb:
        </motion.h2>
        <motion.p variants={FadeUp} className="text-sm">
          Nachdem unsere Berater sie kontaktiert haben, erfolgt ein umfassender
          Beratungstermin bei Ihnen vor Ort, um eine genaue Planung Ihrer
          PV-Anlage zu gewährleisten. Daraufhin wird für Sie ein Angebot
          erstellt.
        </motion.p>
      </motion.div>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{ staggerChildren: 0.4 }}
        className="flex flex-col">
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl font-bold">
          02
        </motion.h2>
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl lg:my-3 md:my-2 my-1 uppercase">
          Planung:
        </motion.h2>
        <motion.p variants={FadeUp} className="text-sm">
          Nach Vertragsunterzeichnung finden wir gemeinsam einen Termin für die
          Montagevorbereitungen und beginnen mit der Planung Ihrer
          Photovoltaik-Anlage.
        </motion.p>
      </motion.div>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{ staggerChildren: 0.4 }}
        className="flex flex-col">
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl font-bold">
          03
        </motion.h2>
        <motion.h2
          variants={FadeUp}
          className="lg:text-4xl md:text-2xl text-xl lg:my-3 md:my-2 my-1 uppercase">
          Installation:
        </motion.h2>
        <motion.p variants={FadeUp} className="text-sm">
          Ihre effiziente PV-Anlage wird von unseren Montagepartnern fachgerecht
          montiert, sodass Sie Ihre Anlage im Anschluss optimal nutzen können.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SectionThreeText;
