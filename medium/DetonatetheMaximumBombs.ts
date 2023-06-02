/**
 * Id: 2101
 * Name: Detonate the Maximum Bombs
 * Link: https://leetcode.com/problems/detonate-the-maximum-bombs/
 */
function maximumDetonation(bombs: number[][]): number {
  let n: number = bombs.length;
  let c: number[];
  let gr: number[][] = new Array(n).fill([]).map((_) => []);

  const dfs = (visited: boolean[], c: number[], i: number) => {
    visited[i] = true;
    c[0] += 1;
    for (let j of gr[i]) {
      if (!visited[j]) dfs(visited, c, j);
    }
  };

  for (let i = 0; i < n; i++) {
    let [x1, y1, r1] = bombs[i];
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        let [x, y] = bombs[j];
        let d: number = (x - x1) ** 2 + (y - y1) ** 2;
        if (d <= r1 ** 2) gr[i].push(j);
      }
    }
  }

  let res: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    c = [0];
    let visited: boolean[] = new Array(n).fill(false);
    dfs(visited, c, i);
    res = Math.max(res, c[0]);
  }
  return res;
}
