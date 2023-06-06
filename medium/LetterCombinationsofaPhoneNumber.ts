/**
 * Id: 17
 * Name: Letter Combinations of a Phone Number
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
function letterCombinations(digits: string): string[] {
  let res: string[] = [];
  let digitToChar: Map<string, string> = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "qprs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const backtrack = (i: number, str: string) => {
    if (str.length === digits.length) return res.push(str);

    for (let c of digitToChar.get(digits[i])!) backtrack(i + 1, `${str}${c}`);
  };

  if (digits) backtrack(0, "");
  return res;
}
