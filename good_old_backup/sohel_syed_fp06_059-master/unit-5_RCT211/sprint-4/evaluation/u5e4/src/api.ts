import axios, { AxiosResponse } from "axios";

export interface bookObj {
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id: number;
}
export const addBook = async (bookData: bookObj) => {
  const res: AxiosResponse = await axios.post(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
    bookData
  );
  return res.data;
};

export const getBooks = async (): Promise<bookObj[]> => {
  const res = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
  );
  return res.data;
};

export const updateQuantity = async (id: number) => {
  const res: AxiosResponse<bookObj> = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`
  );
  const payload = { quantity: res.data.quantity };
  const data: AxiosResponse<bookObj> = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,
    payload
  );
  return data.data;
};

// export const deleteBook = () => {};
