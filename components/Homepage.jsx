"use client";

import { useState, useEffect } from "react";
import { currencyData } from "@service/currencyData";
import Converter from "./Converter";
import Dashboard from "./Dashboard";

const Homepage = () => {
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    currencyData().then(setCurrencies);
    // or .then(setCurrency)
  }, []);

  console.log(currencies);
  return (
    <div>
      <Converter currencies={currencies} />
      <Dashboard currencies={currencies}/>
    </div>
  );
};

export default Homepage;
