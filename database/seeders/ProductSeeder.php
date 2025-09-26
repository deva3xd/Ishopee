<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str; 
use App\Models\User;
use App\Models\Product;
use App\Models\Category;

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
            $category = Category::firstOrCreate(
                ['slug' => Str::slug($product['category'])], 
                ['name' => $product['category']]
            );

            Product::create([
                'name' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'image' => $product['image'],
                'category_id' => $category->id,  
                'profile_id' => $sellers[array_rand($sellers)], 
            ]);
        }
    }
}
