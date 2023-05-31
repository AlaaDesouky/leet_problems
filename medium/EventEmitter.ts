/**
 * Id: 2694
 * Name: Event Emitter
 * Link: https://leetcode.com/problems/event-emitter
 */
type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private eventMap: Map<string, Set<Callback>>;

  constructor() {
    this.eventMap = new Map<string, Set<Callback>>();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    this.eventMap.set(
      eventName,
      (this.eventMap.get(eventName) ?? new Set()).add(callback)
    );
    return {
      unsubscribe: () => {
        this.eventMap.get(eventName)?.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const res: Callback[] = [];
    (this.eventMap.get(eventName) ?? []).forEach((cb: Callback) =>
      res.push(cb(...args))
    );
    return res;
  }
}
