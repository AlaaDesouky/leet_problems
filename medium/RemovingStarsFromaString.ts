/**
 * Id: 2390
 * Name: Removing Stars From a String
 * Link: https://leetcode.com/problems/removing-stars-from-a-string
 */

function removeStars(s: string): string {
  let stack: string[] = [];
  for (let c of s) c === "*" ? stack.length && stack.pop() : stack.push(c);
  return stack.join("");
}
