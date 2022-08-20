import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LeftBar from "../SideBars/LeftBar/LeftBar";
import Logo from "../../assets/images/logo.svg";
import Clock from "../Clock/Clock";
import "./header.scss";
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeModal = (evt) => {
      if (evt.code === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", closeModal);
    }
    return () => document.removeEventListener("keydown", closeModal);
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <Link to="/" className="header__logo">
              <img src={Logo} alt="logo" width={50} className="header__img" />
              <span className="logo-text">ENTELMAN</span>
            </Link>
            <i
              className="fa-solid fa-bars toggle"
              onClick={() => setOpen(true)}
            ></i>
            <ul className={`header__list ${open ? "header__list-active" : ""}`}>
              <i
                className="fa-solid fa-xmark close"
                onClick={() => setOpen(false)}
              ></i>
              <li className="header__item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  HOME
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/apple"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  APPLE
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/tesla"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  TESLA
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  TOP BUSINESS HEADLINES IN USA
                </NavLink>
              </li>
              <span className="hidden-bar">
                <LeftBar className="hidden-bar" />
              </span>
            </ul>
            <span
              className={`header__overlay ${
                open ? "header__overlay-active" : ""
              }`}
              onClick={() => setOpen(false)}
            ></span>
            <span className="header__time">
              <Clock />
            </span>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
