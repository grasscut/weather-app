import weatherApi from 'openweather-apis';
import geocoder from 'geocoder';
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

export const fetchForecasts = city => {
    return dispatch => {
        weatherApi.setCity(city);
        weatherApi.getWeatherForecastForDays(5, (error, response) => {
            dispatch(updateForecasts(response.list));
        });
        // fetch('http://api.openweathermap.org/data/2.5/forecast?APPID=019a736fd448ec0464f324f3f7063003&units=metric&q=London&mode=json')

        // weatherApi.getAllWeather((error, response) => {
        //         dispatch(updateForecasts(response));
        //     }
        // );
    };
};

export const useGeolocation = () => {
    return dispatch => {
        try {
            navigator.geolocation.getCurrentPosition(position => {
                geocoder.reverseGeocode(
                    position.coords.latitude,
                    position.coords.longitude,
                    (error, response) => {
                        try {
                            const city = response.results[0].address_components
                                .find(addressComponent => addressComponent.types.includes('locality'))
                                .short_name;

                            dispatch(setCity(city));
                        } catch (responseHandlingError) {
                            // to do
                        }
                    });
            });
        } catch (error) {
            // to do
        }
    };
};
