import { Coord } from "../../types";
export interface GeoLocationHook {
    coords: null | Coord;
    setCoords: (coord: Coord | null) => void;
    isAlertOpen: string;
    setIsAlertOpen: (value: string) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
  }