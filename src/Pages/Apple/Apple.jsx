import React, { useState, useEffect } from "react";
import Modal from "../../Components/Modal/Modal";
import Loader from "../../Components/Loader/Loader";
import Get from "../../API/Get/Get";
import "./apple.scss";
import { Link } from "react-router-dom";
function Apple() {
  const [appleInfo, setAppleInfo] = useState([]);
  const [load, setLoad] = useState(false);
  const appleData = async () => {
    setLoad(true);
    const apple = await fetch(Get.appleData());
    const result = await apple.json();
    setAppleInfo(result);
    setLoad(false);
  };
  useEffect(() => {
    appleData();
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
