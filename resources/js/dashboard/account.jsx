import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Account extends Component {
    constructor() {
        super()
    }

    logoutUser = async () => {
        const response = await fetch('http://127.0.0.1:8000/logout', {
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

    render() {
        return (
            <>
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
