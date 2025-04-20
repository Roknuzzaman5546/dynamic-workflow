<?php

namespace App\Http\Controllers;

use App\Models\User;
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
}
