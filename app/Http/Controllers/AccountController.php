<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Account;

class AccountController extends Controller {
    public function signup(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:100|regex:/^[A-Za-z\s]{3,100}$/',
            'surname' => 'required|string|min:3|max:100|regex:/^[A-Za-z\s]{3,100}$/',
            'email' => 'required|email|min:5|max:255|regex:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$/|unique:accounts,email',
            'password' => 'required|min:8|max:32|confirmed',
        ], [
            'email.unique' => 'This email address is already registered.'
        ]);

        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $account = Account::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully', 'account' => $account], 201);
    }
}
