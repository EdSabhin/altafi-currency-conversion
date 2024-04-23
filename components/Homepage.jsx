"use client";

import { useState, useEffect } from "react";
import { currencyData } from "@service/currencyData";
import Converter from "./Converter";
import Dashboard from "./Dashboard";
import CurrencyChart from "./CurrencyChart";
import TopFive from "./TopFive";
import Image from "next/image";

const Homepage = () => {
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    currencyData().then(setCurrencies);
  }, []);

  return (
    <div className="md:w-full flex flex-col gap-20 md:gap-20 lg:gap-12 py-4 md:py-10 px-4 2xl:px-44">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start pt-10">
        <Converter currencies={currencies} />
        <Dashboard currencies={currencies} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <CurrencyChart />
        <TopFive />
      </div>
    </div>
  );
};

export default Homepage;
