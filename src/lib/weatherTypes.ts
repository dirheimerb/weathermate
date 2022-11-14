import React from 'react';

export interface WeatherResponse {
    location: WeatherLocation;
    current: WeatherCurrent;
    forecast: WeatherForecast | WeatherForecast[];
    alerts: WeatherAlerts | WeatherAlerts[];
}

export interface WeatherLocation {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}
export interface WeatherCurrent {
    last_updated_epoch: number;
    last_updated: string;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_in: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_f: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    air_quality?: WeatherAirQuality;
}

export interface WeatherAirQuality {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    us_epa_index: number;
    gb_defra_index: number;
}
export interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}

export interface WeatherForecast {
    forecastday: WeatherForecastDay[];
}
export interface WeatherForecastDay extends WeatherForecast {
    date: string;
    date_epoch: number;
    day: WeatherDay;
    astro: WeatherAstro;
    hour: WeatherHour[];
}

export interface WeatherHour extends WeatherForecastDay {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: string;
    will_it_snow: number;
    chance_of_snow: string;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
}

export interface WeatherDay extends WeatherForecastDay {
    maxtemp_f: number;
    maxtemp_c: number;
    mintemp_f: number;
    mintemp_c: number;
    avgtemp_f: number;
    avgtemp_c: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: string;
    daily_will_it_snow: number;
    daily_chance_of_snow: string;
    condition: WeatherCondition;
    uv: number;
}

export interface WeatherAstro extends WeatherForecastDay {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}

export interface WeatherAlerts {
    headline: string;
    msgType: string;
    severity: string;
    urgency: string;
    areas: string;
    category: string;
    certainty: string;
    event: string;
    note: string;
    effective: string;
    expires: string;
    desc: string;
    instruction: string;
    bgColor: string;
    textColor: string;
    alertRef: React.ForwardedRef<HTMLLIElement>;
}
[];
const API_Key = '6a14c88ec80e4dd597e121736222105';

export interface LocationObject {
    lat: number;
    lon: number;
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}
export interface CurrentWeather {
    last_updated_epoch: number;
    last_updated: string;
    temp_f: number;
    is_day: number;
    text: string;
    icon: string;
    code: number;
    wind_mph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_in: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_f: number;
    vis_miles: number;
    gust_mph: number;
    uv: number;
    astro?: Astro;
}
export interface ForecastWeather {
    forcastday: ForecastDay[];
    astro?: Astro;
}
interface ForecastDay extends Day {
    date: string;
    date_epoch: number;
    day: Day;
}
export interface Day extends Hour {
    maxtemp_f: number;
    mintemp_f: number;
    avgtemp_f: number;
    maxwind_mph: number;
    totalprecip_in: number;
    avgvis_miles: number;
    avghumidity: number;
    text: string;
    icon: string;
    code: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_rain: string;
    daily_chance_of_snow: string;
    uv: number;
}
export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}
export interface Hour {
    time_epoch: number;
    time: string;
    temp_f: number;
    is_day: number;
    text: string;
    icon: string;
    code: number;
    wind_mph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_in: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_f: number;
    windchill_f: number;
    heatindex_f: number;
    dewpoint_f: number;
    will_it_rain: number;
    will_it_snow: number;
    vis_miles: number;
    chance_of_rain: string;
    chance_of_snow: string;
    gust_mph: number;
    uv: number;
}

export interface AutoComplete {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
}
[];
export interface WeatherForecastResponse {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
        air_quality: WeatherAirQuality;
    };
    forecast: {
        forecastday: {
            date: string;
            date_epoch: number;
            day: {
                maxtemp_c: number;
                maxtemp_f: number;
                mintemp_c: number;
                mintemp_f: number;
                avgtemp_c: number;
                avgtemp_f: number;
                maxwind_mph: number;
                maxwind_kph: number;
                totalprecip_mm: number;
                totalprecip_in: number;
                avgvis_km: number;
                avgvis_miles: number;
                avghumidity: number;
                daily_will_it_rain: number;
                daily_chance_of_rain: string;
                daily_will_it_snow: number;
                daily_chance_of_snow: string;
                condition: {
                    text: string;
                    icon: string;
                    code: number;
                };
                uv: number;
            };
            astro: {
                sunrise: string;
                sunset: string;
                moonrise: string;
                moonset: string;
                moon_phase: string;
                moon_illumination: string;
            };
            hour: {
                time_epoch: number;
                time: string;
                temp_c: number;
                temp_f: number;
                is_day: number;
                condition: {
                    text: string;
                    icon: string;
                    code: number;
                };
                wind_mph: number;
                wind_kph: number;
                wind_degree: number;
                wind_dir: string;
                pressure_mb: number;
                pressure_in: number;
                precip_mm: number;
                precip_in: number;
                humidity: number;
                cloud: number;
                feelslike_c: number;
                feelslike_f: number;
                windchill_c: number;
                windchill_f: number;
                heatindex_c: number;
                heatindex_f: number;
                dewpoint_c: number;
                dewpoint_f: number;
                will_it_rain: number;
                chance_of_rain: string;
                will_it_snow: number;
                chance_of_snow: string;
                vis_km: number;
                vis_miles: number;
                gust_mph: number;
                gust_kph: number;
                uv: number;
            }[];
        }[];
    };
    alert: WeatherAlerts[];
}

const weatherForcastResponse = {
    location: {
        name: 'Cincinnati',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.16,
        lon: -84.46,
        tz_id: 'America/New_York',
        localtime_epoch: 1668443985,
        localtime: '2022-11-14 11:39',
    },
    current: {
        last_updated_epoch: 1668443400,
        last_updated: '2022-11-14 11:30',
        temp_f: 39.9,
        is_day: 1,
        condition: {
            text: 'Partly cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            code: 1003,
        },
        wind_mph: 5.6,
        wind_degree: 40,
        wind_dir: 'NE',
        pressure_in: 30.4,
        precip_in: 0.0,
        humidity: 57,
        cloud: 75,
        feelslike_f: 35.9,
        vis_miles: 9.0,
        uv: 2.0,
        gust_mph: 6.5,
    },
    forecast: {
        forecastday: [
            {
                date: '2022-11-14',
                date_epoch: 1668384000,
                day: {
                    maxtemp_f: 41.9,
                    mintemp_f: 32.5,
                    avgtemp_f: 37.2,
                    maxwind_mph: 6.5,
                    totalprecip_in: 0.0,
                    totalsnow_cm: 0.0,
                    avgvis_miles: 6.0,
                    avghumidity: 69.0,
                    daily_will_it_rain: 0,
                    daily_chance_of_rain: 0,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: 'Cloudy',
                        icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                        code: 1006,
                    },
                    uv: 1.0,
                },
                astro: {
                    sunrise: '07:20 AM',
                    sunset: '05:24 PM',
                    moonrise: '10:23 PM',
                    moonset: '12:53 PM',
                    moon_phase: 'Waning Gibbous',
                    moon_illumination: '53',
                },
                hour: [
                    {
                        time_epoch: 1668402000,
                        time: '2022-11-14 00:00',
                        temp_f: 34.3,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 0.7,
                        wind_degree: 113,
                        wind_dir: 'ESE',
                        pressure_in: 30.35,
                        precip_in: 0.0,
                        humidity: 71,
                        cloud: 41,
                        feelslike_f: 32.4,
                        windchill_f: 32.4,
                        heatindex_f: 34.3,
                        dewpoint_f: 26.1,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 1.1,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668405600,
                        time: '2022-11-14 01:00',
                        temp_f: 34.0,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 0.2,
                        wind_degree: 150,
                        wind_dir: 'SSE',
                        pressure_in: 30.34,
                        precip_in: 0.0,
                        humidity: 72,
                        cloud: 51,
                        feelslike_f: 32.7,
                        windchill_f: 32.7,
                        heatindex_f: 34.0,
                        dewpoint_f: 26.1,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 0.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668409200,
                        time: '2022-11-14 02:00',
                        temp_f: 33.4,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 0.9,
                        wind_degree: 85,
                        wind_dir: 'E',
                        pressure_in: 30.35,
                        precip_in: 0.0,
                        humidity: 74,
                        cloud: 56,
                        feelslike_f: 32.0,
                        windchill_f: 32.0,
                        heatindex_f: 33.4,
                        dewpoint_f: 26.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 1.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668412800,
                        time: '2022-11-14 03:00',
                        temp_f: 33.1,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 0.9,
                        wind_degree: 55,
                        wind_dir: 'NE',
                        pressure_in: 30.36,
                        precip_in: 0.0,
                        humidity: 77,
                        cloud: 38,
                        feelslike_f: 30.6,
                        windchill_f: 30.6,
                        heatindex_f: 33.1,
                        dewpoint_f: 26.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 1.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668416400,
                        time: '2022-11-14 04:00',
                        temp_f: 32.5,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 2.2,
                        wind_degree: 40,
                        wind_dir: 'NE',
                        pressure_in: 30.37,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 50,
                        feelslike_f: 30.0,
                        windchill_f: 30.0,
                        heatindex_f: 32.5,
                        dewpoint_f: 27.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 4.0,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668420000,
                        time: '2022-11-14 05:00',
                        temp_f: 35.2,
                        is_day: 0,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
                            code: 1006,
                        },
                        wind_mph: 2.2,
                        wind_degree: 28,
                        wind_dir: 'NNE',
                        pressure_in: 30.36,
                        precip_in: 0.0,
                        humidity: 80,
                        cloud: 75,
                        feelslike_f: 35.2,
                        windchill_f: 35.2,
                        heatindex_f: 35.2,
                        dewpoint_f: 29.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 4.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668423600,
                        time: '2022-11-14 06:00',
                        temp_f: 35.1,
                        is_day: 0,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
                            code: 1006,
                        },
                        wind_mph: 3.1,
                        wind_degree: 41,
                        wind_dir: 'NE',
                        pressure_in: 30.38,
                        precip_in: 0.0,
                        humidity: 78,
                        cloud: 75,
                        feelslike_f: 32.5,
                        windchill_f: 32.5,
                        heatindex_f: 35.1,
                        dewpoint_f: 28.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.8,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668427200,
                        time: '2022-11-14 07:00',
                        temp_f: 34.9,
                        is_day: 0,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
                            code: 1006,
                        },
                        wind_mph: 3.8,
                        wind_degree: 59,
                        wind_dir: 'ENE',
                        pressure_in: 30.39,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 87,
                        feelslike_f: 30.9,
                        windchill_f: 30.9,
                        heatindex_f: 34.9,
                        dewpoint_f: 28.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668430800,
                        time: '2022-11-14 08:00',
                        temp_f: 34.5,
                        is_day: 1,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                            code: 1006,
                        },
                        wind_mph: 3.6,
                        wind_degree: 58,
                        wind_dir: 'ENE',
                        pressure_in: 30.4,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 84,
                        feelslike_f: 29.7,
                        windchill_f: 29.7,
                        heatindex_f: 34.5,
                        dewpoint_f: 28.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668434400,
                        time: '2022-11-14 09:00',
                        temp_f: 34.7,
                        is_day: 1,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                            code: 1006,
                        },
                        wind_mph: 3.8,
                        wind_degree: 73,
                        wind_dir: 'ENE',
                        pressure_in: 30.41,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 80,
                        feelslike_f: 29.5,
                        windchill_f: 29.5,
                        heatindex_f: 34.7,
                        dewpoint_f: 28.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.0,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668438000,
                        time: '2022-11-14 10:00',
                        temp_f: 35.6,
                        is_day: 1,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                            code: 1006,
                        },
                        wind_mph: 4.5,
                        wind_degree: 87,
                        wind_dir: 'E',
                        pressure_in: 30.42,
                        precip_in: 0.0,
                        humidity: 75,
                        cloud: 75,
                        feelslike_f: 30.0,
                        windchill_f: 30.0,
                        heatindex_f: 35.6,
                        dewpoint_f: 28.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668441600,
                        time: '2022-11-14 11:00',
                        temp_f: 37.0,
                        is_day: 1,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
                            code: 1003,
                        },
                        wind_mph: 5.6,
                        wind_degree: 95,
                        wind_dir: 'E',
                        pressure_in: 30.42,
                        precip_in: 0.0,
                        humidity: 71,
                        cloud: 59,
                        feelslike_f: 31.6,
                        windchill_f: 31.6,
                        heatindex_f: 37.0,
                        dewpoint_f: 28.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.5,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668445200,
                        time: '2022-11-14 12:00',
                        temp_f: 38.8,
                        is_day: 1,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
                            code: 1003,
                        },
                        wind_mph: 6.0,
                        wind_degree: 106,
                        wind_dir: 'ESE',
                        pressure_in: 30.42,
                        precip_in: 0.0,
                        humidity: 65,
                        cloud: 51,
                        feelslike_f: 34.0,
                        windchill_f: 34.0,
                        heatindex_f: 38.8,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.9,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668448800,
                        time: '2022-11-14 13:00',
                        temp_f: 40.3,
                        is_day: 1,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
                            code: 1003,
                        },
                        wind_mph: 5.4,
                        wind_degree: 113,
                        wind_dir: 'ESE',
                        pressure_in: 30.39,
                        precip_in: 0.0,
                        humidity: 60,
                        cloud: 54,
                        feelslike_f: 35.4,
                        windchill_f: 35.4,
                        heatindex_f: 40.3,
                        dewpoint_f: 27.5,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.3,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668452400,
                        time: '2022-11-14 14:00',
                        temp_f: 41.4,
                        is_day: 1,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                            code: 1006,
                        },
                        wind_mph: 4.7,
                        wind_degree: 116,
                        wind_dir: 'ESE',
                        pressure_in: 30.37,
                        precip_in: 0.0,
                        humidity: 57,
                        cloud: 72,
                        feelslike_f: 36.7,
                        windchill_f: 36.7,
                        heatindex_f: 41.4,
                        dewpoint_f: 27.1,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.4,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668456000,
                        time: '2022-11-14 15:00',
                        temp_f: 41.9,
                        is_day: 1,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
                            code: 1006,
                        },
                        wind_mph: 4.5,
                        wind_degree: 110,
                        wind_dir: 'ESE',
                        pressure_in: 30.35,
                        precip_in: 0.0,
                        humidity: 56,
                        cloud: 77,
                        feelslike_f: 37.4,
                        windchill_f: 37.4,
                        heatindex_f: 41.9,
                        dewpoint_f: 27.3,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.1,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668459600,
                        time: '2022-11-14 16:00',
                        temp_f: 41.5,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.5,
                        wind_degree: 105,
                        wind_dir: 'ESE',
                        pressure_in: 30.32,
                        precip_in: 0.0,
                        humidity: 57,
                        cloud: 97,
                        feelslike_f: 37.0,
                        windchill_f: 37.0,
                        heatindex_f: 41.5,
                        dewpoint_f: 27.3,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.1,
                        uv: 2.0,
                    },
                    {
                        time_epoch: 1668463200,
                        time: '2022-11-14 17:00',
                        temp_f: 40.8,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.9,
                        wind_degree: 100,
                        wind_dir: 'E',
                        pressure_in: 30.32,
                        precip_in: 0.0,
                        humidity: 59,
                        cloud: 97,
                        feelslike_f: 36.1,
                        windchill_f: 36.1,
                        heatindex_f: 40.8,
                        dewpoint_f: 27.7,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668466800,
                        time: '2022-11-14 18:00',
                        temp_f: 40.1,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.7,
                        wind_degree: 80,
                        wind_dir: 'E',
                        pressure_in: 30.31,
                        precip_in: 0.0,
                        humidity: 62,
                        cloud: 98,
                        feelslike_f: 35.6,
                        windchill_f: 35.6,
                        heatindex_f: 40.1,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 7.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668470400,
                        time: '2022-11-14 19:00',
                        temp_f: 39.4,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.9,
                        wind_degree: 73,
                        wind_dir: 'ENE',
                        pressure_in: 30.33,
                        precip_in: 0.0,
                        humidity: 64,
                        cloud: 100,
                        feelslike_f: 34.7,
                        windchill_f: 34.7,
                        heatindex_f: 39.4,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 8.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668474000,
                        time: '2022-11-14 20:00',
                        temp_f: 39.0,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 5.6,
                        wind_degree: 74,
                        wind_dir: 'ENE',
                        pressure_in: 30.33,
                        precip_in: 0.0,
                        humidity: 65,
                        cloud: 100,
                        feelslike_f: 33.6,
                        windchill_f: 33.6,
                        heatindex_f: 39.0,
                        dewpoint_f: 28.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668477600,
                        time: '2022-11-14 21:00',
                        temp_f: 39.0,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 6.3,
                        wind_degree: 81,
                        wind_dir: 'E',
                        pressure_in: 30.32,
                        precip_in: 0.0,
                        humidity: 66,
                        cloud: 99,
                        feelslike_f: 33.1,
                        windchill_f: 33.1,
                        heatindex_f: 39.0,
                        dewpoint_f: 28.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 13.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668481200,
                        time: '2022-11-14 22:00',
                        temp_f: 38.7,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 6.5,
                        wind_degree: 81,
                        wind_dir: 'E',
                        pressure_in: 30.29,
                        precip_in: 0.0,
                        humidity: 66,
                        cloud: 95,
                        feelslike_f: 32.2,
                        windchill_f: 32.2,
                        heatindex_f: 38.7,
                        dewpoint_f: 28.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 13.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668484800,
                        time: '2022-11-14 23:00',
                        temp_f: 38.1,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 6.3,
                        wind_degree: 93,
                        wind_dir: 'E',
                        pressure_in: 30.27,
                        precip_in: 0.0,
                        humidity: 68,
                        cloud: 56,
                        feelslike_f: 31.8,
                        windchill_f: 31.8,
                        heatindex_f: 38.1,
                        dewpoint_f: 28.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.6,
                        uv: 1.0,
                    },
                ],
            },
            {
                date: '2022-11-15',
                date_epoch: 1668470400,
                day: {
                    maxtemp_f: 39.9,
                    mintemp_f: 33.6,
                    avgtemp_f: 37.1,
                    maxwind_mph: 8.9,
                    totalprecip_in: 0.17,
                    totalsnow_cm: 0.0,
                    avgvis_miles: 4.0,
                    avghumidity: 86.0,
                    daily_will_it_rain: 1,
                    daily_chance_of_rain: 88,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: 'Patchy rain possible',
                        icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
                        code: 1063,
                    },
                    uv: 1.0,
                },
                astro: {
                    sunrise: '07:21 AM',
                    sunset: '05:24 PM',
                    moonrise: '11:25 PM',
                    moonset: '01:28 PM',
                    moon_phase: 'Last Quarter',
                    moon_illumination: '45',
                },
                hour: [
                    {
                        time_epoch: 1668488400,
                        time: '2022-11-15 00:00',
                        temp_f: 36.9,
                        is_day: 0,
                        condition: {
                            text: 'Clear',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
                            code: 1000,
                        },
                        wind_mph: 5.8,
                        wind_degree: 84,
                        wind_dir: 'E',
                        pressure_in: 30.28,
                        precip_in: 0.0,
                        humidity: 71,
                        cloud: 18,
                        feelslike_f: 31.8,
                        windchill_f: 31.8,
                        heatindex_f: 36.9,
                        dewpoint_f: 28.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.0,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668492000,
                        time: '2022-11-15 01:00',
                        temp_f: 36.3,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 3.6,
                        wind_degree: 100,
                        wind_dir: 'E',
                        pressure_in: 30.27,
                        precip_in: 0.0,
                        humidity: 73,
                        cloud: 98,
                        feelslike_f: 30.9,
                        windchill_f: 30.9,
                        heatindex_f: 36.3,
                        dewpoint_f: 28.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668495600,
                        time: '2022-11-15 02:00',
                        temp_f: 36.1,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 3.8,
                        wind_degree: 97,
                        wind_dir: 'E',
                        pressure_in: 30.29,
                        precip_in: 0.0,
                        humidity: 72,
                        cloud: 100,
                        feelslike_f: 31.1,
                        windchill_f: 31.1,
                        heatindex_f: 36.1,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 6.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668499200,
                        time: '2022-11-15 03:00',
                        temp_f: 36.0,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 5.6,
                        wind_degree: 84,
                        wind_dir: 'E',
                        pressure_in: 30.28,
                        precip_in: 0.0,
                        humidity: 73,
                        cloud: 100,
                        feelslike_f: 30.6,
                        windchill_f: 30.6,
                        heatindex_f: 36.0,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 10.5,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668502800,
                        time: '2022-11-15 04:00',
                        temp_f: 35.6,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.7,
                        wind_degree: 95,
                        wind_dir: 'E',
                        pressure_in: 30.22,
                        precip_in: 0.0,
                        humidity: 73,
                        cloud: 100,
                        feelslike_f: 28.4,
                        windchill_f: 28.4,
                        heatindex_f: 35.6,
                        dewpoint_f: 27.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 7.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668506400,
                        time: '2022-11-15 05:00',
                        temp_f: 35.2,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 3.1,
                        wind_degree: 102,
                        wind_dir: 'ESE',
                        pressure_in: 30.24,
                        precip_in: 0.0,
                        humidity: 73,
                        cloud: 100,
                        feelslike_f: 28.9,
                        windchill_f: 28.9,
                        heatindex_f: 35.2,
                        dewpoint_f: 27.7,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 3.0,
                        gust_mph: 4.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668510000,
                        time: '2022-11-15 06:00',
                        temp_f: 35.6,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 2.9,
                        wind_degree: 160,
                        wind_dir: 'SSE',
                        pressure_in: 30.24,
                        precip_in: 0.0,
                        humidity: 74,
                        cloud: 100,
                        feelslike_f: 29.8,
                        windchill_f: 29.8,
                        heatindex_f: 35.6,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 4.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668513600,
                        time: '2022-11-15 07:00',
                        temp_f: 35.4,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 3.4,
                        wind_degree: 88,
                        wind_dir: 'E',
                        pressure_in: 30.22,
                        precip_in: 0.0,
                        humidity: 74,
                        cloud: 100,
                        feelslike_f: 29.1,
                        windchill_f: 29.1,
                        heatindex_f: 35.4,
                        dewpoint_f: 28.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 3.0,
                        gust_mph: 4.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668517200,
                        time: '2022-11-15 08:00',
                        temp_f: 35.6,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.3,
                        wind_degree: 93,
                        wind_dir: 'E',
                        pressure_in: 30.23,
                        precip_in: 0.0,
                        humidity: 74,
                        cloud: 100,
                        feelslike_f: 30.0,
                        windchill_f: 30.0,
                        heatindex_f: 35.6,
                        dewpoint_f: 28.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 5.0,
                        gust_mph: 6.0,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668520800,
                        time: '2022-11-15 09:00',
                        temp_f: 33.6,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.0,
                        wind_degree: 96,
                        wind_dir: 'E',
                        pressure_in: 30.22,
                        precip_in: 0.0,
                        humidity: 93,
                        cloud: 100,
                        feelslike_f: 26.6,
                        windchill_f: 26.6,
                        heatindex_f: 33.6,
                        dewpoint_f: 31.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668524400,
                        time: '2022-11-15 10:00',
                        temp_f: 34.3,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.3,
                        wind_degree: 115,
                        wind_dir: 'ESE',
                        pressure_in: 30.2,
                        precip_in: 0.0,
                        humidity: 94,
                        cloud: 100,
                        feelslike_f: 28.2,
                        windchill_f: 28.2,
                        heatindex_f: 34.3,
                        dewpoint_f: 32.7,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 5.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668528000,
                        time: '2022-11-15 11:00',
                        temp_f: 35.4,
                        is_day: 1,
                        condition: {
                            text: 'Light rain',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/296.png',
                            code: 1183,
                        },
                        wind_mph: 5.1,
                        wind_degree: 127,
                        wind_dir: 'SE',
                        pressure_in: 30.17,
                        precip_in: 0.06,
                        humidity: 93,
                        cloud: 100,
                        feelslike_f: 30.4,
                        windchill_f: 30.4,
                        heatindex_f: 35.4,
                        dewpoint_f: 33.6,
                        will_it_rain: 1,
                        chance_of_rain: 71,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 6.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668531600,
                        time: '2022-11-15 12:00',
                        temp_f: 36.3,
                        is_day: 1,
                        condition: {
                            text: 'Mist',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/143.png',
                            code: 1030,
                        },
                        wind_mph: 5.4,
                        wind_degree: 128,
                        wind_dir: 'SE',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 94,
                        cloud: 100,
                        feelslike_f: 33.4,
                        windchill_f: 33.4,
                        heatindex_f: 36.3,
                        dewpoint_f: 34.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 6.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668535200,
                        time: '2022-11-15 13:00',
                        temp_f: 36.9,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 3.8,
                        wind_degree: 125,
                        wind_dir: 'SE',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 94,
                        cloud: 100,
                        feelslike_f: 33.8,
                        windchill_f: 33.8,
                        heatindex_f: 36.9,
                        dewpoint_f: 35.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 4.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668538800,
                        time: '2022-11-15 14:00',
                        temp_f: 37.6,
                        is_day: 1,
                        condition: {
                            text: 'Light rain',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/296.png',
                            code: 1183,
                        },
                        wind_mph: 3.8,
                        wind_degree: 133,
                        wind_dir: 'SE',
                        pressure_in: 30.14,
                        precip_in: 0.08,
                        humidity: 93,
                        cloud: 100,
                        feelslike_f: 34.0,
                        windchill_f: 34.0,
                        heatindex_f: 37.6,
                        dewpoint_f: 35.8,
                        will_it_rain: 0,
                        chance_of_rain: 65,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 5.0,
                        gust_mph: 4.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668542400,
                        time: '2022-11-15 15:00',
                        temp_f: 37.9,
                        is_day: 1,
                        condition: {
                            text: 'Light drizzle',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/266.png',
                            code: 1153,
                        },
                        wind_mph: 4.0,
                        wind_degree: 140,
                        wind_dir: 'SE',
                        pressure_in: 30.1,
                        precip_in: 0.01,
                        humidity: 95,
                        cloud: 100,
                        feelslike_f: 34.9,
                        windchill_f: 34.9,
                        heatindex_f: 37.9,
                        dewpoint_f: 36.7,
                        will_it_rain: 1,
                        chance_of_rain: 87,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 5.1,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668546000,
                        time: '2022-11-15 16:00',
                        temp_f: 38.5,
                        is_day: 1,
                        condition: {
                            text: 'Light drizzle',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/266.png',
                            code: 1153,
                        },
                        wind_mph: 3.8,
                        wind_degree: 151,
                        wind_dir: 'SSE',
                        pressure_in: 30.1,
                        precip_in: 0.01,
                        humidity: 95,
                        cloud: 100,
                        feelslike_f: 35.8,
                        windchill_f: 35.8,
                        heatindex_f: 38.5,
                        dewpoint_f: 37.2,
                        will_it_rain: 1,
                        chance_of_rain: 79,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 4.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668549600,
                        time: '2022-11-15 17:00',
                        temp_f: 39.9,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 4.0,
                        wind_degree: 156,
                        wind_dir: 'SSE',
                        pressure_in: 30.15,
                        precip_in: 0.0,
                        humidity: 84,
                        cloud: 100,
                        feelslike_f: 37.6,
                        windchill_f: 37.6,
                        heatindex_f: 39.9,
                        dewpoint_f: 35.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 5.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668553200,
                        time: '2022-11-15 18:00',
                        temp_f: 39.0,
                        is_day: 0,
                        condition: {
                            text: 'Mist',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
                            code: 1030,
                        },
                        wind_mph: 4.5,
                        wind_degree: 178,
                        wind_dir: 'S',
                        pressure_in: 30.09,
                        precip_in: 0.0,
                        humidity: 95,
                        cloud: 100,
                        feelslike_f: 35.8,
                        windchill_f: 35.8,
                        heatindex_f: 39.0,
                        dewpoint_f: 37.8,
                        will_it_rain: 1,
                        chance_of_rain: 75,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 5.8,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668556800,
                        time: '2022-11-15 19:00',
                        temp_f: 39.2,
                        is_day: 0,
                        condition: {
                            text: 'Mist',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
                            code: 1030,
                        },
                        wind_mph: 4.9,
                        wind_degree: 198,
                        wind_dir: 'SSW',
                        pressure_in: 30.09,
                        precip_in: 0.0,
                        humidity: 96,
                        cloud: 100,
                        feelslike_f: 35.6,
                        windchill_f: 35.6,
                        heatindex_f: 39.2,
                        dewpoint_f: 38.1,
                        will_it_rain: 0,
                        chance_of_rain: 66,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 6.5,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668560400,
                        time: '2022-11-15 20:00',
                        temp_f: 39.9,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 6.3,
                        wind_degree: 225,
                        wind_dir: 'SW',
                        pressure_in: 30.07,
                        precip_in: 0.0,
                        humidity: 94,
                        cloud: 100,
                        feelslike_f: 37.0,
                        windchill_f: 37.0,
                        heatindex_f: 39.9,
                        dewpoint_f: 38.3,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 1.0,
                        gust_mph: 8.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668564000,
                        time: '2022-11-15 21:00',
                        temp_f: 39.0,
                        is_day: 0,
                        condition: {
                            text: 'Patchy rain possible',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/176.png',
                            code: 1063,
                        },
                        wind_mph: 8.3,
                        wind_degree: 246,
                        wind_dir: 'WSW',
                        pressure_in: 30.11,
                        precip_in: 0.0,
                        humidity: 96,
                        cloud: 100,
                        feelslike_f: 33.3,
                        windchill_f: 33.3,
                        heatindex_f: 39.0,
                        dewpoint_f: 37.9,
                        will_it_rain: 1,
                        chance_of_rain: 88,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668567600,
                        time: '2022-11-15 22:00',
                        temp_f: 39.4,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.5,
                        wind_degree: 247,
                        wind_dir: 'WSW',
                        pressure_in: 30.11,
                        precip_in: 0.0,
                        humidity: 93,
                        cloud: 100,
                        feelslike_f: 33.6,
                        windchill_f: 33.6,
                        heatindex_f: 39.4,
                        dewpoint_f: 37.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 10.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668571200,
                        time: '2022-11-15 23:00',
                        temp_f: 40.3,
                        is_day: 0,
                        condition: {
                            text: 'Mist',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
                            code: 1030,
                        },
                        wind_mph: 8.9,
                        wind_degree: 246,
                        wind_dir: 'WSW',
                        pressure_in: 30.07,
                        precip_in: 0.0,
                        humidity: 95,
                        cloud: 100,
                        feelslike_f: 35.4,
                        windchill_f: 35.4,
                        heatindex_f: 40.3,
                        dewpoint_f: 39.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 5.0,
                        gust_mph: 11.4,
                        uv: 1.0,
                    },
                ],
            },
            {
                date: '2022-11-16',
                date_epoch: 1668556800,
                day: {
                    maxtemp_f: 39.2,
                    mintemp_f: 30.7,
                    avgtemp_f: 36.2,
                    maxwind_mph: 10.3,
                    totalprecip_in: 0.02,
                    totalsnow_cm: 0.34,
                    avgvis_miles: 5.0,
                    avghumidity: 83.0,
                    daily_will_it_rain: 1,
                    daily_chance_of_rain: 80,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: 'Patchy rain possible',
                        icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
                        code: 1063,
                    },
                    uv: 1.0,
                },
                astro: {
                    sunrise: '07:22 AM',
                    sunset: '05:23 PM',
                    moonrise: 'No moonrise',
                    moonset: '01:56 PM',
                    moon_phase: 'Last Quarter',
                    moon_illumination: '38',
                },
                hour: [
                    {
                        time_epoch: 1668574800,
                        time: '2022-11-16 00:00',
                        temp_f: 37.0,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 10.1,
                        wind_degree: 258,
                        wind_dir: 'WSW',
                        pressure_in: 30.13,
                        precip_in: 0.0,
                        humidity: 96,
                        cloud: 100,
                        feelslike_f: 29.8,
                        windchill_f: 29.8,
                        heatindex_f: 37.0,
                        dewpoint_f: 35.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 13.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668578400,
                        time: '2022-11-16 01:00',
                        temp_f: 36.1,
                        is_day: 0,
                        condition: {
                            text: 'Light snow showers',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/368.png',
                            code: 1255,
                        },
                        wind_mph: 9.4,
                        wind_degree: 257,
                        wind_dir: 'WSW',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 94,
                        cloud: 100,
                        feelslike_f: 29.1,
                        windchill_f: 29.1,
                        heatindex_f: 36.1,
                        dewpoint_f: 34.7,
                        will_it_rain: 0,
                        chance_of_rain: 60,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668582000,
                        time: '2022-11-16 02:00',
                        temp_f: 40.1,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.6,
                        wind_degree: 255,
                        wind_dir: 'WSW',
                        pressure_in: 30.07,
                        precip_in: 0.0,
                        humidity: 90,
                        cloud: 100,
                        feelslike_f: 32.9,
                        windchill_f: 32.9,
                        heatindex_f: 40.1,
                        dewpoint_f: 37.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.8,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668585600,
                        time: '2022-11-16 03:00',
                        temp_f: 36.0,
                        is_day: 0,
                        condition: {
                            text: 'Light snow',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/326.png',
                            code: 1213,
                        },
                        wind_mph: 9.8,
                        wind_degree: 256,
                        wind_dir: 'WSW',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 88,
                        cloud: 100,
                        feelslike_f: 28.6,
                        windchill_f: 28.6,
                        heatindex_f: 36.0,
                        dewpoint_f: 32.7,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 13.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668589200,
                        time: '2022-11-16 04:00',
                        temp_f: 35.6,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.2,
                        wind_degree: 260,
                        wind_dir: 'W',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 87,
                        cloud: 100,
                        feelslike_f: 28.6,
                        windchill_f: 28.6,
                        heatindex_f: 35.6,
                        dewpoint_f: 32.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668592800,
                        time: '2022-11-16 05:00',
                        temp_f: 37.0,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.5,
                        wind_degree: 257,
                        wind_dir: 'WSW',
                        pressure_in: 30.11,
                        precip_in: 0.0,
                        humidity: 87,
                        cloud: 100,
                        feelslike_f: 29.1,
                        windchill_f: 29.1,
                        heatindex_f: 37.0,
                        dewpoint_f: 33.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668596400,
                        time: '2022-11-16 06:00',
                        temp_f: 35.4,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.3,
                        wind_degree: 259,
                        wind_dir: 'W',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 89,
                        cloud: 100,
                        feelslike_f: 28.8,
                        windchill_f: 28.8,
                        heatindex_f: 35.4,
                        dewpoint_f: 32.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668600000,
                        time: '2022-11-16 07:00',
                        temp_f: 35.2,
                        is_day: 0,
                        condition: {
                            text: 'Light snow showers',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/368.png',
                            code: 1255,
                        },
                        wind_mph: 8.3,
                        wind_degree: 262,
                        wind_dir: 'W',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 89,
                        cloud: 100,
                        feelslike_f: 28.6,
                        windchill_f: 28.6,
                        heatindex_f: 35.2,
                        dewpoint_f: 32.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.2,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668603600,
                        time: '2022-11-16 08:00',
                        temp_f: 36.1,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 7.8,
                        wind_degree: 261,
                        wind_dir: 'W',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 88,
                        cloud: 100,
                        feelslike_f: 28.9,
                        windchill_f: 28.9,
                        heatindex_f: 36.1,
                        dewpoint_f: 32.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 10.5,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668607200,
                        time: '2022-11-16 09:00',
                        temp_f: 35.1,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 7.4,
                        wind_degree: 259,
                        wind_dir: 'W',
                        pressure_in: 30.19,
                        precip_in: 0.0,
                        humidity: 88,
                        cloud: 100,
                        feelslike_f: 28.9,
                        windchill_f: 28.9,
                        heatindex_f: 35.1,
                        dewpoint_f: 31.8,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 9.6,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668610800,
                        time: '2022-11-16 10:00',
                        temp_f: 35.8,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 7.8,
                        wind_degree: 258,
                        wind_dir: 'WSW',
                        pressure_in: 30.2,
                        precip_in: 0.0,
                        humidity: 85,
                        cloud: 100,
                        feelslike_f: 29.5,
                        windchill_f: 29.5,
                        heatindex_f: 35.8,
                        dewpoint_f: 31.6,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 9.8,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668614400,
                        time: '2022-11-16 11:00',
                        temp_f: 36.0,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.3,
                        wind_degree: 257,
                        wind_dir: 'WSW',
                        pressure_in: 30.17,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 100,
                        feelslike_f: 27.5,
                        windchill_f: 27.5,
                        heatindex_f: 36.0,
                        dewpoint_f: 30.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 4.0,
                        gust_mph: 10.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668618000,
                        time: '2022-11-16 12:00',
                        temp_f: 37.8,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.5,
                        wind_degree: 254,
                        wind_dir: 'WSW',
                        pressure_in: 30.19,
                        precip_in: 0.0,
                        humidity: 77,
                        cloud: 100,
                        feelslike_f: 31.6,
                        windchill_f: 31.6,
                        heatindex_f: 37.8,
                        dewpoint_f: 31.1,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 9.8,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668621600,
                        time: '2022-11-16 13:00',
                        temp_f: 38.5,
                        is_day: 1,
                        condition: {
                            text: 'Light snow showers',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/368.png',
                            code: 1255,
                        },
                        wind_mph: 9.2,
                        wind_degree: 252,
                        wind_dir: 'WSW',
                        pressure_in: 30.17,
                        precip_in: 0.0,
                        humidity: 75,
                        cloud: 100,
                        feelslike_f: 32.2,
                        windchill_f: 32.2,
                        heatindex_f: 38.5,
                        dewpoint_f: 31.3,
                        will_it_rain: 1,
                        chance_of_rain: 80,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 10.7,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668625200,
                        time: '2022-11-16 14:00',
                        temp_f: 38.1,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.8,
                        wind_degree: 255,
                        wind_dir: 'WSW',
                        pressure_in: 30.15,
                        precip_in: 0.0,
                        humidity: 73,
                        cloud: 100,
                        feelslike_f: 30.0,
                        windchill_f: 30.0,
                        heatindex_f: 38.1,
                        dewpoint_f: 30.2,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668628800,
                        time: '2022-11-16 15:00',
                        temp_f: 39.2,
                        is_day: 1,
                        condition: {
                            text: 'Moderate or heavy snow showers',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/371.png',
                            code: 1258,
                        },
                        wind_mph: 10.3,
                        wind_degree: 253,
                        wind_dir: 'WSW',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 75,
                        cloud: 100,
                        feelslike_f: 32.5,
                        windchill_f: 32.5,
                        heatindex_f: 39.2,
                        dewpoint_f: 31.8,
                        will_it_rain: 0,
                        chance_of_rain: 66,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 4.0,
                        gust_mph: 11.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668632400,
                        time: '2022-11-16 16:00',
                        temp_f: 38.8,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.8,
                        wind_degree: 253,
                        wind_dir: 'WSW',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 78,
                        cloud: 100,
                        feelslike_f: 32.2,
                        windchill_f: 32.2,
                        heatindex_f: 38.8,
                        dewpoint_f: 32.7,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668636000,
                        time: '2022-11-16 17:00',
                        temp_f: 37.9,
                        is_day: 1,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.8,
                        wind_degree: 245,
                        wind_dir: 'WSW',
                        pressure_in: 30.13,
                        precip_in: 0.0,
                        humidity: 82,
                        cloud: 100,
                        feelslike_f: 30.4,
                        windchill_f: 30.4,
                        heatindex_f: 37.9,
                        dewpoint_f: 32.9,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 4.0,
                        gust_mph: 11.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668639600,
                        time: '2022-11-16 18:00',
                        temp_f: 36.9,
                        is_day: 0,
                        condition: {
                            text: 'Cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
                            code: 1006,
                        },
                        wind_mph: 10.3,
                        wind_degree: 240,
                        wind_dir: 'WSW',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 81,
                        cloud: 74,
                        feelslike_f: 29.7,
                        windchill_f: 29.7,
                        heatindex_f: 36.9,
                        dewpoint_f: 31.5,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 11.9,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668643200,
                        time: '2022-11-16 19:00',
                        temp_f: 35.4,
                        is_day: 0,
                        condition: {
                            text: 'Moderate or heavy snow showers',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/371.png',
                            code: 1258,
                        },
                        wind_mph: 10.1,
                        wind_degree: 243,
                        wind_dir: 'WSW',
                        pressure_in: 30.15,
                        precip_in: 0.0,
                        humidity: 81,
                        cloud: 79,
                        feelslike_f: 27.9,
                        windchill_f: 27.9,
                        heatindex_f: 35.4,
                        dewpoint_f: 30.2,
                        will_it_rain: 0,
                        chance_of_rain: 67,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 4.0,
                        gust_mph: 12.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668646800,
                        time: '2022-11-16 20:00',
                        temp_f: 35.4,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 9.4,
                        wind_degree: 256,
                        wind_dir: 'WSW',
                        pressure_in: 30.15,
                        precip_in: 0.0,
                        humidity: 80,
                        cloud: 100,
                        feelslike_f: 26.8,
                        windchill_f: 26.8,
                        heatindex_f: 35.4,
                        dewpoint_f: 30.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 13.4,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668650400,
                        time: '2022-11-16 21:00',
                        temp_f: 31.5,
                        is_day: 0,
                        condition: {
                            text: 'Partly cloudy',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
                            code: 1003,
                        },
                        wind_mph: 7.8,
                        wind_degree: 263,
                        wind_dir: 'W',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 78,
                        cloud: 39,
                        feelslike_f: 24.3,
                        windchill_f: 24.3,
                        heatindex_f: 31.5,
                        dewpoint_f: 25.3,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.1,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668654000,
                        time: '2022-11-16 22:00',
                        temp_f: 30.7,
                        is_day: 0,
                        condition: {
                            text: 'Clear',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
                            code: 1000,
                        },
                        wind_mph: 7.8,
                        wind_degree: 257,
                        wind_dir: 'WSW',
                        pressure_in: 30.16,
                        precip_in: 0.0,
                        humidity: 79,
                        cloud: 19,
                        feelslike_f: 23.4,
                        windchill_f: 23.4,
                        heatindex_f: 30.7,
                        dewpoint_f: 25.0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.3,
                        uv: 1.0,
                    },
                    {
                        time_epoch: 1668657600,
                        time: '2022-11-16 23:00',
                        temp_f: 34.2,
                        is_day: 0,
                        condition: {
                            text: 'Overcast',
                            icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                            code: 1009,
                        },
                        wind_mph: 8.7,
                        wind_degree: 255,
                        wind_dir: 'WSW',
                        pressure_in: 30.14,
                        precip_in: 0.0,
                        humidity: 86,
                        cloud: 100,
                        feelslike_f: 25.9,
                        windchill_f: 25.9,
                        heatindex_f: 34.2,
                        dewpoint_f: 30.4,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_miles: 6.0,
                        gust_mph: 12.8,
                        uv: 1.0,
                    },
                ],
            },
        ],
    },
};
const autoComplete = [
    {
        id: 2627255,
        name: 'Cincinnati',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.16,
        lon: -84.46,
        url: 'cincinnati-ohio-united-states-of-america',
    },
    {
        id: 2629573,
        name: 'Norwood',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.16,
        lon: -84.46,
        url: 'norwood-ohio-united-states-of-america',
    },
    {
        id: 2627883,
        name: 'Finneytown',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.2,
        lon: -84.52,
        url: 'finneytown-ohio-united-states-of-america',
    },
    {
        id: 2629982,
        name: 'Reading',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.22,
        lon: -84.44,
        url: 'reading-ohio-united-states-of-america',
    },
    {
        id: 2579263,
        name: 'Newport',
        region: 'Kentucky',
        country: 'United States of America',
        lat: 39.09,
        lon: -84.5,
        url: 'newport-kentucky-united-states-of-america',
    },
    {
        id: 2577941,
        name: 'Fort Thomas',
        region: 'Kentucky',
        country: 'United States of America',
        lat: 39.08,
        lon: -84.45,
        url: 'fort-thomas-kentucky-united-states-of-america',
    },
    {
        id: 2577409,
        name: 'Covington',
        region: 'Kentucky',
        country: 'United States of America',
        lat: 39.08,
        lon: -84.51,
        url: 'covington-kentucky-united-states-of-america',
    },
    {
        id: 2629509,
        name: 'North College Hill',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.22,
        lon: -84.55,
        url: 'north-college-hill-ohio-united-states-of-america',
    },
    {
        id: 2626869,
        name: 'Blue Ash',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.23,
        lon: -84.38,
        url: 'blue-ash-ohio-united-states-of-america',
    },
    {
        id: 2629237,
        name: 'Montgomery',
        region: 'Ohio',
        country: 'United States of America',
        lat: 39.23,
        lon: -84.35,
        url: 'montgomery-ohio-united-states-of-america',
    },
];
