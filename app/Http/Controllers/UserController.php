<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Log;
use JWTAuth;
use JWTAuthException;

class UserController extends Controller
{
    //
    private function getToken($email, $password){
       $token = null;
       try{
             if(!$token = JWTAuth::attempt(['email' => $email, 'password' => $password])) {
                return response()->json([
                    'response' => 'erorr',
                    'message' => 'Password or email is invalid',
                     'token' => $token
                ]);
            }
        } catch(JWTAuthException $e){
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }

    public function login(Request $request){
        $user = \App\User::where('email', $request->email)->get()->first();
        if($user && \Hash::check($request->password, $user->password)){
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = [
                'success' => true,
                'data' => [
                    'id' => $user->id,
                    'auth_token' => $user->auth_token,
                    'name'=>$user->name,
                    'email'=>$user->email
                ]
            ];
        } else
            $response = ['success' => false, 'data' => 'Record does not exists'];
       return response()->json($response, 201);
    }
    public function register(Request $request){
        $user = new \App\User();
        $user->password = \Hash::make($request->password);
        $user->email = $request->email;
        $user->name = $request->name;
        $user->auth_token = '';

        // Checks if the user can be saved success fully
        if($user->save()){
            // Signs the email and password to the token and assigns it to token
            $token = self::getToken($request->email, $request->password);

            if(!is_string($token)){
                return response()->json([
                    'success' => false,
                    'data' => 'Token Generated Failed'
                ], 201);
            }
            // Gets the user from the database from the email
            $user = \App\User::where('email', $request->email)->get()->first();

            // We are using the updated user token
            $user->auth_token = $token;

            // I don't know why i do this one again
            $user->save();

            $response = [
                'success' => true,
                'data'=>[
                    'name'=>$user->name,
                    'id' => $user->id,
                    'email' => $request->email,
                    'auth_token' => $token
                ]
            ];
        } else {
            $response = ['success' => false, 'data' => 'Could not register user'];
        }
        return response()->json($response, 201);
    }
    public function list(Request $request){
        $users = \App\User::all();

        $response = ['success' => true, 'data' => $users];
        return response()->json($response, 201);
    }

}
