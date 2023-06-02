/**
 * Id: 1137
 * Name: N-th Tribonacci Number
 * Link: https://leetcode.com/problems/n-th-tribonacci-number
 */
function tribonacci(n: number): number {
  let t: number[] = [0, 1, 1];
  if (n < 3) return t[n];

  if (n >= t.length) {
    for (let i = t.length; i <= n; i++) {
      t[i] = t[i - 1] + t[i - 2] + t[i - 3];
    }
  }

  return t[n];
}
