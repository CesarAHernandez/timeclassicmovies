<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(App\Star::class, function (Faker $faker) {
    $name = $faker->name;
    return [
        //
        'name' => $name,
        'slug' => Str::slug($name, '-')
    ];
});
