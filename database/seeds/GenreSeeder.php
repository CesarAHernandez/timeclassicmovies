<?php

use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $genres = ['action', 'adventure', 'comedy', 'crime','drama','fantasy','historical','horror','romance','science fiction','thriller'];
        $seeds = [];
        foreach($genres as $genre){
            array_push($seeds,[
                'genre' => $genre,
                'description' => Str::random(150)
            ]);

        }
        DB::table('genres')->insert($seeds);

    }
}
