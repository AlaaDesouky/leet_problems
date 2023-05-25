/**
 * Id: 2622
 * Name: Cache With Time Limit
 * Link: https://leetcode.com/problems/cache-with-time-limit
 */
interface TimeLimitedValue {
  value: number;
  expiration: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
  private cache: Map<number, TimeLimitedValue>;
  constructor() {
    this.cache = new Map<number, TimeLimitedValue>();
  }

  set = (key: number, value: number, duration: number): boolean => {
    const exists = this.cache.has(key);
    if (exists) clearTimeout(this.cache.get(key)!.expiration);
    this.cache.set(key, {
      value,
      expiration: setTimeout(() => this.cache.delete(key), duration),
    });
    return exists;
  };

  get = (key: number): number =>
    this.cache.has(key) ? this.cache.get(key)!.value : -1;
  count = (): number => this.cache.size;
}
