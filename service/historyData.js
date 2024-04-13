export const historyData = async () => {
  try {
    const res = await fetch(
      "https://api.frankfurter.app/1999-01-04..?to=USD,CAD,AUD,NZD,HKD,SGD"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
