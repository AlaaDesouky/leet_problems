/**
 * Id: 1187
 * Name: Make Array Strictly Increasing
 * Link: https://leetcode.com/problems/make-array-strictly-increasing/
 */
function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
  const dp = new Map<string, number>();

  arr2.sort((a, b) => a - b);
  const cost = dfs(0, -1, arr1, arr2, dp);
  return cost === Infinity ? -1 : cost;
}

function dfs(
  i: number,
  prev: number,
  arr1: number[],
  arr2: number[],
  dp: Map<string, number>
): number {
  const key = JSON.stringify({ i, prev });
  if (arr1.length === i) {
    return 0;
  }

  if (dp.has(key)) {
    return dp.get(key) as number;
  }

  let cost = Infinity;

  if (arr1[i] > prev) {
    cost = dfs(i + 1, arr1[i], arr1, arr2, dp);
  }

  const idx = bs(arr2, prev);

  if (idx < arr2.length) {
    cost = Math.min(cost, 1 + dfs(i + 1, arr2[idx], arr1, arr2, dp));
  }

  dp.set(key, cost);

  return cost;
}

function bs(arr: number[], value: number): number {
  let [left, right] = [0, arr.length];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
