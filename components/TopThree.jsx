"use client";

import { useEffect, useState } from "react";
import { conversionData } from "@service/conversionData";

const TopFive = () => {
  const [USD, setUSD] = useState("");
  const [GBP, setGBP] = useState("");
  const [JPY, setJPY] = useState("");

  useEffect(() => {
    conversionData(1, "USD", "EUR").then(setUSD);
    conversionData(1, "GBP", "EUR").then(setGBP);
    conversionData(1, "JPY", "EUR").then(setJPY);
  }, []);

  console.log(USD, GBP, JPY);

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th></th>
            <th>Code</th>
            <th>Name</th>
            <th>EUR Price</th>
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
            <td>GBP</td>
            <td>British Pound</td>
            {GBP && <td>€ {GBP.rates["EUR"]}</td>}
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>JPY</td>
            <td>Japanese Yen</td>
            {JPY && <td>€ {JPY.rates["EUR"]}</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopFive;
