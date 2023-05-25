/**
 * Id: 205
 * Name: Isomorphic Strings
 * Link: https://leetcode.com/problems/isomorphic-strings/
 */

function isIsomorphic(s: string, t: string): boolean {
  let mapST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (mapST[s[i]] && mapST[s[i]] !== t[i]) ||
      (mapTS[t[i]] && mapTS[t[i]] !== s[i])
    )
      return false;
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }

  return true;
}
