<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class ConnectController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function login(): View
    {
        return view('connect.login');
    }
}
