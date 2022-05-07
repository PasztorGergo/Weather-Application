import React, { useMemo } from "react";
import { forecastday } from "../../models/Forecast";
import Styles from "./card.module.css";
import { WiRaindrop } from "react-icons/wi";
import { useWeather } from "../../hooks/WeatherProvider";

export function WeatherCard({ data, idx }: { data: forecastday; idx: number }) {
  const { setDayIndex, getWeatherIcon } = useWeather();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDayIndex(idx);
  };
  return (
    <div
      className={Styles.card}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <h4 className={Styles.day}>
        {new Date(data.date).toString().split(" ")[0]}
      </h4>
      <div className={Styles.cardHeader}>
        <img src={data.day.condition.icon} alt="" />
      </div>
      <div className={Styles.cardBody}>
        <div className={Styles.temperature}>
          <div aria-details="maximum temperature" className={Styles.temp}>
            <span className={Styles.maxTemp}>
              {Math.round(data.day.maxtemp_c)}°C
            </span>
          </div>
          <div aria-details="minimum temperature" className={Styles.temp}>
            <span className={Styles.minTemp}>
              {Math.round(data.day.mintemp_c)}°C
            </span>
          </div>
          <div aria-details="chance of rain" className={Styles.rainChance}>
            <p>
              <WiRaindrop style={{ fontSize: "2rem" }} />
              {data.day.daily_chance_of_rain} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
