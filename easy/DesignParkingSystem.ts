/**
 * Id: 1603
 * Name: Design Parking System
 * Link: https://leetcode.com/problems/design-parking-system/
 */
class ParkingSystem {
  private parkingLots: Map<number, number>;
  constructor(big: number, medium: number, small: number) {
    this._init(big, medium, small);
  }

  private _init(b: number, m: number, s: number): void {
    this.parkingLots = new Map<number, number>();
    this.parkingLots.set(1, b);
    this.parkingLots.set(2, m);
    this.parkingLots.set(3, s);
  }

  addCar(carType: number): boolean {
    let availableSpaces: number = this.parkingLots.get(carType)!;
    if (availableSpaces > 0) {
      this.parkingLots.set(carType, availableSpaces - 1);
      return true;
    }
    return false;
  }
}
