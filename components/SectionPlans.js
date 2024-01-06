import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SectionPlans = () => {
  const router = useRouter();
  return (
    <div className="lg:py-20 lg:px-24 flex flex-col items-center md:px-10 px-4 py-6">
      <div>
        <h1 className="md:text-center text-left lg:text-5xl  md:text-2xl text-2xl ">
          Unser Plan – Ihre Energielösung!
        </h1>
        <p className="lg:text-2xl mt-4">
          Wir beraten Sie umfassend in unserem Showroom, bei Ihnen vor Ort oder
          auch telefonisch.
        </p>

        <div className="flex md:justify-center mt-6 justify-start">
          <div
            onClick={() => {
              router.push("/kontakt");
            }}
            className="border border-blue-1 md:py-3.5 py-3 md:w-[17rem] w-[16rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
            Jetzt Kontakt aufnehmen
          </div>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-3 lg:gap-x-20 md:gap-x-14 md:justify-items-center justify-items-start md:gap-y-0 gap-y-10 md:w-auto w-[14rem]">
        <div className="flex flex-col lg:space-y-4 space-y-3 items-center">
          <img
            src="/images/build.svg"
            alt=""
            className="lg:w-14 md:w-12 w-11 mx-auto"
          />
          <h2 className="lg:text-4xl md:text-xl">SHOWROOM</h2>
          <div className="font-bold">
            <p>FE Energiesysteme GmbH</p>
            <p>Zollpfad 4</p>
            <p>28217 Bremen</p>
          </div>
        </div>
        <div className="flex flex-col lg:space-y-4 space-y-3 items-center">
          <img
            src="/images/house.svg"
            alt=""
            className="lg:w-14 md:w-12 w-14"
          />
          <h2 className="lg:text-4xl md:text-xl">PERSÖNLICH</h2>
          <div>
            <p className="font-bold">
              Ein Solarfachberater berät Sie gerne direkt bei Ihnen vor Ort.
              Vereinbaren Sie dazu einfach einen Termin!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:space-y-4 space-y-3 items-center">
          <img src="/images/cell.svg" alt="" className="lg:w-14 md:w-12 w-11" />
          <h2 className="lg:text-4xl md:text-xl">TELEFONISCH</h2>
          <div>
            <div>
              <Link href="tel:+49 (0) 421 6485230">
                <a className="hover:text-blue-1 ease-in-out duration-150 transition-all">
                  +49 (0) 421 6485230
                </a>
              </Link>
            </div>
            <p>Mo bis Fr 08:00 bis 16:00 Uhr</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionPlans;
