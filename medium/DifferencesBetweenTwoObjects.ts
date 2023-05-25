/**
 * Id: 2700
 * Name: Differences Between Two Objects
 * Link: https://leetcode.com/problems/differences-between-two-objects
 */

function objDiff(obj1: any, obj2: any): any {
  const isObj = (obj: any): boolean => typeof obj === "object" && obj !== null;
  const diff = {};

  if (!isObj(obj1) && !isObj(obj2)) return obj1 === obj2 ? {} : [obj1, obj2];
  if (
    !isObj(obj1) ||
    !isObj(obj2) ||
    Array.isArray(obj1) !== Array.isArray(obj2)
  )
    return [obj1, obj2];

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      let res = objDiff(obj1[key], obj2[key]);
      if (Object.keys(res).length) diff[key] = res;
    }
  }

  return diff;
}
