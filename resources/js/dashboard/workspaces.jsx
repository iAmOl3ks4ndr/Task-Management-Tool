import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Workspaces extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            surname: ""
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = async () => {
        try {
            const response = await fetch('/api/short-user', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                },
            })

            const data = await response.json()
            this.setState({name: data.name, surname: data.surname})

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

    render() {
        return (
            <>
                <nav className="navigationBar">
                    <div className="section">
                        <a onClick={() => window.location.href = '/account'}>My Account</a>
                        <div className="sectionUnderline"></div>
                    </div>
                    <div className="section currentSection">
                        <a>My Workspaces</a>
                        <div className="sectionUnderline currentSectionLine"></div>
                    </div>
                    <div className="section">
                        <a onClick={this.logoutUser}>Log Out</a>
                        <div className="sectionUnderline"></div>
                    </div>
                </nav>

                <div className="sectionWelcome">
                    <p className="mainMessage">Welcome, {this.state.name} {this.state.surname}</p>
                    <p className="phraseText">Let's make the day!</p>
                </div>
            </>
        )
    }
}

const rootElement = document.getElementById('workspacesPage');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Workspaces />);
}

export default Workspaces;
