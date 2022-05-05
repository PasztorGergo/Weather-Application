import React from "react";
import { WeatherCard } from "./components";
import { useWeather } from "./hooks/WeatherProvider";
import Weather from "./models/Weather";

function App() {
  const weather: Weather = useWeather();
  return (
    <div className="cardContainer">
      {weather?.forecast.forecastday.map(({ day }, i) => (
        <WeatherCard key={i} day={day} />
      ))}
    </div>
  );
}

export default App;
