const Clock = require("../Clock");

describe("Testing Clock methods and constructor",()=>{

test('Clock constructor initializes correctly with hours, minutes, and seconds', () => {
  const clock = new Clock({ hours: 2, minutes: 30, seconds: 45 }, false);
  expect(clock.toString()).toBe("02:03:45")
});

test('Clock constructor initializes and starts automatically', () => {
  jest.useFakeTimers();
  const clock = new Clock({ hours: 2, minutes: 30, seconds: 45 }, true);
  expect(clock.hours).toBe(2);
  expect(clock.minutes).toBe(30);
  expect(clock.seconds).toBe(45);
  jest.advanceTimersByTime(1000);
  expect(clock.seconds).toBe(46);
  jest.useRealTimers();
});

test('Clock start and pause methods work correctly', () => {
  jest.useFakeTimers();
  const clock = new Clock({ hours: 2, minutes: 30, seconds: 45 }, false);
  clock.start();
  jest.advanceTimersByTime(2000);
  expect(clock.seconds).toBe(47);
  clock.pause();
  jest.advanceTimersByTime(2000);
  expect(clock.seconds).toBe(47); // should not advance after pause
  jest.useRealTimers();
});

test('Clock reset method works correctly', () => {
  jest.useFakeTimers();
  const clock = new Clock({ hours: 2, minutes: 30, seconds: 45 }, true);
  jest.advanceTimersByTime(1000);
  expect(clock.seconds).toBe(46);
  clock.reset();
  expect(clock.hours).toBe(0);
  expect(clock.minutes).toBe(0);
  expect(clock.seconds).toBe(0);
  jest.useRealTimers();
});

test('Clock toString method works correctly', () => {
  const clock = new Clock({ hours: 2, minutes: 30, seconds: 45 }, false);
  expect(clock.toString()).toBe('02:30:45');
  expect(clock.toString('HHh MMm SSs')).toBe('02h 30m 45s');
});

}
        );

