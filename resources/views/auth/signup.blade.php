<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Task Management Tool - Sign Up</title>

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <div class="signupForm" id="signupForm" data-login-url="{{ route('login') }}"></div>  
        @vite(['resources/js/auth/signup.jsx'])      
    </body>
</html>
