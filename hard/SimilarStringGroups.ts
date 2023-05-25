/**
 * Id: 839
 * Name: Similar String Groups
 * Link: https://leetcode.com/problems/similar-string-groups/
 */

function numSimilarGroups(strs: string[]): number {
  let groups: number = 0;
  let length: number = strs.length;
  let visited: boolean[] = Array(length).fill(false);

  const isSimiler = (a: string, b: string): boolean => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count += 1;
    }
    return count === 2 || count === 0;
  };

  const dfs = (idx: number, strs: string[], visited: boolean[]) => {
    visited[idx] = true;
    strs.forEach((_, i) => {
      if (visited[i]) return;
      if (isSimiler(strs[idx], strs[i])) {
        dfs(i, strs, visited);
      }
    });
  };

  strs.forEach((_, idx) => {
    if (visited[idx]) return;
    groups += 1;
    dfs(idx, strs, visited);
  });

  return groups;
}
