<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

//Test
class SubscriptionController extends Controller
{
    //
    //
    public function search(){
        // The user would have to be logged in furst
        $user = User::find(1);

        $user->newSubscription('main', 'premium')->create($token);

        $response = ['success' => true, 'data' => $user];
        return response()->json($response, 201);
    }
}
