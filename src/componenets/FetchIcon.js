
export const FetchIcon =  async icon => {

    await axios.get(`https://openweathermap.org/img/wn/${icon}.png`)
    .then(res => {
        console.log(res.data);
        return res.data
    })
    .catch (e => {
        return e;
    })

}