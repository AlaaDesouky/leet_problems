/**
 * Id: 841
 * Name: Keys and Rooms
 * Link: https://leetcode.com/problems/keys-and-rooms/
 */
function canVisitAllRooms(rooms: number[][]): boolean {
  let visited: boolean[] = new Array(rooms.length).fill(false);
  visited[0] = true;
  let stack: number[] = [0];

  while (stack.length) {
    let node: number = stack.shift()!;

    for (let nei of rooms[node]) {
      if (!visited[nei]) {
        visited[nei] = true;
        stack.push(nei);
      }
    }
  }

  for (let v of visited) if (!v) return false;

  return true;
}
