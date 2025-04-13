<?php

namespace App\Http\Controllers;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function store(Request $request)
    {
        $name = $request->input('name');
        $request->validate([
            'name' => 'required',   
        ]);
        $role = new Role();
        $role->name = $name;
        $role->save();
        if ($role->save()) {
            return response()->json([
                'message' => 'Your Role is Created',
            ], 201);
        }
    }
}
