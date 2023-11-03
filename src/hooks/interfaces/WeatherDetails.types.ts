import { Coord } from "../../types";

export interface WeatherDetails {
    clouds: Clouds;
    coord: Coord;
    main: Main;
    name: string;
    sys: Sys;
    weather: WeatherDescription[];
    wind: Wind;
}
  
type Clouds= {
  all: number
}
type Main= {
  pressure: number;
  temp: number;
}
type Sys= {
  country: string;
}
type WeatherDescription= {
  description: string;
  icon: string
}
  
type Wind= {
  speed: number;
}