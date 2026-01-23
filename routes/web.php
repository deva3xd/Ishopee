<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProdukController;

Route::redirect('/', '/products');
Route::get('/products', [ProdukController::class, 'index'])->name('product');

Route::middleware('guest')->group(function () {
  Route::get('/login', [AuthController::class, 'login'])->name('login');
  Route::post('/login', [AuthController::class, 'loginStore'])->name('login.store');
  Route::get('/register', [AuthController::class, 'register'])->name('register');
  Route::post('/register', [AuthController::class, 'registerStore'])->name('register.store');
});

Route::middleware(['auth', 'role:buyer,seller'])->group(function () {
  Route::get('/products/{id}', [ProdukController::class, 'show'])->name('detail');
});

Route::prefix('cart')->group(function() {
  Route::middleware(['auth', 'role:buyer,seller'])->group(function () {
    Route::get('/', [CartController::class, 'index'])->name('cart');
    Route::post('/', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
  });
});

Route::prefix('admin')->group(function() {
  Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/', AdminController::class)->name('admin');
    Route::get('/users', [UserController::class, 'index'])->name('admin.user');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.user.create');
    Route::post('/users/create', [UserController::class, 'store'])->name('admin.user.store');
    Route::patch('/users', [UserController::class, 'update'])->name('admin.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.user.destroy');
    Route::get('/products', [ProdukController::class, 'index'])->name('admin.product');
  });
});

Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
