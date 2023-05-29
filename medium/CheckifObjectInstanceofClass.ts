/**
 * Id: 2618
 * Name: Check if Object Instance of Class
 * Link: https://leetcode.com/problems/check-if-object-instance-of-class
 */
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;
  return Object(obj) instanceof classFunction;
}
