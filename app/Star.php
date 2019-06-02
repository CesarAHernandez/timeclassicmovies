<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    //

    protected $fillable = [
        'name'
    ];
    protected $guarded = array();
    public function movie(){
        return $this->belongsToMany('App\Movie');
    }
}
