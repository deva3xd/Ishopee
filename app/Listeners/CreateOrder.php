<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateOrder
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistered $event): void
    {
        $user = $event->user;

        $user->order()->firstOrCreate(
            ['status' => 'cart'],
            ['total_price' => 0]
        );
    }
}
