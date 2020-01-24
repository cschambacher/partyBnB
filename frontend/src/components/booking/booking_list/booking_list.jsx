import React, { Component } from 'react'
import '../../thumbnail/thumbnail.scss';
import BookingThumb from '../booking_thumb/booking_thumb';
export default class booking_list extends Component {
    render() {
        const { bookings } = this.props;
        return (
            <div className="thumb-display">
                {
                    bookings.map(booking => {
                        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
                        const startDate = new Date(booking.startDate);
                        const endDate = new Date(booking.endDate);
                        return ( <BookingThumb
                            title={booking.spot.title}
                            description={booking.spot.description ? booking.spot.description.description : ""}
                            price={booking.spot.price ? booking.spot.price.basePrice.toString() : ""}
                            key={booking._id}
                            imageUrl={booking.spot.imageUrl ? booking.spot.imageUrl : ""}
                            id={booking.spot._id}
                            guests={booking.guests}
                            startDate={startDate.toLocaleDateString('en-US', options)}
                            endDate={endDate.toLocaleDateString('en-US', options)}
                            state={booking.spot.location ? booking.spot.location.state : ""}
                            city={booking.spot.location ? booking.spot.location.city : ""}
                        />)
    })
                }
            </div>
        )
    }
}
