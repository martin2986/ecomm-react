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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dc8219f916mshd7403d6236967e7p14aaf7jsn591470712e90",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};

export const fetchAsos = async () => {
  const response = await fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    options
  );

  if (!response.ok) {
    return json({ message: "Could not find Products...." }, { status: 500 });
  }
  return response.json();
};

export const fetchAsosProduct = async (id) => {
  const response = await fetch(
    `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
    options
  );

  if (!response.ok) {
    return json({ message: "Could not find Products...." }, { status: 500 });
  }
  return response.json();
};
