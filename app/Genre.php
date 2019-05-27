<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    //
    protected $fillable = [
        'genre', 'description'
    ];

    protected $guarded = array();

    public function movie(){
        return $this->belongsToMany('App\Movie');
    }
}
