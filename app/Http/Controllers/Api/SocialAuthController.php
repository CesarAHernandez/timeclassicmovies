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
    public function redirectToProvider(){
        return[
            'redirect' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl()
        ];
    }

    public function handleProviderCallback(){
        try {
            $user = Socialite::driver('google')->stateless()->user();
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
        $token = auth()->user()->createToken('authToken')->accessToken;
        return view('callback', [
            'type' => 'bearer',
            'token' => $token
        ]);
    }
}
