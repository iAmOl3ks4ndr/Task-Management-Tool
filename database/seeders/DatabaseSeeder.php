<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\WorkspacesSeeder;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $this->call([
            WorkspacesSeeder::class,
        ]);
    }
}
