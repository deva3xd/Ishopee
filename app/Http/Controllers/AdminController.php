<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $product = Product::count();
        $user = User::count();
        $products = Product::with(['profile', 'category'])->get();
        $users = User::all();
        return Inertia::render('admin/Index', compact('product', 'user', 'products', 'users'));
    }

    public function profile()
    {
        return Inertia::render('admin/Profile');
    }
}
