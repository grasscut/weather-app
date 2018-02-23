import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import returnArrow from '../images/navigation/returnArrow.svg';
import { capitalizeFirstLetter } from '../utils/formatting';
import Forecast from './Forecast';

class ForecastPage extends Component {
    constructor(props) {
        super(props);

        props.fetchForecasts(props.city);
    }

    render() {
        const { city, today, unit, forecasts } = this.props;

        return (
            <div className="forecastPage">
                <div className="forecastNavigation">
                    <Link className="forecastNavigation__returnArrow" to="/select-city">
                        <img src={returnArrow} alt="<-" />
                    </Link>
                    <span className="forecastNavigation__cityName">{capitalizeFirstLetter(city)}</span>
                </div>
                <div className="forecastPage__date">
                    {moment(today).local().format('dddd, MMMM Do YYYY')}
                </div>
                <Forecast data={forecasts && forecasts[0]} unit={unit} />
            </div>
        );
    }
}

ForecastPage.propTypes = {
    city: PropTypes.string.isRequired,
    today: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    forecasts: PropTypes.array,
    fetchForecasts: PropTypes.func.isRequired
};

export default ForecastPage;