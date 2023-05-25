export class NAryNode {
  val: number;
  children: NAryNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}
