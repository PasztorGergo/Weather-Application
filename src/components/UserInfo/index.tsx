import React, { useMemo } from "react";
import { useWeather } from "../../hooks/WeatherProvider";
import { Current } from "../../models/Current";
import { Forecast } from "../../models/Forecast";
import { Location } from "../../models/Location";
import Weather from "../../models/Weather";
import { HourlyWeather } from "../HourlyWeather";
import Styles from "./info.module.css";

export function UserInfo({ data }: { data: Weather }) {
  const { dayIndex, getWeatherIcon } = useWeather();
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
        {getWeatherIcon(current.condition.code, current.is_day)}
        <p>{Math.round(current.temp_c)}°C</p>
      </div>
      <HourlyWeather forecast={forecast} />
    </div>
  );
}
