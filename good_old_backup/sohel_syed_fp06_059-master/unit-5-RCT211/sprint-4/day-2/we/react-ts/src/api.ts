import axios from "axios";
import { Todo } from "./constant";

export const postTodo = (title: string) => {
  const newTodo: Todo = {
    title,
    status: false,
  };
  axios
    .post(`http://localhost:8080/todos`, newTodo)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getTodo = () => {
  return axios.get(`http://localhost:8080/todos`);
};

export const updateTodo = (id?: number | undefined, status?: boolean) => {
  return axios.patch(`http://localhost:8080/todos/${id}`, { status: !status });
};
