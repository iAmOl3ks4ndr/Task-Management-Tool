<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AccountsSeeder extends Seeder {
    public function run(): void{
        DB::table('accounts')->insert([
            [
                'id' => 1,
                'name' => "Jack",
                'surname' => "Kelly",
                'email' => "jack.kelly@gmail.com",
                'password' => Hash::make("Qweqwe123$"),
            ],
            [
                'id' => 2,
                'name' => "Grace",
                'surname' => "Nolan",
                'email' => "grace.nolan@gmail.com",
                'password' => Hash::make("Asdasd456$"),
            ],
            [
                'id' => 3,
                'name' => "Dylan",
                'surname' => "O'Reilly",
                'email' => "dylan.oreilly@gmail.com",
                'password' => Hash::make("Zxczxc789$"),
            ],
            [
                'id' => 4,
                'name' => "Oleksandr",
                'surname' => "Olefirenko",
                'email' => "o.oleksandr.m@gmail.com",
                'password' => Hash::make("Asdasd123$"),
            ]
        ]);
    }
}
