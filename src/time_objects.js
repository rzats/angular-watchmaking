class Stopwatch {
    constructor(speed) {
        this.counter = 0;
        this.speed = speed;
        this.startTime = new Date().getTime();
    }

    tick() {
        var diff = (new Date().getTime() - this.startTime) - this.counter * this.speed;

        this.counter++;

        window.setTimeout(this.tick.bind(this), (this.speed - diff));
    }

    log() {
        console.log(this.counter * this.speed);
    }

    start() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
    }

    pause() {
        window.clearTimeout(this.ticker);
    }

    restart() {
        window.clearTimeout(this.ticker);
        this.counter = 0;
        this.startTime = Date.now();
    }
}

var s = new Stopwatch(50);
s.start();
window.setInterval(s.log.bind(s), 200);