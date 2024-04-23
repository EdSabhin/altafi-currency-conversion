import React from "react";

const ConversionButton = ({ handleConversion, setConversionClicked }) => {
  return (
    <button
      onClick={() => {
        handleConversion(), setConversionClicked(true)
      }}
      className="w-full 2xl:absolute 2xl:bottom-[0%] 2xl:right-[0%] md:w-[35.9%] lg:w-[37.3%] 2xl:w-[38%] btn hover:text-teal-300
        active:text-white active:bg-blue-200 active:scale-105 duration-800 transition-all"
    >
      Convert
    </button>
  );
};

export default ConversionButton;
