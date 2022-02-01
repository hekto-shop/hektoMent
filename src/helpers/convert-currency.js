// USD is a base currency
const exRates = { USD: 1, GEL: 3.2, EUR: 0.89 };

export const convertCurrency = (amount, from, to) => {
  const USD = +amount / exRates[from];
  return USD * exRates[to];
};
