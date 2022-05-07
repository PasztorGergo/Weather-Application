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

  const getWeatherIcon = (code: number, isDay: boolean) => {
    if (isDay) {
      switch (code) {
        case 1000:
          return <wi.WiDaySunny />;

        case 1003:
          return <wi.WiDaySunnyOvercast />;

        case 1006:
          return <wi.WiDayCloudy />;

        case 1009:
          return <wi.WiCloud />;

        case 1030:
          return <wi.WiDayFog />;

        case 1063:
          return <wi.WiDayRainMix />;

        case 1066:
          return <wi.WiDaySnow />;

        case 1069:
          return <wi.WiDaySleet />;

        case 1072:
          return <wi.WiDaySleet />;

        case 1087:
          return <wi.WiDayLightning />;

        case 1114:
          return <wi.WiSnowWind />;

        case 1117:
          return <wi.WiDaySnowThunderstorm />;

        case 1135:
          return <wi.WiFog />;

        case 1147:
          return <wi.WiFog />;

        case 1153:
          return <wi.WiSleet />;

        case 1168:
          return <wi.WiSleet />;

        case 1171:
          return <wi.WiDaySleetStorm />;

        case 1180:
          return <wi.WiSprinkle />;

        case 1183:
          return <wi.WiSprinkle />;

        case 1186:
          return <wi.WiRaindrops />;

        case 1189:
          return <wi.WiRain />;

        case 1192:
          return <wi.WiDayStormShowers />;

        case 1195:
          return <wi.WiDayThunderstorm />;

        case 1198:
          return <wi.WiDayRainMix />;

        case 1201:
          return <wi.WiRainMix />;

        case 1204:
          return <wi.WiDaySleet />;

        case 1207:
          return <wi.WiDaySleetStorm />;

        case 1210:
          return <wi.WiDaySnow />;

        case 1213:
          return <wi.WiDaySnow />;

        case 1216:
          return <wi.WiSnow />;

        case 1219:
          return <wi.WiSnow />;

        case 1222:
          return <wi.WiDaySnowThunderstorm />;

        case 1225:
          return <wi.WiDaySnowThunderstorm />;

        case 1237:
          return <wi.WiHail />;

        case 1240:
          return <wi.WiDayShowers />;

        case 1243:
          return <wi.WiShowers />;

        case 1246:
          return <wi.WiDayStormShowers />;

        case 1249:
          return <wi.WiDaySleet />;

        case 1252:
          return <wi.WiSleet />;

        case 1255:
          return <wi.WiDaySnow />;

        case 1258:
          return <wi.WiDaySnowThunderstorm />;

        case 1261:
          return <wi.WiDayHail />;

        case 1264:
          return <wi.WiHail />;

        case 1273:
          return <wi.WiDayStormShowers />;

        case 1276:
          return <wi.WiThunderstorm />;

        case 1279:
          return <wi.WiDaySnowWind />;

        case 1282:
          return <wi.WiDaySnowThunderstorm />;
      }
    } else {
      switch (code) {
        case 1000:
          return <wi.WiNightClear />;

        case 1003:
          return <wi.WiCloud />;

        case 1006:
          return <wi.WiNightCloudy />;

        case 1009:
          return <wi.WiCloud />;

        case 1030:
          return <wi.WiNightFog />;

        case 1063:
          return <wi.WiNightRainMix />;

        case 1066:
          return <wi.WiNightSnow />;

        case 1069:
          return <wi.WiNightSleet />;

        case 1072:
          return <wi.WiNightSleet />;

        case 1087:
          return <wi.WiNightLightning />;

        case 1114:
          return <wi.WiSnowWind />;

        case 1117:
          return <wi.WiNightSnowThunderstorm />;

        case 1135:
          return <wi.WiFog />;

        case 1147:
          return <wi.WiFog />;

        case 1153:
          return <wi.WiSleet />;

        case 1168:
          return <wi.WiSleet />;

        case 1171:
          return <wi.WiNightSleetStorm />;

        case 1180:
          return <wi.WiSprinkle />;

        case 1183:
          return <wi.WiSprinkle />;

        case 1186:
          return <wi.WiRaindrops />;

        case 1189:
          return <wi.WiRain />;

        case 1192:
          return <wi.WiNightStormShowers />;

        case 1195:
          return <wi.WiNightThunderstorm />;

        case 1198:
          return <wi.WiNightRainMix />;

        case 1201:
          return <wi.WiRainMix />;

        case 1204:
          return <wi.WiNightSleet />;

        case 1207:
          return <wi.WiNightSleetStorm />;

        case 1210:
          return <wi.WiNightSnow />;

        case 1213:
          return <wi.WiNightSnow />;

        case 1216:
          return <wi.WiSnow />;

        case 1219:
          return <wi.WiSnow />;

        case 1222:
          return <wi.WiNightSnowThunderstorm />;

        case 1225:
          return <wi.WiNightSnowThunderstorm />;

        case 1237:
          return <wi.WiHail />;

        case 1240:
          return <wi.WiNightShowers />;

        case 1243:
          return <wi.WiShowers />;

        case 1246:
          return <wi.WiNightStormShowers />;

        case 1249:
          return <wi.WiNightSleet />;

        case 1252:
          return <wi.WiSleet />;

        case 1255:
          return <wi.WiNightSnow />;

        case 1258:
          return <wi.WiNightSnowThunderstorm />;

        case 1261:
          return <wi.WiNightHail />;

        case 1264:
          return <wi.WiHail />;

        case 1273:
          return <wi.WiNightStormShowers />;

        case 1276:
          return <wi.WiThunderstorm />;

        case 1279:
          return <wi.WiNightSnowWind />;

        case 1282:
          return <wi.WiNightSnowThunderstorm />;
      }
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
  const value = {
    weatherObject,
    setLoaction,
    dayIndex,
    setDayIndex,
    getWeatherIcon,
  };
  return (
    <weatherContext.Provider value={value}>
      {!loading && children}
    </weatherContext.Provider>
  );
}
