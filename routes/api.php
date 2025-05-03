<?php

use App\Http\Controllers\AccountController;

Route::post('/signup', [AccountController::class, 'signup']);
Route::post('/login', [AccountController::class, 'login'])->middleware('web');
Route::post('/logout', [AccountController::class, 'logout']);
Route::get('/check-login', [AccountController::class, 'checkLogin']);
