import React, { Component } from 'react'
import { fetchSpot } from '../../../util/spot_util';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './show.scss';
class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spot: null,
        }

    }

    componentDidMount() {
        fetchSpot(this.props.match.params.spotId).then(spot => {
            console.log(spot);
            this.setState({ spot: spot.data });
        });
    }

    render() {
        if (!this.state.spot) return null;
        const description = Object.values(this.state.spot.description);
        const price = this.state.spot.price.basePrice;
        return (
        
            <div className="show">
                <div className="show-header-photos">
                    <img className="show-image" src={this.state.spot.imageUrl} />
                </div>
                <div className="show-sticky-nav">
                    <ul className="show-sticky-nav-list">
                        <li>Overview</li>
                        <li>Reviews</li>
                        <li>The Host</li>
                        <li>Location</li>
                        <li>Policies</li>
                    </ul>
                </div>
                <div className="show-detail">
                    <div className="show-left">
                        <div className="show-detail-overview">
                        <h1>{this.state.spot.title}</h1>
                            <span>{this.state.spot.location.city}</span>
                            <span>Olga</span>
                        </div>
                        <div className="show-detail-description">
                            <span>{description}</span>
                        </div>
                    </div>
                    <div className="show-right">
                        <div className="price">${price}
                            <div className="per-night"> / night</div>
                        </div>
                        <div className="rating">
                            {/* {this.props.rating} */}
                            <FontAwesomeIcon className="star-icon" icon={faStar} />
                            4.5
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                disablePast={true}
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Start-Date"
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                disablePast={true}
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="End-Date"
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <button className="search-btn">Reserve</button>
                        <small>You won’t be charged yet</small>
                    </div>
                </div>
                
                <div className="show-footer">
                    
                </div>
            </div>
        );
    }
}

export default Show;

