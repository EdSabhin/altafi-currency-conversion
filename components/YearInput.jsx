import React from "react";

const YearRange = ({setDate, value, max , min, currentDate}) => {
  return (
    <div>
      <input
        type="date"
        placeholder="Type here"
        className="input input-bordered input-primary w-full  border-emerald-400 focus:border-emerald-400 focus:outline-solid focus:outline-cyan-200"
        onChange={(e) => setDate(e.target.value)}
        value={value}
        max={currentDate || max ? max || currentDate : ""}
        min={min ? min : ""}
        
      />
    </div>
  );
};

export default YearRange;
