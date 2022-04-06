import axios from 'axios';

type coord = {
    lat: number,
    long: number
}

axios.defaults.baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`

export const getWeather = (coords: coord) => {
    return axios({url: `/${coords.lat},${coords.long}/?key=${process.env.REACT_APP_VISUALCROSSING_KEY}`})
}