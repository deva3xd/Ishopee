<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;

Route::middleware('guest')->group(function () {
  Route::get('/login', [AuthController::class, 'login'])->name('login');
  Route::post('/login', [AuthController::class, 'loginStore'])->name('login.store');
  Route::get('/register', [AuthController::class, 'register'])->name('register');
  Route::post('/register', [AuthController::class, 'registerStore'])->name('register.store');
});

Route::middleware('auth')->group(function () {
  Route::redirect('/', '/home');
  Route::get('/home', [HomeController::class, 'index'])->name('home');
  Route::post('/{product}', [CartController::class, 'store'])->name('cart.store');
});

Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');