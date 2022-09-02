import React, { useEffect, useRef, useState } from "react";
import "./pagination.scss";
function Pagination({ totalPage, setApplePage, controlPage }) {
  const [page, setPage] = useState(4);
  const [initialPage, setInitialPage] = useState(0);
  const pages = [];
  let restoredPages = [];
  for (let number = 1; number <= Math.ceil(totalPage / 10); number++)
    pages.push(number);
  restoredPages = pages.slice(initialPage, page);
  const nextPageFunc = () => {
    if (controlPage < pages.length) {
      setInitialPage(initialPage + 1);
      setPage(page + 1);
      setApplePage(controlPage + 1);
    }
  };
  const prevPageFunc = () => {
    if (controlPage > 1) {
      setInitialPage(initialPage - 1);
      setPage(page - 1);
      setApplePage(controlPage - 1);
    } else {
      setInitialPage(0);
      setPage(4);
      setApplePage(1);
    }
  };
  return (
    <>
      <div className="paginate__wrapper">
        <button className="prev prev-active" onClick={prevPageFunc}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <ul className="paginate">
          {restoredPages.map((item, index) => (
            <li
              className="paginate__item"
              key={index}
              onClick={() => {
                setApplePage(item);
              }}
            >
              <a href="#" className="paginate__link">
                {item}
              </a>
            </li>
          ))}
          <li className="paginate__item">
            <a href="#" className="paginate__link">
              ...
            </a>
          </li>
        </ul>
        <button className="next" onClick={nextPageFunc}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default Pagination;
