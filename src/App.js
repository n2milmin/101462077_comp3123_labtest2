import React, { useState } from 'react';
import './App.css';
import { Weather } from './componenets/Weather';
import axios from 'axios';

export default function App() {

  const [ weather, setWeather ] = useState(null)
  const [ error, setError ] = useState(false)
  const [ city, setCity ] = useState('')

  const handleSearch = async () => {
    try{ 
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c61343ec70b42b60f8ee4989e70b16f0`)
      setWeather(res.data)
      setError(false)
      console.log(res.data)
    }catch (e) {
      console.log("Weather fetch error: ", e)
      setWeather(null)
      setError(true)
    }
  }

  return (
    <div className='main'>
      <header>
        Check the Weather
      </header>

      <div className='search'>
        <input 
          type="text"
          placeholder='City'
          value={city}
          onChange={ c => setCity(c.target.value) }
        />
        <button onClick={ () => handleSearch() }>Search</button>
      </div>

      <div className='warnings'>
        { error && <p>Weather for { city } could not be found </p> }
      </div>

      <div >
      { console.log(weather) }
        { weather && <Weather weather={ weather }/> }
      </div>
    </div>
  );
}
