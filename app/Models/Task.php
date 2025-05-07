<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model {
    use HasFactory;

    public $timestamps = false;
    protected $table = 'tasks';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 
        'description',
        'priority_level',
        'stage',
        'workspace_id',
    ];

    public function workspace() {
        return $this->belongsTo(Workspace::class);
    }
}
