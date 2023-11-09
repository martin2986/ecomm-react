import { QueryClient } from "@tanstack/react-query";
import { json } from "react-router-dom";

export const queryClient = new QueryClient();

export const fetchProducts = async () => {
  const response = await fetch(
    "https://ecomm-4276b-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );

  if (!response.ok) {
    return json({ message: "Could not find Products...." }, { status: 500 });
  }
  return response.json();
};

export const fetchProduct = async ({ id, signal }) => {
  const response = await fetch(
    `https://ecomm-4276b-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
    { signal }
  );

  if (!response.ok) {
    return json(
      { message: "Could not find this Product...." },
      { status: 500 }
    );
  }
  return response.json();
};
