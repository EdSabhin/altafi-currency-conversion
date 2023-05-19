import React from "react";

const Select = ({ currencies, select, selectedValue }) => {
  function handleCurrencySelect(event) {
    const selectedCurrency = event.target.value;
    if (selectedCurrency !== "default") {
      select(selectedCurrency);
    }
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleCurrencySelect}
        className="select border-emerald-400 focus:border-emerald-400 focus:outline-solid focus:outline-cyan-200 w-full"
      >
        <option value="">Select Currency</option>
        {Object.keys(currencies).map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
