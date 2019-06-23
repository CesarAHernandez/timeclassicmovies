<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\User;

use Socialite;


class SocialAuthController extends Controller
{
    //
    public function redirectToProvider($provider){
        return[
            'redirect' => Socialite::driver($provider)->stateless()->redirect()->getTargetUrl()
        ];
    }

    public function handleProviderCallback($provider){
        try {
            $user = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }

        // check if they're an existing user
        $existingUser = User::where('email', $user->email)->first();
        if($existingUser){
            // log them in
            auth()->login($existingUser, true);
        } else {
            // create a new user
            $newUser                  = new User;
            $newUser->name            = $user->name;
            $newUser->email           = $user->email;
            $newUser->google_id       = $user->id;
            // $newUser->avatar          = $user->avatar;
            // $newUser->avatar_original = $user->avatar_original;
            $newUser->save();
            auth()->login($newUser, true);
        }
        //creates the token and gives it to the front end
        $token = auth()->user()->createToken('authToken')->accessToken;
        return view('callback', [
            'type' => 'bearer',
            'token' => $token
        ]);
    }
}
