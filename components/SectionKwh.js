import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

export default function SectionKwh() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[#F1F1F1] lg:px-24 lg:py-14 md:space-y-0 space-y-6 flex md:flex-row flex-col justify-center items-center lg:space-x-24 md:space-x-16 py-10">
      <div className="md:text-left text-center">
        <p className="lg:text-3xl md:text-2xl text-2xl font-bold">
          {visible ? (
            <CountUp start={0} end={2000.0} separator="." useEasing />
          ) : (
            <CountUp start={0} end={0} />
          )}
        </p>
        <p className="text-xs font-bold">Erfolgreiche Projekte</p>
      </div>
      <div className="md:text-left text-center">
        <p className="lg:text-3xl md:text-2xl text-2xl font-bold">
          {visible ? (
            <CountUp
              start={0}
              end={8601.468}
              delay={0.3}
              separator="."
              decimals={3}
              decimal="."
              useEasing
            />
          ) : (
            <CountUp start={0} end={0} />
          )}
          <span className="ml-2">kWh</span>
        </p>
        <p className="text-xs font-bold">Erzeugte Solarenergie</p>
      </div>
      <div className="md:text-left text-center">
        <p className="lg:text-3xl md:text-2xl text-2xl font-bold">
          {visible ? (
            <CountUp
              start={0}
              end={5.998}
              delay={0.3}
              decimals={3}
              decimal="."
              useEasing
            />
          ) : (
            <CountUp start={0} end={0} />
          )}
          <span className="ml-2">Tonnen</span>
        </p>
        <p className="text-xs font-bold">Eingesparter CO2-Ausstoß</p>
      </div>
    </div>
  );
}
