import { useState } from "react"
import { Prop } from "./types/WeatherCard.types"


const WeatherCard = ({weather,temp,coords}:Prop) => {

    const [isCelsius, setisCelsius] = useState<boolean>(true)
    const handleChangeTemp = ():void =>{
      setisCelsius(!isCelsius)
    }
  return (
    <article className='max-w-md	min-w-card-s w-full  gap-4 grid md:flex md:max-w-xl'>
      <section className="rounded-xl bg-slate-300/70 text-center p-2">
        <header>
            <h2 className="text-2xl mb-2 font-bold mt-2">{coords?.cityName ? coords.cityName :weather?.name}, {weather?.sys.country}</h2>
            <h3 className="text-xl capitalize font-semibold">{weather?.weather[0].description}</h3>
        </header>
        <main className="grid grid-cols-2">
          <div className="w-full">
              <img className="w-full" src={ weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" /> 
          </div>
          <div className="flex justify-center items-center">
            <h3 className="w-full text-4xl font-normal text-slate-900 mobileM:text-5xl sm:text-6xl">{isCelsius ?`${temp?.celsius}°C` : `${temp?.farenheit}°F`}</h3>
          </div>
        </main>
        <footer>
          <button className="border-none text-sm rounded-2xl bg-teal-500 text-white px-3 py-2 mb-3 transition ease-in-out delay-100 hover:bg-teal-700 mobileM:py-3 mobileM:px-4" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F': 'Change to °C'}</button>
        </footer>
      </section>
        <section className="bg-slate-300/70 rounded-3xl py-2 px-3 mobileM:px-4 mobileM:pt-1 md:py-7">
          <div className="h-full">
            <ul className="h-full flex flex-row justify-between text-center md:flex-col">
              <li className="text-center"><span className="block py-2">Wind Speed</span> <span className="weather__feature--value">{weather?.wind.speed}m/s</span></li>
              <li className="weather__feature"><span className="block py-2">Clouds</span> <span className="weather__feature--value">{weather?.clouds.all}%</span></li>
              <li className="weather__feature"><span className="block py-2">Pressure</span> <span className="weather__feature--value">{weather?.main.pressure.toLocaleString('en-US')}hPa</span></li>
            </ul>
          </div>
        </section>
      </article>
  )
}

export default WeatherCard