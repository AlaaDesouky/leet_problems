/**
 * Id: 844
 * Name: Backspace String Compare
 * Link: https://leetcode.com/problems/backspace-string-compare
 */

function backspaceCompare(s: string, t: string): boolean {
  const construct = (s: string): string => {
    let newS: string = "";
    for (let char of s) {
      if (newS.length && char === "#") {
        newS = newS.slice(0, -1);
      } else if (char !== "#") {
        newS += char;
      }
    }
    return newS;
  };

  return construct(s) === construct(t);
}
