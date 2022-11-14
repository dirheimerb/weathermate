/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { WeatherResponse } from '../../lib/weatherTypes';

export default function DisplayWeather(showData: boolean, weather: WeatherResponse) {
    const [show, setShow] = React.useState<boolean | undefined>(false);
    const [noData, setNoData] = React.useState<boolean | undefined>(showData);
    const { current, location } = weather;
    const {
        condition,
        temp_f,
        wind_mph,
        wind_dir,
        humidity,
        feelslike_f,
        uv,
        last_updated,
        gust_mph,
        cloud,
        vis_miles,
        pressure_in,
    } = current;
    const { name, region, country, localtime } = location;
    const [Condition, setCondition] = React.useState<string>('');
    const [Temp_f, setTemp_f] = React.useState<number | undefined>(0);
    const [Wind_mph, setWind_mph] = React.useState<number | undefined>(0);
    const [Wind_dir, setWind_dir] = React.useState<string>('');
    const [Humidity, setHumidity] = React.useState<number | undefined>(0);
    const [Feelslike_f, setFeelslike_f] = React.useState<number | undefined>(0);
    const [Uv, setUv] = React.useState<number | undefined>(0);
    const [Last_updated, setLast_updated] = React.useState<string>('');
    const [Gust_mph, setGust_mph] = React.useState<number | undefined>(0);
    const [Cloud, setCloud] = React.useState<number | undefined>(0);
    const [Vis_miles, setVis_miles] = React.useState<number | undefined>(0);
    const [Pressure_in, setPressure_in] = React.useState<number | undefined>(0);
    const [Name, setName] = React.useState<string>('');
    const [Region, setRegion] = React.useState<string>('');
    const [Country, setCountry] = React.useState<string>('');
    const [Localtime, setLocaltime] = React.useState<string>('');
    const [Icon, setIcon] = React.useState<string>('');
    const [Code, setCode] = React.useState<number | undefined>(0);
    const [Text, setText] = React.useState<string>('');

    React.useEffect(() => {
        if (current === undefined || location === undefined) {
            setNoData(true);
        } else {
            setNoData(false);
        }
        const config = {
            method: 'GET',
            url: 'https://api.weatherapi.com/v1/forecast.json?key=6a14c88ec80e4dd597e121736222105&q=Cincinnati&days=1&aqi=no&alerts=yes',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        axios(config).then((response) => {
            setCondition(response.data.current.condition.text);
            setTemp_f(response.data.current.temp_f);
            setWind_mph(response.data.current.wind_mph);
            setWind_dir(response.data.current.wind_dir);
            setHumidity(response.data.current.humidity);
            setFeelslike_f(response.data.current.feelslike_f);
            setUv(response.data.current.uv);
            setLast_updated(response.data.current.last_updated);
            setGust_mph(response.data.current.gust_mph);
            setCloud(response.data.current.cloud);
            setVis_miles(response.data.current.vis_miles);
            setPressure_in(response.data.current.pressure_in);
            setName(response.data.location.name);
            setRegion(response.data.location.region);
            setCountry(response.data.location.country);
            setLocaltime(response.data.location.localtime);
            setIcon(response.data.current.condition.icon);
            setCode(response.data.current.condition.code);
            setText(response.data.current.condition.text);
            setShow(true);
        });
    }, [current, location]);
    if (noData) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-2xl font-bold text-center">No Data</h1>
            </div>
        );
    }
    if (show) {
        return (
            <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                    <div className="ml-3">
                        <dl>
                            <dt className=" text-lg font-bold">
                                {'Location: '}
                                {name}, {region}
                            </dt>
                            <dt className="text-md font-semibold">Current Forecast</dt>
                            {undefined ? (
                                <dd></dd>
                            ) : (
                                <dd className="text-md font-semibold">
                                    <Image
                                        src={'https:' + condition?.icon}
                                        alt={condition?.text}
                                        width={50}
                                        height={50}
                                    />
                                </dd>
                            )}
                            <dd>Tempature: {temp_f || Temp_f}°F</dd>
                            <dd>Feels Like: {feelslike_f || Feelslike_f}°F</dd>
                        </dl>
                        <section>
                            <dd>{condition.text || Condition}</dd>
                            <dd>Wind Speed: {Math.floor(wind_mph) || Wind_mph}</dd>
                            <dd>Humidity: {Math.floor(humidity) || Humidity}</dd>
                            <dd>Wind Direction: {wind_dir || Wind_dir}</dd>
                            <dd>Wind Gust: {Math.floor(gust_mph) || Gust_mph}</dd>
                            <dd>UV Index: {uv || Uv}</dd>
                            <dd>Visibility: {Math.floor(vis_miles) || Vis_miles}</dd>
                            <dd>Pressure: {Math.floor(pressure_in) || Pressure_in}</dd>
                            <dd>Cloud Cover: {Math.floor(cloud) || Cloud}</dd>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>
    );
}
