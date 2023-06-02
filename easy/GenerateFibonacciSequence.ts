/**
 * Id: 2648
 * Name: Generate Fibonacci Sequence
 * Link: https://leetcode.com/problems/generate-fibonacci-sequence/
 */
function* fibGenerator(): Generator<number, any, number> {
  let n1 = 0,
    n2 = 1;

  while (true) {
    yield n1;
    [n1, n2] = [n2, n1 + n2];
  }
}
