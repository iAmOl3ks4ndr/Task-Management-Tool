import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Tasks extends Component {
    constructor() {
        super()

        this.state = {
            workspaceId: -1,
            workspaceName: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('workspaceId') && localStorage.getItem('workspaceName')) {
            this.setState({ workspaceId: localStorage.getItem('workspaceId'), workspaceName: localStorage.getItem('workspaceName') })
            localStorage.removeItem('workspaceId');
            localStorage.removeItem('workspaceName');
        }
        else window.location.href = '/workspaces'
    }

    render() {
        return (
            <p>{this.state.workspaceName}, {this.state.workspaceId}</p>
        )
    }
}

const rootElement = document.getElementById('tasksPage');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Tasks />);
}

export default Tasks;
