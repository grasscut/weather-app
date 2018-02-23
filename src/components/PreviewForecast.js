import React from 'react';
import PropTypes from 'prop-types';
import { formatTemperature } from '../utils/formatting';

const PreviewForecast = ({ day, data, unit }) => {
    return (
        <div className="previewForecast">
            <span className="previewForecast__day">{day}</span>
            <span className="previewForecast__temperature">
                <i className={`previewForecast__icon wi wi-owm-${data.id}`}></i>
                {formatTemperature(data.temperature.day, unit)}
            </span>
        </div>
    );
};

PreviewForecast.propTypes = {
    day: PropTypes.string,
    data: PropTypes.object.isRequired,
    unit: PropTypes.string.isRequired
};

export default PreviewForecast;