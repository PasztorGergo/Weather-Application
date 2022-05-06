import React, { useMemo } from "react";
import { useWeather } from "../../hooks/WeatherProvider";
import { Forecast } from "../../models/Forecast";
import HourlyCard from "../HourlyCard";
import Styles from "./hour.module.css";

export function HourlyWeather({ forecast }: { forecast: Forecast }) {
  const { dayIndex } = useWeather();
  const currentDate = useMemo(
    () => new Date().getHours(),
    [new Date().getHours()]
  );
  return (
    <div className={Styles.hourDisplay}>
      {dayIndex > 0
        ? forecast.forecastday[dayIndex].hour.map((hour, idx) => (
            <HourlyCard key={idx} hour={hour} />
          ))
        : forecast.forecastday[dayIndex].hour
            .slice(currentDate)
            .map((hour, idx) => <HourlyCard key={idx} hour={hour} />)}
    </div>
  );
}
