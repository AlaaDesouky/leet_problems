/**
 * Id: 933
 * Name: Number of Recent Calls
 * Link: https://leetcode.com/problems/number-of-recent-calls
 */
class RecentCounter {
  private q: number[];
  constructor() {
    this.q = new Array();
  }

  ping(t: number): number {
    while (this.q.length && this.q[0] < t - 3000) this.q.shift();
    this.q.push(t);
    return this.q.length;
  }
}
