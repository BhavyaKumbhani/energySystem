import React, { useState, useContext } from "react";
import MontageContext from "../../Context/MontageContext";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Step7() {
  const [date, setDate] = useState(new Date());
  const [capacitance, setCapacitance] = useState(0);
  const [errCap, setErrCap] = useState(false);
  const [errorFecha, setErrorFecha] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(MontageContext);

  return (
    <div className="slider-item" data-show={step == 7 ? true : false}>
      <h3 className="lg:text-4xl md:text-2xl text-xl max-w-xl">
        Wir suchen nach Montagepartnern in Ihrer Region!
      </h3>

      <div className="lg:mt-16 md:mt-10 mt-6">
        <p className="text-xl">Ab wann haben Sie Kapazitäten</p>

        <div className="md:mt-8 mt-6">
          <div className="flex lg:space-x-10 md:space-x-8 md:flex-row md:space-y-0 space-y-6 flex-col">
            <div className="relative">
              <input
                type="number"
                name=""
                id="capacity"
                onChange={(e) => {
                  setCapacitance(e.target.value);
                  if (errCap) {
                    setErrCap(false);
                  }
                }}
                placeholder="Kw"
                className={`border ${
                  errCap ? " border-red-600 " : " border-[#D9D9D9] "
                } bg-[#EDEDED] rounded-md px-4 py-3.5 md:w-[16rem] w-full outline-none`}
              />
              <span
                className={`${
                  capacitance != "" ? " opacity-1 " : " opacity-0 "
                } absolute top-1/2 -translate-y-1/2 right-5`}>
                Kw
              </span>
            </div>
            <div className="flex items-center relative">
              <DatePicker
                locale={"bg"}
                id="date"
                dateFormat="dd-MM-yyyy"
                formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
                selected={date}
                value={date}
                onChange={(date) => setDate(date)}
                className={`border border-[#D9D9D9] bg-[#EDEDED] rounded-md px-4 py-3.5 md:w-[16rem] w-full outline-none`}
              />
            </div>
            <div>
              <div
                onClick={() => {
                  if (capacitance == 0) {
                    setErrCap(true);
                  }

                  if (capacitance != 0) {
                    setUserData({
                      ...userData,
                      step7: {
                        capacity: capacitance,
                        date: date,
                      },
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
