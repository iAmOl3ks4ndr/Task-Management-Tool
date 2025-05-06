<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkspacesSeeder extends Seeder {
    public function run(): void{
        DB::table('workspaces')->insert([
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'user_id' => 1,
            ],
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'user_id' => 1,
            ],
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'user_id' => 1,
            ],
        ]);
    }
}
