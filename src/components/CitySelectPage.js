import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySelectPage extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGeolocationRequest = this.handleGeolocationRequest.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { setCity, navigateTo } = this.props,
            { value } = this.state;

        setCity(value);
        // navigateTo('/');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleGeolocationRequest() {
        const { useGeolocation, navigateTo } = this.props;

        useGeolocation();
        // navigateTo('/');
    }

    render() {
        return (
            <div className="citySelectPage">
                <form className="citySelectPage__form" onSubmit={this.handleSubmit}>
                    <input
                        className="citySelectInput"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                </form>
                <div className="citySelectPage__text">or</div>
                <div className="citySelectPage__useLocation">
                    use my <span className="link" onClick={this.handleGeolocationRequest}>current location</span>
                </div>
            </div>
        );
    }
}

CitySelectPage.propTypes = {
    setCity: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
    useGeolocation: PropTypes.func.isRequired
};

export default CitySelectPage;