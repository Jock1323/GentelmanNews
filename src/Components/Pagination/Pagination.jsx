import React, { useRef, useState } from "react";
import "./pagination.scss";
function Pagination({ totalPage, setApplePage }) {
  const [page, setPage] = useState(4);
  const [initialPage, setInitialPage] = useState(0);
  const [next, setNext] = useState(1);
  // const [reRenderPage, setReRenderPage] = useState(1);
  const prevDisabled = useRef();
  let pages = [];
  let restoredPages = [];
  for (let number = 1; number <= Math.ceil(totalPage / 10); number++)
    pages.push(number);
  restoredPages = pages.slice(initialPage, page);
  // console.log(next);
  // console.log(restoredPages);
  console.log(initialPage);
  console.log(page);
  // console.log(prevDisabled.current.disabled);
  console.log(next);
  console.log(pages.length);
  return (
    <>
      <div className="paginate__wrapper">
        <button
          className="prev prev-active"
          ref={prevDisabled}
          onClick={() => {
            if (initialPage > 0) {
              setInitialPage(initialPage - 1);
              setPage(initialPage + 3);
            }
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <ul className="paginate">
          {restoredPages.map((item, index) => (
            <li className="paginate__item" key={index}>
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
        <button
          className="next"
          onClick={() => {
            if (page < pages.length || next < pages.length) {
              setInitialPage(initialPage + 1);
              setPage(page + 1);
              setNext(next + 1);
            } else {
              setInitialPage(pages.length - 4);
              setPage(pages.length);
              setNext(pages.length);
            }
            setApplePage(next);
          }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default Pagination;
