<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AdminController;
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
  Route::get('/cart', [CartController::class, 'index'])->name('cart');
  Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
  Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
  
  Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('adminDashboard');
  Route::get('/admin/profile', [AdminController::class, 'profile'])->name('admin.profile');

  Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
});
