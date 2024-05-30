// tests/Time.test.js
const Time = require("../Time");

describe("Testing Time Class methods and constructor", () => {
  test("Time constructor", () => {
    const time = new Time({ hours: 2, minutes: 30, seconds: 45 });
    expect(time.h).toBe(2);
    expect(time.m).toBe(30);
    expect(time.s).toBe(45);
  });
  test("toString method", () => {
    const time = new Time({ hours: 2, minutes: 30, seconds: 45 });
    expect(time.toString()).toBe("02:30:45");
  });
  test("addTime method", () => {
    const time1 = new Time({ hours: 1, minutes: 30, seconds: 30 });
    const time2 = new Time({ hours: 1, minutes: 45, seconds: 15 });
    time1.addTime(time2);
    expect(time1.h).toBe(3);
    expect(time1.m).toBe(15);
    expect(time1.s).toBe(45);
  });

  test("subTime method subtracts two Time instances", () => {
    const time1 = new Time({ hours: 2, minutes: 30, seconds: 30 });
    const time2 = new Time({ hours: 1, minutes: 45, seconds: 15 });
    time1.subTime(time2);
    expect(time1.h).toBe(0);
    expect(time1.m).toBe(45);
    expect(time1.s).toBe(15);
  });

  test("Comparison greater than methods", () => {
    const time1 = new Time({ hours: 2, minutes: 30, seconds: 30 });
    const time2 = new Time({ hours: 1, minutes: 45, seconds: 15 });
    expect(time1.greaterThan(time2)).toBe(true);
    expect(time1.greaterThanEqual(time2)).toBe(true);
  });
  test("Comparison low than methods", () => {
    const time1 = new Time({ hours: 2, minutes: 20, seconds: 30 });
    const time2 = new Time({ hours: 1, minutes: 45, seconds: 15 });
    expect(time2.lowerThan(time1)).toBe(true);
    expect(time2.lowerThanEqual(time1)).toBe(true);
  });
  test("resetSeconds method", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.resetSeconds();
    expect(time.h).toBe(1);
    expect(time.m).toBe(2);
    expect(time.s).toBe(0);
  });
  test("resetMinutes method", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.resetMinutes();
    expect(time.h).toBe(1);
    expect(time.m).toBe(0);
    expect(time.s).toBe(22);
  });
  test("resetHours method", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.resetHours();
    expect(time.h).toBe(0);
    expect(time.m).toBe(2);
    expect(time.s).toBe(22);
  });
  test("reset method resets all to zero", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.reset();
    expect(time.h).toBe(0);
    expect(time.m).toBe(0);
    expect(time.s).toBe(0);
  });
  test("removeSeconds method ", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.removeSeconds(10);
    expect(time.s).toBe(12);
  });

  test("removeMinutes method", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.removeMinutes(1);
    expect(time.m).toBe(1);
  });

  test("removeHours method", () => {
    const time = new Time({ hours: 1, minutes: 2, seconds: 22 });
    time.removeHours(1);
    expect(time.h).toBe(0);
  });
});
