import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
export const queryClient = new QueryClient();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
};

export const fetchProducts = async () => {
  const response = await axios.get(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    options
  );

  if (!response.data) {
    const error = new Error("Can't fetch products ! please try again");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.data;
};

export const fetchProductDetail = async (id) => {
  const response = await axios.get(
    `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
    options
  );

  if (!response.data) {
    const error = new Error("Can't find this products ! please try again");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.data;
};
