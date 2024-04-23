import React from "react";

const CurrencyInput = ({ amount, handleConversion }) => {
  function handleInputChange(event) {
    const input = event.target;
    const value = input.value;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    input.value = numbersOnly;
    amount(numbersOnly);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleConversion();
    }
  }

  return (
    <div className="w-full md:w-[36.4%] flex flex-col gap-2">
      <p className="font-semibold">Amount:</p>
      <input
        type="text"
        placeholder="Enter Amount"
        className="input border-white"
        onChange={(e) => {
          handleInputChange(e);
        }}
        onKeyUp={(e) => {
          handleKeyPress(e);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
