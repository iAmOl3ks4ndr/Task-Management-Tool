import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/auth.css',
                'resources/css/dashboard.css',
                'resources/css/tasks.css',
                'resources/js/app.js',
                'resources/js/auth/login.jsx',
                'resources/js/auth/signup.jsx',
                'resources/js/dashboard/account.jsx',
                'resources/js/dashboard/workspaces.jsx',
                'resources/js/tasks.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
