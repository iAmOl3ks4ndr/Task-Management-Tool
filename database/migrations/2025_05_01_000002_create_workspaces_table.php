<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('workspaces', function (Blueprint $table) {
            $table->id();
            $table->string('title', 50);
            $table->string('description')->nullable();
            $table->dateTime('last_used');
            $table->unsignedBigInteger('user_id')->references('id')->on('accounts')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('workspaces');
    }
};
