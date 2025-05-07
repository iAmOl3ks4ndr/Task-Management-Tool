<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Project Management Tool - Tasks</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/css/tasks.css', 'resources/js/app.js'])
    </head>
    <body>
        <div id="tasksPage"></div>
        @vite(['resources/js/tasks.jsx'])
    </body>
</html>
