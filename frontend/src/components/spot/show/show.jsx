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
import Review from "../../review/review_index_container";
import BookingModal from '../../booking/booking_modal/booking_modal';
import successImage from '../../booking/booking_modal/tick.png'
import failureImage from '../../booking/booking_modal/stop.svg'
class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spot: null,
            startDate: new Date(),
            endDate: new Date(),
            maxGuestSize: 25,
            showReview: false,
            showSuccessModal: false,
            showFailureIAlreadyBooked: false,
            showFailureSomeoneAlreadyBooked: false,
            showNotLoggedIn: false,
            message: ""
        }
        this.reviewIndex = this.reviewIndex.bind(this)
    }

    componentDidMount() {
        fetchSpot(this.props.match.params.spotId).then(spot => {
            this.setState({ spot: spot.data });
        });
    }
    // removeBtn(currUser, spot) {
    //     if (currUser === spot.user) {
    //         return <button className="spot-list-btn-pin" onClick={() => deleteSpot(this.props.match.params.spotId)}>Remove</button>
    //     } else {
    //         return <span></span>;
    //     }
    // }

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

    handleBooking = () => {
      if (Object.values(this.props.currUser).length > 0){
        let startDate = new Date(this.state.startDate.setMinutes(0));
        startDate = new Date(startDate.setSeconds(0));
        startDate = new Date(startDate.setMilliseconds(0));
        let endDate = new Date(this.state.endDate.setMinutes(0));
        endDate = new Date(endDate.setSeconds(0));
        endDate = new Date(endDate.setMilliseconds(0));
        const booking = {
          startDate,
          endDate,
          spot: this.props.match.params.spotId,
          price: this.state.spot.price.basePrice,
          guests: this.state.maxGuestSize
        }
        createBooking(booking).then((createdBooking) => {
          this.props.sendBooking(createdBooking);
          this.props.history.push(`/booking/${createdBooking.data._id}`);
        }).catch(e => {
          if (e.toString().includes("436")) {
            this.setState({
              message: "You have already booked this spot during during the same timeframe.",
              showFailureIAlreadyBooked: true
            });
          } else if (e.toString().includes("435")) {
            this.setState({
              message: "Sorry, this spot is already booked during this time. Please try again later.",
              showFailureSomeoneAlreadyBooked: true
            });
          }
        });
        // this.props.history.push()
        console.log("handle booking");
      } else {
        this.setState({message: "Please login to reserve this spot", showNotLoggedIn: true})
      }
    }

    // reviewIndex = () => {
    //     this.props.history.push("/reviews/:spotId");
    // }

     reviewIndex() {
        this.setState({
            showReview: true
        });
    }

    closeModal = () => {
      this.setState({
        showSuccessModal: false,
        showFailureIAlreadyBooked: false,
        showFailureSomeoneAlreadyBooked: false,
        showNotLoggedIn: false});
    }


    removeBtn(user, spot) {
      if (spot.user._id === user.id) {
        return <li><button className="spot-list-btn-pin"
          onClick={() => deleteSpot(this.props.match.params.spotId)
            .then(spot => {
              this.props.history.push(`/dashboard`);
            }).catch(err => console.log(err))}>Remove</button></li>
      } else {
        return <li></li>
      }
    }


    render() {
        if (!this.state.spot) return null;
        const description = Object.values(this.state.spot.description);
        const price = this.state.spot.price.basePrice;
        const rating = this.props.rating;
        const {currUser} = this.props;

        return (
          <div>{this.state.showSuccessModal && <BookingModal
            message={this.state.message}
            image={successImage}
            callback={this.closeModal} />}
            {this.state.showFailureIAlreadyBooked && <BookingModal
              message={this.state.message}
              image={failureImage}
              callback={this.closeModal} />}
            {this.state.showNotLoggedIn && <BookingModal
              message={this.state.message}
              image={failureImage}
              callback={this.closeModal} />}
            {this.state.showFailureSomeoneAlreadyBooked && <BookingModal
              message={this.state.message}
              image={failureImage}
              callback={this.closeModal} />}
          <div className="show">
            <div className="show-header-photos">
              <div className="col1">
                <img className="show-image1" src={this.state.spot.imageUrl} />
              </div>
              <div className="col2">
                <img className="show-image2" src={this.state.spot.imageUrl} />
                <img className="show-image3" src={this.state.spot.imageUrl} />
              </div>
            </div>
            <div className="show-sticky-nav">
              <ul className="show-sticky-nav-list">
                <li>Overview</li>
                <li>
                  <button onClick={this.reviewIndex}>Reviews</button>
                </li>
                <li>The Host</li>
                <li>Edit</li>
                {currUser && this.removeBtn(currUser, this.state.spot)}
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
                  <p>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                  <h4>Great location</h4>
                  <p>
                    100% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
                <div className="show-detail-description">
                  <div>{description}</div>
                  <div>
                    This spacious, unparalleled house, in the center of{" "}
                    {this.state.spot.location.city}, is part the ideal party
                    spot, owned and renovated by a family of architects.
                  </div>
                </div>
              </div>
              <div className="show-right">
                <div className="show-right-top">
                  <ul>
                    <li className="show-price">
                      ${price}
                      <div className="show-per-night"> / night</div>
                    </li>
                    <li className="show-rating">
                      <FontAwesomeIcon
                        className="show-star-icon"
                        icon={faStar}
                      />
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
                      // minDate={this.st}
                      // minDateMessage="Bookings must be at least one night"
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
                      className={`form-decrement ${this.state.maxGuestSize ===
                        0 && "dull"}`}
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
                  <button onClick={this.handleBooking} className="search-btn">
                    Reserve
                  </button>
                  <small className="search-btn-caption">You won’t be charged yet</small>
                </div>
              </div>
            </div>

            <div className="show-review">
              {this.state.showReview && <Review />}
            </div>
            <div className="empty-height"></div>
          </div>
          </div>
        );
    }
}

export default Show;

