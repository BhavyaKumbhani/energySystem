import React, { useState, useContext } from "react";
import MontageContext from "../../Context/MontageContext";

export default function Step5() {
  const [employees, setEmployees] = useState(0);
  const [errEmpl, setErrEmpl] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(MontageContext);

  return (
    <div className="slider-item" data-show={step == 5 ? true : false}>
      <h3 className="lg:text-4xl md:text-2xl text-xl max-w-xl">
        Wir suchen nach Montagepartnern in Ihrer Region!
      </h3>

      <div className="lg:mt-16 md:mt-10 mt-6">
        <p className="text-xl">Mitarbeiteranzahl</p>

        <div className="md:mt-8 mt-6">
          <div className="flex lg:space-x-10 md:space-x-8 md:flex-row md:space-y-0 space-y-6 flex-col">
            <div>
              <input
                type="number"
                name=""
                id="employess"
                onChange={(e) => {
                  setEmployees(e.target.value);
                  if (errEmpl) {
                    setErrEmpl(false);
                  }
                }}
                placeholder="Mitarbeiteranzahl"
                className={`border ${
                  errEmpl ? " border-red-600 " : " border-[#D9D9D9] "
                }  bg-[#EDEDED] rounded-md px-4 py-3.5 md:w-[16rem] w-full outline-none`}
              />
            </div>

            <div>
              <div
                onClick={() => {
                  if (employees == 0) {
                    setErrEmpl(true);
                  }

                  if (employees != 0) {
                    setUserData({
                      ...userData,
                      step5: employees,
                    });
                    setStep(step + 1);
                  }
                }}
                className="border border-blue-1 py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
                Weiter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
