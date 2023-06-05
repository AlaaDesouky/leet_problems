/**
 * Id: 1232
 * Name: Check If It Is a Straight Line
 * Link: https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */
function checkStraightLine(coordinates: number[][]): boolean {
  let [x1, y1]: number[] = coordinates[0];
  let [x2, y2]: number[] = coordinates[1];

  return coordinates.every(
    ([x, y]) => (x2 - x1) * (y - y1) === (y2 - y1) * (x - x1)
  );
}
