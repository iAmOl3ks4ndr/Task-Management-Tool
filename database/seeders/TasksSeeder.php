<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksSeeder extends Seeder {
    public function run(): void {
        DB::table('tasks')->insert([
            [
                'name' => 'Task #1',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #2',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 2,
                'stage' => 1,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #3',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 3,
                'stage' => 1,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #4',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #5',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 1,
                'stage' => 2,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #6',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 3,
                'stage' => 2,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #7',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 1,
                'stage' => 3,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #8',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #9',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 2,
                'stage' => 3,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #10',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 3,
                'stage' => 4,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #11',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #12',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 1,
                'stage' => 4,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #13',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 2,
                'stage' => 5,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #14',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 3,
                'stage' => 5,
                'workspace_id' => 10,
            ],
            [
                'name' => 'Task #15',
                'description' => 'Some test task made by Oleksandr',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 10,
            ]
        ]);
    }
}
