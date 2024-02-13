export const yearData = async (dateFrom, dateTo) => {
  console.log("DATES FROM TO", dateFrom, dateTo);
  try {
    const res = await fetch(
      `https://api.frankfurter.app/${dateFrom}..${dateTo}?to=USD,CAD,AUD,NZD,HKD,SGD`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
