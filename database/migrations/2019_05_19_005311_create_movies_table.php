<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('title', 100);
            $table->text('synopsis');
            $table->integer('released_year');
            $table->string('imdb_url', 100);
            $table->mediumText('s3_location', 100);
            $table->mediumText('poster_location', 100);
            $table->boolean('isRestricted');
            $table->timestamps();

            $table->index(['id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
