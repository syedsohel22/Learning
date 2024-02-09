import axios, { AxiosResponse } from "axios";

export interface Productobj {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id: number;
}

export const addProduct = async (myProduct: Productobj) => {
  // Add product functionality here
  const res: AxiosResponse = await axios.post(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,
    myProduct
  );

  return res.data;
};

export const getProducts = async (): Promise<Productobj[]> => {
  // Get products functionality
  const res = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
  );
  return res.data;
};

export const updateLike = async (id: number): Promise<Productobj[]> => {
  // Update like functionality

  const res = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  );

  return res.data;
};

export const updateDisLike = async (id: number): Promise<Productobj[]> => {
  // Update dislike functionality
  const res = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  );
  return res.data;
};

export const deleteProduct = async (id: number): Promise<Productobj[]> => {
  const res = await axios.delete(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  );
  // Delete functionality

  return res.data;
};
