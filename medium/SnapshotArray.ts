/**
 * Id: 1146
 * Name: Snapshot Array
 * Link: https://leetcode.com/problems/snapshot-array/
 */
class SnapshotArray {
  private snaps: Map<number, Map<number, number>>;
  private snapId: number;

  constructor(length: number) {
    for (let i = 0; i < length; i++) {
      let mp: Map<number, number> = new Map();
      mp.set(0, 0);
      this.snaps.set(i, mp);
    }
  }

  set(index: number, val: number): void {
    this.snaps.get(index)?.set(this.snapId, val);
  }

  snap(): number {
    return (this.snapId += 1);
  }

  get(index: number, snap_id: number): number {
    while (snap_id >= 0) {
      let snap = this.snaps.get(snap_id);
      if (snap) {
        const item = snap.get(index);
        if (item !== undefined) return item;
      }
      this.snapId -= 1;
    }
    return 0;
  }
}

/*
class SnapshotArray {
  private snapId: number;
  private storeHash: Map<number, Map<number, number>>;

  constructor(length: number) {
    this.snapId = 0;
    this.storeHash = new Map();
  }

  set(index: number, val: number): void {
    if (!this.storeHash.has(this.snapId))
      this.storeHash.set(this.snapId, new Map());
    const currentSnap = this.storeHash.get(this.snapId);
    currentSnap.set(index, val);
  }

  snap(): number {
    this.snapId++;
    return this.snapId - 1;
  }

  get(index: number, snapId: number): number {
    while (snapId >= 0) {
      let snap = this.storeHash.get(snapId);
      if (snap) {
        const item = snap.get(index);
        if (item !== undefined) return item;
      }
      snapId--;
    }
    return 0;
  }
}
*/
