import { useEffect, useState } from 'react';
import axios from 'axios';
import { GeoData } from './interfaces/GeoData.types';
import { Coord } from '../types';

const useGeoData = (inputValue:string):GeoData => {
  const [coords, setCoords] = useState<Coord | null>(null);

  useEffect(() => {
    if (inputValue) {
      const apiKey = "43be0da6a4d12a1f3d653a5f3389d21b";
      const cityName = inputValue;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;

      axios.get(url)
        .then((res) => {
          const coord = {
            lat: res.data[0].lat,
            lon: res.data[0].lon,
            cityName: res.data[0].name
          };
          setCoords(coord);
        })
        .catch((err) => console.log(err));
    }
  }, [inputValue]);

  return { coords };
};
export default useGeoData