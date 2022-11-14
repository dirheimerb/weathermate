import React from 'react';
import { WeatherAlerts } from '../../lib/weatherTypes';

export default function WeatherAlert(props: WeatherAlerts) {
    const {
        headline,
        msgType,
        severity,
        urgency,
        certainty,
        event,
        note,
        effective,
        expires,
        desc,
        instruction,
        bgColor,
        textColor,
        alertRef,
    } = props;

    const formatAlertResponse = () => {
        const regEx = /\n?\n|\n/g;
        const result = desc.replace(regEx, ' ');
        return result;
    };
    formatAlertResponse();
    console.log(desc);

    return (
        <div className="w-full">
            <div className="flex flex-col  items-center justify-center w-full">
                <div className="flex flex-col  items-center justify-center w-full">
                    <div className="flex flex-col  items-center justify-center w-full">
                        <ul
                            key={event}
                            className={`p-2 rounded-md ${bgColor} ${textColor} mb-2`}
                        >
                            <li className="flex flex-col items-center justify-center w-full">
                                {headline}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {msgType}
                            </li>
                            <li
                                className="flex flex-col items-center justify-center w-full"
                                ref={alertRef}
                            >
                                {severity}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {urgency}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {certainty}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {event}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {note}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {effective}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {expires}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {desc}
                            </li>
                            <li className="flex flex-col items-center justify-center w-full">
                                {instruction}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
