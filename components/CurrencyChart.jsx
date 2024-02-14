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
    <div className="w-[70%] h-full flex">
      <Card className="w-full h-full flex flex-col">
        <Title className="bg-[#F2F7FF] border border-slate-400">
          EUR against Western Dollars (Year 2000 onward).
        </Title>
        <LineChart
          className="w-full mt-4 bg-[#F2F7FF]"
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
        <div className="w-full flex justify-center items-center gap-12 pt-8 pb-4">
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
