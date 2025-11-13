<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\Product;

class HomeController extends Controller
{
    public function __invoke()
    {
        $products = ProductResource::collection(Product::with(['profile', 'category'])->get());
        $categories = CategoryResource::collection(Category::all());
        $carts = OrderItem::with(['product'])->whereHas('order.user', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return Inertia::render('Home', compact('products', 'categories', 'carts'));
    }
}
