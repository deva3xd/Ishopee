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
        $items = OrderItem::with(['product'])->whereHas('order.user', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();
        return Inertia::render('Cart', compact('items'));
    }
// $cartCount = Cart::where('user_id', Auth::id())->count();
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

    public function destroy($id)
    {
        OrderItem::where('product_id', $id)->delete();
        
        return redirect()->route('cart')->with('success', 'Delete Data');
    }
}
