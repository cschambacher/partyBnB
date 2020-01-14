import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
import './placetype.scss';
// import { createCurrentSpot } from '../../../util/spot_form_utils';
// import { receiveCurrentSpot } from '../../../actions/spot_actions';

class PlaceType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeType: null,
            // propertyType: "",
            whatWillGuestsHave: "all the space",
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
            <div className="step1-form">
                <div className="placetype-form">
                    <h1>What kind of party spot are you listing?</h1>
                    <div className="property-type-list" id="myDIV">
                        <h3>First, let’s narrow things down: choose a property type</h3>
                        <ul>
                           
                            <li className={`property-type-list ${this.state.placeType === "Apartment" && "active"}`} value="Apartment" onClick={e => this.setState({ placeType: "Apartment" })}
                                >Apartment</li>
                            <li className={`property-type-list ${this.state.placeType === "House" && "active"}`} value="House" onClick={e => this.setState({ placeType: "House" })}
                                >House</li>
                            <li className={`property-type-list ${this.state.placeType === "Secondary unit" && "active"}`} value="Secondary unit" onClick={e => this.setState({ placeType: "Secondary unit" })}
                                >Secondary unit</li>
                            <li className={`property-type-list ${this.state.placeType === "Unique Space" && "active"}`} value="Unique Space" onClick={e => this.setState({ placeType: "Unique Space" })}
                                >Unique Space</li>
                            <li className={`property-type-list ${this.state.placeType === "Hotel" && "active"}`} value="Hotel" onClick={e => this.setState({ placeType: "Hotel" })}
                                > Hotel</li>
                        </ul>
                        <p>Apartments are typically located in multi-unit residential buildings or complexes where other people live.</p>
                    </div>
                    <div className="property-type-guest">
                        <h3>Is this setup as a dedicated guest space?</h3>
                        <div className="choice">
                            <input className="radio" type="radio" 
                               
                                value={true}
                                onChange={(e) => this.setState({ dedicatedGuestSpace: e.currentTarget.value })}
                                checked={this.state.dedicatedGuestSpace === true} />
                            <label >Yes, it’s primarily set up for guests</label>
                        </div>
                        <div className="choice">
                            <input className="radio" type="radio" 
                                value={false}
                                onChange={(e) => this.setState({ dedicatedGuestSpace: e.currentTarget.value })}
                                checked={this.state.dedicatedGuestSpace === false} />
                            <label>No, I keep my personal belongings here</label>
                        </div>
                    </div>
                    <div className="property-type-access">
                        <h3>What will guest have?</h3>
                        <div>
                            <div className="choice">
                                <input className="radio" type="radio" 
                                    
                                    value="all the space" 
                                    onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                    checked={this.state.whatWillGuestsHave === "all the space"} />
                                <label>Entire place</label>
                                <p>Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.</p>
                            </div>
                            <div className="choice">
                                <input className="radio" type="radio" 
                                value="private space"
                                    onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                    checked={this.state.whatWillGuestsHave === "private space"} />
                                <label>Private place</label>
                                <p>Guests have their own private room for their. Other areas could be shared.</p>
                            </div>
                            <div className="choice">
                                <input className="radio" type="radio" 
                                    value="shared space"
                                    onChange={(e) => this.setState({ whatWillGuestsHave: e.currentTarget.value })}
                                    checked={this.state.whatWillGuestsHave === "shared space"} />
                                <label>Shared party room</label>
                                <p>Guests can have their partyh in a room or a common area that could be shared with others.</p>
                            </div>
                        </div>
                    </div>

                    <div className="placetype-listing">
                        <h3>Are you listing on Airbnb as part of a company?</h3>
                        <div className="choice">
                            <input className="radio" type="radio" 
                                value={true}
                                onChange={(e) => this.setState({ listingForOtherCompany: e.currentTarget.value })}
                                checked={this.state.listingForOtherCompany === true} />
                            <label>Yes, I work for or run a business</label>
                        </div>
                        <div className="choice">
                            <input className="radio" type="radio" value={false}
                                onChange={(e) => this.setState({ listingForOtherCompany: e.currentTarget.value })}
                                checked={this.state.listingForOtherCompany === false} />
                            <label>No, that doesn’t sound like me</label>
                            <div className="choice">
                                This helps you get the right features for how you host—it won’t
                                show up to guests or impact how you show up in search.
                            </div>
                        </div>
                    </div>
                    <div id="next-back">
                        <div className="dis-row">
                            <span className="arrow-left"></span>
                            <p onClick={() => this.props.history.goBack()}>Back</p>
                        </div>
                        <button
                            className={`grn-btn ${this.state.placeType !== null && "sharpen"}`}
                            disabled={this.state.placeType === null}
                            
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