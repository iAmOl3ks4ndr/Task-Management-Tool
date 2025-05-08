<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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

    public function createTask(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'description' => 'nullable|string|max:255',
            'priorityLevel' => 'required|integer|min:1|max:3',
            'stage' => 'required|integer|min:1|max:5'
        ]);

        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $task = Task::create([
            'name' => $request->name,
            'description' => $request->description,
            'priority_level' => $request->priorityLevel,
            'stage' => $request->stage,
            'workspace_id' => $request->workspaceId
        ]);

        return response()->json(['message' => 'Task created successfully'], 201);
    }
}
