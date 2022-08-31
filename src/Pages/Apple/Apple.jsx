import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import Get from "../../API/Get/Get";
import "./apple.scss";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
function Apple() {
  const [appleInfo, setAppleInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const appleData = async () => {
    setLoad(true);
    const apple = await fetch(Get.appleData(page));
    const result = await apple.json();
    setAppleInfo(result);
    setLoad(false);
  };
  useEffect(() => {
    appleData();
  }, [page]);
  console.log();
  // console.log(appleInfo.totalResults);
  return (
    <>
      <div className="apple">
        {appleInfo.status === "error" ? (
          <p className="status-error">
            {" "}
            status error please back to home page or refresh the site
          </p>
        ) : (
          ""
        )}
        {appleInfo.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="apple__list">
              {appleInfo?.articles?.map((item, index) => (
                <Link
                  to={`/${item?.title}`}
                  className="apple__item"
                  key={index}
                >
                  <img
                    src={item?.urlToImage}
                    alt="an article image"
                    className="apple__item-img"
                  />
                  <h4 className="apple__item-title">{item?.title}</h4>
                </Link>
              ))}
            </div>
            <Pagination
              totalPage={appleInfo.totalResults}
              setApplePage={setPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Apple;
