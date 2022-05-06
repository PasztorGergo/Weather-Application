import React, { useMemo } from "react";
import { forecastday } from "../../models/Forecast";
import HourlyCard from "../HourlyCard";
import Styles from "./hour.module.css";

export function HourlyWeather({ forecast }: { forecast: forecastday }) {
  const currentDate = useMemo(
    () => new Date().getHours(),
    [new Date().getHours()]
  );
  return (
    <div className={Styles.hourDisplay}>
      {forecast.hour.slice(currentDate).map((hour, idx) => (
        <HourlyCard key={idx} hour={hour} />
      ))}
    </div>
  );
}
