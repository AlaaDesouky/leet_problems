/**
 * Id: 76
 * Name: Minimum Window Substring
 * Link: https://leetcode.com/problems/minimum-window-substring
 */

function minWindow(s: string, t: string): string {
  if (!t) return t;

  let countT: Map<string, number> = new Map<string, number>();
  let window: Map<string, number> = new Map<string, number>();
  for (let c of t) countT.set(c, (countT.get(c) ?? 0) + 1);

  let have: number = 0,
    need: number = countT.size,
    res: number[] = [-1, -1],
    resLen: number = Infinity,
    l: number = 0;

  for (let [r, c] of s.split("").entries()) {
    window.set(c, (window.get(c) ?? 0) + 1);

    if (countT.has(c) && window.get(c) === countT.get(c)) have += 1;

    while (have === need) {
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }

      window.set(s[l], window.get(s[l])! - 1);

      if (countT.has(s[l]) && window.get(s[l])! < countT.get(s[l])!) have -= 1;

      l += 1;
    }
  }

  return resLen !== Infinity ? s.substring(res[0], res[1] + 1) : "";
}
