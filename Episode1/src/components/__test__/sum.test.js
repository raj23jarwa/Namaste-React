import { sum } from "./sum";
test('sum function will calculate the sum of two numbers', () => { 
    const result = sum(1,5);
    expect(result).toBe(6);
 })