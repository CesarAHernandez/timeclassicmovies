<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

//Test
class SubscriptionController extends Controller
{
    //
    //
    public function pay(Request $request){
        // The user would have to be logged in furst
        $user = User::find(1);

        \Debugbar::info($user);
        $token = $request->token;
        $user->newSubscription('main', 'Monthly-1mf')->create($token, []);

        $response = ['success' => true, 'data' => $user];
        return response()->json($response, 201);
    }
}
