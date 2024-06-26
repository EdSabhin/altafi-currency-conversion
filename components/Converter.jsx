"use client";

import { useState, useEffect } from "react";

import { conversionData } from "@service/conversionData";

import Select from "./Select";
import CurrencyInput from "./CurrencyInput";
import ConversionButton from "./ConversionButton";
import SwitchButton from "./SwitchButton";

const Converter = ({ currencies }) => {
  const [conversion, setConversion] = useState("");
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyUnit, setCurrencyUnit] = useState("");
  const [conversionClicked, setConversionClicked] = useState(false);
  const [inputsNotValid, setInputsNotValid] = useState(false);
  const [conversionError, setConversionError] = useState("");

  const handleConversion = () => {
    // Inputs are valid
    if (
      selectFrom !== "" &&
      selectTo !== "" &&
      amount !== "" &&
      selectFrom !== selectTo
    ) {
      conversionData(amount, selectFrom, selectTo).then(setConversion);
      conversionData(1, selectFrom, selectTo).then(setCurrencyUnit);
      setInputsNotValid(false);
      return;
      // Inputs are not valid
    } else if (selectFrom === "" && selectTo === "") {
      setInputsNotValid(true);
      setConversionError("Please select the target currencies to convert.");
      return;
    } else if (selectFrom !== "" && selectTo === "") {
      setInputsNotValid(true);
      setConversionError("Please select currencies on both ends.");
      return;
    } else if (selectFrom === "" && selectTo !== "") {
      setInputsNotValid(true);
      setConversionError("Please select currencies on both ends.");
      return;
    } else if (selectFrom === selectTo) {
      setInputsNotValid(true);
      setConversionError("Please select 2 distinct currencies to convert.");
      return;
    } else if (amount === "") {
      setInputsNotValid(true);
      setConversionError("Please provide an amount to convert.");
      return;
    }
  };

  useEffect(() => {
    !inputsNotValid && conversionClicked && handleConversion();
  }, [selectFrom, selectTo, amount]);

  const switchCurrencies = () => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
  };

  const date = new Date();

  return (
    <div className="w-full lg:w-[60%] xl:w-[50%] 2xl:w-[47.9%] flex flex-col items-center lg:items-start md:gap-14 pb-8 md:pb-12">
      <div className="w-full relative md:w-[70%] flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-10">
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
        <div className="w-full flex flex-col md:flex-row items-start md:items-end 2xl:items-end gap-10 md:gap-[8.45rem] lg:gap-32">
          <CurrencyInput amount={setAmount} handleConversion={handleConversion}/>
          <ConversionButton
            handleConversion={handleConversion}
            setConversionClicked={setConversionClicked}
          />
        </div>
        {inputsNotValid && (
          <p className="w-full py-2 px-4 md:px-0 rounded-md bg-rose-100 text-rose-500 text-center">
            {conversionError}
          </p>
        )}
      </div>
      {conversion && currencyUnit && !inputsNotValid && (
        <div className="w-full md:w-[68%] relative flex flex-col items-start gap-4 pt-20 md:pt-7 pl-7 mt-14 md:mt-0 mb-6 md:mb-0 border-t-2 border-l-2 border-slate-200 rounded-tl-md">
          <div
            onClick={() => setConversion("")}
            className="absolute top-6 md:top-1 right-5 md:right-1 text-2xl text-slate-400 hover:text-blue-500 hover:animate-ping cursor-pointer transition duration-500"
          >
            x
          </div>
          <h2 className="text-xl">
            Today&apos;s Conversion of{" "}
            <span className="font-semibold text-blue-500">{selectFrom}</span> to
            <span className="font-semibold text-blue-500"> {selectTo}</span>
          </h2>
          <h4 className="text-gray-400">{`Current Exchange Rate: 1 ${
            conversion.base ?? ""
          } to ${currencyUnit.rates[selectTo] ?? ""} ${selectTo ?? ""}`}</h4>
          <div className="flex flex-wrap gap-2">
            <h2 className="text-3xl">{`${selectTo ?? ""}`}</h2>
            <h2 className="w-max flex flex-shrink-0 text-3xl">{`${
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
