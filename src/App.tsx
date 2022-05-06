import React, { useMemo } from "react";
import { LocationForm, UserInfo, WeatherCard } from "./components";
import { useWeather } from "./hooks/WeatherProvider";
import Weather from "./models/Weather";

function App() {
  const {
    weatherObject,
    setLoaction,
  }: { weatherObject: Weather; setLoaction: any } = useWeather();
  return (
    <>
      <UserInfo data={weatherObject} />
      <div className="cardContainer">
        {weatherObject?.forecast.forecastday.map((data: any, i: any) => (
          <WeatherCard key={i} data={data} />
        ))}
      </div>
      <LocationForm handleInput={setLoaction} />
    </>
  );
}

export default App;
