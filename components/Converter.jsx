import React from "react";
import Select from "./Select";

const Converter = ({ currencies }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 pt-6 pb-14 border-y-4 border-y-emerald-300">
      <h4 className="text-gray-400">{`1 Dollar equals X`}</h4>
      <h2 className="text-3xl">Price $4555.05</h2>
      <h2 className="text-3xl">Bolivares</h2>
      <p className="text-xs">May 7, 9:00 UTC Disclaimer</p>
      <div className="flex gap-10 justify-center items-center">
        <Select currencies={currencies} />
        <p className="text-4xl ">{"<==>"}</p>
        <Select currencies={currencies} />
      </div>
    </div>
  );
};

export default Converter;
