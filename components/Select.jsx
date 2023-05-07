import React from "react";

const Select = ({ currencies }) => {
  return (
    <div>
      <select className="select border-emerald-400 focus:border-emerald-400 focus:outline-solid focus:outline-cyan-200 w-full max-w-xs">
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
