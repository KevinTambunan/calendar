<?php

namespace Database\Seeders;

use Carbon\Factory;
use Faker\Factory as FakerFactory;
use Hamcrest\Type\IsBoolean;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = FakerFactory::create();

        for($i=0; $i<30; $i++){
            DB::table('events')->insert([
                'title' => $faker->company(),
                'date' => $faker->date('Y-m-d'),
                'description' => $faker->text(),
                'image' => $faker->image(),
                'is_popup' => $faker->boolean()
            ]);
        }
    }
}
