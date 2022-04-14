<?php

namespace FleetCart\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\ScaffoldModuleCommand::class,
        Commands\Facebook::class,
        Commands\ScaffoldEntityCommand::class,
        Commands\CreateCat::class,
        Commands\ProductCreateWithCsv::class,
        Commands\ProductCreateWithMisioo::class,
        Commands\ProPlusProducts::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('facebook:feed')->dailyAt('12:00');
        $schedule->command('create:cat')->dailyAt('12:00');
        $schedule->command('scaffold:module')->dailyAt('12:00');
        $schedule->command('products:create:with:misioo')->dailyAt('12:00');
        $schedule->command('pro:plus:products')->dailyAt('12:00');
        $schedule->command('scaffold:entity')->dailyAt('12:00');
        $schedule->command('products:create:with:csv')->dailyAt('12:00');


    }
}
