<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {
    public function getTasks($workspaceId) {
        $tasks = Task::where('workspace_id', $workspaceId)->select('id', 'name', 'description', 'priority_level', 'stage')->get();
        return response()->json($tasks);
    }
}
