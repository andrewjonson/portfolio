<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Notifications\EmailVerification;
use App\User; 

class VerificationController extends Controller
{
    public function verify(Request $request)
    {
        auth()->loginUsingId($request->route('id'));

        if (! hash_equals((string) $request->route('id'), (string) $request->user()->getKey())) {
            throw new AuthorizationException;
        }

        if (! hash_equals((string) $request->route('hash'), sha1($request->user()->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if ($request->user()->hasVerifiedEmail()) {
            return redirect('/login');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }
        
        return redirect('/login');
    }
}
