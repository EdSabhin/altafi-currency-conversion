"use client";

import { useState, useEffect } from "react";
import { currencyData } from "@service/currencyData";
import Converter from "./Converter";
import Dashboard from "./Dashboard";
import CurrencyChart from "./CurrencyChart";
import TopFive from "./TopFive";

const Homepage = () => {
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    currencyData().then(setCurrencies);
    // or .then(setCurrency)
  }, []);

  // useEffect(() => {
  //   conversionData().then(setConversion);
  //   // or .then(setCurrency)
  // }, []);

  console.log(currencies);
  return (
    <div className="w-full flex flex-col gap-12 py-10 2xl:px-80">
      <div className="w-full flex justify-center items-start">
        <Converter currencies={currencies} />
        <Dashboard currencies={currencies} />
      </div>

      <div className="flex flex-col justify-center items-center gap-16">
        <CurrencyChart />
        <TopFive />
      </div>
    </div>
  );
};

export default Homepage;
