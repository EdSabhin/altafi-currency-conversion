import React from "react";

const DateInput = ({ setDate, value, max, min, currentDate, title }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <p className="font-semibold">{title}</p>
      <input
        type="date"
        className="w-full py-3 px-6 border border-blue-500 rounded-md"
        onChange={(e) => setDate(e.target.value)}
        value={value}
        max={currentDate || max ? max || currentDate : ""}
        min={min ? min : "1999-01-04"}
        // Frankfurter API has data starting at Jan 4 1999
      />
    </div>
  );
};

export default DateInput;
