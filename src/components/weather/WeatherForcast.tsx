import React from 'react';
import axios from 'axios';
import DisplayWeather from './DisplayWeather';
import { WeatherResponse } from '../../lib/weatherTypes';
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
export default function WeatherForcastRequest() {
    const [city, setCity] = React.useState<string>('');
}
//     const [weather, setWeather] = React.useState<WeatherResponse>({
//         location: {
//             name: '',
//             region: '',
//             country: '',
//             lat: 0,
//             lon: 0,
//             tz_id: '',
//             localtime_epoch: 0,
//             localtime: '',
//         },
//         current: {
//             last_updated_epoch: 0,
//             last_updated: '',
//             temp_f: 0,
//             temp_c: 0,
//             is_day: 0,
//             condition: {
//                 text: '',
//                 icon: '',
//                 code: 0,
//             },
//             air_quality?: {
//                 co: 0,
//                 no2: 0,
//                 o3: 0,
//                 so2: 0,
//                 pm2_5: 0,
//                 pm10: 0,
//                 us_epa_index: 0,
//                 gb_defra_index: 0,
//             },
//             wind_mph: 0,
//             wind_kph: 0,
//             wind_degree: 0,
//             wind_dir: '',
//             pressure_mb: 0,
//             pressure_in: 0,
//             precip_mm: 0,
//             precip_in: 0,
//             humidity: 0,
//             cloud: 0,
//             feelslike_f: 0,
//             feelslike_c: 0,
//             vis_km: 0,
//             vis_miles: 0,
//             uv: 0,
//             gust_mph: 0,
//             gust_kph: 0,
//         },
//         forecast: {
//             forecastday: [
//                 {
//                     date: '',
//                     date_epoch: 0,
//                     day: {
//                         maxtemp_f: 0,
//                         maxtemp_c: 0,
//                         mintemp_f: 0,
//                         mintemp_c: 0,
//                         avgtemp_f: 0,
//                         avgtemp_c: 0,
//                         maxwind_mph: 0,
//                         maxwind_kph: 0,
//                         totalprecip_mm: 0,
//                         totalprecip_in: 0,
//                         avgvis_km: 0,
//                         avgvis_miles: 0,
//                         avghumidity: 0,

//                         condition: {
//                             text: '',
//                             icon: '',
//                             code: 0,
//                         },
//                         uv: 0,
//                     },
//                     astro: {
//                         sunrise: '',
//                         sunset: '',
//                         moonrise: '',
//                         moonset: '',
//                         moon_phase: '',
//                         moon_illumination: 0,
//                     },
//                     hour: [
//                         {
//                             time_epoch: 0,
//                             time: '',
//                             temp_c: 0,
//                             condition: {
//                                 text: '',
//                                 icon: '',
//                                 code: 0,
//                             },
//                         },
//                     ],
//                 },
//             ],
//         },
//     });
//     const [error, setError] = React.useState<string>('');
//     const [loading, setLoading] = React.useState<boolean>(false);
//     const [showAlerts, setShowAlerts] = React.useState<number>();
//     const [numberOfDays, setNumberOfDays] = React.useState<number>(1);
//     const [nodata, setNoData] = React.useState<boolean>(false);

//     const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setCity(event.target.value);
//     };

//     const handleShowAlertsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.checked) {
//             setShowAlerts(1);
//         } else {
//             setShowAlerts(0);
//         }
//     };

//     const handleNumberOfDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setNumberOfDays(Number(event.target.value));
//     };

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(city, numberOfDays);
//         const handleAlerts = showAlerts === 1 ? '&alerts=yes' : '&alerts=no';
//         const config = {
//             method: 'GET',
//             url: 'https://api.weatherapi.com/v1/forecast.json?key=6a14c88ec80e4dd597e121736222105&q=Cincinnati&days=1&aqi=no&alerts=yes',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         setLoading(true);
//         axios(config)
//             .then((response) => {
//                 setWeather(response.data);
//                 setNoData(true);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setLoading(false);
//                 setNoData(false);
//             });
//     };

//     return (
//         <>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {nodata && <p>No data found</p>}

//             <div className="bg-slate-500 shadow w-full">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg text-center my-2 font-medium leading-6 text-gray-900">
//                         {loading ? 'Loading...' : 'Weather Forcast'}
//                     </h3>

//                     <form onSubmit={handleSubmit}>
//                         <div className="w-screen mt-0 ml-6 flex flex-shrink-0 items-center">
//                             <div className="w-full my-2 mt-0 ml-4">
//                                 <label className="w-1/4 px-5 ">Enber City: </label>
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     placeholder="Enter a city"
//                                     className="text-sm w-2/4 font-medium text-gray-700 p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-slate-100 dark:hover:bg-zinc-400"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-screen mt-0 ml-6 flex flex-shrink-0 items-center">
//                             <div className="w-full mt-0 ml-4">
//                                 <label className="w-1/4"> Number of Days: </label>
//                                 <input
//                                     name="numberOfDays"
//                                     type="number"
//                                     placeholder="Enter number of days: 1-10"
//                                     max={10}
//                                     className="inline-block w-2/4 text-sm font-medium text-gray-700 p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-slate-100 dark:hover:bg-zinc-400 my-6"
//                                     onChange={handleNumberOfDaysChange}
//                                     value={numberOfDays}
//                                 />
//                             </div>
//                         </div>
//                         <div className="mt-0 ml-6 flex flex-shrink-0 items-center">
//                             <div className="w-full mt-3 sm:mt-0 sm:ml-4">
//                                 <div className="inline-block items-center">
//                                     <label htmlFor="alerts" className="p-2">
//                                         {'Show Alerts'}
//                                     </label>
//                                     <input
//                                         type="checkbox"
//                                         id="alerts"
//                                         name="alerts"
//                                         value={showAlerts}
//                                         onChange={handleShowAlertsChange}
//                                         className="inline-block text-sm font-medium text-gray-700 p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-slate-100 dark:hover:bg-zinc-400"
//                                     />
//                                 </div>

//                                 <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
//                                     <button className="inline-block float-right items-center rounded-md border border-transparent bg-sky-400 px-4 py-2 font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:text-sm dark:bg-zinc-800 dark:text-slate-100 dark:hover:bg-zinc-900">
//                                         Submit
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

//             <DisplayWeather
//                 weather={weather}
//                 loading={loading}
//                 error={error}
//                 nodata={nodata}

//             />

//                 location={{
//                     name: weather?.location?.name,
//                     region: weather?.location?.region,
//                     country: weather?.location?.country,
//                     lat: weather?.location?.lat,
//                     lon: weather?.location?.lon,
//                     tz_id: weather?.location?.tz_id,
//                     localtime_epoch: weather?.location?.localtime_epoch,
//                     localtime: weather?.location?.localtime,
//                 }}
//                 current={{
//                     last_updated_epoch: weather?.current?.last_updated_epoch,
//                     last_updated: weather?.current?.last_updated,
//                     temp_c: weather?.current?.temp_c,
//                     temp_f: weather?.current?.temp_f,
//                     is_day: weather?.current?.is_day,
//                     condition: {
//                         text: weather?.current?.condition?.text,
//                         icon: weather?.current?.condition?.icon,
//                         code: weather?.current?.condition?.code,
//                     },
//                     wind_mph: weather?.current?.wind_mph,
//                     wind_kph: weather?.current?.wind_kph,
//                     wind_degree: weather?.current?.wind_degree,
//                     wind_dir: weather?.current?.wind_dir,
//                     pressure_mb: weather?.current?.pressure_mb,
//                     pressure_in: weather?.current?.pressure_in,
//                     precip_mm: weather?.current?.precip_mm,
//                     precip_in: weather?.current?.precip_in,
//                     humidity: weather?.current?.humidity,
//                     cloud: weather?.current?.cloud,
//                     feelslike_c: weather?.current?.feelslike_c,
//                     feelslike_f: weather?.current?.feelslike_f,
//                     vis_km: weather?.current?.vis_km,
//                     vis_miles: weather?.current?.vis_miles,
//                     uv: weather?.current?.uv,
//                     gust_mph: weather?.current?.gust_mph,
//                     gust_kph: weather?.current?.gust_kph,
//                     air_quality: {
//                         co: weather?.current?.air_quality?.co,
//                         no2: weather?.current?.air_quality?.no2,
//                         o3: weather?.current?.air_quality?.o3,
//                         so2: weather?.current?.air_quality?.so2,
//                         pm2_5: weather?.current?.air_quality?.pm2_5,
//                         pm10: weather?.current?.air_quality?.pm10,
//                         us_epa_index: weather?.current?.air_quality?.us_epa_index,
//                         gb_defra_index: weather?.current?.air_quality?.gb_defra_index,
//                     },
//                 }}
//             />
//         </>
//     );
// }
