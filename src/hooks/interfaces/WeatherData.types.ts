import { ImageWeather } from "./ImageWeather.types";
import { WeatherDetails } from "./WeatherDetails.types";

export interface WeatherData {
    weather: WeatherDetails | undefined;
    temp: Units | null;
    image: ImageWeather | null;
    isLoading: boolean;
}

export type Units= {
    celsius: string;
    farenheit: string;
}
  