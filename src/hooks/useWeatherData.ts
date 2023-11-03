import { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherData, Units } from './interfaces/WeatherData.types';
import { WeatherDetails } from './interfaces/WeatherDetails.types';
import { ImageWeather } from './interfaces/ImageWeather.types';
import { Coord } from '../types';

const useWeatherData = (coords:Coord | null):WeatherData => {
  const [weather, setWeather] = useState<WeatherDetails | undefined>();
  const [temp, setTemp] = useState<Units | null>(null);
  const [image, setImage] = useState<ImageWeather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (coords) {
      setIsLoading(true);
      const apiKey:string = "43be0da6a4d12a1f3d653a5f3389d21b";
      const unit:string = "metric";
      const url:string = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${apiKey}`;

      axios.get(url)
        .then((res) => {
          setWeather(res.data);
          const units:Units = {
            celsius: (res.data.main.temp).toFixed(1),
            farenheit: ((res.data.main.temp) * 9 / 5 + 32).toFixed(1)
          };
          setTemp(units);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [coords]);

  useEffect(() => {
    const apiKey:string = "39164433-94ec2e1273f88ab80880706f0";
    const url:string = `https://pixabay.com/api/?key=${apiKey}&q=${weather?.weather[0]?.description}`;

    if (weather?.weather[0]?.description === "moderate rain" || weather?.weather[0]?.description === "light intensity shower rain" || weather?.weather[0]?.description === "light intensity drizzle"|| weather?.weather[0]?.description === "light rain") { 
      setIsLoading(true);
      const newUrl:string = `https://pixabay.com/api/?key=${apiKey}&q=rain`;
      axios.get(newUrl)
        .then((res) => {
          setImage(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      axios.get(url)
        .then((res) => {
          setImage(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [weather]);

  return { weather, temp, image, isLoading };
};

export default useWeatherData