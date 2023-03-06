import {DateTime} from "luxon";

const API_KEY = "4bb8b2a4354e99b77913a20ddfad5e3b" //generated key from openwatherapi
const BASE_URL = "https://api.openweathermap.org/data/2.5"


// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })


    return fetch(url)
        .then((res) => res.json())

};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        sys: { country, sunrise, sunset },
        wind: { speed },
        weather

    } = data;
    const { main, details, icon } = weather[0];
    return {
        lat, lon,
        temp, feels_like, temp_min, temp_max, humidity,
        name,
        country, sunrise, sunset,
        speed,
        main, details, icon
    }
};

 const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
     
    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })
    return (timezone , daily , hourly);

 }


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams)
        .then(formatCurrentWeather);
        return formattedCurrentWeather;
     


    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude:"current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather);
    

    return  {...formattedForecastWeather};
};

const formatToLocalTime = (
    secs,
    zone,
    format = "ccc , dd LLL yyyy ' | Local time : ' hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
`http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode};
