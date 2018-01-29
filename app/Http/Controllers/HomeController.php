<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    /**
     * Shows home view
     *
     * @return void
     */
    public function show() {
        return view('home');
    }
}
