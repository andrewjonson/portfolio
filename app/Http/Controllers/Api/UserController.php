<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function currentUser() {
        return auth()->user();
    }

    public function update(Request $request, $id) { 
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
        ]);

        $user = User::find($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return response(['message' => 'User Updated Successfully']);
    }

    public function upload_image(Request $request) {
        $request->validate([
            'image' => 'image|mimes:jpeg,png'
        ]);

        $image = time().'.'.request()->image->getClientOriginalExtension();

        $user = auth()->user();

        if ($user->image)
        {
            if (file_exists(public_path('user_images/'.$user->image)))
            {
                unlink(public_path('user_images/'.$user->image));
            }
        }

        $user->update(['image' => $image]);
        $request->image->move(public_path('user_images'), $image);

        return response(['message' => 'Image Uploaded Successfully']);
    }

    public function change_password(Request $request) {
        $request->validate([
            'old' => 'required',
            'password' => 'required|confirmed',
        ]);

        $user = auth()->user();

        if (Hash::check($request->old, $user->password)) {
            $user->update([
                'password' => Hash::make($request->password)
            ]);
        } else {
            throw ValidationException::withMessages([
                'old' => 'Incorrect Old Password',
            ]);
        }
    }
}
