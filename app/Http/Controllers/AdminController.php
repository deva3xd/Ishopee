<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $products = ProductResource::collection(Product::with(['profile', 'category'])->paginate(10));
        $users = UserResource::collection(User::paginate(10));
        
        return Inertia::render('admin/Index', compact('products', 'users'));
    }

    public function profile()
    {
        return Inertia::render('admin/Profile');
    }
}
