<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    // THis is seeder database for in query operation
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class
        ]);
    }
}
