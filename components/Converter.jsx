"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Select from "./Select";
import CurrencyInput from "./CurrencyInput";
import ConversionButton from "./ConversionButton";
import { conversionData } from "@service/conversionData";
import SwitchButton from "./SwitchButton";

const Converter = ({ currencies }) => {
  const [conversion, setConversion] = useState("");

  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyUnit, setCurrencyUnit] = useState("");

  const handleConversion = () => {
    if (amount !== "") {
      conversionData(amount, selectFrom, selectTo).then(setConversion);
      conversionData(1, selectFrom, selectTo).then(setCurrencyUnit);
    }
  };

  useEffect(() => {
    if (selectFrom !== "" && selectTo !== "") {
      handleConversion();
    }
  }, [selectFrom, selectTo]);

  const switchCurrencies = () => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
  };

  const date = new Date();

  console.log(conversion);
  console.log(amount);
  console.log(selectFrom);
  console.log(selectTo);

  return (
    <div className="w-full flex justify-center items-center gap-10  pb-14 border-y-4 border-y-emerald-300 pt-12">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="w-1/2 flex justify-start items-center gap-5">
          <Select
            currencies={currencies}
            select={setSelectFrom}
            selectedValue={selectFrom}
          />
          <SwitchButton switchCurrencies={switchCurrencies} />
          <Select
            currencies={currencies}
            select={setSelectTo}
            selectedValue={selectTo}
          />
        </div>
        <div className="w-1/2 flex justify-start items-center gap-7">
          <CurrencyInput amount={setAmount} />
          <ConversionButton conversionData={handleConversion} />
        </div>
      </div>
      {conversion && currencyUnit && (
        <div className="w-[90%] flex flex-col gap-4 justify-center items-start">
          <h4 className="text-gray-400">{`1 ${conversion.base ?? ""} equals ${
            currencyUnit.rates[selectTo] ?? ""
          } ${selectTo ?? ""}`}</h4>
          <div className="flex gap-2">
            <h2 className="text-3xl">{`${selectTo ?? ""}`}</h2>
            <h2 className="text-3xl">{`${
              conversion?.rates[selectTo] ?? ""
            }`}</h2>
          </div>

          <p className="text-xs">{`${date} Disclaimer`}</p>
        </div>
      )}
    </div>
  );
};

export default Converter;
