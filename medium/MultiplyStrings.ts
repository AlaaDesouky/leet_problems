/**
 * Id: 43
 * Name: Multiply Strings
 * Link: https://leetcode.com/problems/multiply-strings/
 */

function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  const result: number[] = Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < num2.length; i++) {
    for (let j = 0; j < num1.length; j++) {
      result[i + j] += +num2[i] * +num1[j];
      result[i + j + 1] += Math.trunc(result[i + j] / 10);
      result[i + j] = result[i + j] % 10;
    }
  }

  result.reverse();

  let curry = 0;
  while (curry < result.length && result[curry] === 0) {
    curry += 1;
  }

  result.splice(0, curry);
  return result.join("");
}
