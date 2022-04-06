import axios from 'axios';

type coord = {
    lat: number,
    long: number
}

axios.defaults.baseURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}`

export const getWeather = (coords: coord) => {
    return axios({url: `/${coords.lat},${coords.long}`})
}