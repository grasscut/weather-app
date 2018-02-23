import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userSettings from './userSettings';
import forecastData from './forecastData';

const weatherApp = combineReducers({
        userSettings,
        forecastData,
        router: routerReducer
    });

export default weatherApp;