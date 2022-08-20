import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.scss";
import Apple from "../../Pages/Apple/Apple";
import Business from "../../Pages/Business/Business";
import Tesla from "../../Pages/Tesla/Tesla";
import Todo from "../../Pages/Todo/Todo";
import Bookmark from "../Bookmark/Bookmark";
import Calculator from "../Calculator/Calculator";
function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path={"apple"} element={<Apple />} />
            <Route path={"tesla"} element={<Tesla />} />
            <Route path={"business"} element={<Business />} />
            <Route path={"todo"} element={<Todo />} />
            <Route path={"bookmark"} element={<Bookmark />} />
            <Route path={"calculator"} element={<Calculator />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Main;
