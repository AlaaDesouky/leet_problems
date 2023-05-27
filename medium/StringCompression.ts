/**
 * Id: 334
 * Name: Increasing Triplet Subsequence
 * Link: https://leetcode.com/problems/increasing-triplet-subsequence
 */

function compress(chars: string[]): number {
  if (chars.length === 1) {
    return 1;
  }
  let l: number = 0;
  let r: number = 1;
  let length: number = 0;
  let count: number = 1;

  const helper = () => {
    const r: string = `${chars[l]}${count > 1 ? count : ""}`;
    chars.splice(length, r.length, ...r);
    length = length + r.length;
  };

  while (r < chars.length) {
    if (chars[l] === chars[r]) {
      count++;
    } else if (chars[l] !== chars[r]) {
      helper();
      l = r;
      count = 1;
    }
    r++;
  }
  helper();
  return length;
}
