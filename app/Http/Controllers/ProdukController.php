<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\Product;

class ProdukController extends Controller
{
    public function index(Request $request)
    {
        $queryCategory = $request->input('category');
        $querySearch = $request->input('search');

        $product = Product::with(['category']);

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

        $results = ProductResource::collection($product->paginate(18));
        $categories = CategoryResource::collection(Category::all());
        $carts = OrderItem::with(['product'])->whereHas('order.user', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return Inertia::render('Home', compact('results', 'categories', 'carts'));
    }

    public function show($id)
    {
        $product = Product::with(['profile', 'category'])->findOrFail($id);
        $relatedProducts = Product::where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->with(['profile', 'category'])
            ->limit(6)
            ->get();

        return Inertia::render('Detail', compact('product', 'relatedProducts'));
    }

    public function a()
    {
        $products = ProductResource::collection(Product::with(['profile', 'category'])->paginate(10));

        return Inertia::render('admin/Product', compact('products'));
    }
}
