/**
 * Id: 1268
 * Name: Search Suggestions System
 * Link: https://leetcode.com/problems/search-suggestions-system
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
  let res: string[][] = [];
  products.sort();

  let l: number = 0;
  let r: number = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    let c = searchWord[i];

    while (l <= r && (i >= products[l].length || products[l][i] !== c)) l += 1;
    while (l <= r && (i >= products[r].length || products[r][i] !== c)) r -= 1;

    res.push([]);
    for (let j = 0; j < Math.min(3, r - l + 1); j++)
      res[res.length - 1].push(products[l + j]);
  }

  return res;
}
