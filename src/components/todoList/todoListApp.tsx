import React from "react";
import { atom, RecoilRoot, selector, useRecoilValue } from "recoil";
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
export default function TodoListApp() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <RecoilRoot>
      <React.Suspense>
        <Calendar></Calendar>
      </React.Suspense>
    </RecoilRoot>
  );
}
