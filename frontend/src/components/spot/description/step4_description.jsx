import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
import './description.scss';
// import { createCurrentSpot } from '../../../util/spot_form_utils';
// import { receiveCurrentSpot } from '../../../actions/spot_actions';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            // propertyType: "",
            basePrice: "",
            rating: "4",

        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }
    // update(field) {
    //     return e => this.setState({ [field]: e.currentTarget.value });
    // }

    render() {
        // console.log(spot);
        return (
            <div className="description-container">
                <div className="description-form">
                    <h1>Describe your party spot</h1>
                    <div className="property-title">
                        <h3>Name of your party spot:</h3>
                        <p>Give your spot a cool name that sounds like a party</p>
                        <div>
                            <input
                                type='text'
                                value={this.state.title}
                                placeholder={this.state.title}
                                onChange={e => this.setState({ title: e.currentTarget.value })}
                            />
                        </div>
                    </div>
                
                    <div className="property-description">
                        <h3>What kind of spot are you listing?</h3>
                        <p>Describe your property</p>
                        <div>
                            <textarea
                                cols="30"
                                rows="1"
                                value={this.state.description}
                                placeholder={this.state.description}
                                onChange={e => this.setState({ description : e.currentTarget.value })}
                            />
                        </div>
                    </div>

                    <div className="property-price">
                        <h3>Price</h3>
                        <p>Price per night</p>
                        <div className="property-price-input">
                            <input
                                type='text'
                                value={this.state.price}
                                placeholder={this.state.basePrice}
                                onChange={e => this.setState({ basePrice: e.currentTarget.value })}
                            /><p>$/night</p>
                        </div>
                    </div>
                    <div className="next-back">
                        <div className="row">
                            <span className="arrow-left"></span>
                            <p onClick={() => this.props.history.goBack()}>Back</p>
                        </div>
                        <button
                            className={`grn-btn ${(this.state.title !== "" && this.state.description !== "" && this.state.basePrice !== "") && "sharpen"}`}
                            onClick={() => {
                                this.props.updateSpot(this.props.match.params.spotId, {
                                    description: {
                                        description: this.state.description
                                    },
                                    price: {
                                        basePrice: this.state.basePrice,
                            
                                    },
                                    title: this.state.title,
                                    rating: this.state.rating
                                }).then(spot => {
                                    console.log(spot);
                                    // this.props.receiveCurrentSpot(spot.data);
                                    this.props.history.push(`/capacity/${this.props.match.params.spotId}`);
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

export default connect(mapStateToProps, mapDispatchToProps)(Description );