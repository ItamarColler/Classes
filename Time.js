const { isValidRange } = require("./util/TimeRangeUtil");

// src/Time.js
class Time {
  constructor({ hours = 0, minutes = 0, seconds = 0 } = {}) {
    const totalSeconds = Time.hoursToSeconds(hours) + Time.minutesToSeconds(minutes) + seconds
    this.totalSeconds = isValidRange(totalSeconds)? totalSeconds: 0;
  }

  // Helper methods for conversion
  static hoursToSeconds(hours) {
    return hours * 3600;
  }

  static minutesToSeconds(minutes) {
    return minutes * 60;
  }

  static totalSecondsToHours(totalSeconds) {
    return Math.floor(totalSeconds / 3600);
  }

  static totalSecondsToMinutes(totalSeconds) {
    return Math.floor((totalSeconds % 3600) / 60);
  }

  static totalSecondsToSeconds(totalSeconds) {
    return totalSeconds % 60;
  }

  // Getter and setter for hours
  get h() {
    return Time.totalSecondsToHours(this._totalSeconds);
  }

  set hours(hours) {
    if (hours >= 0 && hours <= 99) {
      this._totalSeconds =
        Time.hoursToSeconds(hours) +
        Time.minutesToSeconds(this.minutes) +
        this.s;
    }
  }

  // Getter and setter for minutes
  get m() {
    return Time.totalSecondsToMinutes(this._totalSeconds);
  }

  set minutes(minutes) {
    if (minutes >= 0 && minutes < 60) {
      this._totalSeconds += minutesToSeconds(minutes);
    }
  }

  // Getter and setter for seconds
  get s() {
    return Time.totalSecondsToSeconds(this._totalSeconds);
  }

  set seconds(seconds) {
    if (seconds >= 0 && seconds < 60) {
      this._totalSeconds += seconds;
    }
  }
  // Function to get total seconds

  get totalSeconds() {
    return this._totalSeconds;
  }

  // Additive methods
  addSeconds(seconds) {
    this._totalSeconds += seconds;
  }

  addMinutes(minutes) {
    this.addSeconds(Time.minutesToSeconds(minutes));
  }

  addHours(hours) {
    this.addSeconds(Time.hoursToSeconds(hours));
  }

  //Reducive methods

  removeSeconds(seconds) {
    this._totalSeconds -= seconds;
  }

  removeMinutes(minutes) {
    this.removeSeconds(Time.minutesToSeconds(minutes));
  }

  removeHours(hours) {
    this.removeSeconds(Time.hoursToSeconds(hours));
  }

  // Reset Methods

  resetSeconds() {
    this._totalSeconds -= this.s;
  }

  resetMinutes() {
    this._totalSeconds -= Time.minutesToSeconds(this.m);
  }

  resetHours() {
    this._totalSeconds -= Time.hoursToSeconds(this.h);
  }

  reset() {
    this._totalSeconds = 0;
  }

  // Comparison methods

  greaterThan(time) {
    return this > time;
  }

  greaterThanEqual(time) {
    console.log(this, time, this >= time);

    return this >= time;
  }

  lowerThan(time) {
    return this < time;
  }

  lowerThanEqual(time) {
    return this <= time;
  }

  // String representation

  toString(format = "HH:MM:SS") {
    const hours = String(this.h).padStart(2, "0");
    const minutes = String(this.m).padStart(2, "0");
    const seconds = String(this.s).padStart(2, "0");
    return format
      .replace("HH", hours)
      .replace("MM", minutes)
      .replace("SS", seconds);
  }

  // Operator methods

  addTime(time = Time) {
    this._totalSeconds = this._totalSeconds + time._totalSeconds;
  }

  subTime(time) {
    this._totalSeconds = this._totalSeconds - time._totalSeconds;
  }

  valueOf() {
    return this._totalSeconds;
  }
}
Time.prototype.isValidRange = isValidRange

module.exports = Time;
