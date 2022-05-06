import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { Location } from "./Location";

export default interface Weather {
  location: Location;
  forecast: Forecast;
  current: Current;
}
