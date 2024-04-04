import { getTemperatureColor } from '../src/utils/getTemperatureColor';

describe('getTemperatureColor', () => {
  it('returns white for undefined temperature', () => {
    expect(getTemperatureColor(undefined)).toBe('white');
  });

  it('returns white for temperatures below -10°C', () => {
    expect(getTemperatureColor(-15)).toBe('white');
  });

  it('returns blue for temperatures between -10°C and 0°C', () => {
    expect(getTemperatureColor(-10)).toBe('blue');
    expect(getTemperatureColor(-5)).toBe('blue');
    expect(getTemperatureColor(0)).toBe('blue');
  });

  it('returns lightblue for temperatures between 0°C and 10°C', () => {
    expect(getTemperatureColor(5)).toBe('lightblue');
  });

  it('returns yellow for temperatures between 10°C and 15°C', () => {
    expect(getTemperatureColor(12)).toBe('yellow');
  });

  it('returns orange for temperatures between 15°C and 25°C', () => {
    expect(getTemperatureColor(20)).toBe('orange');
  });

  it('returns red for temperatures between 25°C and 30°C', () => {
    expect(getTemperatureColor(28)).toBe('red');
  });

  it('returns darkred for temperatures above 30°C', () => {
    expect(getTemperatureColor(35)).toBe('darkred');
  });
});
