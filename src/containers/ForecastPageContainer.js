import { connect } from 'react-redux';
import ForecastPage from '../components/ForecastPage';
import { fetchForecasts } from '../actions/actions';

const mapStateToProps = state => {
    return {
        city: state.userSettings.city,
        today: state.forecastData.today,
        unit: state.userSettings.unit.visualValue,
        forecasts: state.forecastData.forecasts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchForecasts: city => dispatch(fetchForecasts(city))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForecastPage);