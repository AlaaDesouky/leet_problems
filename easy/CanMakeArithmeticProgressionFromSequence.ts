/**
 * Id: 1502
 * Name: Can Make Arithmetic Progression From Sequence
 * Link: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 */
function canMakeArithmeticProgression(arr: number[]): boolean {
  let n: number = arr.length;
  if (n <= 2) return true;
  let minValue: number = Number.MAX_SAFE_INTEGER;
  let maxValue: number = Number.MIN_SAFE_INTEGER;

  for (let n of arr) {
    minValue = Math.min(minValue, n);
    maxValue = Math.max(maxValue, n);
  }

  if ((maxValue - minValue) % (n - 1) !== 0) return false;

  const swap = (a: number, b: number) => {
    let temp: number = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  let d: number = (maxValue - minValue) / (n - 1);
  let i: number = 0;

  while (i < n) {
    if (arr[i] === minValue + i * d) i++;
    else if ((arr[i] - minValue) % d !== 0) return false;
    else {
      let pos: number = (arr[i] - minValue) / d;
      if (pos < i || arr[pos] === arr[i]) return false;
      swap(i, pos);
    }
  }

  return true;
}
