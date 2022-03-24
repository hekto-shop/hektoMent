export const getCategorySum = (myOrders, products) => {
  const myProducts = [];

  // Get ordered products with category property
  for (let arr in products) {
    for (let filter in myOrders) {
      if (products[arr].productCode === myOrders[filter].productCode) {
        myProducts.push(products[arr]);
      }
    }
  }

  // New Object with only 2 property
  let categorySpends = myProducts.map((item) => {
    return { category: item.category, price: item.price, id: item.itemId };
  });

  // Logic to sum prices if categories are the same
  for (let i = 0; i < myProducts.length; i++) {
    for (let j = i + 1; j < myProducts.length; j++) {
      if (myProducts[i].itemId === myProducts[j].itemId) {
        categorySpends[i].price += categorySpends[j].price;
      }
    }
  }

  // Remove duplicate objects from categoryPrice
  categorySpends = Array.from(new Set(categorySpends.map((a) => a.id))).map(
    (id) => {
      return categorySpends.find((a) => a.id === id);
    }
  );
  
  return categorySpends
};
