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
            taskPriority: 0,
            taskPriorityInputValue: 0
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
        if (which === 0) this.setState({ taskName: "", taskDescription: "", taskPriority: 0, taskPriorityInputValue: 0 })
        else if (which === 1) this.setState({ taskPriorityInputValue: 1 })
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

    createTask = async () => {
        const response = await fetch('/api/create-task', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            },
            credentials: 'include',
            body: JSON.stringify({
                name: (this.state.taskName.length === 0) ? "Unnamed Task" : this.state.taskName,
                description: this.state.taskDescription,
                priorityLevel: this.state.taskPriorityInputValue,
                stage: 1,
                workspaceId: this.state.workspaceId
            })
        })

        const data = await response.json()

        if (response.status === 201) window.location.reload(true)
        else console.log(data.message)
    }

    render() {
        let taskPriorityValueElement = null;

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
                        <p className="tasksModalTitle">{(this.state.whichModal === 1) ? "Create New Task" : "Task Details"}</p>

                        <div className="tasksModalForm">
                            <input
                                className="taskNameInput"
                                type="text"
                                name="taskName"
                                placeholder="Task Name"
                                maxLength={50}
                                value={this.state.taskName}
                                onChange={this.handleInputChange}
                                disabled={this.state.whichModal === 2}
                            />
                            <textarea
                                className="taskDescriptionInput"
                                type="text"
                                name="taskDescription"
                                placeholder="Task Description"
                                maxLength={255}
                                value={(this.state.taskDescription === null) ? "No description" : this.state.taskDescription}
                                onChange={this.handleInputChange}
                                disabled={this.state.whichModal === 2}
                            />
                            <div className="taskPriorityContainer">
                                <p className="taskPriorityLabel">Priority: </p>
                                {(taskPriorityValueElement !== null) ? taskPriorityValueElement :
                                    <select className="taskPriorityInput" name="taskPriorityInputValue" value={this.state.taskPriorityInputValue} onChange={this.handleInputChange}>
                                        <option value="1">Low</option>
                                        <option value="2">Medium</option>
                                        <option value="3">High</option>
                                    </select>
                                }
                            </div>
                        </div>

                        <div className="tasksModalControls">
                            <input className="modalButtons btn btn-primary" type="button" value="Close" onClick={() => this.displayModal(0)} />
                            {(this.state.whichModal !== 1) ? "" : <input className="modalButtons createTaskButton btn btn-primary" type="button" value="Create Task" onClick={this.createTask} />}
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

                        <div className="addTaskButton" onClick={() => this.displayModal(1)}><img src={add} /></div>
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
