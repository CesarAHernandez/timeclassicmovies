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
        factory(App\Movie::class, 300)->create();

        $genres = App\Genre::all();

        App\Movie::all()->each(function ($movie) use ($genres) {
            $movie->genres()->attach(
                $genres->random(rand(1,11))->pluck('id')->toArray()
            );
        });

    }
}
