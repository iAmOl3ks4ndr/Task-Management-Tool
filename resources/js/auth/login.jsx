import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Login extends Component {
    render() {
        const signupUrl = document.getElementById('loginForm').dataset.signupUrl;

        return (
            <>
                <div className="welcomeMessage"><p>Welcome to<br />Project Management Tool</p></div>

                <div className="formSection loginForm">
                    <div className="formBox">
                        <div className="formName"><p>Log In</p></div>

                        <div className="formContainer">
                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Email</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input type="email" placeholder="Your email (e.g. alex@gmail.com)" required />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Password</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input type="password" placeholder="Your password" required />
                            </div>
                        </div>

                        <div className="formButton">
                            <input className="btn btn-primary" type="button" value="Log In" disabled />
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
