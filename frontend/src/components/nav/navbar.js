import React from 'react';
import { Link } from 'react-router-dom';
import logoname from './logoname.png';
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {
      address: ""
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <Link to={"/dashboard"}>Home</Link>
            </li>
            <li>
              <Link to={"/create_listing"}>Add Listing</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            {/* <li><Link to={'/new_tweet'}>Create a Spot</Link></li> */}
            <li>
              <button onClick={this.logoutUser}>Logout</button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <Link to={"/"}>Help</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.setState({ lat: latLng.lat, lng: latLng.lng });
        this.props.history.push(`/search/${this.state.lat}/${this.state.lng}`);
      })
      .catch(error => console.error("Error", error));
    const state = address.split(",")[1].trim();
    this.setState({ address, state });
  };

  render() {
    const searchOptions = {
      types: ["(cities)"]
    };
    return (
      <div className="nav-bar">
        <img src={logoname} className="nav-logo" alt="logo" />
        <div className="nav-search">
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
                <div className="autocomplete-dropdown-container fix">
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
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);