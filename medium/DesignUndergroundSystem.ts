/**
 * Id: 1396
 * Name: Design Underground System
 * Link: https://leetcode.com/problems/design-underground-system/
 */
class UndergroundSystem {
  private checkIns: Map<number, [string, number]>;
  private travelTimes: Map<string, [number, number]>;

  constructor() {
    this.checkIns = new Map<number, [string, number]>();
    this.travelTimes = new Map<string, [number, number]>();
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkIns.set(id, [stationName, t]);
  }

  checkOut(id: number, stationName: string, t: number): void {
    let checkInInfo: [string, number] = this.checkIns.get(id)!;
    this.checkIns.delete(id);

    let journey: string = `${checkInInfo[0]}-${stationName}`;
    let travelTime: number = t - checkInInfo[1];
    let travelInfo: [number, number] = this.travelTimes.get(journey) ?? [0, 0];
    this.travelTimes.set(journey, [
      travelInfo[0] + travelTime,
      travelInfo[1] + 1,
    ]);
  }

  getAverageTime(startStation: string, endStation: string): number {
    let journey: string = `${startStation}-${endStation}`;
    let travelInfo: [number, number] = this.travelTimes.get(journey)!;
    return travelInfo[0] / travelInfo[1];
  }
}
