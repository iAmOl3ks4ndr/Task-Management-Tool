<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\AccountsSeeder;
use Database\Seeders\WorkspacesSeeder;
use Database\Seeders\TasksSeeder;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $this->call([
            AccountsSeeder::class,
            WorkspacesSeeder::class,
            TasksSeeder::class
        ]);
    }
}
