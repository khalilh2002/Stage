<?php

use Illuminate\Http\Request;
use App\Http\Controllers\testRole;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StagiaireController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix'=>'/stagiaire'], function () {

    Route::get('/index',[StagiaireController::class,'index']);
    Route::delete('/delete/{user}',[StagiaireController::class,'remove'])->middleware('auth:sanctum');

});


Route::group(['prefix'=> '/role'], function () {

    Route::get('/admin',[testRole::class,'admin']);
    Route::get('/encadrement',[testRole::class,'encadrement']);
    Route::get('/stagiaire',[testRole::class,'stagiaire']);

});