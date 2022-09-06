import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import Get from "../../API/Get/Get";
import "../Apple/apple.scss";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
function Business({ getLocation }) {
  const [businessInfo, setBusinessInfo] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const businessData = async () => {
    const businessAns = await fetch(Get.useBusinessData(page));
    const result = await businessAns.json();
    setBusinessInfo(result);
  };
  useEffect(() => {
    businessData();
    getLocation(location.pathname);
  }, [page]);
  return (
    <>
      <div className="apple">
        {businessInfo.status === "error" ? (
          <p className="status-error">
            status error please back to home page or refresh the site
          </p>
        ) : (
          ""
        )}
        {businessInfo.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="apple__list">
              {businessInfo?.articles?.map((item, index) => (
                <Link to={`${item?.title}`} className="apple__item" key={index}>
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
              totalPage={businessInfo.totalResults}
              setApplePage={setPage}
              controlPage={page}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Business;
