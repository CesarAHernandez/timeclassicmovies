<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\Genre as GenreResource;

class Movie extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'synopsis' => $this->synopsis,
            'released_year' => $this->released_year,
            'genres' => GenreResource::collection($this->genre),
            'isRestricted' => $this->isRestricted,
            'poster_location' => $this->poster_location,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
