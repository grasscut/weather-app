import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './utils/localStorage';
import weatherApp from './reducers';
import './scss/main.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const history = createHistory(),
    middleware = routerMiddleware(history),
    createStoreWithMiddleware = applyMiddleware(thunk, middleware)(createStore),
    persistedStore = loadState(),
    store = createStoreWithMiddleware(weatherApp, persistedStore);

store.subscribe(() => {
    const currentStore = store.getState();

    saveState({
        userSettings: currentStore.userSettings,
        forecastData: currentStore.forecastData
    });
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('weatherAppRoot')
);
registerServiceWorker();