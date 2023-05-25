/**
 * Id: 121
 * Name: Best Time to Buy and Sell Stock
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

function maxProfit(prices: number[]): number {
  let l_ptr: number = 0;
  let r_ptr: number = 1;
  let maxProfit: number = 0;

  while (r_ptr < prices.length) {
    if (prices[l_ptr] < prices[r_ptr]) {
      maxProfit = Math.max(prices[r_ptr] - prices[l_ptr], maxProfit);
    } else {
      l_ptr = r_ptr;
    }

    r_ptr += 1;
  }

  return maxProfit;
}
