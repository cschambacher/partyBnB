import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import './session_forms.scss';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
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

        this.props.signup(user, this.props.history);
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

    render() {
        return (
            <div className="form-container">
                <form  onSubmit={this.handleSubmit}>
                    

                    <div className="form">
                        <div className="form-signup-header">
                            <h3>Sign up with <span className="blue">Facebook</span> or <span className="blue">Google</span></h3>
                    
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
                        </div>

                        <div className="form-input">
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        </div>

                        <div className="form-input">
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        </div>
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <h3>Birthday</h3>
                        <p>To sign up, you need to be at least 18. Other people who use Airbnb won’t see your birthday.</p> 
                        <div className="birthday">
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
                                <option value="1">01</option>
                                <option value="1">03</option>
                                <option value="1">06</option>
                                <option value="1">09</option>
                                <option value="1">12</option>
                                <option value="1">15</option>
                                <option value="1">18</option>
                                <option value="1">21</option>
                                <option value="1">24</option>
                                <option value="1">27</option>
                                <option value="1">30</option>
                        </select>
                        <select name="year">
                                <option value="0" selected disabled>Year</option>
                                <option value="1">1960</option>
                                <option value="1">1970</option>
                                <option value="1">1980</option>
                                <option value="1">1990</option>
                                <option value="1">2000</option>
                                <option value="1">2001</option>
                        </select>
                        </div>
                        <div className="form-submit">
                        <input type="submit" value="Sign up" className="form-btn"/>
                        </div>
                        {this.renderErrors()}
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