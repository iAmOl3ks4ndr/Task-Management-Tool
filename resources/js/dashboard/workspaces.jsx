import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import arrow from '../../icons/arrow.png'
import info from '../../icons/info.png'
import edit from '../../icons/edit.png'
import bin from '../../icons/bin.png'

class Workspaces extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            surname: "",
            workspaces: [],

            whichModal: 0,
            workspaceName: "",
            workspaceDescription: "",
            workspaceToManage: -1
        }
    }

    componentDidMount() {
        this.fetchUser()
        this.fetchWorkspaces()
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

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

    fetchWorkspaces = async () => {
        try {
            const response = await fetch('/api/get-workspaces', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                },
            })

            const data = await response.json()
            const sortedData = data.sort((a, b) => new Date(b.last_used) - new Date(a.last_used));
            this.setState({ workspaces: sortedData })

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

    displayModal(which, workspaceId = -1) {
        if (which === 0) this.setState({ workspaceName: "", workspaceDescription: "" })
        else if (which === 2 || which === 3 || which === 4) {
            for (const workspace of this.state.workspaces) {
                if (workspace.id === workspaceId) {
                    this.setState({ workspaceName: workspace.title, workspaceDescription: workspace.description })
                    break;
                }
            }
        }

        this.setState({ whichModal: which, workspaceToManage: workspaceId })
    }

    createWorkspace = async () => {
        const response = await fetch('/api/create-workspace', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
            body: JSON.stringify({
                title: (this.state.workspaceName.length === 0) ? "Unnamed Workspace" : this.state.workspaceName,
                description: this.state.workspaceDescription,
            })
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    modifyWorkspace = async () => {
        const response = await fetch(`/api/modify-workspace/${this.state.workspaceToManage}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
            body: JSON.stringify({
                title: (this.state.workspaceName.length === 0) ? "Unnamed Workspace" : this.state.workspaceName,
                description: this.state.workspaceDescription,
            })
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    deleteWorkspace = async () => {
        const response = await fetch(`/api/delete-workspace/${this.state.workspaceToManage}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    render() {
        let modalTitle = "", readOnlyInputs = (this.state.whichModal === 2), proceedButton = <></>

        switch (this.state.whichModal) {
            case 1:
                modalTitle = "Create New Workspace"
                proceedButton = <input className="modalButtons createButton btn btn-primary" type="button" value="Create Workspace" onClick={this.createWorkspace} />
                break
            case 2:
                modalTitle = "Workspace Details"
                break
            case 3:
                modalTitle = "Modify Workspace"
                proceedButton = <input className="modalButtons modifyButton btn btn-primary" type="button" value="Modify Workspace" onClick={this.modifyWorkspace} />
                break
            case 4:
                modalTitle = "Delete Workspace"
                proceedButton = <input className="modalButtons deleteButton btn btn-primary" type="button" value="Delete Workspace" onClick={this.deleteWorkspace} />
                break
        }

        return (
            <>
                <div className="workspacesModalBackground" style={{ display: (this.state.whichModal === 0) ? "none" : "flex" }}>
                    <div className="workspacesModal">
                        <p className="workspacesModalTitle">{modalTitle}</p>

                        <div className="workspacesModalForm">
                            {
                                (this.state.whichModal !== 4) ?
                                    <>
                                        <input
                                            className="workspaceNameInput"
                                            type="text"
                                            name="workspaceName"
                                            placeholder="Workspace Name"
                                            maxLength={50}
                                            value={this.state.workspaceName}
                                            onChange={this.handleInputChange}
                                            disabled={readOnlyInputs}
                                        />
                                        <textarea
                                            className="workspaceDescriptionInput"
                                            name="workspaceDescription"
                                            placeholder="Workspace Description"
                                            maxLength={255}
                                            value={(this.state.workspaceDescription === null) ? "" : this.state.workspaceDescription}
                                            onChange={this.handleInputChange}
                                            disabled={readOnlyInputs}
                                        />
                                    </>
                                    :
                                    <p className="deleteWorkspaceMessage">Are you sure you want to delete workspace<br />{this.state.workspaceName}?</p>
                            }
                        </div>

                        <div className="workspacesModalControls">
                            <input className="modalButtons btn btn-primary" type="button" value={(this.state.whichModal !== 2) ? "Cancel" : "Close"} onClick={() => this.displayModal(0)} />
                            {proceedButton}
                        </div>
                    </div>
                </div>

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
                            {this.state.workspaces.length === 0 ? (
                                <p className="noWorkspacesMessage">You do not have any workspaces. Create your first one!</p>
                            ) : (
                                this.state.workspaces.map((workspace, index) => (
                                    <div className="workspaceElement" key={index}>
                                        <div className="workspaceDataContainer">
                                            <p className="workspaceTitle">{(workspace.title.length < 20) ? workspace.title : (workspace.title.substring(0, 20) + "...")}</p>
                                            <p className="workspaceDescription">
                                                {
                                                    workspace.description === null
                                                        ? "No description"
                                                        : workspace.description.length < 130
                                                            ? workspace.description
                                                            : workspace.description.substring(0, 130) + "..."
                                                }
                                            </p>
                                            <div className="workspaceControls">
                                                <img src={info} onClick={() => this.displayModal(2, workspace.id)} />
                                                <img src={edit} onClick={() => this.displayModal(3, workspace.id)} />
                                                <img src={bin} onClick={() => this.displayModal(4, workspace.id)} />
                                            </div>
                                        </div>
                                        <div className="workspaceGoContainer"><div className="workspaceGoToButton"><img src={arrow} /></div></div>
                                    </div>
                                )))}
                        </div>

                        <input className="newWorkspaceButton btn btn-primary" type="button" value="Create New Workspace" onClick={() => this.displayModal(1)} />
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
