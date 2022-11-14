import React from 'react';
import { getCurrentWeather } from '@/lib/updateWeather';

export default function WeatherCurrent() {
    const [cityOrZip, setCityOrZip] = React.useState('');
    const [airQuality, setAirQuality] = React.useState('');

    const airQualityOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

    const data = getCurrentWeather('Cincinnati', 'no');

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Current Weather</h1>
                    <p className="text-sm">Enter a city or zip code</p>
                    <input
                        className="border w-48 border-gray-300 rounded-md p-2"
                        type="text"
                        value={cityOrZip}
                        onChange={(e) => setCityOrZip(e.target.value)}
                    />
                    <p className="text-sm w-48">Do you want air quality?</p>
                    <select
                        className="border w-48 border-gray-300 rounded-md p-2"
                        value={airQuality}
                        onChange={(e) => setAirQuality(e.target.value)}
                    >
                        {airQualityOptions.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                className="w-48"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold">Current Weather</h1>
                        <>
                            {data.then((data) => {
                                return (
                                    <div>
                                        <p>City: {data.location.name}</p>
                                        <p>Temperature: {data.current.temp_f}</p>
                                        <p>Feels Like: {data.current.feelslike_f}</p>
                                        <p>Wind: {data.current.wind_mph}</p>
                                        <p>Humidity: {data.current.humidity}</p>
                                        <p>Condition: {data.current.condition.text}</p>
                                        <p>
                                            Condition Icon: {data.current.condition.icon}
                                        </p>
                                    </div>
                                );
                            })}
                        </>
                    </div>
                </>
            </div>
        </>
    );
}
