<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('auth/Login');
    }

    public function register()
    {
        return Inertia::render('auth/Register');
    }

    public function registerStore(Request $request)
    {
        $validate = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => 'required|min:8',
            'role' => 'required|in:buyer,seller,admin'
        ]);
        User::create($validate);

        return redirect()->route('login')->with('success', 'Data Added');
    }

    public function logout()
    {
        Auth::logout();
        session()->flush();

        return redirect(route('login'));
    }
}
