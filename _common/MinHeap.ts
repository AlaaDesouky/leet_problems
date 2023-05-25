export class MinHeap {
  private heap: number[];

  constructor(nodes: number[]) {
    this.heap = new Array<number>();
    this.insertMany(nodes);
  }

  insert = (node: number) => {
    this.heap.push(node);
    this.sort();
  };

  insertMany = (nodes: number[]): void => {
    for (let node of nodes) {
      this.insert(node);
    }
    this.sort();
  };

  sort = (): number[] => this.heap.sort((a, b) => a - b);
  size = (): number => this.heap.length;
  pop = (): number | undefined => this.heap.shift();
  peek = (): number => this.heap[0];
}
