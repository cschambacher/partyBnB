import React, { Component } from 'react';
import "./spot_location.scss";
export default class SpotLocation extends Component {
    render() {
        return (
            <div className="spot-location">
                <p className="form-header">Where's your place located?</p>
                <p className="form-description">Guests will only get your exact address once they've booked a</p>
                <p className="form-description">reservation</p>
            </div>
        )
    }
}
