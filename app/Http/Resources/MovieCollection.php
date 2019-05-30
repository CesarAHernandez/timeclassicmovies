<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Barryvdh\Debugbar\ServiceProvider;
use Illuminate\Support\Facades\Log;

class MovieCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title
        ];
        // return [
        //     'title' => $this->title,
        //     'synopsis' => $this->synopsis,
        //     'released_year' => $this->released_year,
        //     'genre' => $this->genre,
        //     'isRestricted' => $this->isRestricted,
        //     'poster_location' => $this->poster_location,
        //     'created_at' => $this->created_at,
        //     'updated_at' => $this->updated_at,
        // ];
    }
}
