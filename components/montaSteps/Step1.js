import React, { useState, useContext } from "react";
import MontageContext from "../../Context/MontageContext";

export default function Step1() {
  const [send, setSend] = useState(false);
  const [DC, setDC] = useState(true);
  const [AC, setAC] = useState(true);
  const [errOption, setErrOption] = useState(false);

  const [post, setPost] = useState("");
  const [radius, setRadius] = useState("");

  const [errPost, setErrPost] = useState(false);
  const [errRadius, setErrRadius] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(MontageContext);

  const handleChange = (e) => {
    setPost(e.target.value.slice(0, 5));
  };

  return (
    <div className="slider-item" data-show={step == 1 ? true : false}>
      <h3 className="lg:text-4xl md:text-2xl text-xl">
        Kapazität in Ihrer Region
      </h3>

      <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 lg:mt-10 md:mt-8 lg:space-x-[12rem] md:space-x-[3rem] mt-4">
        <div className="space-y-4">
          <div className="flex space-x-3">
            <img
              onClick={() => {
                setDC(!DC);
                setErrOption(false);
              }}
              src={`${DC ? "/images/check.svg" : "/images/nocheck.svg"}`}
              alt=""
              className="w-5 hover:cursor-pointer"
            />
            <span
              className={`font-bold ${
                errOption ? " text-red-600 " : " text-black "
              }`}>
              DC Montage
            </span>
          </div>
          <div className="flex space-x-3">
            <img
              onClick={() => {
                setAC(!AC);
                setErrOption(false);
              }}
              src={`${AC ? "/images/check.svg" : "/images/nocheck.svg"}`}
              alt=""
              className="w-5 hover:cursor-pointer"
            />
            <span
              className={`font-bold ${
                errOption ? " text-red-600 " : " text-black "
              }`}>
              AC Montage
            </span>
          </div>
        </div>
        <div className="md:space-y-8 space-y-4">
          <div className="flex flex-col space-y-2">
            <label
              hmtlFor="post"
              className="flex hover:cursor-pointer space-x-2">
              <span className="font-bold text-sm">Ihre Postleitzahl</span>
              <img src="/images/info.svg" alt="" />
            </label>

            <input
              type="number"
              name=""
              id="post"
              value={post ? post : ""}
              onChange={(e) => {
                handleChange(e);
                setErrPost(false);
              }}
              placeholder="Postleitzahl"
              className={`border  bg-[#EDEDED] rounded-md px-4 py-3 md:w-[16rem] w-full outline-none ${
                errPost ? " border-red-600 " : " border-[#D9D9D9] "
              }`}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              hmtlFor="radius"
              className="flex hover:cursor-pointer space-x-2">
              <span className="font-bold text-sm">Radius (km)</span>
              <img src="/images/info.svg" alt="" />
            </label>

            <div className="relative">
              <input
                type="number"
                id="radius"
                min="0"
                onChange={(e) => {
                  setRadius(e.target.value);
                  setErrRadius(false);
                }}
                placeholder="km"
                className={`border ${
                  errRadius ? " border-red-600 " : " border-[#D9D9D9] "
                } bg-[#EDEDED] rounded-md px-4 py-3 md:w-[16rem] w-full outline-none`}
              />
              <img
                src="/images/arrowdown.svg"
                alt=""
                className="w-4 hover:cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
              />
              <span
                className={`${
                  radius != null && radius != "" ? " opacity-1 " : " opacity-0 "
                } absolute top-1/2 -translate-y-1/2 right-14`}>
                km
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <div>
            <div
              onClick={() => {
                if (!AC && !DC) {
                  setErrOption(true);
                }

                if (radius == "") {
                  setErrRadius(true);
                }

                if (post == "") {
                  setErrPost(true);
                }

                if (post != "" && radius != "") {
                  setSend(true);
                  setTimeout(() => {
                    setUserData({
                      ...userData,
                      step1: {
                        option: AC ? "AC" : DC ? "DC" : "",
                        post: post,
                        radius: radius,
                      },
                    });

                    setStep(step + 1);
                  }, 2000);
                }
              }}
              className={` ${
                send ? " hover:cursor-not-allowed " : " hover:cursor-pointer "
              }border border-blue-1 relative py-3.5 w-[17rem] items-center text-center rounded-md bg-blue-1 text-white hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 justify-center`}>
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${
                  send ? " block " : " hidden "
                }`}>
                <svg
                  className={`animate-spin h-6 w-6 ${
                    send ? " hover:text-blue-1 " : " text-white "
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <span className={`${send ? " opacity-0 " : " opacity-100 "}`}>
                Verfügbarkeit prüfen
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
