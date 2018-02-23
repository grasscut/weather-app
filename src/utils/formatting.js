/* should capitalize every word after whitespace */
export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatTemperature = (value, unit) => {
    return `${Math.round(value)}°${unit}`
};