<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workspace extends Model {
    use HasFactory;

    public $timestamps = false;
    protected $table = 'workspaces';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 
        'description',
        'last_used',
        'user_id',
    ];

    protected $casts = [
        'last_used' => 'datetime',
    ];
}
