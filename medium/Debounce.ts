/**
 * Id: 2627
 * Name: Debounce
 * Link: https://leetcode.com/problems/debounce
 */
type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
}
