export const selectLanguage = (language: string) => {
    switch (language) {
        case 'en':
            return 'en';
        case 'es':
            return 'es';
        case 'fr':
            return 'fr';
        case 'de':
            return 'de';
        case 'it':
            return 'it';
        case 'pt':
            return 'pt';
        case 'ru':
            return 'ru';
        case 'pl':
            return 'pl';
        case 'ro':
            return 'ro';
        case 'ar':
            return 'ar';
        case 'ja':
            return 'ja';
        case 'zh':
            return 'zh';
        case 'nl':
            return 'nl';
        default:
            return 'en';
    }
};

export const langArray = [
    'English',
    'Arabic',
    'Bengali',
    'Bulgarian',
    'Chinese Simplified',
    'Chinese Traditional',
    'Czech',
    'Danish',
    'Dutch',
    'Finnish',
    'French',
    'German',
    'Greek',
    'Hindi',
    'Hungarian',
    'Italian',
    'Japanese',
    'Javanese',
    'Korean',
    'Marathi',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Romanian',
    'Russian',
    'Serbian',
    'Sinhalese',
    'Slovak',
    'Spanish',
    'Swedish',
    'Tamil',
    'Telugu',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Vietnamese',
    'Zulu',
];
