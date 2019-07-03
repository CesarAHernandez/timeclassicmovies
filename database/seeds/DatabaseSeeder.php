<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        // $this->call(MoviesTableSeeder::class);
        $this->call([
            GenreSeeder::class,
            MoviesTableSeeder::class
            ]);
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
