import React from "react";
import { Current } from "../../models/Current";
import { Location } from "../../models/Location";
import Styles from "./info.module.css";

export function UserInfo({ location, current }: any) {
  const loc: Location = location;
  const cur: Current = current;
  return (
    <div className={Styles.UserInfo}>
      <h3 className={Styles.city}>
        {loc?.name}, {loc?.country}
      </h3>
      <div className={Styles.current}>
        <img src={cur.condition.icon} alt={cur.condition.text} />
        <p>{cur.temp_c}°C</p>
      </div>
    </div>
  );
}
