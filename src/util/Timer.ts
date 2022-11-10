// export class Timer {
export class Stopwatch {
  isRunning = false;
  startTime = 0;
  overallTime = 0;
  // constructor() {}

  _getTimeElapsedSinceLastStart() {
    if (!this.startTime) {
      return 0;
    }

    return Date.now() - this.startTime;
  }

  start() {
    if (this.isRunning) {
      // return console.error('Timer is already running');
      return;
    }

    this.isRunning = true;

    this.startTime = Date.now();
  }

  stop() {
    if (!this.isRunning) {
      return console.error('Timer is already stopped');
    }

    this.isRunning = false;

    this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
  }

  reset() {
    this.overallTime = 0;

    if (this.isRunning) {
      this.startTime = Date.now();
      return;
    }

    this.startTime = 0;
  }

  getTime() {
    if (!this.startTime) {
      return 0;
    }

    if (this.isRunning) {
      return this.overallTime + this._getTimeElapsedSinceLastStart();
    }

    return this.overallTime;
  }
}

// const timer = new Timer();
// timer.start();
// setInterval(() => {
//   const timeInSeconds = Math.round(timer.getTime() / 1000);
//   document.getElementById('time').innerText = timeInSeconds;
// document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
// }, 100)
