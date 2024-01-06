import React from "react";

export default function SectionServices() {
  return (
    <div className="bg-blue-1 lg:px-24 lg:py-14 flex justify-center lg:space-x-24 items-center">
      <div className="flex flex-col text-sm font-bold space-y-2">
        <img src="/images/wallet.webp" alt="" className="w-[5rem]" />
        <div>
          <p>Stromkosten</p>
          <p>sparen</p>
        </div>
      </div>
      <div className="flex flex-col text-sm font-bold space-y-2">
        <img src="/images/corona.webp" alt="" className="w-[5rem]" />
        <div>
          <p>Unabhängig</p>
          <p>werden</p>
        </div>
      </div>
      <div className="flex flex-col text-sm font-bold space-y-2">
        <img src="/images/tree.webp" alt="" className="w-[5rem]" />
        <div>
          <p>Umwelt</p>
          <p>schützen</p>
        </div>
      </div>
      <div className="flex flex-col text-sm font-bold space-y-2">
        <img src="/images/shield.webp" alt="" className="w-[5rem]" />
        <div>
          <p>20 Jahre</p>
          <p>Investitionsschutz</p>
        </div>
      </div>
      <div>
        <div className="flex font-bold">
          <div className="border-white border-2 bg-blue-1 text-white px-12 hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 py-3 rounded-md">
            Jetzt starten!
          </div>
        </div>
      </div>
    </div>
  );
}
