import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { RecoilRoot } from "recoil";

import reportWebVitals from "./reportWebVitals";
import Fallback from "./components/todoList/fallback";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <React.Suspense>
      <Router></Router>
    </React.Suspense>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
