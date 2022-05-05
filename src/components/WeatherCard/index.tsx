import React from "react";
import { Day } from "../../models/Forecast";
import Styles from "./card.module.css";

export function WeatherCard({ day }: any) {
  const weatherData: Day = day;
  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img
          src={weatherData.condition.icon}
          alt={weatherData.condition.text}
          className={Styles.icon}
        />
      </div>
      <div className={Styles.cardBody}>
        <div className={Styles.temperature}>
          <div className={Styles.minTemp}>
            <p className={Styles.info}>
              Min:{Math.round(weatherData.mintemp_c)}°C
            </p>
            <div className={Styles.maxTemp}>
              <p className={Styles.info}>
                Max:{Math.round(weatherData.maxtemp_c)}°C
              </p>
            </div>
          </div>
          <div className={Styles.rainChance}>
            <p>{weatherData.daily_chance_of_rain} %</p>
          </div>
        </div>
      </div>
    </div>
  );
}
