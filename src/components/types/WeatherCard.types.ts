import { Units } from "../../hooks/interfaces/WeatherData.types";
import { WeatherDetails } from "../../hooks/interfaces/WeatherDetails.types";
import { Coord } from "../../types";

export interface Prop {
    weather: WeatherDetails | undefined;
    temp: Units | null;
    coords: Coord | null
}