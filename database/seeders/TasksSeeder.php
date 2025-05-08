<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksSeeder extends Seeder {
    public function run(): void {
        DB::table('tasks')->insert([
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 1
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 1
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 1
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 1
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 1
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 2
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 2
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 2
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 2
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 2
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 3
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 3
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 3
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 3
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 3
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 4
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 4
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 4
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 4
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 4
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 5
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 5
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 5
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 5
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 5
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 6
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 6
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 6
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 6
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 6
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 7
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 7
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 7
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 7
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 7
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 8
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 8
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 8
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 8
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 8
            ],
            [
                'name' => 'Welcome to the Task Management Tool',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 1,
                'workspace_id' => 9
            ],
            [
                'name' => 'Simply press + button and get started',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 2,
                'workspace_id' => 9
            ],
            [
                'name' => 'Move tasks between stages, view, or delete them',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 3,
                'stage' => 3,
                'workspace_id' => 9
            ],
            [
                'name' => 'Organize and manage tasks easily. It is simple!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 2,
                'stage' => 4,
                'workspace_id' => 9
            ],
            [
                'name' => 'Happy productive day. Enjoy!',
                'description' => 'Tutorial task to guide new user',
                'priority_level' => 1,
                'stage' => 5,
                'workspace_id' => 9
            ],
        ]);
    }
}
