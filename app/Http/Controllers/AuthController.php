<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Events\UserRegistered;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('auth/Login');
    }

    public function loginStore(LoginRequest $request)
    {
        $validated = $request->validated();

        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            $user = Auth::user();

            if (in_array($user->role, ['buyer', 'seller'])) {
                return redirect()->route('home');
            } else {
                return redirect()->route('admin.dashboard');
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

    public function registerStore(RegisterRequest $request)
    {
        $validated = $request->validated();
        $user  = User::create($validated);
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
