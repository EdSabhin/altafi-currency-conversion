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

  if (dateData?.rates) {
    ratesHistory = Object.entries(dateData.rates).map(([date, rates]) => ({
      date,
      USD: rates.USD,
      CAD: rates.CAD,
      AUD: rates.AUD,
      NZD: rates.NZD,
    }));
  } else if (history?.rates) {
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
    <div className="w-full md:w-[70%] lg:w-[85%] xl:w-[70%] h-full flex rounded-t-md">
      <div className="w-full h-full flex flex-col border border-slate-200 bg-white rounded-md">
        <div className="w-full flex flex-col text-center lg:text-start gap-8 py-6 md:px-5 text-2xl font-semibold bg-[#F2F7FF]">
          <h2 className="px-2">EUR against Western Dollars</h2>
          <h3 className="pl-2 flex flex-col lg:flex-row items-center gap-6 lg:gap-4 mb-4">
            Period Selected:{" "}
            <span className="flex flex-col md:flex-row gap-4 lg:gap-3 items-center">
              <span className="pt-1 pb-2 px-3 bg-[#021431] text-pulse text-[#a3c6ff] text-[1.25rem] underline underline-offset-4 decoration-1 decoration-dotted rounded-[0.3rem]">
                {dateFrom}
              </span>{" "}
              to{" "}
              <span className="pt-1 pb-2 px-3 bg-[#021431] text-pulse-stagger text-[#a3c6ff] text-[1.25rem] underline underline-offset-4 decoration-1 decoration-dotted rounded-[0.3rem]">
                {dateTo}
              </span>
            </span>
          </h3>
        </div>

        <AreaChart
          className="w-full py-8 px-4 bg-slate-50"
          data={ratesHistory}
          index="date"
          categories={["USD", "CAD", "AUD", "NZD"]}
          colors={["purple", "indigo", "sky", "emerald"]}
          valueFormatter={dataFormatter}
          curveType="natural"
          showYAxis={true}
          showGridLines={true}
          maxValue={2.75}
          allowDecimals={true}
        />
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 pt-8 pb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <h4 className="flex items-center py-7 md:pt-10 lg:py-2 lg:px-8 border-t lg:border-t-0 border-blue-500 lg:border-l rounded-md text-md font-semibold">
              Time Period
            </h4>
            <p className="pb-1 mt-2 text-3xl text-blue-700 rotate-90 lg:rotate-0 fade-in-out">
              →
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mb-3 lg:mb-0">
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
