import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faUserAlt,faEye } from "@fortawesome/free-solid-svg-icons";
import './session_forms.scss';
import { YearSelection } from '@material-ui/pickers/views/Year/YearView';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            year: 2000,
            validationError: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(this.state);
        this.props.signup(user, this.props.history)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    renderOptions(start, end) {
        const values = [];
        for (var i = end; i > start; i--) {
            values.push(i);
        }
        return (

            values.map(el => (
                <option value={el}>{el}</option>
            ))

        );
    }
    

    render() {
        const err = Object.keys(this.state.errors);
        var today = new Date();
        var currYear = today.getFullYear();
        // console.log(this.state);
        
        return (
            <div className="form-container">
                <form  onSubmit={this.handleSubmit}>
                    

                    <div className="form">
                        <div className="form-signup-header">
                            <h3>Find your party spot with partyBnB</h3>
                    
                        </div>
            
                        <div className="form-input">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            <FontAwesomeIcon
                                icon={faEnvelopeSquare}
                                color="grey"
                                className="icon-mail"
                            />
                        </div>

                        <div className="form-input">
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                placeholder="First Name"
                            />
                                <FontAwesomeIcon
                                    icon={faUserAlt }
                                    color="grey"
                                    className="icon-mail"
                                />
                        </div>

                        <div className="form-input">
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                placeholder="Last Name"
                            />
                                <FontAwesomeIcon
                                    icon={faUserAlt }
                                    color="grey"
                                    className="icon-mail"
                                />
                        </div>

                        <div className="form-input">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                                <FontAwesomeIcon
                                    icon={faEye}
                                    color="grey"
                                    className="icon-mail"
                                />
                        </div>
                        <div className="form-input">
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                            />
                                <FontAwesomeIcon
                                    icon={faEye}
                                    color="grey"
                                    className="icon-mail"
                                />
                        </div>
                        <div className="birthday">
                            <h3>Birthday</h3>
                            <p>To sign up, you need to be at least 18. Other people who use Airbnb won’t see your birthday.</p> 
                            <div className="birthday-date">
                                <select name="month">
                                    <option value="0" selected disabled>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>

                                </select>
                                <select name="day">
                                        <option value="0" selected disabled>Day</option>
                                        {this.renderOptions(1, 31)}
                                        
                                </select>
                                    <select name="year" value={this.state.year} 
                                        onChange={(e) => this.setState({
                                            year: e.target.value, validationError:
                                                (currYear - e.target.value) <= 18 
                                                    ? "Sorry, to sign up, you must be 18 or older"
                                                    : ""})}>
                                        <option value="0" selected disabled>Year</option>
                                        {this.renderOptions(1920, 2020)}
                                        
                                    
                                </select>
                            </div>
                        </div>
                        <div className="form-submit">
                            <button
                                className={`form-btn ${this.state.validationError === "" &&
                                    "sharpen2"}`}
                                disabled={this.state.validationError !== "" }
                                onClick={this.handleSubmit}
                            >
                               Signup
                            </button>
                            
                        </div>
                        <div className="session-form-errors">
                            {this.state.validationError}           
                            {this.renderErrors()}
                            
                        </div>
                        <div className="form-agreement">
                            <p>PartyBnB will send you members-only deals, inspiration, promotions and policy updates via email. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.</p>
                            <input type="checkbox" /><label>I don’t want to receive marketing messages from PartyBnB.</label>
                        </div>
                        <div className="form-footer">
                            <h3>Already have an Airbnb account?
                            <span className="blue"><Link to={'/login'}>Login</Link></span></h3>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);