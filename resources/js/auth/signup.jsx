import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class Signup extends Component {
    constructor() {
        super()

        this.state = {
            "firstNameField": "",
            "lastNameField": "",
            "emailField": "",
            "passwordField": "",
            "confirmPasswordField": "",

            "firstNameError": "",
            "lastNameError": "",
            "emailError": "",
            "passwordError": "",
            "confirmPasswordError": ""
        }
    }

    handleInputChange = (e) => {
        let { name, value } = e.target;

        if (name === "firstNameField" || name === "lastNameField") {
            if (value[0] === " ") this.setState({ [name]: value.trimStart() })
            else this.setState({ [name]: value });
        }
        else this.setState({ [name]: value.replace(/\s/g, '') });
    }

    fieldsAreEmpty() {
        return (
            this.state.firstNameField.trim() === "" ||
            this.state.lastNameField.trim() === "" ||
            this.state.emailField === "" ||
            this.state.passwordField === "" ||
            this.state.confirmPasswordField === ""
        )
    }

    valuesAreValid = () => {
        let fnMsg = "", lnMsg = "", eMsg = "", pMsg = "", cpMsg = ""

        if (this.state.firstNameField.length < 3 || this.state.firstNameField.length > 100) {
            fnMsg = "Name must be from 3 to 100 characters"
        }
        else if (!(/^[A-Za-z\s]+$/.test(this.state.firstNameField))) {
            fnMsg = "Name can contain letters and spaces only"
        }

        if (this.state.lastNameField.length < 3 || this.state.lastNameField.length > 100) {
            lnMsg = "Surname must be from 3 to 100 characters"
        }
        else if (!(/^[A-Za-z\s]+$/.test(this.state.lastNameField))) {
            lnMsg = "Surname can contain letters and spaces only"
        }

        if (this.state.emailField.length < 5 || this.state.emailField.length > 255) {
            eMsg = "Email must be from 5 to 255 characters"
        }
        else if (!(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(this.state.emailField))) {
            eMsg = "Email must have a format example@example.com"
        }

        if (this.state.passwordField.length < 8 || this.state.passwordField.length > 32) {
            pMsg = "Password must be between 8 and 32 characters"
        }
        else if (!/[A-Z]/.test(this.state.passwordField)) {
            pMsg = "Password must contain at least one uppercase letter"
        }
        else if (!/[a-z]/.test(this.state.passwordField)) {
            pMsg = "Password must contain at least one lowercase letter"
        }
        else if (!/\d/.test(this.state.passwordField)) {
            pMsg = "Password must contain at least one number"
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.state.passwordField)) {
            pMsg = "Password must contain at least one special character"
        }

        if (this.state.passwordField !== this.state.confirmPasswordField) cpMsg = "Passwords does not match"

        this.setState({
            "firstNameError": fnMsg,
            "lastNameError": lnMsg,
            "emailError": eMsg,
            "passwordError": pMsg,
            "confirmPasswordError": cpMsg
        })

        if (fnMsg === "" && lnMsg === "" && eMsg === "" && pMsg === "" && cpMsg === "") return true
        else return false
    }

    signupUser = async () => {
        if (!this.valuesAreValid()) return;

        const userData = {
            name: this.state.firstNameField,
            surname: this.state.lastNameField,
            email: this.state.emailField,
            password: this.state.passwordField,
            password_confirmation: this.state.confirmPasswordField
        };

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();
            console.log(result);

        }
        catch (error) { console.error("Signup failed", error); }
    }

    render() {
        const loginUrl = document.getElementById('signupForm').dataset.loginUrl

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
                                    <p className="formErrors">{this.state.firstNameError}</p>
                                </div>
                                <input
                                    type="text"
                                    name="firstNameField"
                                    placeholder="Your name (e.g. Conor)"
                                    value={this.state.firstNameField}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Last Name</p>
                                    <p className="formErrors">{this.state.lastNameError}</p>
                                </div>
                                <input
                                    type="text"
                                    name="lastNameField"
                                    placeholder="Your surname (e.g. Byrne)"
                                    value={this.state.lastNameField}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Email</p>
                                    <p className="formErrors">{this.state.emailError}</p>
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
                                    <p className="formErrors">{this.state.passwordError}</p>
                                </div>
                                <input
                                    type="password"
                                    name="passwordField"
                                    placeholder="Your password"
                                    value={this.state.passwordField}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="formGroup">
                                <div className="formLabels">
                                    <p>Confirm Password</p>
                                    <p className="formErrors">{this.state.confirmPasswordError}</p>
                                </div>
                                <input
                                    type="password"
                                    name="confirmPasswordField"
                                    placeholder="Repeat your password"
                                    value={this.state.confirmPasswordField}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="formButton">
                            <input className="btn btn-primary" type="button" value="Sign Up" onClick={this.signupUser} disabled={this.fieldsAreEmpty()} />
                        </div>
                    </div>
                    <div className="formLoginMessage">
                        <p>Already have an account?</p>
                        <a className="formToLogin" href={loginUrl}>&nbsp;Log in</a>
                    </div>
                </div>
            </>
        )
    }
}

const rootElement = document.getElementById('signupForm');

if (rootElement && !rootElement._reactRootContainer) {
    const root = createRoot(rootElement);
    root.render(<Signup />);
}
