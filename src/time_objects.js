var app = angular.module('TimingApp', []);

/**
 * Represents a stopwatch that counts down time from its creation
 * @param {number} counter - The time from the object's creation
 * @param {number} speed - The interval between tick function calls
 * @param {number} increment - The number added to the counter each tick
 * @param {boolean} started - The object's start state (influences UI buttons)
 * @param {boolean} paused - The object's pause state (influences UI buttons)
 */

app.controller('StopwatchController', function($scope, $timeout) {
    "use strict";

    $scope.counter = 0;
    $scope.speed = 1;
    $scope.increment = 1;
    $scope.started = false;
    $scope.paused = false;

    /**
     * Called each tick. Repeatedly sets a timeout on itself.
     */

    $scope.onTick = function () {
        $scope.counter += $scope.increment;
        ticker = $timeout($scope.onTick, $scope.speed);
    };

    /**
     * Promise to be set to a timeout on the tick function
     */

    var ticker;

    /**
     * Starts the stopwatch, setting the promise
     */

    $scope.start = function() {
        ticker = $timeout($scope.onTick, $scope.speed);
        $scope.started = true;
    };

    /**
     * Pauses the stopwatch without resetting the counter
     */

    $scope.pause = function () {
        $timeout.cancel(ticker);
        $scope.paused = true;
    };

    /**
     * Unpauses the stopwatch if it's paused
     */

    $scope.unpause = function () {
        $timeout.cancel(ticker);
        $scope.paused = false;
        ticker = $timeout($scope.onTick, $scope.speed);
    };

    /**
     * Restarts the stopwatch, resetting the counter
     */

    $scope.restart = function () {
        $timeout.cancel(ticker);
        $scope.counter = 0;
        $scope.paused = false;
        ticker = $timeout($scope.onTick, $scope.speed);
    }
});

/**
 * Represents a timer that accepts a value and decrements it until it reaches zero
 * @param {number} countdown - The initial value to be decremented
 * @param {number} counter - The time from the object's creation
 * @param {number} speed - The interval between tick function calls
 * @param {number} increment - The number substracted from the counter each tick
 * @param {boolean} started - The object's start state (influences UI buttons)
 * @param {boolean} paused - The object's pause state (influences UI buttons)
 */

app.controller('TimerController', function($scope, $timeout) {
    "use strict";

    $scope.countdown = 1000;
    $scope.counter = $scope.countdown;
    $scope.speed = 1;
    $scope.decrement = 1;
    $scope.paused = false;
    $scope.started = false;

    /**
     * Called each tick. Repeatedly sets a timeout on itself (until the counter reaches zero)
     */

    $scope.onTick = function()
    {
        if ($scope.counter <= 0)
        {
            $timeout.cancel(ticker);
        }
        else
        {
            $scope.counter -= $scope.decrement;
            ticker = $timeout($scope.onTick, $scope.speed);
        }
    };

    /**
     * Promise initially set to a timeout on the tick function
     */

    var ticker;

    /**
     * Starts the timer, setting the promise
     */

    $scope.start = function() {
        ticker = $timeout($scope.onTick, $scope.speed);
        $scope.started = true;
    };

    /**
     * Pauses the timer without resetting the counter
     */

    $scope.pause = function () {
        $timeout.cancel(ticker);
        $scope.paused = true;
    };

    /**
     * Unpauses the timer if it's paused
     */

    $scope.unpause = function () {
        $timeout.cancel(ticker);
        $scope.paused = false;
        ticker = $timeout($scope.onTick, $scope.speed);
    };

    /**
     * Restarts the timer, resetting the counter to its initial value
     */

    $scope.restart = function () {
        $timeout.cancel(ticker);
        $scope.counter = $scope.countdown;
        $scope.paused = false;
        ticker = $timeout($scope.onTick, $scope.speed);
    }
});
