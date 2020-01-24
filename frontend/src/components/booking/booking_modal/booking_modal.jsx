import React, { Component } from 'react'
import "./modal.scss";
export default class BookingModal extends Component {
    render() {
        const { message, image, callback } = this.props;
        return (
            <div onClick={() => callback()}  className="booking-modal">
                <div onClick={() => callback()} className="booking-modal-content">
                    <p className="modal-message">{message}</p>
                    <img className="modal-image" src={image} />
                </div>
            </div>
        )
    }
}
