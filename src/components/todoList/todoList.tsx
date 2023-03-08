import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";
import Calendar from "./Calendar";

const todoIdState = atom({
  key: "todoIdState",
  default: 1,
});

const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return res.data;
  },
});
export default function TodoList() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      <Calendar></Calendar>
    </div>
  );
}
