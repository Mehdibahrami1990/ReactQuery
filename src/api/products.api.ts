// import axios from "axios";
export const fetchProducts = async () => {
  const response = await fetch("http://localhost:4000/products");
  // throw new Error("Server Error");
  return (await response.json()) as ProductType[];
};
