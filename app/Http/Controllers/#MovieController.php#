<?php

namespace App\Http\Controllers;

use App\Movie;
use App\Genre;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Barryvdh\Debugbar\ServiceProvider;
use Illuminate\Support\Collection;

use App\Http\Resources\Movie as MovieResource;

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
        $movie = \App\Movie::with(['genre','director','star'])->find($id);
        // $movie = \App\Movie::find($id);
        $response = ['success' => true, 'data' => $movie];
        return response()->json($response, 201);
    }

    public function filteredByGenre(Request $request){
        $movies = DB::table('genre_movie')
            ->select('movies.*')
            ->addSelect('genres.genre')
            ->join('movies','genre_movie.movie_id','=','movies.id')
            ->join('genres','genre_movie.genre_id','=','genres.id')
            ->get();
        // $movies = Movie::with('genre')->limit(100)->get();
        // Log::debug('End with db');
        $collection = collect($movies);
        $groupedMovies = $collection->mapToGroups(function($item, $key) {
            return [ $item->genre => $item];
        });
        $response = ['success' => true, 'data' => $groupedMovies];

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
    // TODO: find a more general way of doing this
    public function findByGenre(Request $request, $genre){
        $movies = \App\Movie::whereHas('genre', function($query) use ($genre){
            $query->where('genre', '=', $genre);
        })->get();
        $response = ['success' => true, 'data' => $movies ];
        return response()->json($response, 201);
    }
    public function findByStar(Request $request, $slug){
        $movies = \App\Movie::whereHas('star', function($query) use ($slug){
            $query->where('slug', '=', $slug);
        })->get();
        $response = ['success' => true, 'data' => $movies ];
        return response()->json($response, 201);
    }
    public function findByDirector(Request $request, $slug){
        $movies = \App\Movie::whereHas('director', function($query) use ($slug){
            $query->where('slug', '=', $slug);
        })->get();
        $response = ['success' => true, 'data' => $movies ];
        return response()->json($response, 201);
    }
}
