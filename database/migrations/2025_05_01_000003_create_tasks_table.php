<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('description', 100)->nullable();
            $table->tinyInteger('priority_level');
            $table->tinyInteger('stage');
            $table->unsignedBigInteger('workspace_id')->references('id')->on('workspaces')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('tasks');
    }
};
