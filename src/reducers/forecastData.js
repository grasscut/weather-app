import moment from 'moment';

const initialState = {
    today: moment().toString(),
    forecasts: []
};

export default function forecastData(state = initialState, action) {
    switch (action.type) {
        case 'SET_FORECASTS':
            return {
                ...state,
                forecasts: action.forecasts
            };
        default:
            return state;
    }
};