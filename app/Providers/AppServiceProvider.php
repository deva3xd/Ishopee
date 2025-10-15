<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use App\Events\UserRegistered;
use App\Listeners\CreateOrder;
use App\Models\OrderItem;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user(),
                ];
            },
            'total' => function () {
                return [
                    'cart' => OrderItem::count(),
                ];
            },
        ]);
        Event::listen(
            UserRegistered::class,
            [CreateOrder::class, 'handle']
        );
    }
}
