<?php

use App\Http\Controllers\EventController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::get('/calendar', [EventController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('/addNew', [EventController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/addNew', [EventController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/edit/{id}', [EventController::class, 'show'])->middleware(['auth', 'verified']);
Route::post('/edit/{id}', [EventController::class, 'edit'])->middleware(['auth', 'verified']);
Route::get('/detail/{id}', [EventController::class, 'detail'])->middleware(['auth', 'verified']);


// events
Route::get('/events', [EventController::class, 'events'])->middleware(['auth', 'verified']);
