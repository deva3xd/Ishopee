<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\OrderItem;
use App\Models\Order;

class CartController extends Controller
{
    public function index()
    {
        $items = OrderItem::with(['product'])->get();
        return Inertia::render('Cart', ['items' => $items]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'product_id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
        ]);
        $user = Auth::user();
        $order = Order::firstOrCreate(
            ['user_id' => $user->id, 'status' => 'cart'],
            ['total_price' => 0]
        );
        $item = OrderItem::where('order_id', $order->id)
            ->where('product_id', $validate['product_id'])
            ->first();

        if ($item) {
            $item->increment('quantity', $validate['quantity']);
        } else {
            OrderItem::create([
                'order_id'   => $order->id,
                'product_id' => $validate['product_id'],
                'quantity'   => $validate['quantity'],
            ]);
        }

        return redirect()->route('home')->with('success', 'Data Added');
    }
}
