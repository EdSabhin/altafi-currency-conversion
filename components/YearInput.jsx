import React from "react";

const YearRange = ({ setDate, value, max, min, currentDate }) => {
  return (
    <div>
      <input
        type="date"
        placeholder="Type here"
        className="w-full py-3 px-6 border border-blue-400 rounded-md"
        onChange={(e) => setDate(e.target.value)}
        value={value}
        max={currentDate || max ? max || currentDate : ""}
        min={min ? min : ""}
      />
    </div>
  );
};

export default YearRange;
