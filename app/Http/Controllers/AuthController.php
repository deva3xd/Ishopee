<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Events\UserRegistered;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('auth/Login');
    }

    public function loginStore(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|string|lowercase|email|max:255',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($validate)) {
            $request->session()->regenerate();
            $user = Auth::user();

            if ($user->role === 'buyer') {
                return redirect()->route('home');
            } else {
                return redirect()->route('cart');
            }
        }

        return back()->withErrors([
            'email' => 'Incorrect email or password.',
        ])->onlyInput('email');
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
        ]);
        $user  = User::create($validate);
        event(new UserRegistered($user));

        return redirect()->route('login')->with('success', 'Data Added');
    }

    public function destroy()
    {
        Auth::logout();
        session()->flush();

        return redirect(route('login'));
    }
}
