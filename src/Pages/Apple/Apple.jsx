import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import Get from "../../API/Get/Get";
import "./apple.scss";
import { Link } from "react-router-dom";
function Apple() {
  const [appleInfo, setAppleInfo] = useState([]);
  // const [load, setLoad] = useState(false);
  // const appleData = async () => {
  //   // setLoad(true);
  //   const apple = await fetch(
  //     `https://newsapi.org/v2/everything?q=apple&from=2022-08-22&to=2022-08-22&sortBy=popularity&page=1&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`
  //   );
  //   const result = await apple.json();
  //   setAppleInfo(result);
  //   // setLoad(false);
  // };
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2022-08-22&to=2022-08-22&sortBy=popularity&page=1&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`
    )
      .then((res) => res.json())
      .then((data) => setAppleInfo(data));
  }, []);
  return (
    <>
      <div className="apple">
        {appleInfo.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="apple__list">
              {appleInfo.articles.map((item, index) => (
                <Link to={`/${item.title}`} className="apple__item" key={index}>
                  <img
                    src={item.urlToImage}
                    alt="an article image"
                    className="apple__item-img"
                  />
                  <h4 className="apple__item-title">{item.title}</h4>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Apple;
