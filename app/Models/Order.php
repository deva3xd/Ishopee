<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'payment_status',
        'total_price',
        'shipping_name',
        'shipping_address',
        'shipping_phone',
        'payment_method'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function orderItem()
    {
        return $this->hasOne(OrderItem::class);
    }
}
