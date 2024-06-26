"use client";

import { useState, useEffect } from "react";
import { currencyData } from "@service/currencyData";

import LoadingCurrencies from "./LoadingCurrencies";
import Converter from "./Converter";
import Dashboard from "./Dashboard";
import CurrencyChart from "./CurrencyChart";
import TopFive from "./TopFive";

const Main = () => {
  const [currencies, setCurrencies] = useState("");
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    currencyData().then(setCurrencies);
    setTimeout(() => {
      setLoadingCurrencies(false);
    }, 4000);
    if (!loadingCurrencies) {
      // Show scrollbar when loading is completed
      document.body.style.overflow = "auto";
    }
  }, [loadingCurrencies]);

  return (
    <section className="bg-gradient-to-b from-[#e8f4ff] to-[#F1F5F9]">
      {loadingCurrencies ? (
        <LoadingCurrencies />
      ) : (
        <div className="md:w-full flex flex-col gap-20 md:gap-20 lg:gap-12 py-4 md:py-10 px-4 2xl:px-44 bg-[#F1F5F9] z-0">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start pt-10">
            <Converter currencies={currencies} />
            <Dashboard currencies={currencies} />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-16">
            <CurrencyChart />
            <TopFive />
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
