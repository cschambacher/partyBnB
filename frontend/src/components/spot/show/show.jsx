import React, { Component } from 'react'
import { fetchSpot, deleteSpot } from '../../../util/spot_util';
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
import { createBooking } from '../../../util/booking_util';
import avatar from './avatar.png';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spot: null,
            startDate: new Date(),
            endDate: new Date(),
            maxGuestSize: 25
        }
        this.removeBtn = this.removeBtn.bind(this);
    }

    componentDidMount() {
        console.log("mount", this.props);
        fetchSpot(this.props.match.params.spotId).then(spot => {
            console.log(spot);
            this.setState({ spot: spot.data });
        });
    }

    increase = arg => {
        this.setState(prevState => (
            { [arg]: prevState[arg] + 1 }
        ))
    }

    decrease = arg => {
        if (this.state[arg] > 0) {
            this.setState(prevState => (
                { [arg]: prevState[arg] - 1 }
            ))
        } else return;
    }

    removeBtn(user, spot) {
        console.log("is it currUser?", spot.user === user.id);
        if (spot.user._id === user.id){
            return <li><button className="spot-list-btn-pin"
                onClick={() => deleteSpot(this.props.match.params.spotId)
                    .then(spot => {
                        console.log("spot deleted");
                        this.props.history.push(`/dashboard`);
                    }).catch(err => console.log(err))}>Remove</button></li>        
        } else {
            return <li></li>
        }
    }

    handleBooking = () => {
        const booking = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            spot: this.props.match.params.spotId,
            price: this.state.spot.price.basePrice,
            guests: this.state.maxGuestSize
        }
        createBooking(booking).then((createdBooking) => {
            this.props.sendBooking(createdBooking);
            this.props.history.push(`/booking/${createdBooking.data._id}`);
        })
        // this.props.history.push()
        console.log("handle booking");
    }
    render() {
        if (!this.state.spot) return null;
        const description = Object.values(this.state.spot.description);
        const price = this.state.spot.price.basePrice;
        const rating = this.props.rating;
        const {currUser} = this.props;
        console.log("currUser", currUser);
        console.log(this.state.spot);

        return (

            <div className="show">
                <div className="show-header-photos">
                    <div className="col1"><img className="show-image1" src={this.state.spot.imageUrl} /></div>
                    <div className="col2">
                        <img className="show-image2" src={this.state.spot.imageUrl} />
                        <img className="show-image3" src={this.state.spot.imageUrl} />
                    </div>
                </div>
                <div className="show-sticky-nav">
                    <ul className="show-sticky-nav-list">
                        <li>Overview</li>
                        <li>Reviews</li>
                        <li>The Host</li>
                        <li>Edit</li>
                        {this.removeBtn(currUser, this.state.spot)}
                        {/* <li><button className="spot-list-btn-pin" 
                            onClick={() => deleteSpot(this.props.match.params.spotId)
                            .then(spot => {
                            console.log("spot deleted");
                            this.props.history.push(`/dashboard`);
                        }).catch(err => console.log(err))}>Remove</button></li> */}
                        {/* <li>{this.removeBtn(currUser, this.state.spot)}</li> */}
                    </ul>
                </div>
                <div className="show-detail">
                    <div className="show-left">

                        <h1>{this.state.spot.title}</h1>
                        <div className="show-detail-title">
                            <div className="show-detail-city">
                                <p> {this.state.spot.location.city}</p>
                                

                            </div>
                            <div className="show-detail-host">
                                <img src={avatar} className="user-avatar" alt="avatar" />
                                <p>{this.state.spot.user.firstName}</p>
                            </div>
                            
                        </div>
                        <div className="show-detail-capacity">
                            <div className="capacity">Capacity</div>
                            <div className="capacity">Guests: {this.state.spot.capacity.maxGuestSize}</div>
                            <div className="capacity">Rooms: {this.state.spot.capacity.rooms}</div>
                        </div>
                        <div className="show-detail-overview">
                            <h4>Entire home</h4>
                            <p>You’ll have the cycladic house (greece) to yourself.</p>
                            <h4>Sparkling clean</h4>
                            <p>18 recent guests said this place was sparkling clean.</p>
                            <h4>Olga is a Superhost</h4>
                            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                            <h4>Great location</h4>
                            <p>100% of recent guests gave the location a 5-star rating.</p>
                        </div>
                        <div className="show-detail-description">
                            <div>{description}</div>
                            <div>This spacious, unparalleled house, in the center of {this.state.spot.location.city}, is part the ideal party spot, owned and renovated by a family of architects.</div>
                        </div>
                    </div>
                    <div className="show-right">
                        <div className="show-right-top">
                            <ul>
                            <li className="show-price">${price}
                                <div className="show-per-night"> / night</div>
                            </li>
                            <li className="show-rating">
                                <FontAwesomeIcon className="show-star-icon" icon={faStar} />
                                4.5
                            </li>
                            </ul>
                        </div>
                        <div className="show-right-body">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    disablePast={true}
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="start-date-picker-inline"
                                    label="Start-Date"
                                    value={this.state.startDate}
                                    onChange={startDate => this.setState({ startDate })}
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
                                    id="end-date-picker-inline"
                                    label="End-Date"
                                    value={this.state.endDate}
                                    onChange={endDate => this.setState({ endDate })}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date"
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <div className="show-guest">
                                <p className="capacity-label">Guests</p>
                                <p
                                    className={`form-decrement ${this.state.maxGuestSize === 0 &&
                                        "dull"}`}
                                    onClick={() => this.decrease("maxGuestSize")}
                                >
                                    -
                </p>
                                <p className="value">{this.state.maxGuestSize}</p>
                                <p
                                    onClick={() => this.increase("maxGuestSize")}
                                    className="form-increment"
                                >
                                    +
                </p>
                            </div>
                            <button onClick={this.handleBooking} className="search-btn">Reserve</button>
                            <small>You won’t be charged yet</small>
                        </div>
                    </div>
                </div>

                <div className="show-footer">

                </div>
                <div className="empty-height"></div>
            </div>
        );
    }
}

export default Show;

