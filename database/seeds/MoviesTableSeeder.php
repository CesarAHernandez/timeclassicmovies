<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Movie;
class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/data/data.json');
        $data = json_decode($json);

        foreach($data as $obj){
            Movie::create(array(
                'title' => $obj->title,
                'synopsis' => $obj->synopsis,
                'poster_location' => $obj->poster_location,
                'imdb_url' => $obj->imdb_url,
                's3_location' => $obj->s3_location,
                'released_year' => $obj->released_year,
                'isRestricted' => $obj->isRestricted,
            ));

        }
    }
}
