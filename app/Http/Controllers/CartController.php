<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;

class CartController extends Controller
{
    public function index()
    {
        return Inertia::render('Cart');
    }

    public function store(Request $request)
    {
        // $validate = $request->validate([
        //     'order_id'   => 'required|exists:orders,id',
        //     'product_id' => 'required|exists:products,id',
        //     'quantity'   => 'required|integer|min:1',
        // ]);

        // $orderItem = OrderItem::create($validate);

        return redirect()->route('home')->with('success', 'Data Added');
    }
}
