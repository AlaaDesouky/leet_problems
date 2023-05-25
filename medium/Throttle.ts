/**
 * Id: 2676
 * Name: Throttle
 * Link: https://leetcode.com/problems/throttle
 */
type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let isThrottled: boolean = false;
  let nextArgs: Array<any> | null = null;
  return function (...args) {
    if (isThrottled) {
      nextArgs = args;
    } else {
      fn(...args);
      isThrottled = true;
      setTimeout(helper, t);
    }

    function helper() {
      if (nextArgs) {
        fn(...nextArgs);
        isThrottled = true;
        nextArgs = null;
        setTimeout(helper, t);
      } else {
        isThrottled = false;
      }
    }
  };
}
