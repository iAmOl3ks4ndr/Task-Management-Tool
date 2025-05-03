import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Signup extends Component {
    render() {
        const loginUrl = document.getElementById('signupForm').dataset.loginUrl;

        return (
            <>
                <div className="welcomeMessage"><p>Welcome to<br />Project Management Tool</p></div>

                <div className="formSection">
                    <div className="formBox">
                        <div className="formName"><p>Sign Up</p></div>

                        <div className="formContainer">
                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>First Name</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input type="text" placeholder="Your name (e.g. Conor)" required />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Last Name</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input type="text" placeholder="Your surname (e.g. Byrne)" required />
                            </div>

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

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Confirm Password</p>
                                    <p className="formErrors"></p>
                                </div>
                                <input type="password" placeholder="Repeat your password" required />
                            </div>
                        </div>

                        <div className="formButton">
                            <input className="btn btn-primary" type="button" value="Sign Up" disabled />
                        </div>
                    </div>
                    <div className="formLoginMessage">
                        <p>Already have an account?</p>
                        <a className="formToLogin" href={loginUrl}>&nbsp;Log in</a>
                    </div>
                </div>
            </>
        );
    }
}

const rootElement = document.getElementById('signupForm');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Signup />);
}

export default Signup;
