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
    <div className="w-[50%] flex flex-col j items-start gap-14 pb-14">
      <div className="flex flex-col gap-16">
        <div className="flex items-end gap-10">
          <Select
            title="From:"
            currencies={currencies}
            select={setSelectFrom}
            selectedValue={selectFrom}
          />
          <SwitchButton switchCurrencies={switchCurrencies} />
          <Select
            title="To:"
            currencies={currencies}
            select={setSelectTo}
            selectedValue={selectTo}
          />
        </div>
        <div className="flex items-end gap-[4.5rem]">
          <CurrencyInput amount={setAmount} />
          <ConversionButton conversionData={handleConversion} />
        </div>
      </div>
      {conversion && currencyUnit && (
        <div className="flex flex-col  gap-4 items-start pt-4 pl-5 border-t-2 border-l-2 border-slate-200 rounded-md">
          <h2 className="text-xl">
            Today&apos;s Conversion of{" "}
            <span className="font-semibold text-blue-500">{selectFrom}</span> to
            <span className="font-semibold text-blue-500"> {selectTo}</span>
          </h2>
          <h4 className="text-gray-400">{`Current Exchange Rate: 1 ${
            conversion.base ?? ""
          } to ${currencyUnit.rates[selectTo] ?? ""} ${selectTo ?? ""}`}</h4>
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
