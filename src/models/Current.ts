export interface Current {
  ast_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: { text: string; icon: string; code: number };
  wind_mph: number;
  wind_kph: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
}
