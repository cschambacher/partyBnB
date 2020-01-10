import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
// import { createCurrentSpot } from '../../../util/spot_form_utils';
// import { receiveCurrentSpot } from '../../../actions/spot_actions';

class PlaceType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeType: null,
            // propertyType: "",
            whatWillGuestsHave: null,
            dedicatedGuestSpace: true,
            listingForOtherCompany: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetchSpot(this.props.match.params.spotId).then(spot => {
            console.log(spot);
        });
    }
   
    render() {
        console.log(spot);
        return (
            <div>
                <div>What kind of spot are you listing?</div>
                <div className="property-type-list">
                    <ul>
                        <li onClick={e => this.setState({ placeType: e.currentTarget.value })}
                            value="Apartment">Apartment</li>
                        <li onClick={e => this.setState({ placeType: e.currentTarget.value })}
                            value="House">House</li>
                        <li onClick={e => this.setState({ placeType: e.currentTarget.value })}
                            value="Secondary unit">Secondary unit</li>
                        <li onClick={e => this.setState({ placeType: e.currentTarget.value })}
                            value="Unique Space">Unique Space</li>
                        <li onClick={e => this.setState({ placeType: e.currentTarget.value })}
                            value="Hotel"> Hotel</li>
                    </ul>
                    
                </div>
                <div className="property-type-guest">
                    <div>Is this setup as a dedicated guest space?</div>
                    <div>
                        <input type="radio" />
                        <label>Yes, it’s primarily set up for guests</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label>No, I keep my personal belongings here</label>
                    </div>
                </div>
                <div className="property-type-access">
                    <div>What will guest have?</div>
                    <div>
                        <div>
                            <input type="radio" />
                            <label>Entire place</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label>Private place</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label>Shared room</label>
                        </div>
                    </div>
                </div>

                <div className="placetype-listing">
                    <div>Are you listing on Airbnb as part of a company?</div>
                    <div>
                        <input type="radio" />
                        <label>Yes, I work for or run a business</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label>No, that doesn’t sound like me</label>
                        <div>
                            This helps you get the right features for how you host—it won’t
                            show up to guests or impact how you show up in search.
                        </div>
                    </div>
                </div>
                <div className="next-back">
                    <div className="row">
                        <span className="arrow-left"></span>
                        <p onClick={() => this.props.history.goBack()}>Back</p>
                    </div>
                    <button
                        className="next-btn"
                        onClick={() => {
                            this.props.updateSpot(this.props.match.params.spotId, {
                                placeType: this.state,
                                whatWillGuestsHave: this.state,
                                dedicatedGuestSpace: this.state,
                                listingForOtherCompany: this.state
                            });
                            console.log("pressed");
                        }}
                    >
                        Next
                </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    spot: state.entities.spotForm
});

const mapDispatchToProps = dispatch => ({
    updateSpot: (spotId, updatePayload) =>
        dispatch(updateSpot(spotId, updatePayload)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceType);