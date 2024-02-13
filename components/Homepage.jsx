"use client";

import { useState, useEffect } from "react";
import { currencyData } from "@service/currencyData";
import Converter from "./Converter";
import Dashboard from "./Dashboard";
import CurrencyChart from "./CurrencyChart";

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
    <div>
      <Converter currencies={currencies} />
      <div className="w-full flex gap-4">
        <Dashboard currencies={currencies} />
        <CurrencyChart />
      </div>
    </div>
  );
};

export default Homepage;
