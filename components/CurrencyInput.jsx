import React from "react";

const CurrencyInput = ({ amount }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Amount"
        className="input input-bordered input-primary w-full  border-emerald-400 focus:border-emerald-400 focus:outline-solid focus:outline-cyan-200"
        onChange={(e) => amount(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
