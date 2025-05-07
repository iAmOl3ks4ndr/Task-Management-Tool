<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\WorkspaceController;
use Illuminate\Support\Facades\Auth;

Route::post('/signup', [AccountController::class, 'signup']);
Route::post('/login', [AccountController::class, 'login'])->middleware('web');
Route::post('/logout', [AccountController::class, 'logout']);
Route::get('/short-user', [AccountController::class, 'getShortUser'])->middleware('web');
Route::get('/full-user', [AccountController::class, 'getFullUser'])->middleware('web');
Route::delete('/delete-account', [AccountController::class, 'deleteAccount'])->middleware('web');

Route::get('/get-workspaces', [WorkspaceController::class, 'getWorkspaces'])->middleware('web');
Route::post('/create-workspace', [WorkspaceController::class, 'createWorkspace'])->middleware('web');
