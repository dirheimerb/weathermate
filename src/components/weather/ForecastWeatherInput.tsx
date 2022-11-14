/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { WeatherForecastResponse, WeatherDay } from '@/lib/weatherTypes';
import axios from 'axios';

interface ForecastWeatherInputProps {
    CityOrZip: string | number;
    airQuality: string;
    alerts: string;
    days: number;
}

export default function ForecastWeatherInput() {
    const [cityOrZip, setCityOrZip] = React.useState<string | number>();
    const [airQuality, setAirQuality] = React.useState<string>('');
    const [alerts, setAlerts] = React.useState<string>('');
    const [days, setDays] = React.useState<number>(1);
    const [weatherResponse, setWeatherResponse] =
        React.useState<WeatherForecastResponse>();
    const [show, setShow] = React.useState<boolean>(false);
    const [dates, setDates] = React.useState<WeatherDay['date']>();

    const airQualityOptions = [
        { value: null, label: 'Select Air Quality' },
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

    const alertsOptions = [
        { value: null, label: 'Select Alerts' },
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

    const daysOptions = [
        { value: null, label: 'Select Days' },
        { value: 2, label: '1' },
        { value: 3, label: '2' },
        { value: 4, label: '3' },
        { value: 5, label: '4' },
        { value: 6, label: '5' },
        { value: 7, label: '6' },
        { value: 8, label: '7' },
        { value: 9, label: '8' },
        { value: 10, label: '9' },
        { value: 10, label: '10' },
    ];

    const handleCityOrZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityOrZip(e.target.value);
    };

    const handleAirQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAirQuality(e.target.value);
    };

    const handleAlertsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAlerts(e.target.value);
    };

    const handleDaysChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDays(Number(e.target.value));
    };

    const handleForecastWeatherSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const baseURL = 'https://api.weatherapi.com/v1';
        const forecastWeatherURL = '/forecast.json';
        const fullEndpoint = `${baseURL}${forecastWeatherURL}?key=${WEATHER_API_KEY}&q=${cityOrZip}&days=${days}&aqi=${airQuality}&alerts=${alerts}`;
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
                const forecastWeather = {
                    location: res.data.location,
                    current: res.data.current,
                    forecast: res.data.forecast,
                    alert: res.data.alert,
                };
                forecastWeather.forecast.forecastday.map((day: WeatherDay) => {
                    const updatedDate = new Date(day.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    });
                    setDates(updatedDate);
                });
                setWeatherResponse(forecastWeather);
                setShow(true);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <>
            {show ? (
                <div className="flex flex-col items-center justify-center">
                    {weatherResponse?.location && (
                        <div
                            className="flex flex-col items-center justify-center"
                            key={weatherResponse?.location.name}
                        >
                            <h1 className="text-2xl font-bold">Forecast Weather</h1>
                            <p className="text-sm">
                                Location: {weatherResponse?.location.name},{' '}
                                {weatherResponse?.location.region},{' '}
                                {weatherResponse?.location.country}
                            </p>
                            <p className="text-sm">
                                Current Temp: {weatherResponse?.current.temp_f}°F
                            </p>
                            <p className="text-sm">
                                Current Condition:{' '}
                                {weatherResponse?.current.condition.text}
                            </p>
                            <p className="text-sm">
                                Current Wind: {weatherResponse?.current.wind_mph} mph
                            </p>
                            <p className="text-sm">
                                Current Humidity: {weatherResponse?.current.humidity}%
                            </p>
                            <p className="text-sm">
                                Current Precipitation:{' '}
                                {weatherResponse?.current.precip_in} in
                            </p>
                            <p className="text-sm">
                                Current Cloud: {weatherResponse?.current.cloud}%
                            </p>
                            <p className="text-sm">
                                Current UV: {weatherResponse?.current.uv}
                            </p>
                        </div>
                    )}
                    {weatherResponse?.forecast.forecastday.map((day) => (
                        <div
                            className="flex flex-col w-full border border-fuchsia-800  items-center justify-center shadow-lg my-2 rounded-lg bg-sky-800 text-zinc-100"
                            key={day.date}
                        >
                            <p className="text-sm">
                                Date: {new Date(day.date).toLocaleDateString()}
                            </p>
                            <img
                                src={day.day.condition.icon}
                                alt={day.day.condition.text}
                            />
                            <p className="text-sm">Max Temp: {day.day.maxtemp_f}°F</p>
                            <p className="text-sm">Min Temp: {day.day.mintemp_f}°F</p>
                            <p className="text-sm">Avg Temp: {day.day.avgtemp_f}°F</p>
                            <p className="text-sm">Condition: {day.day.condition.text}</p>
                            <p className="text-sm">Wind: {day.day.maxwind_mph} mph</p>
                            <p className="text-sm">Humidity: {day.day.avghumidity}%</p>
                            <p className="text-sm">
                                Precipitation: {day.day.totalprecip_in} in
                            </p>
                            <p className="text-sm">Cloud: {day.day.avgvis_miles}%</p>
                            <p className="text-sm">UV: {day.day.uv}</p>
                        </div>
                    ))}
                    <div className="flex flex-col w-full border border-fuchsia-800  items-center justify-center shadow-lg my-2 rounded-lg bg-sky-800 text-zinc-100">
                        {weatherResponse?.current.air_quality && (
                            <p className="text-sm">
                                Current Air Quality:{' '}
                                {weatherResponse.current.air_quality.co}
                                CO, {weatherResponse.current.air_quality.no2} NO2,{' '}
                                {weatherResponse.current.air_quality.o3} O3,{' '}
                                {weatherResponse.current.air_quality.pm10} PM10,{' '}
                                {weatherResponse.current.air_quality.pm2_5} PM25,{' '}
                                {weatherResponse.current.air_quality.so2} SO2
                            </p>
                        )}
                        {weatherResponse?.alert && (
                            <div className="flex flex-col items-center justify-center">
                                {weatherResponse.alert.map((alert) => (
                                    <div
                                        key={alert.event}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <p className="text-sm">Alert: {alert.severity}</p>
                                        <p className="text-sm">
                                            Description: {alert.instruction}
                                        </p>
                                        <p className="text-sm">Areas: {alert.areas}</p>
                                        <p className="text-sm">Date: {alert.effective}</p>
                                        <p className="text-sm">
                                            Expires: {alert.expires}
                                        </p>
                                    </div>
                                ))}
                                {weatherResponse.forecast.forecastday.map((forecast) => (
                                    <div
                                        key={forecast.date}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <p className="text-sm">Date: {forecast.date}</p>
                                        <p className="text-sm">
                                            Max Temp: {forecast.day.maxtemp_f}°F
                                        </p>
                                        <p className="text-sm">
                                            Min Temp: {forecast.day.mintemp_f}°F
                                        </p>
                                        <p className="text-sm">
                                            Condition: {forecast.day.condition.text}
                                        </p>
                                        <p className="text-sm">
                                            Wind: {forecast.day.maxwind_mph} mph
                                        </p>
                                        <p className="text-sm">
                                            Humidity: {forecast.day.avghumidity}%
                                        </p>
                                        <p className="text-sm">
                                            Precipitation: {forecast.day.totalprecip_in}{' '}
                                            in
                                        </p>
                                        <p className="text-sm">
                                            Cloud: {forecast.day.avgvis_miles} miles
                                        </p>
                                        <p className="text-sm">UV: {forecast.day.uv}</p>
                                        <p className="text-sm">
                                            Sunrise: {forecast.astro.sunrise}
                                        </p>
                                        <p className="text-sm">
                                            Sunset: {forecast.astro.sunset}
                                        </p>
                                    </div>
                                ))}
                                {weatherResponse.forecast.forecastday.map((forecast) =>
                                    forecast.hour.map((hour) => (
                                        <div
                                            key={hour.time_epoch}
                                            className="flex flex-col items-center justify-center"
                                        >
                                            <p className="text-sm">Time: {hour.time}</p>
                                            <p className="text-sm">
                                                Temp: {hour.temp_f}°F
                                            </p>
                                            <p className="text-sm">
                                                {hour.condition.icon}
                                            </p>
                                            <p className="text-sm">
                                                Condition: {hour.condition.text}
                                            </p>
                                            <p className="text-sm">
                                                Wind: {hour.wind_mph} mph
                                            </p>
                                            <p className="text-sm">
                                                Humidity: {hour.humidity}%
                                            </p>
                                            <p className="text-sm">
                                                Precipitation: {hour.precip_in} in
                                            </p>
                                            <p className="text-sm">
                                                Cloud: {hour.cloud}%
                                            </p>
                                            <p className="text-sm">UV: {hour.uv}</p>
                                        </div>
                                    )),
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Weather Forecast</h1>
                    <form onSubmit={handleForecastWeatherSubmit}>
                        <p className="text-sm">Enter a city or zip code</p>
                        <input
                            className="border w-48 text-center border-gray-300 rounded-md p-2 text-zinc-800"
                            type="text"
                            value={cityOrZip}
                            onChange={handleCityOrZipChange}
                        />
                        <p className="text-sm">Do you want air quality?</p>
                        <select
                            className="border w-48 text-center border-gray-300 rounded-md p-2 text-zinc-800"
                            value={airQuality}
                            onChange={handleAirQualityChange}
                        >
                            {airQualityOptions.map((option) => (
                                <option key={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <p className="text-sm">Do you want alerts?</p>
                        <select
                            className="border w-48 text-center border-gray-300 rounded-md p-2 text-zinc-800"
                            value={alerts}
                            onChange={handleAlertsChange}
                        >
                            {alertsOptions.map((option) => (
                                <option key={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <p className="text-sm">How many days?</p>
                        <select
                            className="border w-48 text-zinc-800 text-center border-gray-300 rounded-md p-2"
                            value={days}
                            onChange={handleDaysChange}
                        >
                            {daysOptions.map((option) => (
                                <option key={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
