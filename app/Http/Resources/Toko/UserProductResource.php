<?php

namespace App\Http\Resources\Toko;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price' => $this->price,
            'slug' => $this->slug,
            'name' => $this->name,
            'url' => $this->url,
            'picture' => $this->picture ? Storage::url($this->picture) : 'https://fakeimg.pl/200x320/?text=Book&font=noto',
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ],
        ];
    }
}
