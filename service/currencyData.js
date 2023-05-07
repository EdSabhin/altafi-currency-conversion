const host = "api.frankfurter.app";

export const currencyData = async () => {
  try {
    const res = await fetch("https://api.frankfurter.app/currencies");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
