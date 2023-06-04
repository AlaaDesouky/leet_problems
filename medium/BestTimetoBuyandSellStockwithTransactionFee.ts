/**
 * Id: 714
 * Name: Best Time to Buy and Sell Stock with Transaction Fee
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */
function maxProfit(prices: number[], fee: number): number {
  let dp: number[] = [0, 0],
    prevDp: number[] = [0, 0];
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = 0; j < 2; j++) {
      dp[j] =
        j === 1
          ? Math.max(prevDp[j], prevDp[0] - prices[i])
          : Math.max(prevDp[j], prevDp[1] + prices[i] - fee);
    }
    prevDp = dp;
  }

  return prevDp[1];
}
