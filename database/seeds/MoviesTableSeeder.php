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
        for($i=0; $i < 100; $i++){
            DB::table('movies')->insert([
                'title' => Str::random(10),
                'synopsis' => Str::random(80),
                'released_year' => random_int(1900, 1960),
                'imdb_url' => Str::random(10),
                's3_location' => Str::random(10),
                'poster_location' => 'http://emblemsbattlefield.com/uploads/posts/2014/10/facebook-default-photo-male_1.jpg',
                'isRestricted' => 0,
            ]);
        }
    }
}
