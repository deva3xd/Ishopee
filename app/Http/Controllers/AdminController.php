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
        $products = Product::with(['profile', 'category'])->get();
        $users = User::all();
        return Inertia::render('admin/Index', compact('products', 'users'));
    }

    public function profile()
    {
        return Inertia::render('admin/Profile');
    }
}
