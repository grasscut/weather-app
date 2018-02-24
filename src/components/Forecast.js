import React from 'react';
import PropTypes from 'prop-types';
import { dayTimes, getDayTime } from '../utils/daytime-helpers';
import { formatTemperature } from '../utils/formatting';

const createForecastDetails = (temperature, unit) => {

    return dayTimes
        .map(dayTimeData => {
            const abbr = dayTimeData.abbr;

            return (
                <div className="dayTimeForecast" key={abbr}>
                    <span className="dayTimeForecast__title">{dayTimeData.name}</span>
                    <span className="dayTimeForecast__temperature">{formatTemperature(temperature[abbr], unit)}</span>
                </div>
            );
        });
};

const Forecast = ({ data, unit, today }) => {
    if (data) {
        const currentDayTime = getDayTime(today).abbr;

        return (
            <div className="forecast">
                <div className="forecastMain">
                    <div className="forecastMain__description">
                        {data.description}
                    </div>
                    <div className="forecastTemperature">
                        <div className="forecastTemperature__value">
                            {formatTemperature(data.temperature[currentDayTime], unit)}
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
    unit: PropTypes.string,
    today: PropTypes.string
};

export default Forecast;