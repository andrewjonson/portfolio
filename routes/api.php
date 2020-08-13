<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::post('/email/resend', 'Api\Auth\VerificationController@resend');
    Route::get('/user/currentUser', 'Api\UserController@currentUser');
    Route::put('/user/update/{id}', 'Api\UserController@update');
    Route::post('/user/upload', 'Api\UserController@upload_image');
    Route::post('/user/change_password', 'Api\UserController@change_password');
    Route::get('/posts', 'Api\PostController@posts');
    Route::post('/posts/create', 'Api\PostController@create');
    Route::put('/posts/update/{id}', 'Api\PostController@update');
    Route::delete('/posts/delete/{id}', 'Api\PostController@delete');
});

//Auth
Route::post('/login', 'Api\Auth\LoginController@login');
Route::post('/register', 'Api\Auth\RegisterController@register');
Route::get('/email/verify/{id}/{hash}', 'Api\Auth\VerificationController@verify')->name('email.verify');
Route::post('/password/email', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Api\Auth\ResetPasswordController@reset');
Route::get('/reset_password/{token}', 'Api\Auth\ResetPasswordController@showResetForm')->name('password.reset');