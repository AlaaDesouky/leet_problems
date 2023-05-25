/**
 * Id: 2636
 * Name: Promise Pool
 * Link: https://leetcode.com/problems/promise-pool
 */
type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
  const helper = async () => {
    if (functions.length === 0) return;
    const fn = functions.shift();
    await fn();
    await helper();
  };

  const fnPool = Array(n).fill(null).map(helper);
  await Promise.all(fnPool);
}
