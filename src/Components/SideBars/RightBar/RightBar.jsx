import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Get from "../../../API/Get/Get";
import "./rightbar.scss";
function RightBar() {
  const [weather, setWeather] = useState([]);
  const [country, setCountry] = useState("Tashkent");
  const weatherInfo = async () => {
    const data = await fetch(Get.weatherData(country));
    const result = await data.json();
    setWeather([result]);
  };
  const weatherSend = (e) => {
    e.preventDefault();
    setCountry(e.target[0].value.toLowerCase());
    e.target[0].value = "";
  };
  useEffect(() => {
    weatherInfo();
  }, [country]);
  console.log(weather);
  return (
    <>
      <aside className="right-bar">
        <form className="weather__form" onSubmit={weatherSend}>
          <input
            type="text"
            name="weather-input"
            id="weather-input"
            className="weather__input"
          />
          <button className="weather__btn">Search</button>
        </form>
        {weather.length > 0 && weather[0].cod !== "404" ? (
          <div className="weather-info">
            <h4 className="weather-info__title">{weather[0].name}</h4>
            <p className="weather-info__text">
              Temp <i className="fa-solid fa-temperature-three-quarters"></i> :
              <span className="weather-info__text-temp">
                {weather[0].main.temp}
              </span>
              &deg;C
            </p>
            <p className="weather-info__text">
              Desc <i className="fa-solid fa-pen"></i> :
              <span className="weather-info__text-temp">
                {weather[0].weather[0].description}
              </span>
            </p>
            <p className="weather-info__text">
              Speed <i className="fa-regular fa-flag"></i> :
              <span className="weather-info__text-temp">
                {weather[0].wind.speed} m/s
              </span>
            </p>
          </div>
        ) : (
          <p className="weather-error">Oops something went wrong</p>
        )}
      </aside>
    </>
  );
}

export default RightBar;
