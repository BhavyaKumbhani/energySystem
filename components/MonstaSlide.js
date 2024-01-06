import React, { useContext, useRef, useEffect, useState } from "react";
import Step1 from "./montaSteps/Step1";
import Step2 from "./montaSteps/Step2";
import Step3 from "./montaSteps/Step3";
import Step4 from "./montaSteps/Step4";
import Step5 from "./montaSteps/Step5";
import Step6 from "./montaSteps/Step6";
import Step7 from "./montaSteps/Step7";
import Step8 from "./montaSteps/Step8";
import MontageContext from "../Context/MontageContext";

export default function MonstaSlide() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const element = document.getElementById("container-montage");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  return (
    <MontageContext.Provider
      value={{
        step: step,
        setStep: setStep,
        userData: userData,
        setUserData: setUserData,
      }}>
      <div className="montage_Slider">
        <div className="slider-montage">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
          <Step8 />
        </div>
      </div>
    </MontageContext.Provider>
  );
}
