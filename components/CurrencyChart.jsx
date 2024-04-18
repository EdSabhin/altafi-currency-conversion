import { useState, useEffect } from "react";
import { historyData } from "@service/historyData";
import { AreaChart } from "@tremor/react";
import { yearData } from "@service/yearData";
import DateInput from "./DateInput";
import ResetButton from "./ResetButton";

const dataFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const CurrencyChart = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  // formattedDate is initialized before passed as state
  const [history, setHistory] = useState("");
  const [dateData, setDateData] = useState("");
  const [dateFrom, setDateFrom] = useState("1999-01-04");
  // Frankfurter API has data starting at Jan 4 1999
  const [dateTo, setDateTo] = useState(formattedDate);

  useEffect(() => {
    historyData().then(setHistory);
  }, []);

  useEffect(() => {
    dateFrom !== "" &&
      dateTo !== "" &&
      yearData(dateFrom, dateTo).then(setDateData);
  }, [dateFrom, dateTo]);

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

  const resetDates = () => {
    setDateFrom("1999-01-04");
    setDateTo(formattedDate);
  };

  return (
    <div className="w-full md:w-[70%] h-full flex rounded-t-md">
      <div className="w-full h-full flex flex-col border border-slate-200 bg-white rounded-md">
        <div className="flex flex-col text-center md:text-start gap-8 py-6 md:px-5 text-2xl font-semibold bg-[#F2F7FF]">
          <h2>EUR against the World&apos;s Dollars</h2>
          <h3 className="flex flex-col items-center md:flex-row gap-6 md:gap-0 mb-4">
            Period Selected:{" "}
            <span className="pt-1 pb-2 px-3 mx-2 bg-animation text-indigo-200 text-[1.25rem] underline underline-offset-4 decoration-1 decoration-dotted rounded-md">
              {dateFrom}
            </span>{" "}
            to{" "}
            <span className="pt-1 pb-2 px-3 mx-2 bg-animation text-indigo-200 text-[1.25rem] underline underline-offset-4 decoration-1 decoration-dotted rounded-md">
              {dateTo}
            </span>
          </h3>
        </div>

        <AreaChart
          className="w-full py-8 px-4 bg-slate-50"
          data={ratesHistory}
          index="date"
          categories={["USD", "CAD", "AUD", "NZD"]}
          colors={["blue", "violet", "sky", "teal"]}
          valueFormatter={dataFormatter}
          curveType="natural"
          showYAxis={true}
          showGridLines={true}
          maxValue={2.75}
          allowDecimals={true}
        />
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 pt-8 pb-12">
          <div className="flex flex-col md:flex-row items-center">
            <h4 className="flex items-center py-7 md:py-2 md:px-8 border-t md:border-t-0 border-blue-500 md:border-l rounded-md text-md font-semibold">
              Time Period
            </h4>
            <p className="pb-1 mt-2 text-3xl text-blue-700 rotate-90 md:rotate-0 fade-in-out">
              →
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-3 md:mb-0">
            <DateInput
              title="From:"
              setDate={setDateFrom}
              value={dateFrom}
              currentDate={formattedDate}
              max={dateTo}
            />
            <DateInput
              title="To:"
              setDate={setDateTo}
              value={dateTo}
              min={dateFrom}
              max={formattedDate}
            />
          </div>
        </div>
        <ResetButton resetDates={resetDates} />
      </div>
    </div>
  );
};

export default CurrencyChart;
