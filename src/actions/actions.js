import weatherApi from 'openweather-apis';
import geocoder from 'city-reverse-geocoder';
import { push } from "react-router-redux";

weatherApi.setLang('en');
// weatherApi.setAPPID('9aacb044966f142f0f73d487faf3387e');
weatherApi.setAPPID('019a736fd448ec0464f324f3f7063003');

const updateCity = city => {
    return {
        type: 'SET_CITY',
        city
    };
};

const updateUnit = unit => {
    return {
        type: 'SET_UNIT',
        unit
    };
};

const updateForecasts = list => {
    return {
        type: 'SET_FORECASTS',
        forecasts: list.map(dailyForecast => {
            return {
                temperature: dailyForecast.temp,
                description: dailyForecast.weather[0].main,
                id: dailyForecast.weather[0].id
            };
        })
    };
};

export const setCity = city => {
    return dispatch => {
        dispatch(updateCity(city));
        dispatch(push('/'));
    };
};

export const setUnit = unit => {
    return dispatch => {
        weatherApi.setUnits(unit.value);
        dispatch(updateUnit(unit));
    };
};

export const fetchForecasts = city => {
    return dispatch => {
        weatherApi.setCity(city);
        weatherApi.getWeatherForecastForDays(5, (error, response) => {
            dispatch(updateForecasts(response.list));
        });
    };
};

export const useGeolocation = () => {
    return dispatch => {
        try {
            navigator.geolocation.getCurrentPosition(position => {
                const locationData = geocoder(position.coords.latitude, position.coords.longitude),
                    city = `${locationData[0].city}, ${locationData[0].country_code}`;

                dispatch(setCity(city));
            });
        } catch (error) {
            // to do
        }
    };
};
