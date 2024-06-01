// tests/Time.test.js
const Time = require("../Time");

describe("Valid cases for Time", () => {
  test.each([
    { input: { hours: 2, minutes: 30, seconds: 45 }, expected: "02:30:45" },
    { input: { hours: 0, minutes: 0, seconds: 0 }, expected: "00:00:00" },
    { input: { hours: 99, minutes: 59, seconds: 59 }, expected: "99:59:59" },
  ])(
    "Time constructor with input $input results in $expected",
    ({ input, expected }) => {
      const time = new Time(input);
      expect(time.toString()).toBe(expected);
    }
  );

  test.each([
    {
      input1: { hours: 1, minutes: 30, seconds: 30 },
      input2: { hours: 0, minutes: 45, seconds: 15 },
      expected: "02:15:45",
    },
  ])(
    "addTime method correctly adds two Time instances",
    ({ input1, input2, expected }) => {
      const time1 = new Time(input1);
      const time2 = new Time(input2);
      time1.addTime(time2);
      expect(time1.toString()).toBe(expected);
    }
  );

  test.each([
    {
      input1: { hours: 1, minutes: 30, seconds: 30 },
      input2: { hours: 0, minutes: 45, seconds: 15 },
      expected: "00:45:15",
    },
  ])(
    "subtractTime method correctly subtracts two Time instances",
    ({ input1, input2, expected }) => {
      const time1 = new Time(input1);
      const time2 = new Time(input2);
      time1.subTime(time2);
      expect(time1.toString()).toBe(expected);
    }
  );

  test.each([
    {
      input: { hours: 1, minutes: 2, seconds: 22 },
      seconds: 10,
      expected: "01:02:12",
    },
  ])(
    "removeSeconds method correctly removes seconds",
    ({ input, seconds, expected }) => {
      const time = new Time(input);
      time.removeSeconds(seconds);
      expect(time.toString()).toBe(expected);
    }
  );

  test.each([
    {
      input: { hours: 1, minutes: 2, seconds: 22 },
      minutes: 1,
      expected: "01:01:22",
    },
  ])(
    "removeMinutes method correctly removes minutes",
    ({ input, minutes, expected }) => {
      const time = new Time(input);
      time.removeMinutes(minutes);
      expect(time.toString()).toBe(expected);
    }
  );

  test.each([
    {
      input: { hours: 1, minutes: 2, seconds: 22 },
      hours: 1,
      expected: "00:02:22",
    },
  ])(
    "removeHours method correctly removes hours",
    ({ input, hours, expected }) => {
      const time = new Time(input);
      time.removeHours(hours);
      expect(time.toString()).toBe(expected);
    }
  );

  test.each([
    { input: { hours: 1, minutes: 2, seconds: 22 }, expected: "01:02:00" },
  ])("resetSeconds method resets seconds to zero", ({ input, expected }) => {
    const time = new Time(input);
    time.resetSeconds();
    expect(time.toString()).toBe(expected);
  });

  test.each([
    { input: { hours: 1, minutes: 2, seconds: 22 }, expected: "01:00:22" },
  ])("resetMinutes method resets minutes to zero", ({ input, expected }) => {
    const time = new Time(input);
    time.resetMinutes();
    expect(time.toString()).toBe(expected);
  });

  test.each([
    { input: { hours: 1, minutes: 2, seconds: 22 }, expected: "00:02:22" },
  ])("resetHours method resets hours to zero", ({ input, expected }) => {
    const time = new Time(input);
    time.resetHours();
    expect(time.toString()).toBe(expected);
  });

  test.each([
    { input: { hours: 1, minutes: 2, seconds: 22 }, expected: "00:00:00" },
  ])("reset method resets all to zero", ({ input, expected }) => {
    const time = new Time(input);
    time.reset();
    expect(time.toString()).toBe(expected);
  });

  test.each([
    {
      time1: { hours: 2, minutes: 30, seconds: 30 },
      time2: { hours: 1, minutes: 45, seconds: 15 },
    },
  ])("Static comparison methods work correctly", ({ time1, time2 }) => {
    const t1 = new Time(time1);
    const t2 = new Time(time2);

    expect(t1.greaterThan(t2)).toBe(true);
    expect(t1.greaterThan(t2)).toBe(true);
    expect(t2.lowerThan(t1)).toBe(true);
    expect(t2.lowerThanEqual(t1)).toBe(true);
  });
});

describe("Invalid cases for Time", () => {});
