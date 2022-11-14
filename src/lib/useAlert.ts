import React from 'react';

export default function useAlert(alert_severity: string) {
    const [bgColor, setBGColor] = React.useState<string>('');
    const [textColor, setTextColor] = React.useState<string>('');
    const alertRef = React.useRef<HTMLLIElement>(null);
    console.log('This value should be of Alert Severity: ', alert_severity);

    React.useEffect(() => {
        switch (alert_severity) {
            case 'Warning':
                setBGColor('bg-yellow-500');
                setTextColor('text-slate-900');
                console.log('Warning', alert_severity);
                break;
            case 'Extreme':
                setBGColor('bg-red-500');
                setTextColor('text-slate-900');
                console.log('Extreme', alert_severity);
                break;
            case 'Severe':
                setBGColor('bg-red-700');
                setTextColor('text-slate-100');
                console.log('Severe', alert_severity);
                break;
            case 'Moderate':
                setBGColor('bg-yellow-500');
                setTextColor('text-slate-900');
                console.log('Moderate', alert_severity);
                break;
            case 'Minor':
                setBGColor('bg-green-500');
                setTextColor('text-slate-900');
                console.log('Minor', alert_severity);
                break;
            default:
                setBGColor('bg-green-500');
                setTextColor('text-slate-900');
                console.log('Default', alert_severity);
                break;
        }
        if (alertRef.current) {
            alertRef.current.style.backgroundColor = bgColor;
            alertRef.current.style.color = textColor;
        }
    }, [alert_severity, bgColor, textColor]);
    return { bgColor, textColor, alertRef };
}
