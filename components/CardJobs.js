import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function CardJobs({ title, category, id, pdf, subcategory }) {
  return (
    <div className="flex px-8 lg:h-[6rem] md:h-[5rem] md:flex-row flex-col justify-between bg-blue-1 bg-opacity-10 items-center rounded-md md:space-y-0 space-y-3 md:py-0 py-6">
      <span className="lg:text-base md:text-sm md:text-left text-center">
        {title}
      </span>
      <div className="flex lg:space-x-10 md:space-x-6 items-center md:flex-row flex-col md:space-y-0 space-y-3">
        <a href={`/files/${pdf}`} download>
          <div data-tooltip="download pdf" className="relative btn-tooltip">
            <img
              src="/images/download.svg"
              alt=""
              className="w-4 hover:cursor-pointer"
            />
          </div>
        </a>
        <span className="text-[#B4B4B4]">Bremen</span>
        <Link
          href={{
            pathname: `/karriere/${category}`,
            query: { subcategory: subcategory, id: id },
          }}>
          <a className="bg-blue-1 text-white lg:px-8 md:px-6 px-5 py-2 rounded-md">
            Mehr infos
          </a>
        </Link>
      </div>
    </div>
  );
}
