<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\Product;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $category = $request->input('category');
        $query = Product::with(['profile', 'category']);

        // filtered products
        if ($category && $category !== 'all') {
            $query->whereHas('category', function ($q) use ($category) {
                $q->where('slug', $category);
            });
        }

        $products = ProductResource::collection($query->paginate(15));
        $categories = CategoryResource::collection(Category::all());
        $carts = OrderItem::with(['product'])->whereHas('order.user', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return Inertia::render('Home', compact('products', 'categories', 'carts'));
    }
}
