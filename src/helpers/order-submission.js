import { db } from "../config/config";
import { convertCurrency } from "./convert-currency";
import { getCollectionLength } from "./get-collection-length";

export const submitOrder = async (data) => {
  const userDocRef = db.doc(`/users/${data.userId}`);

  const now = Date.now();
  const timeForDelivery = 60 * 60 * 24 * 3 * 1000;
  const deliveryDate = new Date(now + timeForDelivery);

  const updatedBudget = convertCurrency(
    data.updatedBudget,
    data.currency,
    "USD"
  );

  const ordersLength = await getCollectionLength("orders");

  const orderNumber = String(ordersLength + 1).padStart(5, "0");

  const ordersRef = db.doc(`/orders/${data.userId}-${now}`);

  const orderedProduct = data.orderedItems.map((item) => {
    const productRef = db.doc(`/products/${item.itemId}`);

    return {
      quantity: item.quantity,
      itemId: item.itemId,
      product: productRef,
    };
  });

  ordersRef.set({
    order_Owner: data.userId,
    order_estimation: deliveryDate,
    order_status: "pendingApproval",
    order_number: orderNumber,
    ordered_product: orderedProduct,
    contact_details: data.contactDetails,
    log: [{ date: new Date(now), action: "Order Submitted" }],
  });
  userDocRef.update({ budget: updatedBudget });
};
