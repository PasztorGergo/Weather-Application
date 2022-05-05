import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import Weather from "../models/Weather";

const weatherContext = createContext<any>({});

export function useWeather() {
  return useContext(weatherContext);
}

export function WeatherProvider({ children }: any) {
  const [weatherObject, setWeatherObject] = useState<Weather>();
  const [location, setLoaction] = useState<string>("Budapest");
  const [loading, setLoading] = useState(true);

  const request = async (loc: string): Promise<Weather | any> => {
    const weatherReq = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=baeb8614fe84472ebb942836220505&q=${loc}&days=3`
    );
    if (weatherReq.redirected) {
      return new Error("Wrong location or tz-id!");
    }
    return await weatherReq.json();
  };

  useEffect(() => {
    request(location)
      .then((data) => {
        if (!data.error) {
          setWeatherObject(data as Weather);
          toast.success("Loaction has been changed!");
        } else {
          toast.error("Wrong location or tz-id!");
        }
      })
      .finally(() => setLoading(false));

    return () => {};
  }, [location]);
  const value = { weatherObject, setLoaction };
  return (
    <weatherContext.Provider value={value}>
      {!loading && children}
    </weatherContext.Provider>
  );
}
