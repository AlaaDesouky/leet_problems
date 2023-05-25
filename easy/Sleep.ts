/**
 * Id: 2621
 * Name: Sleep
 * Link: https://leetcode.com/problems/sleep
 */

async function sleep(millis: number): Promise<void> {
  return new Promise<void>((delayresolve) => setTimeout(delayresolve, millis));
}
