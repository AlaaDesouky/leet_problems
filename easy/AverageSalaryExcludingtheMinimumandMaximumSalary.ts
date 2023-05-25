/**
 * Id: 1491
 * Name: Average Salary Excluding the Minimum and Maximum Salary
 * Link: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */

function average(salary: number[]): number {
  let sum: number = 0,
    min: number = Infinity,
    max: number = -Infinity;

  for (let s of salary) {
    sum += s;
    min = Math.min(min, s);
    max = Math.max(max, s);
  }

  return (sum - min - max) / (salary.length - 2);

  /**
   * Alternative single-line Solution
   * return salary.sort((a,b) => a - b).slice(1, -1).reduce((a, b) => a + b) / (salary.length - 2)
   */
}
