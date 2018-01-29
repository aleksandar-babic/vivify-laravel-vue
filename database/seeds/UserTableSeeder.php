<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{

public function run()
{
    DB::table('users')->delete();
    User::create(array(
        'email'    => 'user@myapp.dev',
        'firstname' => 'John',
        'lastname' => 'Doe',
        'company' => 'Vivify Ideas',
        'country' => 'Serbia',
        'password' => Hash::make('supersecret'),
    ));
}

}