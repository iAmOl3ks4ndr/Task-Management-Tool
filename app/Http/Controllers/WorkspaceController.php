<?php

namespace App\Http\Controllers;

use App\Models\Workspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkspaceController extends Controller {
    public function getWorkspaces() {
        $user = Auth::user();
        $workspaces = Workspace::where('user_id', $user->id)->select('id', 'title', 'description')->get();
        return response()->json($workspaces);
    }
}
