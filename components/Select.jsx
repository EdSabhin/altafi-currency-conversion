import React from "react";

const Select = ({ currencies, select, selectedValue, title }) => {
  function handleCurrencySelect(event) {
    const selectedCurrency = event.target.value;
    if (selectedCurrency !== "default") {
      select(selectedCurrency);
    }
  }

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <p className="font-semibold">{title}</p>
      <select
        value={selectedValue}
        onChange={handleCurrencySelect}
        className="select border-white"
      >
        <option value="">Select Currency</option>
        {currencies && Object.keys(currencies).map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
