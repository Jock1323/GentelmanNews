import React, { useEffect, useState } from "react";
import "./home.scss";
import Get from "../../API/Get/Get";
import Apple from "../../assets/images/apple.png";
import Tesla from "../../assets/images/tesla.png";
import News from "../../assets/images/news.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="home">
        <h3 className="home__title">Choose the category</h3>
        <Link to="apple" className="home__info">
          <img src={Apple} alt=" a logo" width={120} />
          <h4 className="home__info-title">Apple News</h4>
        </Link>
        <Link className="home__info" to="tesla">
          <img src={Tesla} alt=" a logo" width={120} />
          <h4 className="home__info-title">tesla News</h4>
        </Link>
        <Link className="home__info" to="business">
          <img src={News} alt=" a logo" width={120} />
          <h4 className="home__info-title">business News</h4>
        </Link>
      </section>
    </>
  );
}

export default Home;
