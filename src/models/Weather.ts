import { Current } from "./Current";
import { Forecast } from "./Forecast";

export default interface Weather {
  location: Location;
  forecast: Forecast;
  current: Current;
}
