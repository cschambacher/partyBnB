import React, { Component } from 'react'
export default class BookingShow extends Component {
    componentDidMount(){
        
    }
    render() {
        const { booking } = this.props
        return (
            <div className="booking-show">
                <p className="booking-header">You are going to {booking.spot.title}</p>
                <div className="border-box">
                    <div className="guest-count-column">
                        <p>Guests</p>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}
