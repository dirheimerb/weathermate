import axios from 'axios';
import { baseURL, currentWeatherURL, weatherApiKey, forecastWeatherURL } from './weather';
import { WeatherResponse } from './weatherTypes';

/**
 *
 * @param {string|number} CityOrZip{required} - param value {City name or Zip code}; The location to get the current forecasted weather.
 * @param {string} airQuality{optional} - param value {yes or no}; Adds air quality data to the response
 * @returns {Promise<WeatherResponse>} - Returns a promise with the Current Weather Data
 * @example
 * const weather = await getCurrentWeather('New York','no');
 */
export async function getCurrentWeather(
    CityOrZip: string | number,
    airQuality?: string,
): Promise<WeatherResponse> {
    const fullEndpoint = `${baseURL}${currentWeatherURL}?key=${weatherApiKey}&q=${CityOrZip}&aqi=${airQuality}`;
    console.log(fullEndpoint);
    //'https://api.weatherapi.com/v1/current.json?key=6a14c88ec80e4dd597e121736222105&q=Hamilton&aqi=yes'

    const config = {
        method: 'GET',
        url: fullEndpoint,
        headers: {
            'Content-type': 'application/json',
        },
    };
    const weatherResponse = await axios(config)
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    return weatherResponse;
}
/**
 * @param {string|number} CityOrZip - City or Zip Code, for more accuracy use Zip Code
 * @param {string} airQuality - yes or no
 * @param {string} alerts - yes or no
 * @param {number} days - Min: 1, Max: 10, desc: days of forecast
 * @returns {Promise<WeatherResponse>} - Promise object represents the data from the Weather API
 * @example - const forecast = await ForecastWeather("45013", "no", "no", 3);
 *
 */
export async function getForecastWeather(
    airQuality: string,
    CityOrZip: string | number,
    alerts: string,
    days: number,
): Promise<WeatherResponse> {
    const forcastURL = `${baseURL}${forecastWeatherURL}?key=${weatherApiKey}&q=${CityOrZip}&days=${days}&aqi=${airQuality}&alerts=${alerts}`;
    const config = {
        method: 'GET',
        url: forcastURL,
        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await axios(config)
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch((err) => {
            console.error(err);
        });
    return response;
}
