import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Workspaces extends Component {
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

        if (response.status === 200) {
            if (data.redirectUrl) history.push(data.redirectUrl)
            console.log("Successfully logged out")
            window.location.href = '/login'
        } else {
            console.error("Logout failed:", data.message)
        }
    }

    render() {
        return (
            <>
                <p>Hello World</p>
                <input type="button" value="Sign Out" onClick={this.logoutUser} />
            </>
        )
    }
}

const rootElement = document.getElementById('workspace');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Workspaces />);
}

export default Workspaces;
