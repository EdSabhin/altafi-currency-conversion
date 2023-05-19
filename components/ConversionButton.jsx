import React from "react";

const ConversionButton = ({ conversionData }) => {
  return (
    <div>
      <button
        onClick={conversionData}
        className="w-full btn btn-outline btn-primary"
      >
        Convert
      </button>
    </div>
  );
};

export default ConversionButton;
