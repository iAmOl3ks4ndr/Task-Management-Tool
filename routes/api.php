<?php

use App\Http\Controllers\AccountController;

Route::post('/signup', [AccountController::class, 'signup']);
