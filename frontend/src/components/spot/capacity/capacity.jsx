import React from 'react';
import './capacity.css';
import { connect } from 'react-redux';
import { updateSpot } from '../../../actions/spot_actions';
class Capacity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            maxGuestSize: 25,
            rooms: 3
        }
    }
    
    increase = arg => {
        this.setState(prevState => (
            { [arg]: prevState[arg] + 1 }
        ))
    }

    decrease = arg => {
        if (this.state[arg] > 0){
            this.setState(prevState => (
                { [arg]: prevState[arg] - 1 }
            ))
        } else return;
    }
    render() {
        return (
            <div className="capacity">
                <div className="white-background">
                    <p className="form-header">How many guests can your place</p>
                    <p className="form-header">accomodate?</p>
                    <p className="form-description">Check that you have enough rooms to accommodate all your guests comfortably.</p>
                    <div className='space-between'>
                        <p className="capacity-label">Guests</p>
                        <p className={`form-decrement ${this.state.maxGuestSize === 0 && "dull"}`}
                            onClick={() => this.decrease('maxGuestSize')}>-</p>
                        <p className="value">{this.state.maxGuestSize}</p>
                        <p onClick={() => this.increase('maxGuestSize')}
                            className="form-increment">+</p>
                    </div>
                    <p className="form-question">How many rooms can guests use?</p>
                    <div className='space-between'>
                        <p className="capacity-label">Rooms</p>
                        <p className={`form-decrement ${this.state.rooms === 0 && "dull"}`}
                            onClick={() => this.decrease('rooms')}>-</p>
                        <p className="value">{this.state.rooms}</p>
                        <p className="form-increment"
                            onClick={() => this.increase('rooms')}>+</p>
                    </div>
                    <div className="next-back">
                        <p>Back</p>
                        <button className="next-btn"
                        onClick={() => {
                            this.props.updateSpot("5e157f0f29f29448e8c6ccbc", {
                                capacity: this.state
                            });
                            console.log("pressed");
                        }}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateSpot: (spotId, updatePayload) => dispatch(updateSpot(spotId, updatePayload))
});

export default connect(null, mapDispatchToProps)(Capacity);
