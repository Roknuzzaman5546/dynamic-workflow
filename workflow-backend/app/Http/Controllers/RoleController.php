<?php

namespace App\Http\Controllers;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        $role = Role::get();
        return response()->json([
            'message' => 'your role is getting',
            'data' => $role
        ]);
    }

    public function store(Request $request)
    {
        $name = $request->input('name');
        $request->validate([
            'name' => 'required',
        ]);
        $role = new Role();
        $role->role = $name;
        $role->save();
        if ($role->save()) {
            return response()->json([
                'message' => 'Your Role is Created',
            ], 201);
        }
    }

    public function update(Request $request, $id)
    {
        $updateRole = Role::where('id', $id)->first();
        $updateRole->update([
            'role' => $request->name
        ]);
        return response()->json([
            'message' => 'Your role is updated',
            'data' => $updateRole,
        ]);
    }

    public function delete(Request $request, $id)
    {
        $deleteRole = Role::where('id', $id)->first();
        $deleteRole->delete();
        return response()->json([
            'message' => "Role deleted successfully",
            'data' => $deleteRole->name
        ]);
    }
}
