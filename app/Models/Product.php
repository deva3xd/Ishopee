<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'profile_id',
        'name',
        'description',
        'category',
        'price',
        'image',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id');
    }

    public function orderItem()
    {
        return $this->hasMany(OrderItem::class);
    }
}
