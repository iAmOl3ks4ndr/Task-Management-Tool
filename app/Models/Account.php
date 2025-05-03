<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Account extends Authenticatable {
    use HasFactory;
    use Notifiable;

    public $timestamps = false;
    protected $table = 'accounts';
    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
    ];
}
