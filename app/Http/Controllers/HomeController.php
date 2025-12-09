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
        $queryCategory = $request->input('category');
        $querySearch = $request->input('search');

        $product = Product::with(['profile', 'category']);

        // filter by category
        if ($queryCategory && $queryCategory !== 'all') {
            $product->whereHas('category', function ($q) use ($queryCategory) {
                $q->where('slug', $queryCategory);
            });
        }

        // filter by search
        if ($querySearch) {
            $product->where(function ($q) use ($querySearch) {
                $q->where('name', 'like', '%' . $querySearch . '%');
            });
        }

        $results = ProductResource::collection($product->paginate(15));
        $categories = CategoryResource::collection(Category::all());
        $carts = OrderItem::with(['product'])->whereHas('order.user', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return Inertia::render('Home', compact('results', 'categories', 'carts'));
    }
}
