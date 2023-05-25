export class UnionFind {
  private parent: Map<number, number>;
  private rank: Map<number, number>;
  public count: number;

  constructor(stones: number[][]) {
    this.parent = new Map<number, number>();
    this.rank = new Map<number, number>();

    this.init(stones);
  }

  private init = (stones: number[][]): void => {
    for (let stone of stones) {
      let row: number = -(stone[0] + 1);
      let col: number = stone[1] + 1;
      this.parent.set(row, row);
      this.parent.set(col, col);
    }

    this.count = this.parent.size;
  };

  private find = (x: number): number => {
    if (this.parent.get(x) !== x)
      this.parent.set(x, this.find(this.parent.get(x)!));
    return this.parent.get(x)!;
  };

  public union = (x: number, y: number): void => {
    let xSet: number = this.find(x);
    let ySet: number = this.find(y);
    if (xSet === ySet) return;
    this.count -= 1;

    if (this.rank.get(xSet)! < this.rank.get(ySet)!)
      this.parent.set(xSet, ySet);
    else if (this.rank.get(xSet)! > this.rank.get(ySet)!)
      this.parent.set(ySet, xSet);
    else {
      this.parent.set(ySet, xSet);
      this.rank.set(xSet, this.rank.get(ySet)! + 1);
    }
  };
}
