function isValidRange(totalSeconds, minRange = -359999, maxRange = 359999) {
  return totalSeconds >= minRange && totalSeconds <= maxRange;
}

function isNotTypeNumber(input) {
  return typeof input !== "number";
}

function validTimeInput(hours, minutes, seconds) {
  return isNotTypeNumber(hours) ||
    isNotTypeNumber(minutes) ||
    isNotTypeNumber(seconds)
    ? false
    : true;
}

module.exports = { isValidRange, validTimeInput };
