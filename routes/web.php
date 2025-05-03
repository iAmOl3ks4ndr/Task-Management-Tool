<?php

use App\Http\Controllers\AccountController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/signup', function () {
    if (Auth::check()) {
        return redirect()->route('workspaces');
    }

    return view('auth.signup');
})->name('signup');

Route::get('/login', function () {
    if (Auth::check()) {
        return redirect()->route('workspaces');
    }

    return view('auth.login');
})->name('login');

Route::get('/workspaces', function () {
    if (Auth::check()) {
        return view('dashboard.workspaces');
    }

    return redirect()->route('login');
})->name('workspaces');

Route::fallback(function () {
    return redirect('/');
});

Route::post('/login', [AccountController::class, 'login']);
Route::post('/logout', [AccountController::class, 'logout']);
Route::get('/check-login', [AccountController::class, 'checkLogin']);
