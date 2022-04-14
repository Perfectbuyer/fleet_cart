<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');
Route::get("datenschutzerklärung","PageController@dataprotection")->name("data-protection");
Route::get("impressum","PageController@impressum")->name("impressum");
Route::get("widerrufsbelehrung-kombi","PageController@widerrufsbelehrungkombi")->name("widerrufsbelehrung-kombi");
