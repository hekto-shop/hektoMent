export const selectTrendingItems = (list, qty = 4) => {
  const uniqueIdList = new Set(list.map((el) => el.productCode));
  const shrinkedList = [];

  uniqueIdList.forEach((id) => {
    const orderSummary = { quantity: 0, productCode: id };
    list.forEach((order) => {
      if (order.productCode === id) orderSummary.quantity += order.quantity;
    });

    shrinkedList.push(orderSummary);
  });

  return shrinkedList
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, qty)
    .map((el) => el.productCode);
};
