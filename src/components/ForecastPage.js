import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import returnArrow from '../images/navigation/returnArrow.svg';
import { capitalizeFirstLetter } from '../utils/formatting';
import Forecast from './Forecast';
import PreviewForecast from './PreviewForecast';
import ToggleSwitch from 'react-toggle-switch'

class ForecastPage extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { unit, city, fetchForecasts } = this.props;

        if (nextProps.unit !== unit) {
            fetchForecasts(city);
        }
    }

    handleToggle() {
        const { unit, setUnit } = this.props;
        let toggledUnit;

        if (unit === 'C') {
            toggledUnit = {
                value: 'imperial',
                visualValue: 'F'
            };
        } else {
            toggledUnit = {
                value: 'metric',
                visualValue: 'C'
            };
        }

        setUnit(toggledUnit);
    }

    render() {
        const { city, today, unit, forecasts } = this.props,
            formattedDate = moment(today).local().format('dddd, MMMM Do YYYY');

        return (
            <div className="forecastPage">
                <div className="forecastNavigation">
                    <Link className="forecastNavigation__returnArrow" to="/select-city">
                        <img src={returnArrow} alt="<-" />
                    </Link>
                    <span className="forecastNavigation__cityName">{capitalizeFirstLetter(city)}</span>
                    <ToggleSwitch
                        className="forecastNavigation__unitSwitch"
                        onClick={this.handleToggle}
                        on={unit === 'C'} />
                </div>

                <div className="forecastPage__date">
                    {formattedDate}
                </div>

                <Forecast data={forecasts && forecasts[0]} unit={unit} />

                <div className="forecastPage__weekForecast">
                    {forecasts && forecasts.map(
                        (forecast, i) => {
                            const day = moment(today).add(i, 'days').format('dddd');

                            return <PreviewForecast key={i} day={day} data={forecast} unit={unit} />;
                        }
                    )}
                </div>
            </div>
        );
    }
}

ForecastPage.propTypes = {
    city: PropTypes.string.isRequired,
    today: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    forecasts: PropTypes.array,
    fetchForecasts: PropTypes.func.isRequired,
    setUnit: PropTypes.func.isRequired
};

export default ForecastPage;