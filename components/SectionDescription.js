import React from "react";
import { useRouter } from "next/router";

export default function SectionDescription({ title, data, btn }) {
  const router = useRouter();
  return (
    <div className="lg:w-[75%] md:px-10 mx-auto lg:py-20 md:py-14 py-10 px-4">
      {title && (
        <h1 className="lg:text-5xl md:text-3xl text-xl lg:mb-10 md:mb-6 mb-4">
          {title}
        </h1>
      )}

      {data.map((el, index) => {
        return (
          <div className="lg:my-3 md:my-2 my-4" key={index}>
            <p className="uppercase lg:mb-3 md:mb-2 mb-1">{el.titulo}</p>
            {el.text.map((t, index) => {
              return <p key={index}>{t}</p>;
            })}
          </div>
        );
      })}

      {btn && (
        <div
          onClick={() => {
            router.push("/kontakt");
          }}
          className="lg:mt-14 md:mt-8 mt-6">
          <div className="border border-blue-1 py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150">
            Solarfachberatung anfordern
          </div>
        </div>
      )}
    </div>
  );
}
