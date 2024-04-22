import React from "react";

const ConversionButton = ({ handleConversion }) => {
  return (
      <button
        onClick={() => handleConversion()}
        className="w-full md:w-[35.9%] btn hover:text-teal-300
        active:text-white active:bg-blue-200 active:scale-105 duration-800 transition-all"
      >
        Convert
      </button> 
  );
};

export default ConversionButton;
