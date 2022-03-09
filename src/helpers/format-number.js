export const formatCurrency = (num = 0, cur = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cur,
  }).format(+num);
};
