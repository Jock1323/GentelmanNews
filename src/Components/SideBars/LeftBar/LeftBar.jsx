import React from "react";
import { NavLink } from "react-router-dom";
import "./leftbar.scss";
function LeftBar({ className }) {
  return (
    <>
      <aside className={`left-bar ${className}`}>
        {/* <i class="fa-solid fa-sun light"></i> */}
        <span className="mode">
          <i className="fa-solid fa-moon dark"></i>
          <span className="left__item-text">Dark</span>
        </span>
        <ul className="left__list">
          <span className="mode-mini mode">
            <i className="fa-solid fa-moon dark"></i>
            <span className="left__item-text">Dark</span>
          </span>
          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              `left__item ${isActive ? "left__item-active" : ""}`
            }
          >
            <i className="fa-solid fa-bookmark bookmark"></i>
            <span className="left__item-text">Bookmark</span>
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `left__item ${isActive ? "left__item-active" : ""}`
            }
          >
            <i className="fa-solid fa-list-check bookmark"></i>
            <span className="left__item-text">List</span>
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `left__item ${isActive ? "left__item-active" : ""}`
            }
          >
            <i className="fa-solid fa-calculator bookmark"></i>
            <span className="left__item-text">Calculator</span>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}

export default LeftBar;
