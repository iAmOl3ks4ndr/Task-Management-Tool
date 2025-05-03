<?php

use App\Http\Controllers\AccountController;
use Illuminate\Support\Facades\Auth;

Route::post('/signup', [AccountController::class, 'signup']);
Route::post('/login', [AccountController::class, 'login'])->middleware('web');
Route::post('/logout', [AccountController::class, 'logout']);
Route::get('/check-login', [AccountController::class, 'checkLogin']);

Route::middleware('web')->get('/shortUser', function () {
    $user = Auth::user();

    return response()->json([
        'name' => $user->name,
        'surname' => $user->surname,
    ]);
});

Route::middleware('web')->get('/fullUser', function () {
    return Auth::user();
});
