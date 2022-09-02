import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import Get from "../../API/Get/Get";
import "../Apple/apple.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
function Tesla({ getLocation }) {
  const [teslaInfo, setTeslaInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const location = useLocation();
  const teslaData = async () => {
    setLoad(true);
    const tesla = await fetch(Get.teslaData(page));
    const result = await tesla.json();
    setTeslaInfo(result);
    setLoad(false);
  };
  console.log(teslaInfo);
  useEffect(() => {
    teslaData();
    getLocation(location.pathname);
  }, [page]);
  return (
    <>
      <div className="apple">
        {teslaInfo.status === "error" ? (
          <p className="status-error">
            status error please back to home page or refresh the site
          </p>
        ) : (
          ""
        )}
        {teslaInfo.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="apple__list">
              {teslaInfo?.articles?.map((item, index) => (
                <Link
                  to={`/${item?.title}`}
                  className="apple__item"
                  key={index}
                  // onClick={() => getLocation(location.pathname)}
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
              totalPage={teslaInfo.totalResults}
              setApplePage={setPage}
              controlPage={page}
            />
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Tesla;
