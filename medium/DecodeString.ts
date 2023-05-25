/**
 * Id: 394
 * Name: Decode String
 * Link: https://leetcode.com/problems/decode-string
 */

function decodeString(s: string): string {
  let strStack: string[] = [];
  let countStack: number[] = [];
  let result: string = "";
  let idx: number = 0;
  let count: string = "";

  while (idx < s.length) {
    if (Number.isInteger(Number(s[idx]))) {
      while (Number.isInteger(Number(s[idx]))) {
        count += s[idx];
        idx += 1;
      }
      countStack.push(Number(count));
      count = "";
    } else if (s[idx] === "[") {
      strStack.push(result);
      result = "";
      idx += 1;
    } else if (s[idx] === "]") {
      let temp = strStack.pop();
      let counter = countStack.pop()!;
      for (let i = 0; i < counter; i++) {
        temp += result;
      }

      result = temp!;
      idx += 1;
    } else {
      result += s[idx];
      idx += 1;
    }
  }

  return result;
}
