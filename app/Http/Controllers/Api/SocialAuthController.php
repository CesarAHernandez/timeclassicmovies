<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Socialite;


class SocialAuthController extends Controller
{
    //
    public function redirectToProvider(){
        return Socialite::driver('github')->redirect();
    }

    public function handleProviderCallback(){
        $user = Socialite::driver('driver')->user();
    } 
}
