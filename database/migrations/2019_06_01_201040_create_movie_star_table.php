<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMovieStarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_star', function (Blueprint $table) {
            $table->bigInteger('star_id')->unsigned();
            $table->foreign('star_id')->references('id')->on('stars');

            $table->bigInteger('movie_id')->unsigned();
            $table->foreign('movie_id')->references('id')->on('movies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_star');
    }
}
