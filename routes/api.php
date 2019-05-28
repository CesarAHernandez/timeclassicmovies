<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth', 'api-header']], function(){
    Route::get('users/list', 'UserController@list');
});

Route::group(['middleware' => 'api-header'], function(){
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');

    Route::get('movies/list','MovieController@list');
    Route::get('movie/{id}','MovieController@one');
    Route::get('movie/genre/{genre}', 'MovieController@findByGenre');
    Route::post('movie/search', 'MovieController@search');
    Route::get('movies/sortedByGenre', 'MovieController@sortedByGenre');
});
