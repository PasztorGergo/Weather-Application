import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import Weather from "../models/Weather";
import * as wi from "react-icons/wi";

const weatherContext = createContext<any>({});

export function useWeather() {
  return useContext(weatherContext);
}

export function WeatherProvider({ children }: any) {
  const [weatherObject, setWeatherObject] = useState<Weather>();
  const [location, setLoaction] = useState<string>("Budapest");
  const [loading, setLoading] = useState(true);
  const [dayIndex, setDayIndex] = useState(0);

  const request = async (loc: string): Promise<Weather | any> => {
    const weatherReq = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=baeb8614fe84472ebb942836220505&q=${loc}&days=3`
    );
    if (weatherReq.redirected) {
      return new Error("Wrong location or tz-id!");
    }
    return await weatherReq.json();
  };

  const getWeatherIcon = (code: number) => {
    switch (code) {
      case 1000:
          return <wi/>;
        break;
      case 1003:
          return <wi[""] />;
        break;
      case 1006:
          return <wi[""] />;
        break;
      case 1009:
          return <wi[""] />;
        break;
      case 1030:
          return <wi[""] />;
        break;
      case 1063:
          return <wi[""] />;
        break;
      case 1066:
          return <wi[""] />;
        break;
      case 1069:
          return <wi[""] />;
        break;
      case 1072:
          return <wi[""] />;
        break;
      case 1087:
          return <wi[""] />;
        break;
      case 1114:
          return <wi[""] />;
        break;
      case 1117:
          return <wi[""] />;
        break;
      case 1135:
          return <wi[""] />;
        break;
      case 1147:
          return <wi[""] />;
        break;
      case 1153:
          return <wi[""] />;
        break;
      case 1168:
          return <wi[""] />;
        break;
      case 1171:
          return <wi[""] />;
        break;
      case 1180:
          return <wi[""] />;
        break;
      case 1183:
          return <wi[""] />;
        break;
      case 1186:
          return <wi[""] />;
        break;
      case 1189:
          return <wi[""] />;
        break;
      case 1192:
          return <wi[""] />;
        break;
      case 1195:
          return <wi[""] />;
        break;
      case 1198:
          return <wi[""] />;
        break;
      case 1201:
          return <wi[""] />;
        break;
      case 1204:
          return <wi[""] />;
        break;
      case 1207:
          return <wi[""] />;
        break;
      case 1210:
          return <wi[""] />;
        break;
      case 1213:
          return <wi[""] />;
        break;
      case 1216:
          return <wi[""] />;
        break;
      case 1219:
          return <wi[""] />;
        break;
      case 1222:
          return <wi[""] />;
        break;
      case 1225:
          return <wi[""] />;
        break;
      case 1237:
          return <wi[""] />;
        break;
      case 1240:
          return <wi[""] />;
        break;
      case 1243:
          return <wi[""] />;
        break;
      case 1246:
          return <wi[""] />;
        break;
      case 1249:
          return <wi[""] />;
        break;
      case 1252:
          return <wi[""] />;
        break;
      case 1255:
          return <wi[""] />;
        break;
      case 1258:
          return <wi[""] />;
        break;
      case 1261:
          return <wi[""] />;
        break;
      case 1264:
          return <wi[""] />;
        break;
      case 1273:
          return <wi[""] />;
        break;
      case 1276:
          return <wi[""] />;
        break;
      case 1279:
          return <wi[""] />;
        break;
      case 1282:
          return <wi[""] />;
        break;
    }
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
  const value = { weatherObject, setLoaction, dayIndex, setDayIndex };
  return (
    <weatherContext.Provider value={value}>
      {!loading && children}
    </weatherContext.Provider>
  );
}
