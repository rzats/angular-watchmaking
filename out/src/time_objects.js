System.registerModule("../../src/time_objects.js", [], function() {
  "use strict";
  var __moduleName = "../../src/time_objects.js";
  var Stopwatch = function() {
    function Stopwatch(speed) {
      this.counter = 0;
      this.speed = speed;
      this.startTime = new Date().getTime();
    }
    return ($traceurRuntime.createClass)(Stopwatch, {
      tick: function() {
        var diff = (new Date().getTime() - this.startTime) - this.counter * this.speed;
        this.counter++;
        window.setTimeout(this.tick.bind(this), (this.speed - diff));
      },
      log: function() {
        console.log(this.counter * this.speed);
      },
      start: function() {
        this.ticker = window.setTimeout(this.tick.bind(this), this.speed);
      },
      pause: function() {
        window.clearTimeout(this.ticker);
      },
      restart: function() {
        window.clearTimeout(this.ticker);
        this.counter = 0;
        this.startTime = Date.now();
      }
    }, {});
  }();
  var s = new Stopwatch(50);
  s.start();
  window.setInterval(s.log.bind(s), 200);
  return {};
});
System.get("../../src/time_objects.js" + '');
//# sourceMappingURL=time_objects.js.map
