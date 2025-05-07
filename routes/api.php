<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\WorkspaceController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Auth;

Route::post('/signup', [AccountController::class, 'signup']);
Route::post('/login', [AccountController::class, 'login'])->middleware('web');
Route::post('/logout', [AccountController::class, 'logout'])->middleware('web');
Route::get('/short-user', [AccountController::class, 'getShortUser'])->middleware('web');
Route::get('/full-user', [AccountController::class, 'getFullUser'])->middleware('web');
Route::delete('/delete-account', [AccountController::class, 'deleteAccount'])->middleware('web');

Route::get('/get-workspaces', [WorkspaceController::class, 'getWorkspaces'])->middleware('web');
Route::post('/create-workspace', [WorkspaceController::class, 'createWorkspace'])->middleware('web');
Route::put('/modify-workspace/{workspaceId}', [WorkspaceController::class, 'modifyWorkspace'])->middleware('web');
Route::delete('/delete-workspace/{workspaceId}', [WorkspaceController::class, 'deleteWorkspace'])->middleware('web');

Route::get('/get-tasks/{workspaceId}', [TaskController::class, 'getTasks'])->middleware('web');
Route::delete('/delete-task/{taskId}', [TaskController::class, 'deleteTask'])->middleware('web');
Route::put('/task-to-next-stage/{taskId}', [TaskController::class, 'taskToNextStage'])->middleware('web');
Route::put('/task-to-previous-stage/{taskId}', [TaskController::class, 'taskToPreviousStage'])->middleware('web');
Route::post('/create-task', [TaskController::class, 'createTask'])->middleware('web');
