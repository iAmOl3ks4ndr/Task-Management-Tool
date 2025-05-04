<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Task Management Tool - My Workspaces</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/css/dashboard.css', 'resources/js/app.js'])
    </head>
    <body>
        <div id="workspacesPage"></div>
        @vite(['resources/js/dashboard/workspaces.jsx'])
    </body>
</html>
