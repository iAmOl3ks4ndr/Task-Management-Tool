import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import arrow from '../icons/arrow.png'
import info from '../icons/info.png'
import bin from '../icons/bin.png'
import add from '../icons/add.png'

class Tasks extends Component {
    constructor() {
        super()

        this.state = {
            workspaceId: -1,
            workspaceName: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('workspaceId') && localStorage.getItem('workspaceName')) this.setState({ workspaceId: localStorage.getItem('workspaceId'), workspaceName: localStorage.getItem('workspaceName') })
        else window.location.href = '/workspaces'
    }

    quitWorkspace() {
        localStorage.removeItem("workspaceId")
        localStorage.removeItem("workspaceName")
        window.location.href = '/workspaces'
    }

    render() {
        let taskName = "Task Name"

        return (
            <>
                <nav className="workspaceMenu">
                    <p className="workspaceName">{this.state.workspaceName}</p>
                    <div className="quitWorkspace">
                        <a onClick={this.quitWorkspace}>Quit the Workspace</a>
                        <div></div>
                    </div>
                </nav>

                <div className="columnNamesContainer">
                    <div className="columnName"><p>Backlog</p></div>
                    <div className="columnName"><p>Ready to Start</p></div>
                    <div className="columnName"><p>In Progress</p></div>
                    <div className="columnName"><p>Quality Check</p></div>
                    <div className="columnName"><p>Done</p></div>
                </div>

                <div className="columnsContainer">
                    <div className="column">
                        <div className="taskContainer">
                            <p>{(taskName.length > 50) ? taskName.substring(0, 50) + "..." : taskName}</p>
                            <div className="taskControls">
                                <div className="taskButton taskButtonInactive"><img src={arrow} /></div>
                                <div className="taskButton"><img src={bin} /></div>
                                <div className="taskButton"><img src={info} /></div>
                                <div className="taskButton"><img src={arrow} /></div>
                            </div>
                        </div>
                        <div className="addTaskButton"><img src={add} /></div>
                    </div>

                    <div className="column">
                        <div className="taskContainer">
                            <p>{(taskName.length > 50) ? taskName.substring(0, 50) + "..." : taskName}</p>
                            <div className="taskControls">
                                <div className="taskButton"><img src={arrow} /></div>
                                <div className="taskButton"><img src={bin} /></div>
                                <div className="taskButton"><img src={info} /></div>
                                <div className="taskButton"><img src={arrow} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="taskContainer">
                            <p>{(taskName.length > 50) ? taskName.substring(0, 50) + "..." : taskName}</p>
                            <div className="taskControls">
                                <div className="taskButton"><img src={arrow} /></div>
                                <div className="taskButton"><img src={bin} /></div>
                                <div className="taskButton"><img src={info} /></div>
                                <div className="taskButton"><img src={arrow} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="taskContainer">
                            <p>{(taskName.length > 50) ? taskName.substring(0, 50) + "..." : taskName}</p>
                            <div className="taskControls">
                                <div className="taskButton"><img src={arrow} /></div>
                                <div className="taskButton"><img src={bin} /></div>
                                <div className="taskButton"><img src={info} /></div>
                                <div className="taskButton"><img src={arrow} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="taskContainer">
                            <p>{(taskName.length > 50) ? taskName.substring(0, 50) + "..." : taskName}</p>
                            <div className="taskControls">
                                <div className="taskButton"><img src={arrow} /></div>
                                <div className="taskButton"><img src={bin} /></div>
                                <div className="taskButton"><img src={info} /></div>
                                <div className="taskButton taskButtonInactive"><img src={arrow} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const rootElement = document.getElementById('tasksPage');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Tasks />);
}

export default Tasks;
