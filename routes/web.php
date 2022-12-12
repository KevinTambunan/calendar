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

Route::get('/calendar', [EventController::class, 'index']);
Route::get('/addNew', [EventController::class, 'create']);
Route::post('/addNew', [EventController::class, 'store']);
Route::get('/edit/{id}', [EventController::class, 'show']);
Route::post('/edit/{id}', [EventController::class, 'edit']);
Route::get('/detail/{id}', [EventController::class, 'detail']);


// events
Route::get('/events', [EventController::class, 'index']);
