export const weatherApiKey = process.env.WEATHER_API_KEY;
export const baseURL = 'https://api.weatherapi.com/v1';
export const currentWeatherURL = `${baseURL}/current.json`;
export const forecastWeatherURL = `${baseURL}/forecast.json`;
export const searchWeatherURL = `${baseURL}/search.json`;
export const historyWeatherURL = `${baseURL}/history.json`;
export const futureWeatherURL = `${baseURL}/future.json`;
export const timezoneURL = `${baseURL}/timezone.json`;
export const astronomyURL = `${baseURL}/astronomy.json`;
export const sportsURL = `${baseURL}/sports.json`;
export const ipURL = `${baseURL}/ip.json`;

export const locationObject = {
    lat: 0,
    lon: 0,
    name: '',
    region: '',
    country: '',
    tz_id: '',
    localtime_epoch: 0,
    localtime: '',
};
export const weatherEndpoints = {
    currentWeather: (city: string) =>
        `${baseURL}/current.json?key=${weatherApiKey}&q=${city}`,
    forecast: (city: string) =>
        `${baseURL}/forecast.json?key=${weatherApiKey}&q=${city}&days=3`,
    search: (city: string) => `${baseURL}/search.json?key=${weatherApiKey}&q=${city}`,
    sports: (city: string) => `${baseURL}/sports.json?key=${weatherApiKey}&q=${city}`,
    ip: () => `${baseURL}/ip.json?key=${weatherApiKey}`,
    history: (city: string, date: string) =>
        `${baseURL}/history.json?key=${weatherApiKey}&q=${city}&dt=${date}`,
    astronomy: (city: string) =>
        `${baseURL}/astronomy.json?key=${weatherApiKey}&q=${city}`,
    alerts: (city: string) => `${baseURL}/alerts.json?key=${weatherApiKey}&q=${city}`,
    time: (city: string) => `${baseURL}/time.json?key=${weatherApiKey}&q=${city}`,
    conditions: (city: string) =>
        `${baseURL}/conditions.json?key=${weatherApiKey}&q=${city}`,
    location: (city: string) => `${baseURL}/location.json?key=${weatherApiKey}&q=${city}`,
    forecast10day: (city: string) =>
        `${baseURL}/forecast10day.json?key=${weatherApiKey}&q=${city}`,
    pastWeather: (city: string, date: string) =>
        `${baseURL}/past-weather.json?key=${weatherApiKey}&q=${city}&dt=${date}`,
    pastForecast: (city: string, date: string) =>
        `${baseURL}/past-forecast.json?key=${weatherApiKey}&q=${city}&dt=${date}`,
    pastLocation: (city: string, date: string) =>
        `${baseURL}/past-location.json?key=${weatherApiKey}&q=${city}&dt=${date}`,
};
