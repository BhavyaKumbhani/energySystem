import React, { useState, useContext } from "react";
import MontageContext from "../../Context/MontageContext";

export default function Step3() {
  const { step, setStep, userData, setUserData } = useContext(MontageContext);

  return (
    <div className="slider-item" data-show={step == 3 ? true : false}>
      <h3 className="lg:text-4xl md:text-2xl text-xl max-w-xl">
        Wir suchen nach Montagepartnern in Ihrer Region!
      </h3>

      <div className="lg:mt-16 md:mt-10 mt-6">
        <p className="text-xl">Was sind Sie?</p>

        <div className="md:mt-8 mt-6">
          <div className="flex lg:space-x-10 md:space-x-8 md:flex-row md:space-y-0 space-y-6 flex-col">
            <div>
              <div
                onClick={() => {
                  setUserData({
                    ...userData,
                    step3: "Elektriker",
                  });
                  setStep(step + 1);
                }}
                className="border border-blue-1 py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Elektriker
              </div>
            </div>

            <div>
              <div
                onClick={() => {
                  setUserData({
                    ...userData,
                    step3: "Montage",
                  });
                  setStep(step + 1);
                }}
                className="border border-blue-1 py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Montage
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
