/**
 * Id: 815
 * Name: Bus Routes
 * Link: https://leetcode.com/problems/bus-routes
 */

function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number
): number {
  if (target === source) return 0;

  const connectedStops: Map<number, Set<number> | undefined> = new Map();

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      connectedStops.set(
        routes[i][j],
        connectedStops.get(routes[i][j])?.add(i) ?? new Set<number>().add(i)
      );
    }
  }

  let q: number[] = [source];
  let qSize: number = q.length;
  let count: number = 0;
  let currStop: number;
  let seenStops: Set<number> = new Set<number>();
  let busStops: Set<number>;

  while (qSize) {
    count += 1;
    qSize = q.length;

    for (let i = 0; i < qSize; i++) {
      currStop = q.shift()!;
      busStops = connectedStops.get(currStop)!;

      for (let stop of busStops) {
        if (!seenStops.has(stop)) {
          seenStops.add(stop);
          for (let s of routes[stop]) {
            if (s === target) return count;
            q.push(s);
          }
        }
      }
    }
  }

  return -1;
}
