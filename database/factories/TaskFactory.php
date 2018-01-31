<?php

use Faker\Generator as Faker;

$factory->define(App\Task::class, function (Faker $faker) {
    $users = App\User::all()->pluck('id');
    return [
        'content' => $faker->text,
        'priority' => 'medium',
        'done'=> false,
        'user_id' => $users->random()
    ];
});
