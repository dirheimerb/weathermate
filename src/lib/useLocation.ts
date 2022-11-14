import React from 'react';

export default function useLocation() {
    const [location, setLocation] = React.useState({
        lat: 0,
        lon: 0,
        acc: 0,
        timestamp: 0,
    });
    const [error, setError] = React.useState({
        PERMISSION_DENIED: 0,
        POSITION_UNAVAILABLE: 0,
    });
    const [timeStamp, setTimeStamp] = React.useState<number>();

    React.useMemo(() => {
        const location = new GeolocationCoordinates();
        const error = GeolocationPositionError;
        const timeStamp = new GeolocationPosition();
        const loc = {
            lat: location.latitude,
            lon: location.longitude,
            acc: location.accuracy,
            timestamp: timeStamp.timestamp,
        };
        setTimeStamp(timeStamp.timestamp);

        setLocation(loc);
        const e = {
            PERMISSION_DENIED: error.PERMISSION_DENIED,
            POSITION_UNAVAILABLE: error.POSITION_UNAVAILABLE,
        };
        setError(e);
    }, []);
    return { location, error, timeStamp };
}
