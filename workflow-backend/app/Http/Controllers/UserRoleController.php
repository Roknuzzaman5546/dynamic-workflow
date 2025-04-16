<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    public function index()
    {
        $userRole = User::join('role', 'users.roleid', '=', 'role.id')->select('users.*', 'role.role')->get();
        return response()->json([
            'message' => 'your message',
            'data' => $userRole
        ]); 
    }
}
