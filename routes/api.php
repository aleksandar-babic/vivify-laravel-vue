<?php

use Illuminate\Http\Request;

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

/**
 * Route group for routes related to Authentications
 */
Route::group([

    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'ApiAuthController@login');
    Route::post('logout', 'ApiAuthController@logout');
    Route::get('refresh', 'ApiAuthController@refresh');
    Route::get('user', 'ApiAuthController@user');

});

/**
 * Routes for Task CRUD operations
 */
Route::group([

    'middleware' => 'auth:api'

], function ($router) {
    Route::resource('tasks', 'TaskController');
});
