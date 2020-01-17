import React from 'react';
import { withRouter , Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import logoname from './logoname.png';
import './session_forms.scss';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
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
            password: this.state.password
        };

        this.props.login(user);
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
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-login">
                        
                        <div className="form-login-header">
                            <h2>Log in to continue</h2>

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
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                            <FontAwesomeIcon
                                icon={faLock}
                                color="grey"
                                className="icon-mail"
                            />
                        </div>
                        <div className="form-submit">
                            <input type="submit" value="Login" className="form-btn sharpen2"/>
                        </div>
                        {this.renderErrors()}
                        <div className="form-footer-login">
                            <img src={logoname} className="nav-logo" alt="logo" />

                        </div>
                        <div className="form-footer">
                            <h3 className="login-h3">Don't have a partyBnB account? <span className="blue"><Link to={'/signup'}>Signup</Link></span></h3>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);