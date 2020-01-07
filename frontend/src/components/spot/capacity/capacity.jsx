import React from 'react';

import React from 'react'

export default class Capacity extends React.Component {
    state = {
        maxGuestSize: 25,
        rooms: 3
    }
    
    increase = arg => e => {
        this.setState(prevState => (
            { [arg]: prevState[arg] + 1 }
        ))
    }

    decrease = arg => e => {
        this.setState(prevState => (
            { [arg]: prevState[arg] - 1 }
        ))
    }
    render() {
        return (
            <div className="capacity">
                <p className="form-header">How many guests can your place accommodate?</p>
                <p className="form-description">Check that you have enough rooms to accommodate all your guests comfortably.</p>
                <div className='space-between'>
                    <p className="capacity-label">Guests</p>
                    <p className="form-decrement"
                    onClick={() => this.decrease('maxGuestSize')}>-</p>
                    <p onClick={() => this.increase('maxGuestSize')}
                    className="form-increment">+</p>
                </div>
                <p className="form-question">How many rooms can guests use?</p>
                <div className='space-between'>
                    <p className="capacity-label">Rooms</p>
                    <p className="form-decrement">-</p>
                    <p className="form-increment">+</p>
                </div>
            </div>
        )
    }
}
