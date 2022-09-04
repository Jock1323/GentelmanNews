import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.scss";
import Home from "../../Pages/Home/Home";
import Apple from "../../Pages/Apple/Apple";
import Business from "../../Pages/Business/Business";
import Tesla from "../../Pages/Tesla/Tesla";
import Todo from "../../Pages/Todo/Todo";
import Bookmark from "../Bookmark/Bookmark";
import CalculatorPage from "../../Pages/CalculatorPage/CalculatorPage";
import Article from "../../Pages/Article/Article";
function Main() {
  // const [appleBackPage, setAppleBackPage] = useState(1);
  const [pathname, setPathname] = useState("");
  const getLocation = (path) => {
    setPathname(path);
  };
  return (
    <>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={"apple"}
              element={<Apple getLocation={getLocation} />}
            />
            <Route
              path={"tesla"}
              element={<Tesla getLocation={getLocation} />}
            />
            <Route
              path={`${pathname.slice(
                1,
                pathname.toLocaleLowerCase().length
              )}/:title`}
              element={<Article pathname={pathname} />}
            />
            <Route
              path={"business"}
              element={<Business getLocation={getLocation} />}
            />
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
