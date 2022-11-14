import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import WeatherContext from '@/lib/WeatherContext';
import {
    WeatherCurrent,
    WeatherForecast,
    WeatherLocation,
    WeatherAirQuality,
    WeatherAlerts,
} from '@/lib/weatherTypes';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WeatherContext.Provider
            value={{
                cityOrZip: '',
                airQuality: '',
                weatherResponse: {} as WeatherCurrent,
                show: false,
                weatherResponseForcast: {} as WeatherForecast,
                weatherResponseLocation: {} as WeatherLocation,
                weatherResponseAirQuality: [] as WeatherAirQuality[],
                weatherResponseAlerts: {} as WeatherAlerts,
                handleCityOrZipChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
                handleAirQualityChange: (e: React.ChangeEvent<HTMLSelectElement>) => {},
                handleCurrentWeatherSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
            }}
        >
            <Component {...pageProps} />
        </WeatherContext.Provider>
    );
}
