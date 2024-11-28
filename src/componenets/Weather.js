import React from "react";
import axios from 'axios';

export const Weather = ({ weather }) => {
    
    const handleIcons = async () => {
        try{ 
            const res = await axios.get(`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`)
            console.log("fetched icon", res)
            return res.request.responseURL
          }catch (e) {
            console.log("failed fetch icon")
            return null
          }
    }


    return(
        weather ? (
            <div className="weather_body">
                <h3 className="city">{ weather && weather.name }</h3>

                <div className="weather-info">
                    <p>
                        Current temperature: <strong>{ Math.round(weather['main']['temp'] - 273.15) }&deg;C</strong>
                    </p>
                    <p>
                        Feels like: <strong>{ Math.round(weather.main.feels_like - 273.15) }&deg;C</strong>
                    </p>
                    <p>
                        Max: <strong>{ Math.round(weather.main.temp_max - 273.15) }&deg;C</strong>
                    </p>
                    <p>
                        Min: <strong>{ Math.round(weather.main.temp_min - 273.15) }&deg;C</strong>
                    </p>
                </div>

                <div className="sky">
                    <p className="description" style={{textTransform: 'capitalize'}}>
                        {  weather.weather[0].description }
                    </p>
                    <img 
                        src={ `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` } 
                        alt="icon"
                    />
                </div>
            </div>
        ) : (
            <div>
                { console.log(weather) }
                <p>Error</p>
            </div>
        )
    )
}
