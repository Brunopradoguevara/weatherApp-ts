
import { useEffect, useState } from 'react';
import {GeoLocationHook } from './interfaces/GeoLocation.types';
import { Coord } from '../types';

const useGeoLocation= ():GeoLocationHook => {
  const [coords, setCoords] = useState<null | Coord>(null);
  const [isAlertOpen, setIsAlertOpen] = useState<string>('alert--close');
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const success = (pos:GeolocationPosition):void => {
      const coord:Coord = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(coord);
    };

    const error = ():void => {
      setIsAlertOpen('');
      setInputValue('london');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { coords, setCoords, isAlertOpen, setIsAlertOpen, inputValue, setInputValue };
};

export default useGeoLocation
