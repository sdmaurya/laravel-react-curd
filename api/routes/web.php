<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::view('/register','register');

Route::get('/ins', [\App\Http\Controllers\Employee::class,'index']);

// Route::get('/ajaxreq', [\App\Http\Controllers\Employees\EmployeeController::class,'verifyDoc']);

// Route::get('/countryid', [\App\Http\Controllers\Employees\EmployeeController::class,'stateFetch']);

Route::post('/form_submit', [\App\Http\Controllers\Employee::class,'uploaddoc']);