System.registerModule("../../src/time_objects.js", [], function() {
  "use strict";
  var __moduleName = "../../src/time_objects.js";
  var Stopwatch = function() {
    function Stopwatch(speed) {
      this.counter = 0;
      this.speed = speed;
    }
    return ($traceurRuntime.createClass)(Stopwatch, {
      tick: function() {
        var diff = (new Date().getTime() - this.startTime) - this.counter;
        this.counter += this.speed;
        this.ticker = window.setTimeout(this.tick.bind(this), (this.speed - diff));
      },
      start: function() {
        this.startTime = new Date().getTime();
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
      },
      pause: function() {
        window.clearTimeout(this.ticker);
      },
      unpause: function() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
      },
      restart: function() {
        window.clearTimeout(this.ticker);
        this.counter = 0;
        this.start();
      }
    }, {});
  }();
  var Timer = function() {
    function Timer(speed, duration) {
      this.counter = duration;
      this.speed = speed;
      this.duration = duration;
    }
    return ($traceurRuntime.createClass)(Timer, {
      tick: function() {
        if (this.counter <= 0) {
          this.counter = 0;
          window.clearTimeout(this.ticker);
        } else {
          var diff = (new Date().getTime() - this.startTime) - (this.duration - this.counter);
          this.counter -= this.speed;
          this.ticker = window.setTimeout(this.tick.bind(this), (this.speed - diff));
        }
      },
      start: function() {
        this.startTime = new Date().getTime();
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
      },
      pause: function() {
        window.clearTimeout(this.ticker);
      },
      unpause: function() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
      },
      restart: function() {
        window.clearTimeout(this.ticker);
        this.counter = this.duration;
        this.start();
      }
    }, {});
  }();
  var s = new Timer(50, 10000);
  s.start();
  return {};
});
System.get("../../src/time_objects.js" + '');
//# sourceMappingURL=time_objects.js.map
