import { productActions } from "./product.js";
export const fetchProductsData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://store-cbbcb-default-rtdb.firebaseio.com/store/products.json"
      );

      if (!response.ok) {
        throw new Error("Failed to send data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const productsData = await sendRequest();
      if (productsData) {
        dispatch(productActions.replaceProducts(productsData));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendProductData = (product) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://store-cbbcb-default-rtdb.firebaseio.com/store/products.json",
        {
          method: "PATCH",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data!");
      }
    };

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
