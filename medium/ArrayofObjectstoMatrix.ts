/**
 * Id: 54
 * Name: Spiral Matrix
 * Link: https://leetcode.com/problems/spiral-matrix
 */

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
  const keySet: Set<string> = new Set<string>();

  const isObj = (obj: Object): boolean =>
    obj !== null && typeof obj === "object";

  const getKeys = (obj: Object, path: string): void => {
    for (let key of Object.keys(obj)) {
      let newPath = path ? `${path}.${key}` : key;
      isObj(obj[key]) ? getKeys(obj[key], newPath) : keySet.add(newPath);
    }
  };

  const getVals = (obj: Object, path: string, keyToVal: Object): void => {
    for (let key of Object.keys(obj)) {
      let newPath = path ? `${path}.${key}` : key;
      isObj(obj[key])
        ? getVals(obj[key], newPath, keyToVal)
        : (keyToVal[newPath] = obj[key]);
    }
  };

  for (let obj of arr) getKeys(obj, "");

  const keys: (string | number | boolean | null)[] = Array.from(keySet).sort();
  const res: (string | number | boolean | null)[][] = [keys];

  for (let obj of arr) {
    const keyToVal = {};
    getVals(obj, "", keyToVal);
    let row = [];

    keys.forEach((key: any) => row.push(key in keyToVal ? keyToVal[key] : ""));
    res.push(row);
  }

  return res;
}
