import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import InfiniteScroll from "./components/infiniteObserver/infiniteObserver";
import ModalApp from "./components/Modal/ModalApp";
import PaginationApp from "./components/Pagination/PaginationApp";
import SkeletonApp from "./components/Skeleton/skeletonApp";
import TodoList from "./components/todoList/todoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarouselContainer />}></Route>
        <Route path="/infinite" element={<InfiniteScroll />}></Route>
        <Route path="/modal" element={<ModalApp />}></Route>
        <Route path="/skeleton" element={<SkeletonApp />}></Route>
        <Route path="/pagination" element={<PaginationApp />}></Route>
        <Route path="/todoList" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
