import { connect } from 'react-redux';
import CitySelectPage from '../components/CitySelectPage';
import { setCity, useGeolocation } from '../actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        setCity: city => dispatch(setCity(city)),
        useGeolocation: () => dispatch(useGeolocation())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CitySelectPage);