/**
 * Id: 299
 * Name: Bulls and Cows
 * Link: https://leetcode.com/problems/bulls-and-cows
 */

function getHint(secret: string, guess: string): string {
  let bCount: number = 0,
    cCount: number = 0;
  let freqMap: Map<string, number> = new Map();

  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) bCount++;
    else {
      if ((freqMap.get(secret[i]) || 0) < 0) cCount++;
      if ((freqMap.get(guess[i]) || 0) > 0) cCount++;

      freqMap.set(secret[i], (freqMap.get(secret[i]) || 0) + 1);
      freqMap.set(guess[i], (freqMap.get(guess[i]) || 0) - 1);
    }
  }

  return `${bCount}A${cCount}B`;
}
