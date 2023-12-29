<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Pizza;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PublicPizzaController extends Controller
{
    //
    public function show(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Show', [
            'pizza' => $pizza
        ]);
    }


    public function add($idChef)
    {
        $chef = User::find($idChef);

        $chef = new UserResource($chef);

        return Inertia::render('Pizzas/Add', [
            "chef" => $chef
        ]);
    }

    public function store(Request $request)
    {
        $newPizza = Pizza::create([
            'id' => rand(11111, 99999),
            'user_id' => 1,
            'size' => $request->size,
            'crust' => $request->crust,
            'toppings' => [],
            'status' => 'Ordered',
        ]);

        // return $newPizza;

        return Inertia::render('Pizzas/Show', [
            'pizza' => $newPizza
        ]);
    }
}
