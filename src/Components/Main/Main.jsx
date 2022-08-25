import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.scss";
import Home from "../../Pages/Home/Home";
import Apple from "../../Pages/Apple/Apple";
import Business from "../../Pages/Business/Business";
import Tesla from "../../Pages/Tesla/Tesla";
import Todo from "../../Pages/Todo/Todo";
import Bookmark from "../Bookmark/Bookmark";
import Calculator from "../Calculator/Calculator";
import CalculatorPage from "../../Pages/CalculatorPage/CalculatorPage";
import Article from "../../Pages/Article/Article";
function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"apple"} element={<Apple />} />
            <Route path={"tesla"} element={<Tesla />} />
            <Route path={"business"} element={<Business />} />
            <Route path="/:title" element={<Article />} />
            <Route path={"todo"} element={<Todo />} />
            <Route path={"bookmark"} element={<Bookmark />} />
            <Route path={"calculator"} element={<CalculatorPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Main;
