import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./spot_location.scss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { updateSpot, fetchSpot } from "../../../actions/spot_actions";
class SpotLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      state: "",
      zip: "",
      suite: "",
      cityClass: ["city-div"],
      stateClass: ["city-div"],
      zipClass: ["zip-div"],
      addressClass: ["address-div short"],
      suiteClass: ["address-div short"]
    };
  }

  inFocus = arg => {
    this.setState(prevState => prevState[arg].push("focused"));
  };

  inBlur = arg => {
    this.setState(prevState => prevState[arg].pop());
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.setState({ lat: latLng.lat, lng: latLng.lng });
      })
      .catch(error => console.error("Error", error));
    const addressArr = address.split(",");
    const state = addressArr[addressArr.length - 2];
    const city = addressArr[addressArr.length - 3];
    this.setState({ address, city, state });
  };
  render() {
    return (
      <div className="spot-location">
        <div className="white-background-location">
          <p className="form-header">Where's your place located?</p>
          <p className="form-description">
            Guests will only get your exact address once they've booked a
            reservation
          </p>
          <label className="street-address-label" htmlFor="search-header">
            Street Address
          </label>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={address => this.setState({ address })}
            debounce={500}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <div className={this.state.addressClass.join(" ")}>
                  <input
                    type="text"
                    {...getInputProps({
                      placeholder: "Anywhere",
                      required: true
                    })}
                  />
                </div>
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active row"
                      : "suggestion-item row";
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="map-marker"
                        />
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <label className="street-address-label">Apt, Suite.(optional)</label>
          <div className={this.state.suiteClass.join(" ")}>
            <input
              type="text"
              placeholder="e.g.Apt#7"
              onChange={e => this.setState({ suite: e.currentTarget.value })}
              onFocus={() => this.inFocus("suiteClass")}
              onBlur={() => this.inBlur("suiteClass")}
              value={this.state.suite}
            />
          </div>
          <div className="label-row">
            <label className="street-address-label" htmlFor="city">
              City
            </label>
            <label className="street-address-label" htmlFor="state">
              State
            </label>
          </div>
          <div className="address-row">
            <div className={this.state.cityClass.join(" ")}>
              <input
                id="city"
                type="text"
                placeholder="City"
                onChange={e => this.setState({ city: e.currentTarget.value })}
                value={this.state.city}
                onFocus={() => this.inFocus("cityClass")}
                onBlur={() => this.inBlur("cityClass")}
              />
            </div>
            <div className={this.state.stateClass.join(" ")}>
              <input
                type="text"
                id="state"
                placeholder="State"
                onChange={e => this.setState({ state: e.currentTarget.value })}
                value={this.state.state}
                onFocus={() => this.inFocus("stateClass")}
                onBlur={() => this.inBlur("stateClass")}
              />
            </div>
          </div>
          <label className="street-address-label" htmlFor="zip">
            Zip
          </label>
          <div className={this.state.zipClass.join(" ")}>
            <input
              type="text"
              id="state"
              placeholder="Zip"
              onChange={e => this.setState({ zip: e.currentTarget.value })}
              value={this.state.zip}
              onFocus={() => this.inFocus("zipClass")}
              onBlur={() => this.inBlur("zipClass")}
            />
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
                  location: {
                    streetAddress: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                    zip: this.state.zip,
                  },
                  precise: {
                    type: "Point",
                    coordinates: [this.state.lng, this.state.lat]
                  }
                });
                console.log("pressed");
              }}
            >
              Next
            </button>
          </div>
          <div className="empty-space"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SpotLocation);
