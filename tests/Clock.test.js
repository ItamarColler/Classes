const Clock = require("../Clock");

describe("Testing Clock methods and constructor", () => {
  test("Clock constructor initializes correctly with hours, minutes, and seconds", () => {
    const clock = new Clock({ hours: 2, minutes: 3, seconds: 45 }, false);
    expect(clock.toString()).toBe("02:03:45");
  });
});
