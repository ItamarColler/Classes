const Time = require("./Time");

class Clock extends Time {
  #intervalClock;
  constructor({hours = 0, minutes = 0, seconds = 0}, autostart = true) {
    
    super({ hours, minutes, seconds });
    if (autostart) {
      this.start()
    }
  }
  start() {
    this.#intervalClock = setInterval(()=>{
        super.addSeconds(1);
    }, 1000);
  }
  stop() {
    clearInterval(this.#intervalClock);
  }

  toString(format = "HH:MM:SS") {
    const hours = String(super.h).padStart(2, "0");
    const minutes = String(super.m).padStart(2, "0");
    const seconds = String(super.s).padStart(2, "0");
    return format
      .replace("HH", hours)
      .replace("MM", minutes)
      .replace("SS", seconds);
  }
}



module.exports = Clock;
