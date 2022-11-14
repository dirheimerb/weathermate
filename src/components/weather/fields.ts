export const WeatherFields = {
    last_updated: {
        type: String,
        description: 'Local time when the real time data was updated.',
    },
    last_updated_epoch: {
        type: Number,
        description: 'Local time when the real time data was updated in unix time.',
    },
    temp_c: {
        type: Number,
        description: 'Current temperature in Celsius.',
    },
    temp_f: {
        type: Number,
        description: 'Current temperature in Fahrenheit.',
    },
    feelslike_c: {
        type: Number,
        description: 'Current feels like temperature in Celsius.',
    },
    feelslike_f: {
        type: Number,
        description: 'Current feels like temperature in Fahrenheit.',
    },
    condition: {
        type: String,
        description: 'Current weather condition.',
    },
    conditionIcon: {
        type: String,
        description: 'Current weather condition icon.',
    },
    contidtionCode: {
        type: Number,
        description: 'Current weather condition code.',
    },
    wind_mph: {
        type: Number,
        description: 'Current wind speed in miles per hour.',
    },
    wind_kph: {
        type: Number,
        description: 'Current wind speed in kilometers per hour.',
    },
    wind_degree: {
        type: Number,
        description: 'Current wind direction in degrees.',
    },
    wind_dir: {
        type: String,
        description: 'Current wind direction.',
    },
    pressure_mb: {
        type: Number,
        description: 'Current pressure in millibars.',
    },
    pressure_in: {
        type: Number,
        description: 'Current pressure in inches.',
    },
    precip_mm: {
        type: Number,
        description: 'Current precipitation in millimeters.',
    },
    precip_in: {
        type: Number,
        description: 'Current precipitation in inches.',
    },
    humidity: {
        type: Number,
        description: 'Current humidity in percentage.',
    },
    cloud: {
        type: Number,
        description: 'Current cloud cover in percentage.',
    },
    is_day: {
        type: Number,
        description: 'Whether it is day or night. 1 for day, 0 for night.',
    },
    uv: {
        type: Number,
        description: 'Current UV index.',
    },
    gust_mph: {
        type: Number,
        description: 'Wind gust in miles per hour',
    },
    gust_kph: {
        type: Number,
        description: 'Wind gust in kilometers per hour',
    },
};
