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
        for($i=0; $i < 100; $i++){
            try{
                DB::table('genre')->insert([
                    'movieId' => random_int(1, 99),
                    'genre' => $genres[mt_rand(0,10)]
                ]);
            }catch(Exception $e){

            }
        }
    }
}
