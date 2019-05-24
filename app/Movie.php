<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    //
    protected $fillable = [
        'title', 'synopsis', 'release_year', 'imdb_url', 's3_location', 'isRestricted'
    ];
    protected $guarded = array();

    public function genres(){
        return $this->belongsToMany('App\Genre');
    }
}
