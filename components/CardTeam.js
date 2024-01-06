import Link from "next/link";
import React from "react";

export default function CardTeam({ name, occupation, cell, email, src }) {
  return (
    <div className="w-[18rem] relative">
      <div className="lg:w-[14rem] md:w-[13rem] w-[12rem] overflow-hidden">
        <img src={src} alt="" className="object-cover object-center w-full" />
      </div>
      <div className="bg-[#FFFEFC] rounded-md lg:p-5 md:p-3 p-3.5 absolute lg:-bottom-[15%] md:-bottom-[30%] -bottom-[30%] lg:left-[1rem] md:left-0 left-5 lg:w-[18.5rem] md:w-[18rem] w-full">
        <div className="text-center">
          <p className="lg:text-lg font-bold">{name}</p>
          <p className="text-sm">{occupation}</p>
        </div>
        <div className="w-[80%] h-[1.5px] bg-black bg-opacity-20 lg:my-2 my-1 mx-auto"></div>
        <div className="mt-3 space-y-2">
          <div className="flex space-x-3 items-center">
            <img src="/images/cellteam.svg" alt="" className="w-3.5" />
            <Link href={`tel:${cell}`}>
              <a className="text-xs">{cell}</a>
            </Link>
          </div>
          <div className="flex space-x-3 items-center">
            <img src="/images/emailteam.svg" alt="" className="w-3.5" />
            <Link href={`mailto:${email}`}>
              <a className="text-xs">{email}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
