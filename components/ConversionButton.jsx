import React from "react";

const ConversionButton = ({ conversionData }) => {
  return (
    <div>
      <button
        onClick={conversionData}
        className="w-full btn hover:text-teal-300
        active:text-white active:bg-blue-200 active:scale-105 duration-800 transition-all"
      >
        Convert
      </button>
    </div>
  );
};

export default ConversionButton;
