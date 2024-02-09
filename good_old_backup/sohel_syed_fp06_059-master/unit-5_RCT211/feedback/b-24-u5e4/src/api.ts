import axios, { Axios, AxiosResponse } from "axios";
import { formDataType } from "./Pages/AddProduct";
const URL = "";
export const addProduct = async (payload: formDataType) => {
  // Add product functionality here
  console.log(payload);
  const res: AxiosResponse<formDataType> = await axios.post(URL, payload);
  return res.data;
};

export const getProducts = async () => {
  // Get products functionality

  const res: AxiosResponse<formDataType[]> = await axios.get(URL);
  return res.data;
};

export const updateLike = async (id: number) => {
  // Update like functionality

  const res: AxiosResponse<formDataType> = await axios.get(`${URL}/${id}`);
  const payload = { like: res.data.like + 1 };
  const data: AxiosResponse<formDataType> = await axios.patch(
    `${URL}/${id}`,
    payload
  );
};

export const updateDisLike = async (id: number) => {
  // Update dislike functionality
  const res: AxiosResponse<formDataType> = await axios.get(`${URL}/${id}`);
  const payload = { like: res.data.dislike + 1 };
  const data: AxiosResponse<formDataType> = await axios.patch(
    `${URL}/${id}`,
    payload
  );
};

export const deleteProduct = () => {
  // Delete functionality
};
