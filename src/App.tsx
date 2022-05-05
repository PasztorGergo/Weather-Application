import React from "react";
import { LocationForm, UserInfo, WeatherCard } from "./components";
import { useWeather } from "./hooks/WeatherProvider";

function App() {
  const { weatherObject, setLoaction } = useWeather();
  return (
    <>
      <UserInfo
        location={weatherObject?.location}
        current={weatherObject?.current}
      />
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
