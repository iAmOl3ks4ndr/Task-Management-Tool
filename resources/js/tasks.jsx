import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Tasks extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <p>This is the page of tasks</p>
        )
    }
}

const rootElement = document.getElementById('tasksPage');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Tasks />);
}

export default Tasks;
