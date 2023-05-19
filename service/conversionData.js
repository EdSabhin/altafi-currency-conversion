export const conversionData = async (amount, from, to) => {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
