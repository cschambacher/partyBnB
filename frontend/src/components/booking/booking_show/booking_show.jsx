import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./booking_show.scss";
import userIcon from './user-icon.svg';
export default class BookingShow extends Component {
    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.bookingId);
    }
    render() {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
        const { booking } = this.props
        if (this.props.booking){
            const startDate = new Date(booking.startDate);
            const endDate = new Date(booking.endDate);
            return (
                <div className="booking-show">
                    <p className="booking-header">You're going to {booking.spot.title}</p>
                    <div className="overall-row">
                        <div className="border-box">
                            <div className="row-booking">
                                <div className="guest-count-column">
                                    <p className="title-bold">Guests</p>
                                    <p>{booking.guests}</p>
                                </div>
                                <button className="profile-btn"><Link to={'/profile'}>View Profile</Link></button>
                            </div>
                            <div className="booking-divider">

                            </div>
                            <div className="space-between-booking">
                                <p className="title-bold">Check In</p>
                                <div className="date-format"><p className="booking-date-time">{startDate.toLocaleDateString('en-US', options)}</p>
                                <p className="checkins">Anytime after 4pm</p>
                                </div>
                                <p className="title-bold">Check Out</p>
                                <div className="date-format"><p className="booking-date-time">{endDate.toLocaleDateString('en-US', options)}</p>
                                    <p className="checkins">Anytime before 12pm</p>
                                </div>
                            </div>
                            <div className="booking-address-row">
                                <p className="title-bold">Address</p>
                                <div className="booking-address">
                                    <p className="address-line">{booking.spot.location.streetAddress}</p>
                                    <p className="address-line">{`${booking.spot.location.city}, ${booking.spot.location.city}`}</p>
                                    <p className="address-line">{booking.spot.location.zip}</p>
                                    <div class="row-light"><p className="directions-link">Get directions</p>
                                    <p>|</p>
                                        <p>View listing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="host-info">
                            <div className="host-img">
                                <img className="user-icon" src={userIcon} />
                            </div>
                            <p className="booking-host-name">John Smith</p>
                            <p className="host-explantion"> Have a question about your reservation?</p>
                            <p className="host-explantion">The best way to way to get information is to ask your host directly</p>
                            <button className="profile-btn">Message Host</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div className="spinner-center">
                <div className="loader">

                </div>
            </div>
        }
    }
}
