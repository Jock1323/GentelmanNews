import React, { useEffect, useState } from "react";
import "./article.scss";
import { useParams, useNavigate } from "react-router-dom";
function Article({ pathname }) {
  const [innerData, setInnerData] = useState([]);
  const { title } = useParams();
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    fetch(
      ` https://newsapi.org/v2/everything?q=${title}&sortBy=publishedAt&apiKey=cd5989874f8649ebb2dca88790fc68e4`
    )
      .then((res) => res.json())
      .then((data) => setInnerData(data.articles));
  }, []);
  return (
    <>
      <article className="article">
        {innerData?.length > 0 ? (
          <>
            <img
              src={innerData[0]?.urlToImage}
              alt=" an article image"
              className="article__img"
            />
            <h3 className="article__title">{innerData[0]?.title}</h3>
            <p className="article__text">{innerData[0]?.description}</p>
            <span className="article__author">{innerData[0]?.author}</span>
            <br />
            <a
              href={`${innerData[0]?.url}`}
              target="_blank"
              className="article__link"
            >
              Read More
            </a>
            <br />
            <button className="article__btn-back" onClick={() => navigate(-1)}>
              Back
            </button>
          </>
        ) : (
          <p>error</p>
        )}
      </article>
    </>
  );
}

export default Article;
