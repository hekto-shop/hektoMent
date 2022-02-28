import { db } from "../config/config";

export const submitOrder = async (data) => {
  const userDocRef = db.doc(`/users/${data.userId}`);

  const now = Date.now();
  const timeForDelivery = 60 * 60 * 24 * 3 * 1000;
  const deliveryDate = new Date(now + timeForDelivery);

  const ordersRef = db.doc(`/orders/${data.userId}-${now}`);

  const orderedProduct = data.orderedItems.map((item) => {
    const productRef = db.doc(`/products/${item.itemId}`);

    return { quantity: item.quantity, product: productRef };
  });

  ordersRef.set({
    order_Owner: userDocRef,
    order_estimation: deliveryDate,
    order_fulfill: "done",
    order_status: "Not shipped",
    ordered_product: orderedProduct,
    contact_details: data.contactDetails,
  });
};
