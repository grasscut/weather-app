import React from 'react';
import PropTypes from 'prop-types';
import { formatTemperature } from '../utils/formatting';

const createForecastDetails = (temperature, unit) => {
    const dayTimeNames = {
        'morn': 'Morning',
        'day': 'Day',
        'eve': 'Evening',
        'night': 'Night'
    };

    return Object.keys(dayTimeNames).map(abbr => {
        if (abbr in temperature) {
            return (
                <div className="dayTimeForecast" key={abbr}>
                    <span className="dayTimeForecast__title">{dayTimeNames[abbr]}</span>
                    <span className="dayTimeForecast__temperature">{formatTemperature(temperature[abbr], unit)}</span>
                </div>
            );
        }
    });
};

const Forecast = ({ data, unit }) => {
    if (data) {
        return (
            <div className="forecast">
                <div className="forecastMain">
                    <div className="forecastMain__description">
                        {data.description}
                    </div>
                    <div className="forecastTemperature">
                        <div className="forecastTemperature__value">
                            {formatTemperature(data.temperature.day, unit)}
                        </div>
                        <i className={`forecastTemperature__icon wi wi-owm-${data.id}`}></i>
                    </div>
                </div>
                <div className="forecast__details">
                    {createForecastDetails(data.temperature, unit)}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

Forecast.propTypes = {
    data: PropTypes.object,
    unit: PropTypes.string
};

export default Forecast;