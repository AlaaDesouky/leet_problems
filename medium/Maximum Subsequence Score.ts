/**
 * Id: 2542
 * Name: Maximum Subsequence Score
 * Link: https://leetcode.com/problems/maximum-subsequence-score
 */
function maxScore(nums1: number[], nums2: number[], k: number): number {
  let pairs: number[][] = nums1
    .map((num, idx) => [num, nums2[idx]])
    .sort((n1, n2) => n2[1] - n1[1]);
  const minHeap = new MinPriorityQueue();

  let res: number = 0;
  let n1Sum: number = 0;

  for (let [n1, n2] of pairs) {
    n1Sum += n1;
    minHeap.enqueue(n1);
    if (minHeap.size() > k) n1Sum -= minHeap.dequeue().element;
    if (minHeap.size() === k) res = Math.max(res, n1Sum * n2);
  }

  return res;
}
