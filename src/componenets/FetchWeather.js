import axios from 'axios';

export const FetchWeather =  async city => {

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c61343ec70b42b60f8ee4989e70b16f0`)
    .then(res => {
        console.log(res);
        return res
    })
    .catch (e => {
        console.log(`Couldnt fetch ${city} : ${e}`)
        return e;
    })

}