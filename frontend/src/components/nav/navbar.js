import React from 'react';
import { Link } from 'react-router-dom';
import logoname from './logoname.png';
import './navbar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
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
                        <li><Link to={'/create_listing'}>Add Listing</Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                        {/* <li><Link to={'/new_tweet'}>Create a Spot</Link></li> */}
                        <li><button onClick={this.logoutUser}>Logout</button></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="nav-right">
                    <ul className="nav-right-list">
                    <li><Link to={'/'}>Help</Link></li>
                    <li><Link to={'/signup'}>Signup</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <img src={logoname} className="nav-logo" alt="logo" />
                <div className="nav-search">
                    <input
                        type="text"
                        value=""
                        placeholder="Search party spots"
                        className="search-input"
                    /></div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;