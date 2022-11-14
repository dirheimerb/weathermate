import React from 'react';
import { langArray } from '../lib/language';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

export default function LanguagePicker() {
    const [langOptions, setLangOptions] = React.useState<string>();
    const [selectedLang, setSelectedLang] = React.useState<string>();
    React.useEffect(() => {
        setLangOptions(langArray.join(','));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLang(e.target.value);
    };
    return (
        <select
            value={selectedLang}
            onChange={handleChange}
            aria-label="Select Language"
            className={clsx(
                'bg-white',
                'border',
                'border-gray-300',
                'rounded-md',
                'shadow-sm',
                'pl-3',
                'pr-10',
                'py-2',
                'text-base',
                'focus:outline-none',
                'focus:ring-indigo-500',
                'focus:border-indigo-500',
                'sm:text-sm',
                'dark:bg-gray-800',
                'dark:border-gray-700',
                'dark:text-gray-100',
                'dark:focus:ring-gray-600',
                'dark:focus:border-gray-600',
            )}
        >
            {langOptions?.split(',').map((lang) => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
    );
}
