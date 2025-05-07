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
            workspaceName: "",
            tasks: []
        }
    }

    componentDidMount() {
        if (localStorage.getItem('workspaceId') && localStorage.getItem('workspaceName')) {
            this.setState(
                {
                    workspaceId: localStorage.getItem('workspaceId'),
                    workspaceName: localStorage.getItem('workspaceName')
                }, () => { this.fetchTasks() })
        }
        else window.location.href = '/workspaces'
    }

    quitWorkspace() {
        localStorage.removeItem("workspaceId")
        localStorage.removeItem("workspaceName")
        window.location.href = '/workspaces'
    }

    fetchTasks = async () => {
        try {
            const response = await fetch(`/api/get-tasks/${this.state.workspaceId}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                },
            })

            const data = await response.json()
            this.setState({ tasks: data })
        }
        catch (err) { console.error(err.message) }
    }

    deleteTask = async (taskToDelete) => {
        const response = await fetch(`/api/delete-task/${taskToDelete}`, {
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
                        {
                            this.state.tasks.map((task, index) => {
                                return (task.stage === 1) ?
                                    <div className="taskContainer" key={index}>
                                        <p>{(task.name.length > 50) ? task.name.substring(0, 50) + "..." : task.name}</p>
                                        <div className="taskControls">
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton"><img src={info} /></div>
                                            <div className="taskButton"><img src={arrow} /></div>
                                        </div>
                                    </div>
                                    : ""
                            })
                        }

                        <div className="addTaskButton"><img src={add} /></div>
                    </div>

                    <div className="column">
                        {
                            this.state.tasks.map((task, index) => {
                                return (task.stage === 2) ?
                                    <div className="taskContainer" key={index}>
                                        <p>{(task.name.length > 50) ? task.name.substring(0, 50) + "..." : task.name}</p>
                                        <div className="taskControls">
                                            <div className="taskButton"><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton"><img src={info} /></div>
                                            <div className="taskButton"><img src={arrow} /></div>
                                        </div>
                                    </div>
                                    : ""
                            })
                        }
                    </div>

                    <div className="column">
                        {
                            this.state.tasks.map((task, index) => {
                                return (task.stage === 3) ?
                                    <div className="taskContainer" key={index}>
                                        <p>{(task.name.length > 50) ? task.name.substring(0, 50) + "..." : task.name}</p>
                                        <div className="taskControls">
                                            <div className="taskButton"><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton"><img src={info} /></div>
                                            <div className="taskButton"><img src={arrow} /></div>
                                        </div>
                                    </div>
                                    : ""
                            })
                        }
                    </div>

                    <div className="column">
                        {
                            this.state.tasks.map((task, index) => {
                                return (task.stage === 4) ?
                                    <div className="taskContainer" key={index}>
                                        <p>{(task.name.length > 50) ? task.name.substring(0, 50) + "..." : task.name}</p>
                                        <div className="taskControls">
                                            <div className="taskButton"><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton"><img src={info} /></div>
                                            <div className="taskButton"><img src={arrow} /></div>
                                        </div>
                                    </div>
                                    : ""
                            })
                        }
                    </div>

                    <div className="column">
                        {
                            this.state.tasks.map((task, index) => {
                                return (task.stage === 5) ?
                                    <div className="taskContainer" key={index}>
                                        <p>{(task.name.length > 50) ? task.name.substring(0, 50) + "..." : task.name}</p>
                                        <div className="taskControls">
                                            <div className="taskButton"><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton"><img src={info} /></div>
                                        </div>
                                    </div>
                                    : ""
                            })
                        }
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
