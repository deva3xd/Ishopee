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

Route::redirect('/', '/home');
Route::get('/home', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
  Route::post('/cart/{product}', [CartController::class, 'store'])->name('cart.store');
  Route::get('/cart', [CartController::class, 'index'])->name('cart');
  
  Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
});
