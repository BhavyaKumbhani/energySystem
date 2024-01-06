import React, { useState } from "react";

const AccordionItem = ({ title, text }) => {
  const [open, SetOpen] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          SetOpen(!open);
        }}
        className="flex accordion-header items-center md:space-x-14 space-x-8 hover:cursor-pointer ">
        <img
          data-show={open ? true : false}
          src="/images/arrow.svg"
          alt=""
          className="md:w-4 arrow-btn min-w-3"
        />
        <p className="md:text-base text-sm">{title}</p>
      </div>
      <div
        data-show={open ? true : false}
        className="accordion-body md:px-14 px-8 md:mx-4 mx-2 md:py-6 py-4 md:text-base text-sm">
        <div>{text}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
