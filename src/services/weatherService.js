const API_KEY = "4bb8b2a4354e99b77913a20ddfad5e3b"
const BASE_URL = "https://api.openweathermap.org/data/2.5"


// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })


    return fetch(url)
    .then((res) => res.json())
   
};
export default getWeatherData;
