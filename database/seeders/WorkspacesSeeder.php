<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkspacesSeeder extends Seeder {
    public function run(): void {
        DB::table('workspaces')->insert([
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'last_used' => now(),
                'user_id' => 1,
            ],
            [
                'title' => 'Marketing Campaign',
                'description' => 'Coordinate tasks for a product launch or seasonal campaign — content creation, social media scheduling, ad setup, and performance review.',
                'last_used' => now(),
                'user_id' => 1,
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Manage the entire lifecycle of building a mobile app. Organize features, development tasks, bug tracking, and QA testing in one place.',
                'last_used' => now(),
                'user_id' => 1,
            ],
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'last_used' => now(),
                'user_id' => 2,
            ],
            [
                'title' => 'Marketing Campaign',
                'description' => 'Coordinate tasks for a product launch or seasonal campaign — content creation, social media scheduling, ad setup, and performance review.',
                'last_used' => now(),
                'user_id' => 2,
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Manage the entire lifecycle of building a mobile app. Organize features, development tasks, bug tracking, and QA testing in one place.',
                'last_used' => now(),
                'user_id' => 2,
            ],
            [
                'title' => 'Welcome to Project Management Tool',
                'description' => 'This is the tool that will help you organize and manage tasks. Create the first workspace for your project and get started. Happy productive day!',
                'last_used' => now(),
                'user_id' => 3,
            ],
            [
                'title' => 'Marketing Campaign',
                'description' => 'Coordinate tasks for a product launch or seasonal campaign — content creation, social media scheduling, ad setup, and performance review.',
                'last_used' => now(),
                'user_id' => 3,
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Manage the entire lifecycle of building a mobile app. Organize features, development tasks, bug tracking, and QA testing in one place.',
                'last_used' => now(),
                'user_id' => 3,
            ]
        ]);
    }
}
