<?php

namespace App\Http\Controllers;

use App\Movie;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function list(Request $request){

        //getting all the movies from the database
        $movies = \App\Movie::all();

        $response = ['success' => true, 'data' => $movies];
        return response()->json($response, 201);
    }
    public function one(Request $request, $id){

        // only getting the movie from a specific id
         $movie = \App\Movie::where('id', $id)->get()->first();

         $response = ['success' => true, 'data' => $movie];
         return response()->json($response, 201);
    }

    public function search(Request $request){
      // get the query from the query and find a movie with that title
      // TODO: make it so that you can search for other criteria like year and genre
      // gets the movie from the database with the query

      $query = $request->input('query');
      $movie = \App\Movie::where('title', 'LIKE', "%$query%")->get();

      $response = ['success' => true, 'data' => $movie];
      return response()->json($response, 201);
    }
}
