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

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'nullable|string|max:255'
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

    public function modifyWorkspace(Request $request, $workspaceId) {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $workspace = Workspace::find($workspaceId);
    
        $workspace->title = $request->title;
        $workspace->description = $request->description;
        $workspace->last_used = now();
        $workspace->save();

        return response()->json(['message' => 'Workspace updated successfully'], 201);
    }

    public function deleteWorkspace($workspaceId) {
        $workspace = Workspace::find($workspaceId);
        $workspace->delete();
        return response()->json(['message' => 'Workspace deleted successfully'], 201);
    }
}
