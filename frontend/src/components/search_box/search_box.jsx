import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "date-fns";
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
      date: new Date()
    };
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.setState({ lat: latLng.lat, lng: latLng.lng });
      })
      .catch(error => console.error("Error", error));
    this.setState({address});
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
                  debugger;
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
        <button className="search-btn">Search</button>
      </div>
    );
  }
}

export default SearchBox;
