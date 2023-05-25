/**
 * Id: 258
 * Name: Add Digits
 * Link: https://leetcode.com/problems/add-digits/
 */

function addDigits(num: number): number {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;

  return num % 9;
}
