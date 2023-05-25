/**
 * Id: 2629
 * Name: Function Composition
 * Link: https://leetcode.com/problems/function-composition
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
  return (x) => functions.reduceRight((res, f) => f(res), x);
}
