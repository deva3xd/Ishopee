<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $res = Http::get('https://fakestoreapi.com/products');
        $products = $res->json();
        $sellers = User::where('role', 'seller')->pluck('id')->toArray();

        foreach ($products as $product) {
            Product::create([
                'name' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'category' => $product['category'],
                'image' => $product['image'],
                'profile_id' => $sellers[array_rand($sellers)], 
            ]);
        }
    }
}
