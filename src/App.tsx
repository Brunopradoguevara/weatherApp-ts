
import { useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import ModalAlert from './components/ModalAlert'
import useGeoLocation from './hooks/useGeoLocation'
import useWeatherData from './hooks/useWeatherData'
import useGeoData from './hooks/useGeoData'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'

function App() {
  const { coords, setCoords, isAlertOpen, setIsAlertOpen, inputValue, setInputValue } = useGeoLocation();

  const { weather, temp, image, isLoading } = useWeatherData(coords);

  const { coords: geoCoords } = useGeoData(inputValue);

  useEffect(() => {
    if (geoCoords) {
      setCoords(geoCoords);
    }
  }, [geoCoords, setCoords]);

  const objStile = {
    backgroundImage: `url(${image?.hits[0]?.largeImageURL})`,
    backgroundSize: 'cover',
  }

  return (
    <div style={objStile} className='relative h-screen flex justify-center  items-center'>  
      {isLoading ? (  
        <Loader/>
      ):(
        <div className="max-w-screen-sm w-4/5 flex flex-col justify-center items-center">
          <h1 className='text-2xl pb-4 hidden'>Weather App</h1>
          <SearchBar
            setInputValue={setInputValue}
          />
          <WeatherCard
            weather = {weather}
            temp = {temp}
            coords = {coords}
            />
          <ModalAlert
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
          />

        </div>
      )}
    </div>
  )
}

export default App
