/**
 * Represents a timer that counts the time from its creation.
 * @param {number} counter - represents the time from the timer's creation.
 * (note: is @param still a JSDoc standard for ECMAScript 6 classes?)
 * @param {number} speed - represents the interval at which to run the tick() function (in ms)
 * @param {object} startTime - the time at which the coundown has started
 * @param {object} ticker - the counter function's timeout handle
 */

class Stopwatch {
    constructor(speed) {
        this.counter = 0;
        this.speed = speed;
    }

    /**
     * The main counter function.
     * Uses a self-adjusting technique for precise time calculation
     * @return nothing
     */

    tick() {
        var diff = (new Date().getTime() - this.startTime) - this.counter;

        this.counter += this.speed;

        this.ticker = window.setTimeout(this.tick.bind(this), (this.speed - diff));
    }

    /**
     * Function used to start the counter
     * Note: setInterval isn't used as the counter function repeatedly uses setTimeout on itself
     * while adjusting for possible issues caused by CPU cycles
     * @return nothing
     */

    start() {
        this.startTime = new Date().getTime();
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
    }

    /**
     * Function used to pause the counter
     * @return nothing
     */

    pause() {
        window.clearTimeout(this.ticker);
    }

    /**
     * Function used to unpause the counter
     * @return nothing
     */

    unpause() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
    }

    /**
     * Function used to restart the counter.
     * Resets all fields with the exception of speed.
     * @return nothing
     */

    restart() {
        window.clearTimeout(this.ticker);
        this.counter = 0;
        this.start();
    }
}

/**
 * Represents a countdown that accepts a duration parameter and repeatedly decreases it until it reaches zero.
 * @param {number} counter - represents the time from the timer's creation.
 * (note: is @param still a JSDoc standard for ECMAScript 6 classes?)
 * @param {number} duration - represents the duration of the timer, used to keep info on restart
 * @param {number} speed - represents the interval at which to run the tick() function (in ms)
 * @param {object} startTime - the time at which the coundown has started
 * @param {object} ticker - the counter function's timeout handle
 * (maybe add onReachesZero parameter that accepts a function handle?)
 */

class Timer {
    constructor(speed, duration) {
        this.counter = duration;
        this.speed = speed;
        this.duration = duration;
    }

    /**
     * The main counter function.
     * Uses a self-adjusting technique for precise time calculation
     * @return nothing
     */

    tick() {
        if (this.counter <= 0)
        {
            this.counter = 0;
            window.clearTimeout(this.ticker);
        }
        else
        {
            var diff = (new Date().getTime() - this.startTime) - (this.duration - this.counter);
            this.counter -= this.speed;
            this.ticker = window.setTimeout(this.tick.bind(this), (this.speed - diff));
        }
    }

    /**
     * Function used to start the counter
     * Note: setInterval isn't used as the counter function repeatedly uses setTimeout on itself
     * while adjusting for possible issues caused by CPU cycles
     * @return nothing
     */

    start() {
        this.startTime = new Date().getTime();
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
    }

    /**
     * Function used to pause the counter
     * @return nothing
     */

    pause() {
        window.clearTimeout(this.ticker);
    }

    /**
     * Function used to unpause the counter
     * @return nothing
     */

    unpause() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
    }

    /**
     * Function used to restart the counter.
     * Resets all fields with the exception of speed and duration.
     * @return nothing
     */

    restart() {
        window.clearTimeout(this.ticker);
        this.counter = this.duration;
        this.start();
    }
}

var s = new Timer(50,10000);
s.start();