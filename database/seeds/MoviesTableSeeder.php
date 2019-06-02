<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $this->call([GenreSeeder::class]);
        factory(App\Movie::class, 1300)->create();
        factory(App\Director::class, 700)->create();
        factory(App\Star::class, 3000)->create();

        $genres = App\Genre::all();
        $stars = App\Star::all();
        $directors = App\Director::all();

        App\Movie::all()->each(function ($movie) use ($genres) {
            $movie->genre()->attach(
                $genres->random(rand(1,4))->pluck('id')->toArray()
            );
        });

        App\Movie::all()->each(function ($movie) use ($directors){
            Log::debug($directors->random(rand(1,2))->pluck('id')->toArray());
            $movie->director()->attach(
                $directors->random(rand(1,2))->pluck('id')->toArray()
            );
        });

        App\Movie::all()->each(function ($movie) use ($stars){
            $movie->star()->attach(
                $stars->random(rand(4,7))->pluck('id')->toArray()
            );
        });
    }
}
