import React from 'react';
import {
    WeatherCurrent,
    WeatherLocation,
    WeatherAirQuality,
    WeatherForecast,
    WeatherAlerts,
} from '@/lib/weatherTypes';
import axios from 'axios';

const WeatherContext = React.createContext({
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
});

export default WeatherContext;
