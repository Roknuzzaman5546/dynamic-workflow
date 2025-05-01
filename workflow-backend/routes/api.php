<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Roles api here
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::put('/roles/update/{id}', [RoleController::class, 'update']);
Route::delete('/roles/delete/{id}', [RoleController::class, 'delete']);

// user role api here and added here also i need someone who get it better then me for coding life
Route::get('/userRole', [UserRoleController::class, 'index']);
Route::middleware('auth:sanctum')->get('/userData', [UserRoleController::class, 'userIndex']);
