export const productListReducer = (
  products,
  sales,
  sortType,
  searchValue,
  brandValue,
  discountValue,
  priceValue,
  colorValue,
  categoryValue,
  raitingValue
) => {
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
    })
    .filter((product) => {
      if (brandValue === "all") return true;

      const brandArr = brandValue.split("+");
      return brandArr.includes(product.brand);
    })
    .filter((product) => {
      if (discountValue === 0) return true;

      return sales
        .map((item) => item.product.productCode)
        .includes(product.productCode);
    })
    .filter((product) => {
      if (discountValue === 0) return true;
      const productDiscount = sales.find((prod) => {
        const res = product.productCode === prod.product.productCode;
        return res;
      })?.amount;

      return productDiscount && productDiscount >= discountValue;
    })
    .filter((product) => {
      if (!raitingValue || raitingValue === "") return true;
      const raitingLength = product.rating.ratings.length;
      const sumOfRaitings = product.rating.ratings.reduce((acc, i) => {
        return acc + i;
      }, 0);
      const raitingArr = raitingValue.split("+");
      const averageRaiting = Math.round(sumOfRaitings / raitingLength / 10 / 2);
      return raitingArr.includes(averageRaiting.toString());
    })
    .filter((product) => {
      if (!categoryValue || categoryValue === "all") return true;
      const catArr = categoryValue.split("+");
      return catArr.includes(product.category);
    })
    .filter((product) => {
      if (!priceValue || priceValue === "0") return true;
      const priceArr = priceValue.split(" ");
      if (priceArr[1] === "") {
        return product.price >= +priceArr[0];
      }
      return product.price >= +priceArr[0] && product.price <= +priceArr[1];
    })
    .filter((product) => {
      if (!colorValue || colorValue === "all") return true;
      return product.color.some((col) => colorValue.includes(col));
    });

  return productList;
};

export const makeSlice = (products, currentPage, perPage) =>
  products.slice((currentPage - 1) * perPage, perPage * currentPage);
