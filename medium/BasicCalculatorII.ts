/**
 * Id: 227
 * Name: Basic Calculator II
 * Link: https://leetcode.com/problems/basic-calculator-ii
 */

function calculate(s: string): number {
  s.replace(/\s/g, "");

  let num: string = "";
  let stack: number[] = [];
  let prevSign: string = "+";

  const isOperator = (c: string): boolean =>
    c === "+" || c === "-" || c === "*" || c === "/";

  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(Number(s[i]))) num += s[i];

    if (isOperator(s[i]) || i === s.length - 1) {
      if (prevSign === "+") {
        stack.push(Number(num));
      } else if (prevSign === "-") {
        stack.push(Number(-num));
      } else if (prevSign === "*") {
        stack.push(Math.floor(stack.pop()! * Number(num)));
      } else {
        stack.push(Math.trunc(stack.pop()! / Number(num)));
      }

      prevSign = s[i];
      num = "";
    }
  }

  return stack.reduce((a, b) => a + b);
}
