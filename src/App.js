import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import CitySelectPage from './containers/CitySelectPageContainer';
import ForecastPage from './containers/ForecastPageContainer';

const App = ({ city }) => {
    return (
        <div className="weatherApp">
            <Switch>
                <Route path="/select-city" component={CitySelectPage} />
                {city ? <Route path="/" component={ForecastPage} /> : <Route path="/" component={CitySelectPage} />}
            </Switch>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        city: state.userSettings.city
    };
};

export default withRouter(connect(
    mapStateToProps,
    null
)(App));