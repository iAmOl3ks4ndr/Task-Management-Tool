<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workspace extends Model {
    use HasFactory;

    protected $table = 'workspaces';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 
        'description',
    ];
}
