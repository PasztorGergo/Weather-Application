import React from "react";
import { WiRaindrop } from "react-icons/wi";
import { Hour } from "../../models/Forecast";
import Styles from "./card.module.css";

export default function HourlyCard({ hour }: { hour: Hour }) {
  return (
    <div className={Styles.Card}>
      <div className={Styles.CardHeader}>
        <h5>{new Date(hour.time).getHours().toString().padStart(2, "0")}:00</h5>
        <img src={hour.condition.icon} alt={hour.condition.text} />
      </div>
      <div className="CardBody">
        {hour.chance_of_rain > 0 && (
          <div aria-details="chance of rain" className={Styles.rainChance}>
            <WiRaindrop style={{ fontSize: "2rem" }} />
            <p>{hour.chance_of_rain}%</p>
          </div>
        )}
        <div aria-details="maximum temperature" className={Styles.temp}>
          <span className={Styles.maxTemp}>{Math.round(hour.temp_c)}°C</span>
        </div>
      </div>
    </div>
  );
}
