export class DSU {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = new Array(n).fill(0);
    this.rank = new Array(n).fill(0);

    this.parent.forEach((_, idx) => {
      this.parent[idx] = idx;
    });
  }

  find = (x: number): number => {
    if (this.parent[x] === x) return x;

    return (this.parent[x] = this.find(this.parent[x]));
  };

  union = (x: number, y: number): boolean => {
    let xSet: number = this.find(x);
    let ySet: number = this.find(y);

    if (xSet !== ySet) {
      if (this.rank[xSet] < this.rank[ySet]) {
        this.parent[xSet] = ySet;
      } else {
        this.parent[ySet] = xSet;
      }

      if (this.rank[xSet] === this.rank[ySet]) this.rank[xSet] += 1;

      return true;
    }

    return false;
  };
}
