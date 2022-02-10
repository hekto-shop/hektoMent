import { db } from "../config/config";

export const rateProduct = async (product, rating, rater) => {
  const { itemId } = product;
  const docRef = db.doc(`/products/${itemId}`);

  const { ratings, raters } = product.rating;
  if (raters.includes(rater)) return;

  return docRef.update({
    rating: {
      ratings: [...ratings, rating],
      raters: [...raters, rater],
    },
  });
};
