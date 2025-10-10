<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\Product;

class HomeController extends Controller
{
    public function __invoke()
    {
        $products = Product::with(['profile', 'category'])->get();
        $categories = Category::all();
        $carts = OrderItem::all();
        
        return Inertia::render('Home', ['products' => $products, 'categories' => $categories, 'carts' => $carts]);
    }
}
