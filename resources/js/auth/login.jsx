import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            "emailField": "",
            "passwordField": "",
            "errorMessage": ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('signedMsg')) {
            document.getElementById("signedupMessage").style.display = "flex"
            localStorage.removeItem('signedMsg');
        }
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value.replace(/\s/g, '') });
    fieldsAreEmpty() { return (this.state.emailField === "" || this.state.passwordField === "") }

    loginUser = async () => {
        if (!(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(this.state.emailField))) {
            this.setState({errorMessage: "The email field must be a valid email address."})
            return
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
            body: JSON.stringify({ email: this.state.emailField, password: this.state.passwordField })
        })
    
        const data = await response.json()
    
        if (response.status === 200) window.location.href = '/workspaces'
        else this.setState({errorMessage: data.message})
    }

    render() {
        const signupUrl = document.getElementById('loginForm').dataset.signupUrl;

        return (
            <>
                <div className="welcomeMessage"><p>Welcome to<br />Project Management Tool</p></div>

                <div className="signedupMessage" id="signedupMessage"><p>Your account was successfully registered. Please log in</p></div>

                <div className="formSection loginForm">
                    <div className="formBox">
                        <div className="formName"><p>Log In</p></div>

                        <div className="formContainer">
                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Email</p>
                                    <p className="formErrors">{this.state.errorMessage}</p>
                                </div>
                                <input
                                    type="text"
                                    name="emailField"
                                    placeholder="Your email (e.g. alex@gmail.com)"
                                    value={this.state.emailField}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Password</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input
                                    type="password"
                                    name="passwordField"
                                    placeholder="Your password"
                                    value={this.state.passwordField}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="formButton">
                            <input className="btn btn-primary" type="button" value="Log In" onClick={this.loginUser} disabled={this.fieldsAreEmpty()} />
                        </div>
                    </div>
                    <div className="formSignupMessage">
                        <p>Do not have an account?</p>
                        <a className="formToSignup" href={signupUrl}>&nbsp;Sign Up</a>
                    </div>
                </div>
            </>
        );
    }
}

const rootElement = document.getElementById('loginForm');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Login />);
}

export default Login;
