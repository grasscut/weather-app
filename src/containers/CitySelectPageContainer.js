import { connect } from 'react-redux';
import { push } from "react-router-redux";
import CitySelectPage from '../components/CitySelectPage';
import { setCity, useGeolocation } from '../actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        setCity: city => dispatch(setCity(city)),
        navigateTo: path => dispatch(push(path)),
        useGeolocation: () => dispatch(useGeolocation())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CitySelectPage);