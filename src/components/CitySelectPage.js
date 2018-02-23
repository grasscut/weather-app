import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySelectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGeolocationRequest = this.handleGeolocationRequest.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { setCity } = this.props,
            { value } = this.state;

        setCity(value);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleGeolocationRequest() {
        const { useGeolocation } = this.props;

        useGeolocation();

        this.setState({ loading: true });
    }

    render() {
        const { value, loading } = this.state;

        return (
            <div className="citySelectPage">
                <form className="citySelectPage__form" onSubmit={this.handleSubmit}>
                    <input
                        className="citySelectInput"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={value}
                        onChange={this.handleChange}/>
                </form>
                <div className="citySelectPage__text">or</div>
                <div className="citySelectPage__useLocation">
                    use my <span className="link" onClick={this.handleGeolocationRequest}>current location</span>
                </div>
                <div className="loader" style={{ visibility: loading ? 'visible' : 'hidden' }} />
            </div>
        );
    }
}

CitySelectPage.propTypes = {
    setCity: PropTypes.func.isRequired,
    useGeolocation: PropTypes.func.isRequired
};

export default CitySelectPage;