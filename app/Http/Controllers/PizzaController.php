<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    //

    public function index(Request $request)
    {

        $userId = $request->user()->id;

        $pizzas = Pizza::where('user_id', $userId)->get();

        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas,
        ]);
    }
    
    public function edit(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Edit', [
            'pizza' => $pizza,
        ]);
    }

    public function update(Pizza $pizza, Request $request)
    {
        $pizza->update([
            'status' => $request->status,
        ]);
    }
}
