<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LoginAttempt;
use App\User;
use Carbon\Carbon;
use jeremykenedy\laravel2step\App\Traits\Laravel2StepTrait;

class LoginController extends Controller
{
    public function login(Request $request) {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user_logging_in = User::where('email', $request->email)->first();
        $login_attempts = LoginAttempt::where('email', $request->email);

        if (!auth()->attempt($validate)) {
            if ($user_logging_in) {
                if ($user_logging_in->email_verified_at !== NULL) {
                    if (count($login_attempts->get()) < config('login_attempts.max_failed_login_attempts')) {
                        LoginAttempt::create([
                            'email' => $request->email,
                            'ip_address' => $request->ip()
                        ]);
                    } else {
                        $blocked_user = User::where('email', $request->email);

                        if ($blocked_user->first()->blocked_at === NULL) {
                            $blocked_user->update(['blocked_at' => Carbon::now()]);
                        } 

                        $add_time = Carbon::parse($user_logging_in->blocked_at)->addMinute(config('login_attempts.user_blocked_duration'));

                        $current_date = Carbon::now();
                        $time_limit = $current_date->diffInSeconds($add_time);

                        if ($current_date >= $add_time) {
                            $blocked_user->update([
                                'blocked_at' => NULL
                            ]);
                            
                            //$login_attempts->delete();
                        } else {
                            return response(['message' => 'Your account has been blocked for '.$time_limit.' seconds']);
                        }
                    }
                }
            }           

            return response(['message' => 'Invalid Credentials']);
        } 

        $user = auth()->user();

        if ($user->blocked_at !== NULL) {

            $add_time = Carbon::parse($user->blocked_at)->addMinute(config('login_attempts.user_blocked_duration'));
            $current_date = Carbon::now();
            $time_limit = $current_date->diffInSeconds($add_time);

            if ($current_date >= $add_time) {
                $user->update([
                    'blocked_at' => NULL
                ]);
                
            }

            return response(['message' => 'Your account has been blocked for '.$time_limit.' seconds']);
        }

        if (!$user->email_verified_at) {
            return response(['message' => 'Email not yet verified']);
        }

        $login_attempts->delete();
        $appToken = $user->createToken('appToken')->plainTextToken;
        return response(['user' => auth()->user(), 'appToken' => $appToken]);
    }
}
