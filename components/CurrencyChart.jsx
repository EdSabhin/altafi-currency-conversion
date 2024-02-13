import { historyData } from "@service/historyData";
import { Card, Title, LineChart } from "@tremor/react";
import { useState, useEffect } from "react";
import YearRange from "./YearInput";
import { yearData } from "@service/yearData";

const dataFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const CurrencyChart = () => {
  const [history, setHistory] = useState("");
  const [dateData, setDateData] = useState("");

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    historyData().then(setHistory);
  }, []);

  useEffect(() => {
    dateFrom !== "" &&
      dateTo !== "" &&
      yearData(dateFrom, dateTo).then(setDateData);
  }, [dateFrom, dateTo]);

  console.log(history);
  console.log("DATA1", dateData);
  console.log(formattedDate);

  let ratesHistory = "";

  if (dateData.rates) {
    ratesHistory = Object.entries(dateData.rates).map(([date, rates]) => ({
      date,
      USD: rates.USD,
      CAD: rates.CAD,
      AUD: rates.AUD,
      NZD: rates.NZD,
    }));
  } else if (history.rates) {
    ratesHistory = Object.entries(history.rates).map(([date, rates]) => ({
      date,
      USD: rates.USD,
      CAD: rates.CAD,
      AUD: rates.AUD,
      NZD: rates.NZD,
    }));
  }

  console.log(ratesHistory);
  console.log(dateFrom);
  console.log(dateTo);

  return (
    <div className="w-full flex">
      <Card className="w-[75%]">
        <Title>EUR against Western Dollars (Year 2000 onward).</Title>
        <LineChart
          className="w-full h-1/3 mt-4 bg-indigo-100"
          data={ratesHistory}
          index="date"
          categories={["USD", "CAD", "AUD", "NZD"]}
          colors={["cyan", "red", "amber", "emerald"]}
          valueFormatter={dataFormatter}
          curveType="natural"
          showYAxis={true}
          showGridLines={true}
          showGradient={false}
          maxValue={2.75}
          allowDecimals={true}
        />
        <div className="w-full flex justify-center items-center gap-8 py-4">
          <YearRange
            setDate={setDateFrom}
            value={dateFrom}
            currentDate={formattedDate}
            max={dateTo}
          />
          <YearRange
            setDate={setDateTo}
            value={dateTo}
            min={dateFrom}
            max={formattedDate}
          />
        </div>
      </Card>
    </div>
  );
};

export default CurrencyChart;
