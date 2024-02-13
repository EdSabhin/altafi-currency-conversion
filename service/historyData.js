export const historyData = async () => {
  try {
    const res = await fetch(
      "https://api.frankfurter.app/2000-05-17..?to=USD,CAD,AUD,NZD,HKD,SGD"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
