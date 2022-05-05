import React from "react";
import { forecastday } from "../../models/Forecast";
import Styles from "./card.module.css";
import { WiRaindrop } from "react-icons/wi";

export function WeatherCard({ data }: any) {
  const weatherData: forecastday = data;
  return (
    <div className={Styles.card}>
      <h4 className={Styles.day}>
        {new Date(weatherData.date).toString().split(" ")[0]}
      </h4>
      <div className={Styles.cardHeader}>
        <img
          src={weatherData.day.condition.icon}
          alt={weatherData.day.condition.text}
          className={Styles.icon}
        />
      </div>
      <div className={Styles.cardBody}>
        <div className={Styles.temperature}>
          <div aria-details="maximum temperature" className={Styles.temp}>
            <span className={Styles.maxTemp}>
              {Math.round(weatherData.day.maxtemp_c)}°C
            </span>
          </div>
          <div aria-details="minimum temperature" className={Styles.temp}>
            <span className={Styles.minTemp}>
              {Math.round(weatherData.day.mintemp_c)}°C
            </span>
          </div>
          <div aria-details="chance of rain" className={Styles.rainChance}>
            <p>
              <WiRaindrop style={{ fontSize: "2rem" }} />
              {weatherData.day.daily_chance_of_rain} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
