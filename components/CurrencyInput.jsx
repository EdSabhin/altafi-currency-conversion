import React from "react";

const CurrencyInput = ({ amount }) => {
  function handleInputChange(event) {
    const input = event.target;
    const value = input.value;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    input.value = numbersOnly;
    amount(numbersOnly);
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Amount:</p>
      <input
        type="text"
        placeholder="Enter Amount"
        className="input border-white"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
