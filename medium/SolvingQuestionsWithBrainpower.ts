/**
 * Id: 2140
 * Name: Solving Questions With Brainpower
 * Link: https://leetcode.com/problems/solving-questions-with-brainpower/
 */
function mostPoints(questions: number[][]): number {
  let n: number = questions.length,
    dp: number[] = new Array(n + 1).fill(0),
    point: number,
    jump: number,
    nextQuestion: number;

  for (let i = n - 1; i >= 0; i--) {
    point = questions[i][0];
    jump = questions[i][1];
    nextQuestion = Math.min(n, i + jump + 1);
    dp[i] = Math.max(dp[i + 1], point + dp[nextQuestion]);
  }
  return dp[0];
}
