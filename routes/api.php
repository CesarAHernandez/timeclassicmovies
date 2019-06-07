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
// Protected routes go in here 
Route::group(['middleware' => ['auth:api']], function(){
    Route::get('/user',function (Request $request) {
        return $request->user();
    });
});

Route::group(['middleware' => ['api-header']], function(){
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');

    Route::post('/register', 'Api\AuthController@register');
    Route::post('/login', 'Api\AuthController@login');


    Route::get('login/google', 'Api\SocialAuthController@redirectToProvider');
    Route::get('login/google/callback', 'Api\SocialAuthController@handleProviderCallback');

    Route::get('movies/filteredByGenre', 'MovieController@filteredByGenre');
    Route::get('movies/list','MovieController@list');
    Route::get('movie/{id}','MovieController@one');
    Route::get('movie/genre/{genre}', 'MovieController@findByGenre');
    Route::get('movie/star/{slug}', 'MovieController@findByStar');
    Route::get('movie/director/{slug}', 'MovieController@findByDirector');
    Route::post('movie/search', 'MovieController@search');
});
