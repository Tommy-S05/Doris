<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConnectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function() {
    return view('welcome');
});

Route::get('/login', [ConnectController::class, 'login'])->name('login');

Route::prefix('/api-js')->group(function() {
    //Connect Module
    Route::post('/connect/login', [\App\Http\Controllers\ApiJS\ConnectController::class, 'postLogin']);
});
