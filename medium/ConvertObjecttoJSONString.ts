/**
 * Id: 2633
 * Name: Convert Object to JSON String
 * Link: https://leetcode.com/problems/convert-object-to-json-string
 */
function jsonStringify(object: any): string {
  if (object === null || object === undefined) return String(object);
  if (Array.isArray(object))
    return `[${object.map((obj) => jsonStringify(obj)).join(",")}]`;
  if (typeof object === "object")
    return `{${Object.keys(object).map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    )}}`;
  if (typeof object === "string") return `"${String(object)}"`;
  return String(object);
}
