/**
 * Id: 228
 * Name: Summary Ranges
 * Link: https://leetcode.com/problems/summary-ranges/
 */
function summaryRanges(nums: number[]): string[] {
  let ranges: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    let start: number = nums[i];
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) i++;

    start !== nums[i]
      ? ranges.push(`${start}->${nums[i]}`)
      : ranges.push(`${start}`);
  }

  return ranges;
}
