/**
 * Id: 2666
 * Name: Allow One Function Call
 * Link: https://leetcode.com/problems/allow-one-function-call
 */

function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let isCalledOnce: boolean = false;
  return (...args) => {
    if (!isCalledOnce) {
      isCalledOnce = true;
      return fn(...args);
    }
  };
}
