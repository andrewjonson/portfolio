<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Notifications\EmailVerification;

class RegisterController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $user->notify(new EmailVerification());

        $appToken = $user->createToken('appToken')->plainTextToken;

        return response([
            'message' => 'An email verification link has been sent to your email',
            'appToken' => $appToken
        ]);
    }
}
