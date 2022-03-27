<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ins', [\App\Http\Controllers\Employee::class,'index']);
Route::post('/insert', [\App\Http\Controllers\Employee::class,'store']);
Route::put('/update/{id}', [\App\Http\Controllers\Employee::class,'update']);
Route::get('/edit/{id}', [\App\Http\Controllers\Employee::class,'edit']);

Route::delete('/delete/{id}', [\App\Http\Controllers\Employee::class,'destroy']);

Route::post('/login', [\App\Http\Controllers\Employee::class,'login']);