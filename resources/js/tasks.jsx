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
            tasks: [],

            whichModal: 0,
            taskName: "",
            taskDescription: "",
            taskPriority: 0
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

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

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

    toNextStage = async (taskId) => {
        const response = await fetch(`/api/task-to-next-stage/${taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include'
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    toPreviousStage = async (taskId) => {
        const response = await fetch(`/api/task-to-previous-stage/${taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include'
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    displayModal(which, taskId = -1) {
        if (which === 0) this.setState({ taskName: "", taskDescription: "", taskPriority: 0 })
        else if (which === 2) {
            for (const task of this.state.tasks) {
                if (task.id === taskId) {
                    this.setState({ taskName: task.name, taskDescription: task.description, taskPriority: task.priority_level })
                    break;
                }
            }
        }

        this.setState({ whichModal: which })
    }

    render() {
        let taskPriorityValueElement;

        switch (this.state.taskPriority) {
            case 1:
                taskPriorityValueElement = <p className="taskPriority lowPriority">Low</p>
                break;
            case 2:
                taskPriorityValueElement = <p className="taskPriority mediumPriority">Medium</p>
                break;
            case 3:
                taskPriorityValueElement = <p className="taskPriority highPriority">High</p>
                break;
        }

        return (
            <>
                <div className="tasksModalBackground" style={{ display: (this.state.whichModal === 0) ? "none" : "flex" }}>
                    <div className="tasksModal">
                        <p className="tasksModalTitle">Task Details</p>

                        <div className="tasksModalForm">
                            <input
                                className="taskNameInput"
                                type="text"
                                name="taskName"
                                placeholder="Task Name"
                                value={this.state.taskName}
                                onChange={this.handleInputChange}
                                disabled
                            />
                            <textarea
                                className="taskDescriptionInput"
                                type="text"
                                name="taskDescription"
                                placeholder="Task Description"
                                value={this.state.taskDescription}
                                onChange={this.handleInputChange}
                                disabled
                            />
                            <div className="taskPriorityContainer">
                                <p className="taskPriorityLabel">Priority: </p>
                                {taskPriorityValueElement}
                            </div>
                        </div>

                        <div className="tasksModalControls">
                            <input className="modalButtons btn btn-primary" type="button" value="Close" onClick={() => this.displayModal(0)} />
                        </div>
                    </div>
                </div>

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
                                            <div className="taskButton" onClick={() => this.displayModal(2, task.id)}><img src={info} /></div>
                                            <div className="taskButton" onClick={() => this.toNextStage(task.id)}><img src={arrow} /></div>
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
                                            <div className="taskButton" onClick={() => this.toPreviousStage(task.id)}><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton" onClick={() => this.displayModal(2, task.id)}><img src={info} /></div>
                                            <div className="taskButton" onClick={() => this.toNextStage(task.id)}><img src={arrow} /></div>
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
                                            <div className="taskButton" onClick={() => this.toPreviousStage(task.id)}><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton" onClick={() => this.displayModal(2, task.id)}><img src={info} /></div>
                                            <div className="taskButton" onClick={() => this.toNextStage(task.id)}><img src={arrow} /></div>
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
                                            <div className="taskButton" onClick={() => this.toPreviousStage(task.id)}><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton" onClick={() => this.displayModal(2, task.id)}><img src={info} /></div>
                                            <div className="taskButton" onClick={() => this.toNextStage(task.id)}><img src={arrow} /></div>
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
                                            <div className="taskButton" onClick={() => this.toPreviousStage(task.id)}><img src={arrow} /></div>
                                            <div className="taskButton" onClick={() => this.deleteTask(task.id)}><img src={bin} /></div>
                                            <div className="taskButton" onClick={() => this.displayModal(2, task.id)}><img src={info} /></div>
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
