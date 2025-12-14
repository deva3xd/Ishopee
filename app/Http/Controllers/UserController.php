<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index()
    {
        $users = UserResource::collection(User::paginate(10));

        return Inertia::render('admin/user/Index', compact('users'));
    }

    public function create()
    {
        return Inertia::render('admin/user/Create');
    }

    public function store()
    {
        return;
    }

    public function edit()
    {
        return;
    }

    public function update()
    {
        return;
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();

        return redirect()->route('admin')->with('success', 'Delete Data');
    }
}
