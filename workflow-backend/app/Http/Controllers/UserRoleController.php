<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    public function index()
    {
        $userRole = User::join('roles', 'users.role_id', '=', 'roles.id')->select('users.*', 'roles.role')->get();
        return response()->json([
            'message' => 'your message',
            'data' => $userRole
        ]);
    }

    public function userIndex()
    {
        $user = Auth::user();
        $role = Role::where('id', $user->role_id)->first(); 
        $user->role_name = $role->role ?? null;
        return response()->json([
            'user' => $user,
        ]);

    }
}
