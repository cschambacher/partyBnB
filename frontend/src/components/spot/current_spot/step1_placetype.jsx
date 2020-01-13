import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
// import { createCurrentSpot } from '../../../util/spot_form_utils';
// import { receiveCurrentSpot } from '../../../actions/spot_actions';

class PlaceType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeType: "",
            // propertyType: "",
            whatWillGuestsHave: null,
            dedicatedGuestSpace: true,
            listingForOtherCompany: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

   
    render() {
        
        return (
            <div>
                <div>What kind of spot are you listing?</div>
                <div className="property-type-list">
                    <ul>
                        <li value="Apartment" onClick={e => this.setState({ placeType: "Apartment" })}
                            >Apartment</li>
                        <li value="House" onClick={e => this.setState({ placeType: "House" })}
                            >House</li>
                        <li value="Secondary unit" onClick={e => this.setState({ placeType: "Secondary unit" })}
                            >Secondary unit</li>
                        <li value="Unique Space" onClick={e => this.setState({ placeType: "Unique Space" })}
                            >Unique Space</li>
                        <li value="Hotel" onClick={e => this.setState({ placeType: "Hotel" })}
                            > Hotel</li>
                    </ul>
                    
                </div>
                <div className="property-type-guest">
                    <div>Is this setup as a dedicated guest space?</div>
                    <div>
                        <input type="radio" 
                            value={true}
                            onChange={(e) => this.setState({ dedicatedGuestSpace: e.currentTarget.value })}
                            checked={this.state.dedicatedGuestSpace === true} />
                        <label>Yes, it’s primarily set up for guests</label>
                    </div>
                    <div>
                        <input type="radio" 
                            value={false}
                            onChange={(e) => this.setState({ dedicatedGuestSpace: e.currentTarget.value })}
                            checked={this.state.dedicatedGuestSpace === false} />
                        <label>No, I keep my personal belongings here</label>
                    </div>
                </div>
                <div className="property-type-access">
                    <div>What will guest have?</div>
                    <div>
                        <div>
                            <input type="radio" 
                            value="all the space"
                                onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                checked={this.state.whatWillGuestsHave === "all the space"} />
                            <label>Entire place</label>
                        </div>
                        <div>
                            <input type="radio" 
                            value="private space"
                                onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                checked={this.state.whatWillGuestsHave === "private space"} />
                            <label>Private place</label>
                        </div>
                        <div>
                            <input type="radio" 
                                value="shared space"
                                onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                checked={this.state.whatWillGuestsHave === "shared space"} />
                            <label>Shared party room</label>
                        </div>
                    </div>
                </div>

                <div className="placetype-listing">
                    <div>Are you listing on Airbnb as part of a company?</div>
                    <div>
                        <input type="radio" 
                            value={true}
                            onChange={(e) => this.setState({ listingForOtherCompany: e.currentTarget.value })}
                            checked={this.state.listingForOtherCompany === true} />
                        <label>Yes, I work for or run a business</label>
                    </div>
                    <div>
                        <input type="radio" value={false}
                            onChange={(e) => this.setState({ listingForOtherCompany: e.currentTarget.value })}
                            checked={this.state.listingForOtherCompany === false} />
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
                            }).then(spot => {
                                console.log(spot);
                                // this.props.receiveCurrentSpot(spot.data);
                                this.props.history.push(`/location/${this.props.match.params.spotId}`);
                            }).catch(err => console.log(err));
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