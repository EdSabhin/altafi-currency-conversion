"use client";

import { useEffect, useState } from "react";
import { conversionData } from "@service/conversionData";

const TopFive = () => {
  const [USD, setUSD] = useState("");
  const [GBP, setGBP] = useState("");
  const [JPY, setJPY] = useState("");
  const [AUD, setAUD] = useState("");
  const [CAD, setCAD] = useState("");

  useEffect(() => {
    conversionData(1, "USD", "EUR").then(setUSD);
    conversionData(1, "JPY", "EUR").then(setJPY);
    conversionData(1, "GBP", "EUR").then(setGBP);
    conversionData(1, "AUD", "EUR").then(setAUD);
    conversionData(1, "CAD", "EUR").then(setCAD);
  }, []);

  console.log(USD, GBP, JPY);

  return (
    <div className="w-[70%] flex overflow-x-auto bg-[#F1F5F9] rounded-md">
      <div className="flex mb-12 border-b border-t border-blue-700">
        <h2 className="h-[6.6rem] pt-4 pl-5 text-2xl text-slate-600 font-semibold  bg=[#F1F5F9] rounded-md">
          Top 5 Currencies by Trading Volume Against the Euro (EUR)
        </h2>
        <table className="w-full table">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Code</th>
              <th>Name</th>
              <th>EUR Exchange Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>USD</td>
              <td>United States Dollar</td>
              {USD && <td>€ {USD.rates["EUR"]}</td>}
            </tr>
            {/* row 2 */}
            <tr className="active">
              <th>2</th>
              <td>JPY</td>
              <td>Japanese Yen</td>
              {JPY && <td>€ {JPY.rates["EUR"]}</td>}
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>GBP</td>
              <td>British Pound</td>
              {GBP && <td>€ {GBP.rates["EUR"]}</td>}
            </tr>
            {/* row 4 */}
            <tr className="active">
              <th>4</th>
              <td>AUD</td>
              <td>Australian Dollar</td>
              {AUD && <td>€ {AUD.rates["EUR"]}</td>}
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>CAD</td>
              <td>Canadian Dollar</td>
              {CAD && <td>€ {CAD.rates["EUR"]}</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopFive;
