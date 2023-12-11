import { cartAction } from "./cart";
const defaultCartState = 0;
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecomm-4276b-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.updateCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || defaultCartState,
          totalAmount: cartData.totalAmount || defaultCartState,
        })
      );
    } catch (error) {
      throw new Error("Could not fetch cart...");
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://ecomm-4276b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      return response.json();
    };

    try {
      await sendRequest();
    } catch (error) {
      throw new Error("Cart Data Failed");
    }
  };
};
