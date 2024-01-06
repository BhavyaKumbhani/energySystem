import React from "react";

const SectionText = ({ title, text }) => {
  return (
    <div className="text-center lg:px-52 md:px-10 px-4">
      <h1 className="lg:text-5xl md:text-2xl text-xl">{title}</h1>
      <div className="lg:mt-10 md:mt-6 mt-4">
        {text.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
      </div>
    </div>
  );
};

export default SectionText;
