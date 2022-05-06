export interface Forecast {
  forecastday: forecastday[];
}
export interface forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Array<Hour>;
}
export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  uv: number;
  condition: { text: string; icon: string; code: number };
}
interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
}
export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  wind_mph: number;
  wind_kph: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  condition: { text: string; icon: string; code: number };
  feelslike_c: number;
  feelslike_f: number;
  will_it_rain: number;
  will_it_snow: number;
  chance_of_rain: number;
  chance_of_snow: number;
  uv: number;
}
