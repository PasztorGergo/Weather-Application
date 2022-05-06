import React, { useMemo } from "react";
import { Current } from "../../models/Current";
import { Forecast } from "../../models/Forecast";
import { Location } from "../../models/Location";
import Weather from "../../models/Weather";
import { HourlyWeather } from "../HourlyWeather";
import Styles from "./info.module.css";

export function UserInfo({ data }: { data: Weather }) {
  const {
    location,
    current,
    forecast,
  }: { location: Location; current: Current; forecast: Forecast } = useMemo(
    () => ({
      location: data.location,
      current: data.current,
      forecast: data.forecast,
    }),
    [data]
  );
  return (
    <div className={Styles.UserInfo}>
      <h3 className={Styles.city}>
        {location?.name}, {location?.country}
      </h3>
      <div className={Styles.current}>
        <img src={current.condition.icon} alt={current.condition.text} />
        <p>{current.temp_c}°C</p>
      </div>
      <HourlyWeather forecast={forecast.forecastday[0]} />
    </div>
  );
}
