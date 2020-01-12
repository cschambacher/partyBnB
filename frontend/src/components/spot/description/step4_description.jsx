import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
// import { createCurrentSpot } from '../../../util/spot_form_utils';
// import { receiveCurrentSpot } from '../../../actions/spot_actions';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: " ",
            description: " ",
            // propertyType: "",
            basePrice: "450",
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
            <div>
                <div className="property-price">
                    <div>Name of your party spot:</div>
                    <div>
                        <input
                            type='text'
                            value={this.state.title}
                            placeholder="Name"
                            onChange={e => this.setState({ title: e.currentTarget.value })}
                        />
                    </div>
                </div>
                <div>What kind of spot are you listing?</div>
                <div className="property-descritpion">
                    <div>Describe your property</div>
                    <div>
                        <textarea
                            cols="30"
                            rows="1"
                            value={this.state.description}
                            placeholder="Tell everyone about your spot"
                            onChange={e => this.setState({ description : e.currentTarget.value })}
                        />
                    </div>
                </div>

                <div className="property-price">
                    <div>Price</div>
                    <div>
                        <input
                            type='text'
                            value={this.state.price}
                            placeholder="price per night"
                            onChange={e => this.setState({ basePrice: e.currentTarget.value })}
                        />
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