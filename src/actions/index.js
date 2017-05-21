import Axios from 'axios';

const API_KEY = '1670f90a5316fb5d29c422779845a037';
const ROOT_URL = `api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return { 
        type: FETCH_WEATHER,
        payload : request
    }
    
}