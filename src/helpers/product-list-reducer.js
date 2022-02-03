export const productListReducer = (products, sortType, searchValue) => {
  const productList = products
    .sort((prod1, prod2) => {
      if (sortType === 0) {
        return prod1.arrivalDate.seconds - prod2.arrivalDate.seconds;
      } else if (sortType === 1) {
        return prod1.price - prod2.price;
      } else {
        return prod2.price - prod1.price;
      }
    })
    .filter((product) => {
      if (!searchValue) return true;
      return (
        product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.productCode.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  return productList;
};

export const makeSlice = (products, currentPage, perPage) =>
  products.slice((currentPage - 1) * perPage, perPage * currentPage);
