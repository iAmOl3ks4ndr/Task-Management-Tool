import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Account extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            surname: "",
            email: "",
            modalVisiblity: "none"
        }
    }

    componentDidMount() { this.fetchUser() }

    fetchUser = async () => {
        try {
            const response = await fetch('/api/full-user', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                },
            })

            const data = await response.json()
            this.setState({ name: data.name, surname: data.surname, email: data.email })

        }
        catch (err) { console.error(err.message) }
    }

    logoutUser = async () => {
        const response = await fetch('/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.status === 200) window.location.href = '/login'
        else console.error("Logout failed:", data.message)
    }

    deleteAccount = async () => {
        const response = await fetch('/api/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.status === 200) window.location.href = '/login'
        else console.error("Logout failed:", data.message)
    }

    switchModal(option) { this.setState((option === 1) ? { modalVisiblity: "flex" } : { modalVisiblity: "none" }) }

    render() {
        return (
            <>
                <div className="modalBackground" style={{ display: this.state.modalVisiblity }}>
                    <div className="confirmAccountDeleteModal">
                        <p className="modalName">Confirm Account Deletion</p>

                        <div className="modalMessage">
                            <p>Are you sure you want to delete your account?</p>
                            <p>All your workspaces will be deleted too and<br/>changes cannot be undone</p>
                        </div>

                        <div className="modalControls">
                            <input className="modalButtons btn btn-primary" type="button" value="Cancel" onClick={() => this.switchModal(0)} />
                            <input className="modalButtons confirmDeleteButton btn btn-primary" type="button" value="Delete Account" onClick={this.deleteAccount} />
                        </div>
                    </div>
                </div>

                <nav className="navigationBar">
                    <div className="section currentSection">
                        <a>My Account</a>
                        <div className="sectionUnderline currentSectionLine"></div>
                    </div>
                    <div className="section">
                        <a onClick={() => window.location.href = '/workspaces'}>My Workspaces</a>
                        <div className="sectionUnderline"></div>
                    </div>
                    <div className="section">
                        <a onClick={this.logoutUser}>Log Out</a>
                        <div className="sectionUnderline"></div>
                    </div>
                </nav>

                <div className="sectionWelcome"><p className="mainMessage">My Account</p></div>

                <div className="accountBoxContainer">
                    <div className="accountBox">
                        <div className="accountSection">
                            <p>First Name</p>
                            <input type="text" value={this.state.name} disabled />
                        </div>
                        <div className="accountSection">
                            <p>Last Name</p>
                            <input type="text" value={this.state.surname} disabled />
                        </div>
                        <div className="accountSection">
                            <p>Email</p>
                            <input type="text" value={this.state.email} disabled />
                        </div>

                        <input className="deleteAccountButton btn btn-primary" type="button" value="Delete Account" onClick={() => this.switchModal(1)}></input>
                    </div>
                </div>
            </>
        )
    }
}

const rootElement = document.getElementById('accountPage');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Account />);
}

export default Account;
