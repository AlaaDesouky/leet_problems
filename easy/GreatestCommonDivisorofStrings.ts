/**
 * Id: 1071
 * Name: Greatest Common Divisor of Strings
 * Link: https://leetcode.com/problems/greatest-common-divisor-of-strings
 */

function gcdOfStrings(str1: string, str2: string): string {
  let len1: number = str1.length;
  let len2: number = str2.length;
  let f1: number;
  let f2: number;

  const isDivisor = (l: number): boolean => {
    if (len1 % l || len2 % l) return false;

    f1 = Math.floor(len1 / l);
    f2 = Math.floor(len2 / l);

    return (
      str1.substring(0, l).repeat(f1) === str1 &&
      str1.substring(0, l).repeat(f2) === str2
    );
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) return str1.substring(0, i);
  }

  return "";
}
