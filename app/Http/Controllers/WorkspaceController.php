<?php

namespace App\Http\Controllers;

use App\Models\Workspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WorkspaceController extends Controller {
    public function getWorkspaces() {
        $user = Auth::user();
        $workspaces = Workspace::where('user_id', $user->id)->select('id', 'title', 'description', 'last_used')->get();
        return response()->json($workspaces);
    }

    public function createWorkspace(Request $request) {
        $user = Auth::user();

        if (!$user) return response()->json(['error' => 'Unauthorized'], 401);

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:255'
        ]);

        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $workspace = Workspace::create([
            'title' => $request->title,
            'description' => $request->description,
            'last_used' => now(),
            'user_id' => $user->id,
        ]);

        return response()->json(['message' => 'Workspace created successfully'], 201);
    }
}
