import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import arrow from '../../icons/arrow.png'
import edit from '../../icons/edit.png'
import bin from '../../icons/bin.png'

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
            this.setState({ name: data.name, surname: data.surname })

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

                <div className="workspacesContainer">
                    <div className="workspacesList">
                        <p className="workspacesListTitle">My Workspaces</p>

                        <div className="workspacesScrollList">
                            <div className="workspaceElement">
                                <div className="workspaceDataContainer">
                                    <p className="workspaceTitle">My Project</p>
                                    <p className="workspaceDescription">A website that is used as a tool to manage tasks. This website includes account system that works brilliant and there is...</p>
                                    <div className="workspaceControls">
                                        <img src={edit} />
                                        <img src={bin} />
                                    </div>
                                </div>
                                <div className="workspaceGoContainer">
                                    <div className="workspaceGoToButton"><img src={arrow} /></div>
                                </div>
                            </div>

                            <div className="workspaceElement">
                                <div className="workspaceDataContainer">
                                    <p className="workspaceTitle">My Project</p>
                                    <p className="workspaceDescription">A website that is used as a tool to manage tasks. This website includes account system that works brilliant and there is...</p>
                                    <div className="workspaceControls">
                                        <img src={edit} />
                                        <img src={bin} />
                                    </div>
                                </div>
                                <div className="workspaceGoContainer">
                                    <div className="workspaceGoToButton"><img src={arrow} /></div>
                                </div>
                            </div>

                            <div className="workspaceElement">
                                <div className="workspaceDataContainer">
                                    <p className="workspaceTitle">My Project</p>
                                    <p className="workspaceDescription">A website that is used as a tool to manage tasks. This website includes account system that works brilliant and there is...</p>
                                    <div className="workspaceControls">
                                        <img src={edit} />
                                        <img src={bin} />
                                    </div>
                                </div>
                                <div className="workspaceGoContainer">
                                    <div className="workspaceGoToButton"><img src={arrow} /></div>
                                </div>
                            </div>
                        </div>

                        <input className="newWorkspaceButton btn btn-primary" type="button" value="Create New Workspace" />
                    </div>
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
