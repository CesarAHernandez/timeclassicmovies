<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use Faker\Generator as Faker;
use Faker\Provider\Base;
use Faker\Provider\Image;

$factory->define(App\Movie::class, function (Faker $faker) {
    $faker->addProvider(new Image($faker));
    $faker->addProvider(new Base($faker));
    return [
        //
        'title' => $faker->name,
        'synopsis' => $faker->paragraph,
        'poster_location' => $faker->imageUrl($width=680, $height=680),
        'imdb_url' => 'https://www.imdb.com/title/tt5884052/',
        's3_location' => 'https://s3.amazonaws.com/tcm-stream-out/Afgrunden_1910.mp4',
        'released_year' => $faker->numberBetween($min=1900, $max=1960),
        'isRestricted' => $faker->numberBetween($min=0, $max=1)
    ];
});
