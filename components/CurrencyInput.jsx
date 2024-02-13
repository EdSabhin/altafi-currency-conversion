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
    <div>
      <input
        type="text"
        placeholder="Enter Amount"
        className="input input-bordered input-primary w-full  border-emerald-400 focus:border-emerald-400 focus:outline-solid focus:outline-cyan-200"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
