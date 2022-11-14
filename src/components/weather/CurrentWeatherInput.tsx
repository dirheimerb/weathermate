/* eslint-disable @next/next/no-img-element */
import { getCurrentWeather } from '@/lib/updateWeather';
import React from 'react';
import {
    WeatherCurrent,
    WeatherLocation,
    WeatherAirQuality,
    WeatherForecast,
    WeatherAlerts,
} from '@/lib/weatherTypes';
import axios from 'axios';

export default function CurrentWeatherInput() {
    const [cityOrZip, setCityOrZip] = React.useState('');
    const [airQuality, setAirQuality] = React.useState('');
    const [weatherResponse, setWeatherResponse] = React.useState<WeatherCurrent>();
    const [show, setShow] = React.useState(false);
    const [weatherResponseForcast, setWeatherResponseForcast] =
        React.useState<WeatherForecast>();
    const [weatherResponseLocation, setWeatherResponseLocation] =
        React.useState<WeatherLocation>();
    const [weatherResponseAirQuality, setWeatherResponseAirQuality] = React.useState<
        WeatherAirQuality[] | undefined
    >();
    const [weatherResponseAlerts, setWeatherResponseAlerts] = React.useState<
        WeatherAlerts | undefined
    >();

    const airQualityOptions = [
        { value: null, label: 'Select Air Quality' },
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

    const handleCityOrZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityOrZip(e.target.value);
    };

    const handleAirQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAirQuality(e.target.value);
    };

    const handleCurrentWeatherSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const baseURL = 'https://api.weatherapi.com/v1';
        const currentWeatherURL = '/current.json';
        const airQuality = 'no';
        const city = '45013';
        const fullEndpoint = `${baseURL}${currentWeatherURL}?key=${WEATHER_API_KEY}&q=${city}&aqi=${airQuality}`;
        console.log(fullEndpoint);
        const config = {
            method: 'GET',
            url: fullEndpoint,
            headers: {
                'Content-type': 'application/json',
            },
        };

        axios(config)
            .then((res) => {
                console.log(res.data);
                const currentWeather = {
                    temp_f: res.data.current.temp_f,
                    feelslike_f: res.data.current.feelslike_f,
                    wind_mph: res.data.current.wind_mph,
                    humidity: res.data.current.humidity,
                    condition: {
                        text: res.data.current.condition.text,
                        code: res.data.current.condition.code,
                        icon: res.data.current.condition.icon,
                    },
                    icon: res.data.current.condition.icon,
                    last_updated: res.data.current.last_updated,
                    last_updated_epoch: res.data.current.last_updated_epoch,
                    is_day: res.data.current.is_day,
                    wind_degree: res.data.current.wind_degree,
                    wind_dir: res.data.current.wind_dir,
                    pressure_in: res.data.current.pressure_in,
                    precip_in: res.data.current.precip_in,
                    cloud: res.data.current.cloud,
                    vis_miles: res.data.current.vis_miles,
                    uv: res.data.current.uv,
                    gust_mph: res.data.current.gust_mph,
                };
                setWeatherResponse(currentWeather);
                setShow(true);
                setWeatherResponseLocation(res.data.location);
                setWeatherResponseForcast(res.data.forecast);
                setWeatherResponseAirQuality(res.data.air_quality.results);
                setWeatherResponseAlerts(res.data.alert);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {show ? (
                <div className="flex flex-col items-center bg-sky-800 shadow-lg w-1/2 border-slate-100 rounded-lg justify-center">
                    {weatherResponse && (
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold">
                                {weatherResponseLocation?.name}
                            </h1>
                            <p className="text-sm">{weatherResponseLocation?.region}</p>
                            <p className="text-sm">{weatherResponseLocation?.country}</p>
                            <p className="text-sm">
                                {weatherResponseLocation?.localtime}
                            </p>
                            <p className="text-sm">{weatherResponse.temp_f}°F</p>
                            <p className="text-sm">{weatherResponse.condition.text}</p>
                            <img
                                src={weatherResponse.condition.icon}
                                alt={weatherResponse.condition.text}
                            />
                            <p className="text-sm">
                                Wind: {weatherResponse.wind_mph} mph
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Current Weather</h1>
                    <form
                        className="flex flex-col items-center justify-center"
                        onSubmit={handleCurrentWeatherSubmit}
                    >
                        <p className="text-sm">Enter a city or zip code</p>
                        <input
                            className="border border-gray-300 rounded-md p-2 text-zinc-900"
                            type="text"
                            value={cityOrZip}
                            onChange={handleCityOrZipChange}
                        />
                        <p className="text-sm">Do you want air quality?</p>
                        <select
                            className="border w-48 text-center border-gray-300 rounded-md text-zinc-900 p-2"
                            value={airQuality}
                            onChange={handleAirQualityChange}
                        >
                            {airQualityOptions.map((option) => (
                                <option key={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <button
                            className="my-2 bg-fuchsia-700 hover:bg-fuchsia-700 text-slate-100 font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
