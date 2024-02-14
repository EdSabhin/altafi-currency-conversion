import React from "react";

const DateInput = ({ setDate, value, max, min, currentDate, title }) => {
  return (
    <div className="flex items-center gap-6">
      <p>{title}</p>
      <input
        type="date"
        className="w-full py-3 px-6 border border-blue-500 rounded-md"
        onChange={(e) => setDate(e.target.value)}
        value={value}
        max={currentDate || max ? max || currentDate : ""}
        min={min ? min : ""}
      />
    </div>
  );
};

export default DateInput;
