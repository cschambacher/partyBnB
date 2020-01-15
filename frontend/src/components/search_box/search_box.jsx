import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "date-fns";
import { searchSpots } from '../../actions/spot_actions';
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import './search_box.scss';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      date: new Date(),
      maxGuestSize: 25,
      rooms: 3 
    };
  }

  increase = arg => {
    this.setState(prevState => (
      { [arg]: prevState[arg] + 1 }
    ))
  }

  decrease = arg => {
    if (this.state[arg] > 0) {
      this.setState(prevState => (
        { [arg]: prevState[arg] - 1 }
      ))
    } else return;
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.setState({ lat: latLng.lat, lng: latLng.lng });
      })
      .catch(error => console.error("Error", error));
      const state = address.split(",")[1].trim();
      console.log("state", state);
    this.setState({address, state});
  };
  render() {
    const searchOptions = {
      types: ['(cities)']
    }
    return (
      <div className="search-box">
        <h1 className="search-spot-header">
          Book unique locations for parties
        </h1>
        <label htmlFor="search-header">WHERE</label>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={address => this.setState({ address })}
          debounce={500}
          onSelect={this.handleSelect}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <div className="autocomplete">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="grey"
                  className="google-auto-complete-icon"
                />
                <input
                  type="text"
                  {...getInputProps({
                    placeholder: "Anywhere",
                    required: true,
                    className: "input-padding"
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            disablePast={true}
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={this.state.date}
            onChange={date => this.setState({date})}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <div className="search-guest">
          <p className="capacity-label">Guests</p>
          <p
            className={`form-decrement ${this.state.maxGuestSize === 0 &&
              "dull"}`}
            onClick={() => this.decrease("maxGuestSize")}
          >
            -
                </p>
          <p className="value">{this.state.maxGuestSize}</p>
          <p
            onClick={() => this.increase("maxGuestSize")}
            className="form-increment"
          >
            +
                </p>
        </div>
        <button onClick={() => {
          if (this.state.address.length > 0){
            this.props.searchSpots(this.state.lat, this.state.lng);
            this.props.history.push(`/search/${this.state.lat}/${this.state.lng}`)
          }
        }} className="search-btn">Search</button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  results: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  searchSpots: (lat, lon) => dispatch(searchSpots(lat, lon))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox));
