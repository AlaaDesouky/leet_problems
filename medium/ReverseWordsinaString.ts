/**
 * Id: 151
 * Name: Reverse Words in a String
 * Link: https://leetcode.com/problems/reverse-words-in-a-string
 */

function reverseWords(s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
}
