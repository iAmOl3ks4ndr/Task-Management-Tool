<?php

use App\Http\Controllers\AccountController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/signup', function () {
    if (Auth::check()) return redirect()->route('workspaces');
    return view('auth.signup');
})->name('signup');

Route::get('/login', function () {
    if (Auth::check()) return redirect()->route('workspaces');
    return view('auth.login');
})->name('login');

Route::get('/workspaces', function () {
    if (Auth::check()) return view('dashboard.workspaces');
    return redirect()->route('login');
})->name('workspaces');

Route::get('/account', function () {
    if (Auth::check()) return view('dashboard.account');
    return redirect()->route('login');
})->name('account');

Route::get('/tasks', function () {
    if (Auth::check()) return view('tasks');
    return redirect()->route('login');
})->name('tasks');

Route::fallback(function () {
    return redirect()->route('login');
});
