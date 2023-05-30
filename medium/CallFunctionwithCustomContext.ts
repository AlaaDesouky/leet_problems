/**
 * Id: 2693
 * Name: Call Function with Custom Context
 * Link: https://leetcode.com/problems/call-function-with-custom-context
 */

declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  return this.apply(context, args);
};
