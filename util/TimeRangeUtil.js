module.exports = function isValidRange(totalSeconds, minRange = -359999, maxRange = 359999) {
  return totalSeconds >= minRange && totalSeconds <= maxRange;
}
