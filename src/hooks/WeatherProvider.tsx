import React, { useContext, useEffect, useState, createContext } from "react";
import Weather from "../models/Weather";

const weatherContext = createContext<any>({});

export function useWeather() {
  return useContext(weatherContext);
}

export function WeatherProvider({ children }: any) {
  const [weatherObject, setWeatherObject] = useState<Weather>();
  const [location, setLoaction] = useState<string>("Budapest");
  const [loading, setLoading] = useState(true);

  const request = async (loc: string): Promise<Weather> => {
    const weatherReq = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=baeb8614fe84472ebb942836220505&q=${loc}&days=3`
    );
    const res = await weatherReq.json();
    return res;
  };

  useEffect(() => {
    request(location).then((data) => setWeatherObject(data));
    setLoading(false);
  }, [location]);
  return (
    <weatherContext.Provider value={weatherObject}>
      {!loading && children}
    </weatherContext.Provider>
  );
}
