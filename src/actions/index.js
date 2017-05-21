import Axios from 'axios';

const API_KEY = '1670f90a5316fb5d29c422779845a037';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},us`;
    // Axios.get() returns a promise,
    // The ReduxPromise middleware will detect this action payload contains a promise
    // then it will waits until the promise resolves and then creates a new action that contains
    // the data resolved by the promise, and pass it to the reducers.
    // In this way, the asynchronous ajax request is transparent to the reducers, thanks to ReduxPromise.
    const request = Axios.get(url);
    
    return { 
        type: FETCH_WEATHER,
        payload : request
    }
    
}