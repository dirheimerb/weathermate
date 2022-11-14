import WeatherAlert from '@/components/weather/WeatherAlerts';
import React from 'react';
import useAlert from '@/lib/useAlert';
import useLocation from '@/lib/useLocation';
import WeatherCurrent from '@/components/weather/WeatherCurrent';
import CurrentWeatherInput from '@/components/weather/CurrentWeatherInput';
import ForecastWeatherInput from '@/components/weather/ForecastWeatherInput';

export default function IndexPage() {
    const [alertSeverity, setAlertSeverity] = React.useState<string>('');
    const [updateBGColor, setUpdateBGColor] = React.useState<string>('');
    const [updateTextColor, setUpdateTextColor] = React.useState<string>('');
    const { bgColor, textColor } = useAlert(alertSeverity);

    const listRefValue = React.useRef<HTMLLIElement>(null);

    React.useEffect(() => {
        setAlertSeverity(listRefValue.current?.innerText as string);
        setUpdateBGColor(bgColor);
        console.log('bgColor', bgColor);
        setUpdateTextColor(textColor);
        console.log('textColor', textColor);
    }, [listRefValue, bgColor, textColor]);

    return (
        <div className="bg-zinc-800 text-slate-100">
            <CurrentWeatherInput />
            <ForecastWeatherInput />
            {/*
            <WeatherAlert
                headline="Flood Warning issued January 05 at 9:47PM EST until January 07 at 6:15AM EST by NWS"
                msgType="Alert"
                severity="Moderate"
                urgency="Expected"
                areas="Calhoun; Lexington; Richland"
                category="Met"
                certainty="Likely"
                event="Flood Warning"
                note="Alert for Calhoun; Lexington; Richland (South Carolina) Issued by the National Weather Service"
                effective="2021-01-05T21:47:00-05:00"
                expires="2021-01-07T06:15:00-05:00"
                desc="...The Flood Warning continues for the following rivers in South\nCarolina...\nCongaree River At Carolina Eastman affecting Richland Calhoun\nand Lexington Counties.\nCongaree River At Congaree National Park-Gadsden affecting\nCalhoun and Richland Counties.\nNorth Fork Edisto River At Orangeburg affecting Orangeburg County.\n...The Flood Warning is now in effect until Thursday morning...\nThe Flood Warning continues for\nthe Congaree River At Carolina Eastman.\n* Until Thursday morning.\n* At 9:28 PM EST Tuesday the stage was 115.6 feet.\n* Flood stage is 115.0 feet.\n* Minor flooding is occurring and minor flooding is forecast.\n* Recent Activity...The maximum river stage in the 24 hours ending\nat 9:28 PM EST Tuesday was 118.2 feet.\n* Forecast...The river will rise to 115.7 feet just after midnight\ntonight. It will then fall below flood stage tomorrow morning to\n114.2 feet and begin rising again tomorrow evening. It will rise\nto 114.3 feet early Thursday morning. It will then fall again and\nremain below flood stage.\n* Impact...At 115.0 feet Flooding occurs in low lying areas of the\nCarolina Eastman Facility and at the Congaree National Park.\n* Flood History...This crest compares to a previous crest of 116.3\nfeet on 12/03/2020.\n&&"
                instruction="A Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.\nMotorists should not attempt to drive around barricades or drive\ncars through flooded areas.\nCaution is urged when walking near riverbanks.\nAdditional information is available at www.weather.gov.\nThe next statement will be issued Wednesday morning at 1000 AM EST."               
                bgColor={updateBGColor}
                textColor={updateTextColor}
                alertRef={listRefValue}            
            />
    */}
        </div>
    );
}
