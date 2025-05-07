<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {
    public function getTasks($workspaceId) {
        $tasks = Task::where('workspace_id', $workspaceId)->select('id', 'name', 'description', 'priority_level', 'stage')->get();
        return response()->json($tasks);
    }

    public function deleteTask($taskId) {
        $task = Task::find($taskId);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully'], 201);
    }

    public function taskToNextStage($taskId) {
        $task = Task::find($taskId);
        $task->increment('stage');
        return response()->json(['message' => 'Task moved to the next stage successfully'], 201);
    }

    public function taskToPreviousStage($taskId) {
        $task = Task::find($taskId);
        $task->decrement('stage');
        return response()->json(['message' => 'Task moved to the previous stage successfully'], 201);
    }
}
